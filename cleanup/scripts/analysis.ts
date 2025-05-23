import * as fs from 'fs';
import * as path from 'path';
import * as ts from 'typescript';

interface GraphQLExport {
  name: string;
  filePath: string;
  type: 'query' | 'mutation' | 'fragment' | 'type' | 'hook';
}

interface ImportToUpdate {
  filePath: string;
  oldImport: string;
  newImport: string;
  importedNames: string[];
}

class GraphQLImportAnalyzer {
  private graphqlExports: Map<string, GraphQLExport> = new Map();
  private indexExports: Map<string, Set<string>> = new Map();
  private rootDir: string;
  private useAliasImports: boolean = true;

  constructor(rootDir: string) {
    this.rootDir = rootDir;
  }

  // Categorize GraphQL export type based on name and path
  private categorizeExport(name: string, filePath: string): GraphQLExport['type'] {
    const lowerName = name.toLowerCase();
    const lowerPath = filePath.toLowerCase();

    if (lowerPath.includes('fragment')) return 'fragment';
    if (lowerPath.includes('mutation')) return 'mutation';
    if (lowerPath.includes('queries') || lowerPath.includes('query')) return 'query';
    if (name.startsWith('use')) return 'hook';
    return 'type';
  }

  // Get all TypeScript files excluding common directories
  private getAllTypeScriptFiles(dir: string, files: string[] = []): string[] {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      
      if (entry.name === 'node_modules' || 
          entry.name === '.next' || 
          entry.name === 'dist' || 
          entry.name === 'build' ||
          entry.name.startsWith('.')) {
        continue;
      }

      if (entry.isDirectory()) {
        this.getAllTypeScriptFiles(fullPath, files);
      } else if (
        (entry.name.endsWith('.ts') || entry.name.endsWith('.tsx')) &&
        !entry.name.endsWith('.d.ts') &&
        !entry.name.endsWith('.test.ts') &&
        !entry.name.endsWith('.test.tsx')
      ) {
        files.push(fullPath);
      }
    }

    return files;
  }

  // Extract exports from a source file
  private getExportsFromSourceFile(sourceFile: ts.SourceFile): string[] {
    const exports: string[] = [];

    const visit = (node: ts.Node) => {
      try {
        if (ts.isExportDeclaration(node)) {
          if (node.exportClause && ts.isNamedExports(node.exportClause)) {
            node.exportClause.elements.forEach(element => {
              exports.push(element.name.text);
            });
          }
        }
        else if (ts.isExportAssignment(node)) {
          exports.push('default');
        }
        else if (
          (ts.isVariableStatement(node) || 
           ts.isFunctionDeclaration(node) || 
           ts.isClassDeclaration(node) ||
           ts.isInterfaceDeclaration(node) ||
           ts.isTypeAliasDeclaration(node)) && 
          node.modifiers?.some(m => m.kind === ts.SyntaxKind.ExportKeyword)
        ) {
          if (ts.isFunctionDeclaration(node) || ts.isClassDeclaration(node) || 
              ts.isInterfaceDeclaration(node) || ts.isTypeAliasDeclaration(node)) {
            if (node.name) {
              exports.push(node.name.text);
            }
          } else if (ts.isVariableStatement(node)) {
            node.declarationList.declarations.forEach(declaration => {
              if (ts.isIdentifier(declaration.name)) {
                exports.push(declaration.name.text);
              }
            });
          }
        }

        ts.forEachChild(node, visit);
      } catch (error) {
        console.warn(`Warning: Error processing node:`, error);
      }
    };

    visit(sourceFile);
    return exports;
  }

  // Analyze GraphQL-related files and build export map
  public analyzeGraphQLExports(): void {
    const graphqlPaths = [
      path.join(this.rootDir, 'lib/graphql'),
      path.join(this.rootDir, 'lib/hooks/api'),
      path.join(this.rootDir, 'lib/api'),
      path.join(this.rootDir, 'lib/hooks'),
      path.join(this.rootDir, 'lib')
    ];

    const program = ts.createProgram(
      this.getAllTypeScriptFiles(this.rootDir),
      { allowJs: false, jsx: ts.JsxEmit.React }
    );

    graphqlPaths.forEach(basePath => {
      if (!fs.existsSync(basePath)) return;

      const files = this.getAllTypeScriptFiles(basePath);
      
      files.forEach(filePath => {
        const sourceFile = program.getSourceFile(filePath);
        if (!sourceFile) return;

        const exports = this.getExportsFromSourceFile(sourceFile);
        const relativePath = path.relative(this.rootDir, filePath);

        exports.forEach(exportName => {
          const type = this.categorizeExport(exportName, relativePath);
          this.graphqlExports.set(exportName, {
            name: exportName,
            filePath: relativePath,
            type
          });
        });

        // Track index file exports
        if (path.basename(filePath) === 'index.ts') {
          const dirPath = path.dirname(relativePath);
          if (!this.indexExports.has(dirPath)) {
            this.indexExports.set(dirPath, new Set());
          }
          exports.forEach(exp => this.indexExports.get(dirPath)!.add(exp));
        }
      });
    });
  }

  // Find the best import path for a given export
  private findBestImportPath(exportName: string): string | null {
    const exportInfo = this.graphqlExports.get(exportName);
    if (!exportInfo) return null;

    // Check if this export is available from an index file
    // Prioritize higher-level index files
    const indexPriority = [
      'lib',
      'lib/hooks',
      'lib/api',
      'lib/graphql',
      'lib/graphql/generated'
    ];

    for (const indexPath of indexPriority) {
      if (this.indexExports.has(indexPath) && this.indexExports.get(indexPath)!.has(exportName)) {
        return indexPath;
      }
    }

    // Check other index files
    for (const [indexDir, exports] of this.indexExports.entries()) {
      if (exports.has(exportName) && !indexDir.includes('generated')) {
        return indexDir;
      }
    }

    // Fallback to direct import
    return path.dirname(exportInfo.filePath);
  }

  // Resolve import path using @ alias
  private resolveImportPath(fromDir: string, toPath: string): string {
    // Always use @ alias for lib imports
    if (toPath.startsWith('lib/') || toPath === 'lib') {
      return `@/${toPath}`;
    }
    
    // For components, use @ alias as well
    if (toPath.startsWith('components/') || toPath === 'components') {
      return `@/${toPath}`;
    }

    // For other paths, check if they should use @ alias
    const commonAliasedPaths = ['app', 'types', 'utils', 'hooks', 'services'];
    const firstSegment = toPath.split('/')[0];
    
    if (commonAliasedPaths.includes(firstSegment)) {
      return `@/${toPath}`;
    }

    // Fallback to relative path for edge cases
    const absoluteToPath = path.join(this.rootDir, toPath);
    let relativePath = path.relative(fromDir, absoluteToPath);
    
    if (!relativePath.startsWith('.')) {
      relativePath = './' + relativePath;
    }
    
    // Convert to forward slashes for consistency
    relativePath = relativePath.replace(/\\/g, '/');
    
    // For index files, we can omit the filename
    if (relativePath.endsWith('/index')) {
      relativePath = relativePath.substring(0, relativePath.length - 6);
    }
    
    return relativePath;
  }

  // Analyze imports in a file and determine updates needed
  private analyzeFileImports(sourceFile: ts.SourceFile, filePath: string): ImportToUpdate[] {
    const updates: ImportToUpdate[] = [];
    const fileDir = path.dirname(filePath);

    const visit = (node: ts.Node) => {
      if (ts.isImportDeclaration(node) && node.moduleSpecifier) {
        const moduleSpecifier = (node.moduleSpecifier as ts.StringLiteral).text;
        
        // Skip external packages
        if (!moduleSpecifier.startsWith('.') && !moduleSpecifier.startsWith('@/')) {
          return;
        }

        const importClause = node.importClause;
        if (!importClause) return;

        const importedNames: string[] = [];

        // Handle named imports
        if (importClause.namedBindings && ts.isNamedImports(importClause.namedBindings)) {
          importClause.namedBindings.elements.forEach(element => {
            importedNames.push(element.name.text);
          });
        }

        // Check if any imported names are GraphQL exports
        const graphqlImports = importedNames.filter(name => this.graphqlExports.has(name));
        
        if (graphqlImports.length > 0) {
          // Find the best import path
          const bestPaths = new Map<string, string[]>();
          
          graphqlImports.forEach(name => {
            const bestPath = this.findBestImportPath(name);
            if (bestPath) {
              if (!bestPaths.has(bestPath)) {
                bestPaths.set(bestPath, []);
              }
              bestPaths.get(bestPath)!.push(name);
            }
          });

          // Create updates for each unique path
          bestPaths.forEach((names, newPath) => {
            const resolvedPath = this.resolveImportPath(fileDir, newPath);
            
            // Only create update if the path is actually changing
            if (resolvedPath !== moduleSpecifier) {
              updates.push({
                filePath: path.relative(this.rootDir, filePath),
                oldImport: moduleSpecifier,
                newImport: resolvedPath,
                importedNames: names
              });
            }
          });
        }
      }

      ts.forEachChild(node, visit);
    };

    visit(sourceFile);
    return updates;
  }

  // Update imports in a file
  private updateFileImports(filePath: string, updates: ImportToUpdate[]): void {
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Group updates by old import to handle multiple names from same import
    const updatesByOldImport = new Map<string, ImportToUpdate[]>();
    updates.forEach(update => {
      if (!updatesByOldImport.has(update.oldImport)) {
        updatesByOldImport.set(update.oldImport, []);
      }
      updatesByOldImport.get(update.oldImport)!.push(update);
    });

    // Apply updates
    updatesByOldImport.forEach((updates, oldImport) => {
      // Find the import statement
      const importRegex = new RegExp(
        `import\\s*{([^}]+)}\\s*from\\s*['"]${oldImport.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}['"]`,
        'g'
      );
      
      content = content.replace(importRegex, (match, imports) => {
        // Parse current imports
        const currentImports = imports.split(',').map((i: string) => i.trim());
        
        // Group by new import path
        const byNewPath = new Map<string, string[]>();
        updates.forEach(update => {
          if (!byNewPath.has(update.newImport)) {
            byNewPath.set(update.newImport, []);
          }
          byNewPath.get(update.newImport)!.push(...update.importedNames);
        });

        // Generate new import statements
        const newImports: string[] = [];
        byNewPath.forEach((names, newPath) => {
          const uniqueNames = [...new Set(names)];
          newImports.push(`import { ${uniqueNames.join(', ')} } from '${newPath}'`);
        });

        // Keep non-GraphQL imports from the original
        const remainingImports = currentImports.filter(
          imp => !updates.some(u => u.importedNames.includes(imp))
        );

        if (remainingImports.length > 0) {
          newImports.push(`import { ${remainingImports.join(', ')} } from '${oldImport}'`);
        }

        return newImports.join('\n');
      });
    });

    fs.writeFileSync(filePath, content);
  }

  // Main analysis and update function
  public analyzeAndUpdateImports(): void {
    console.log('Analyzing GraphQL exports...');
    this.analyzeGraphQLExports();
    console.log(`Found ${this.graphqlExports.size} GraphQL exports`);

    const pageDirs = [
      path.join(this.rootDir, 'app'),
      path.join(this.rootDir, 'pages'),
      path.join(this.rootDir, 'components')
    ];

    const allUpdates: ImportToUpdate[] = [];
    const program = ts.createProgram(
      this.getAllTypeScriptFiles(this.rootDir),
      { allowJs: false, jsx: ts.JsxEmit.React }
    );

    pageDirs.forEach(dir => {
      if (!fs.existsSync(dir)) return;

      const files = this.getAllTypeScriptFiles(dir);
      files.forEach(filePath => {
        const sourceFile = program.getSourceFile(filePath);
        if (!sourceFile) return;

        const updates = this.analyzeFileImports(sourceFile, filePath);
        if (updates.length > 0) {
          allUpdates.push(...updates);
        }
      });
    });

    // Generate report
    this.generateReport(allUpdates);

    // Apply updates if requested
    if (process.argv.includes('--update')) {
      console.log('\nApplying updates...');
      const updatesByFile = new Map<string, ImportToUpdate[]>();
      
      allUpdates.forEach(update => {
        if (!updatesByFile.has(update.filePath)) {
          updatesByFile.set(update.filePath, []);
        }
        updatesByFile.get(update.filePath)!.push(update);
      });

      updatesByFile.forEach((updates, filePath) => {
        const fullPath = path.join(this.rootDir, filePath);
        console.log(`Updating ${filePath}...`);
        this.updateFileImports(fullPath, updates);
      });

      console.log(`\nUpdated ${updatesByFile.size} files`);
    } else {
      console.log('\nTo apply these updates, run with --update flag');
    }
  }

  // Generate markdown report
  private generateReport(updates: ImportToUpdate[]): void {
    const report = ['# GraphQL Import Updates Report\n'];
    
    report.push(`Generated on: ${new Date().toLocaleString()}\n`);
    report.push(`Total imports to update: ${updates.length}\n`);

    if (updates.length === 0) {
      report.push('\nNo updates needed. All imports are already optimized.');
    } else {
      // Group by file
      const byFile = new Map<string, ImportToUpdate[]>();
      updates.forEach(update => {
        if (!byFile.has(update.filePath)) {
          byFile.set(update.filePath, []);
        }
        byFile.get(update.filePath)!.push(update);
      });

      report.push('\n## Files requiring updates:\n');
      
      Array.from(byFile.entries())
        .sort(([a], [b]) => a.localeCompare(b))
        .forEach(([filePath, fileUpdates]) => {
          report.push(`\n### ${filePath}\n`);
          fileUpdates.forEach(update => {
            report.push(`- Update import of \`${update.importedNames.join(', ')}\``);
            report.push(`  - From: \`${update.oldImport}\``);
            report.push(`  - To: \`${update.newImport}\``);
          });
        });
    }

    // Add summary of GraphQL exports
    report.push('\n## GraphQL Exports Summary\n');
    const byType = new Map<string, string[]>();
    
    this.graphqlExports.forEach(exp => {
      if (!byType.has(exp.type)) {
        byType.set(exp.type, []);
      }
      byType.get(exp.type)!.push(exp.name);
    });

    byType.forEach((names, type) => {
      report.push(`\n### ${type.charAt(0).toUpperCase() + type.slice(1)}s (${names.length})\n`);
      names.sort().slice(0, 10).forEach(name => {
        report.push(`- ${name}`);
      });
      if (names.length > 10) {
        report.push(`- ... and ${names.length - 10} more`);
      }
    });

    // Add import path recommendations
    report.push('\n## Import Path Recommendations\n');
    report.push('- Use `@/lib` for all lib imports');
    report.push('- Use `@/lib/hooks` for hook imports when available from index');
    report.push('- Use `@/lib/graphql` for GraphQL queries/mutations when available from index');
    report.push('- Use `@/components` for component imports');
    report.push('- Avoid deep relative imports like `../../../lib`');

    fs.writeFileSync('graphql-import-updates.md', report.join('\n'));
    console.log('\nReport written to graphql-import-updates.md');
  }
}

// Main execution
try {
  const analyzer = new GraphQLImportAnalyzer(process.cwd());
  analyzer.analyzeAndUpdateImports();
} catch (error) {
  console.error('Error during analysis:', error);
  process.exit(1);
}