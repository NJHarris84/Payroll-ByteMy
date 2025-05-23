import * as fs from 'fs';
import * as path from 'path';
import * as ts from 'typescript';

interface ExportInfo {
  filePath: string;
  exports: string[];
}

function getExportsFromSourceFile(sourceFile: ts.SourceFile | undefined): string[] {
  if (!sourceFile) return [];
  const exports: string[] = [];

  function visit(node: ts.Node) {
    try {
      if (ts.isExportDeclaration(node)) {
        if (node.exportClause && ts.isNamedExports(node.exportClause)) {
          node.exportClause.elements.forEach(element => {
            exports.push(element.name.text);
          });
        } else if (node.moduleSpecifier) {
          const moduleText = node.moduleSpecifier.getText(sourceFile);
          exports.push(`* from ${moduleText}`);
        }
      }
      else if (ts.isExportAssignment(node)) {
        const expressionText = node.expression.getText(sourceFile);
        exports.push(`default ${expressionText}`);
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
      console.warn(`Warning: Error processing node in ${sourceFile.fileName}:`, error);
    }
  }

  visit(sourceFile);
  return exports;
}

function getAllTypeScriptFiles(dir: string, files: string[] = []): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    // Skip node_modules, .next, and other common excludes
    if (entry.name === 'node_modules' || 
        entry.name === '.next' || 
        entry.name === 'dist' || 
        entry.name === 'build' ||
        entry.name.startsWith('.')) {
      continue;
    }

    if (entry.isDirectory()) {
      getAllTypeScriptFiles(fullPath, files);
    } else if (
      (entry.name.endsWith('.ts') || entry.name.endsWith('.tsx')) &&
      !entry.name.endsWith('.d.ts') // Skip declaration files
    ) {
      files.push(fullPath);
    }
  }

  return files;
}

function analyzeExports(rootDir: string): ExportInfo[] {
  const tsconfig = ts.findConfigFile(
    rootDir,
    ts.sys.fileExists,
    "tsconfig.json"
  );

  if (!tsconfig) {
    throw new Error("Could not find tsconfig.json");
  }

  const { config } = ts.readConfigFile(tsconfig, ts.sys.readFile);
  const { options } = ts.parseJsonConfigFileContent(
    config,
    ts.sys,
    path.dirname(tsconfig)
  );

  const files = getAllTypeScriptFiles(rootDir);
  const program = ts.createProgram(files, options);
  const results: ExportInfo[] = [];

  files.forEach(filePath => {
    try {
      const sourceFile = program.getSourceFile(filePath);
      const exports = getExportsFromSourceFile(sourceFile);
      
      if (exports.length > 0) {
        results.push({
          filePath: path.relative(rootDir, filePath),
          exports
        });
      }
    } catch (error) {
      console.warn(`Warning: Error processing file ${filePath}:`, error);
    }
  });

  return results;
}

// Main execution
try {
  const rootDir = process.cwd();
  console.log('Analyzing TypeScript exports...');
  const results = analyzeExports(rootDir);

  // Generate markdown report
  const report = ['# TypeScript Exports Analysis\n'];
  
  report.push(`Analysis completed on: ${new Date().toLocaleString()}\n`);
  report.push(`Total files with exports: ${results.length}\n`);

  // Group by directory
  const groupedResults = results.reduce((acc, { filePath, exports }) => {
    const dir = path.dirname(filePath);
    if (!acc[dir]) acc[dir] = [];
    acc[dir].push({ filePath: path.basename(filePath), exports });
    return acc;
  }, {} as Record<string, { filePath: string; exports: string[] }[]>);

  // Output grouped results
  Object.entries(groupedResults)
    .sort(([a], [b]) => a.localeCompare(b))
    .forEach(([dir, files]) => {
      report.push(`\n## ${dir}/\n`);
      files.forEach(({ filePath, exports }) => {
        report.push(`\n### ${filePath}\n`);
        exports.sort().forEach(exp => {
          report.push(`- \`${exp}\``);
        });
      });
    });

  fs.writeFileSync('typescript-exports.md', report.join('\n'));
  console.log('Analysis complete. Results written to typescript-exports.md');
} catch (error) {
  console.error('Error during analysis:', error);
  process.exit(1);
}
