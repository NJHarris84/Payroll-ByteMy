#!/usr/bin/env node
import * as fs from 'fs';
import * as path from 'path';
import { glob } from 'glob';
import * as ts from 'typescript';

interface ImportGroup {
  builtins: Record<string, string[]>;
  external: Record<string, string[]>;
  internal: Record<string, string[]>;
  relative: Record<string, string[]>;
  index: Record<string, string[]>;
}

interface FileChange {
  filePath: string;
  before: string[];
  after: string[];
}

interface NamedImport {
  name: string;
  alias?: string;
  originalPath: string;
}

/**
 * Script to standardize imports across Payroll-ByteMy components and pages
 * Consolidates imports to use base paths for @/components/*, @/lib/*, etc.
 * Can export dry run results to a text file for review
 */
async function standardizeImports(isDryRun: boolean = false, outputFile?: string) {
  console.log(`🔄 Starting import standardization for Payroll-ByteMy components and pages...`);
  console.log(`Mode: ${isDryRun ? 'DRY RUN (no files will be modified)' : 'LIVE RUN (files will be updated)'}`);
  
  if (isDryRun && outputFile) {
    console.log(`Dry run results will be saved to: ${outputFile}`);
  }
  
  // Define file patterns to process - specifically targeting components and pages
  const patterns = [
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}', // If you're using pages directory
  ];
  
  // Get all files matching our patterns
  const files: string[] = [];
  for (const pattern of patterns) {
    const matches = await glob(pattern);
    files.push(...matches);
  }
  
  console.log(`📂 Found ${files.length} files to process`);
  
  let processedCount = 0;
  let changedCount = 0;
  const changedFiles: FileChange[] = [];
  
  // Process each file
  for (const filePath of files) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Check if the imports need reorganizing
      const { newContent, before, after, needsChanges } = processFile(content, filePath);
      
      if (needsChanges) {
        changedCount++;
        changedFiles.push({
          filePath,
          before,
          after
        });
        
        if (!isDryRun) {
          fs.writeFileSync(filePath, newContent, 'utf8');
          console.log(`✅ Updated imports in ${filePath}`);
        }
      }
      
      processedCount++;
    } catch (error) {
      console.error(`❌ Error processing ${filePath}:`, error);
    }
  }
  
  // Print summary
  console.log(`\n📊 Import standardization ${isDryRun ? 'dry run' : 'run'} complete!`);
  console.log(`📊 Processed ${processedCount} files, ${changedCount} files need import reorganization`);
  
  // In dry run mode, export changes to a file if requested
  if (isDryRun && outputFile && changedFiles.length > 0) {
    exportDryRunToFile(changedFiles, outputFile, processedCount, changedCount);
    console.log(`\n💾 Dry run results saved to ${outputFile}`);
  } else if (isDryRun && changedFiles.length > 0) {
    // Show a sample of changes in the console
    console.log(`\n🔍 Sample of files that need import reorganization (first 5):`);
    
    const sampleFiles = changedFiles.slice(0, 5);
    for (const change of sampleFiles) {
      console.log(`\n==================================================`);
      console.log(`File: ${change.filePath}`);
      console.log(`==================================================`);
      
      console.log(`\nCURRENT IMPORTS:`);
      if (change.before.length === 0) {
        console.log(`  (No imports found)`);
      } else {
        change.before.forEach(line => console.log(`  ${line}`));
      }
      
      console.log(`\nREORGANIZED IMPORTS:`);
      if (change.after.length === 0) {
        console.log(`  (No imports after processing)`);
      } else {
        change.after.forEach(line => console.log(`  ${line}`));
      }
      
      console.log(`\n--------------------------------------------------`);
    }
    
    if (changedFiles.length > 5) {
      console.log(`\n... and ${changedFiles.length - 5} more files would be updated`);
      console.log(`Run with --output <filename> to save full details to a text file`);
    }
  } else if (isDryRun && changedCount === 0) {
    console.log(`\n✅ All component and page files already have properly organized imports!`);
  }
}

/**
 * Export dry run results to a text file
 */
function exportDryRunToFile(
  changedFiles: FileChange[], 
  outputFile: string,
  processedCount: number,
  changedCount: number
) {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const outputPath = outputFile.includes('/') 
    ? outputFile 
    : `./${outputFile}`;
  
  let output = `# Import Standardization Dry Run Results\n`;
  output += `Generated: ${new Date().toLocaleString()}\n\n`;
  output += `## Summary\n`;
  output += `- Processed: ${processedCount} files\n`;
  output += `- Need reorganization: ${changedCount} files\n\n`;
  output += `## Files that need import reorganization\n\n`;
  
  // Add details for each file
  for (const change of changedFiles) {
    output += `### ${change.filePath}\n\n`;
    output += `#### Current Imports\n\`\`\`typescript\n`;
    
    if (change.before.length === 0) {
      output += `(No imports found)\n`;
    } else {
      output += `${change.before.join('\n')}\n`;
    }
    
    output += `\`\`\`\n\n`;
    output += `#### Reorganized Imports\n\`\`\`typescript\n`;
    
    if (change.after.length === 0) {
      output += `(No imports after processing)\n`;
    } else {
      output += `${change.after.join('\n')}\n`;
    }
    
    output += `\`\`\`\n\n`;
    output += `---\n\n`;
  }
  
  // Create directory if it doesn't exist
  const dir = path.dirname(outputPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  // Write to file
  fs.writeFileSync(outputPath, output, 'utf8');
}

/**
 * Process a file and reorganize imports
 */
function processFile(content: string, filePath: string): { 
  newContent: string; 
  before: string[]; 
  after: string[];
  needsChanges: boolean;
} {
  // Create a source file
  const sourceFile = ts.createSourceFile(
    filePath,
    content,
    ts.ScriptTarget.Latest,
    true
  );
  
  // Find all import declarations
  const importNodes: ts.ImportDeclaration[] = [];
  
  function visit(node: ts.Node) {
    if (ts.isImportDeclaration(node)) {
      importNodes.push(node);
    }
    ts.forEachChild(node, visit);
  }
  
  visit(sourceFile);
  
  // If no imports, return original content
  if (importNodes.length === 0) {
    return { 
      newContent: content, 
      before: [], 
      after: [],
      needsChanges: false 
    };
  }
  
  // Capture before state - get all imports as they currently appear
  const beforeImports = importNodes.map(node => node.getText(sourceFile));
  
  // Store all imports by category
  const importsByCategory: Record<string, any> = {
    builtins: [],
    external: [],
    internal: [],
    relative: [],
    index: []
  };
  
  // Process each import node
  for (const node of importNodes) {
    if (ts.isStringLiteral(node.moduleSpecifier)) {
      const sourcePath = node.moduleSpecifier.text;
      let category: string;
      
      // Categorize import
      if (sourcePath.startsWith('.')) {
        if (sourcePath.endsWith('/index') || sourcePath === '.') {
          category = 'index';
        } else {
          category = 'relative';
        }
      } else if (sourcePath.startsWith('@/')) {
        category = 'internal';
      } else if (!sourcePath.includes('/')) {
        if (isBuiltinModule(sourcePath)) {
          category = 'builtins';
        } else {
          category = 'external';
        }
      } else {
        category = 'external';
      }
      
      // Extract import clauses
      let defaultImport: string | undefined;
      const namedImports: NamedImport[] = [];
      
      if (node.importClause) {
        // Default import
        if (node.importClause.name) {
          defaultImport = node.importClause.name.text;
        }
        
        // Named imports
        if (node.importClause.namedBindings && ts.isNamedImports(node.importClause.namedBindings)) {
          for (const element of node.importClause.namedBindings.elements) {
            const name = element.name.text;
            const propertyName = element.propertyName?.text;
            
            namedImports.push({
              name: name,
              alias: propertyName,
              originalPath: sourcePath
            });
          }
        }
      }
      
      // Add to the appropriate category
      importsByCategory[category].push({
        sourcePath,
        defaultImport,
        namedImports,
        originalNode: node
      });
    }
  }
  
  // Group and process imports
  const processedImports = processImportsByCategory(importsByCategory);
  
  // Check if we need to make changes
  const currentImportText = importNodes.map(node => node.getText(sourceFile)).join('\n');
  const newImportText = processedImports.join('\n');
  
  const needsChanges = currentImportText !== newImportText;
  
  // If changes needed, generate new content
  let newContent = content;
  if (needsChanges) {
    // Find the range of all imports
    let importStart = Number.MAX_SAFE_INTEGER;
    let importEnd = 0;
    
    for (const node of importNodes) {
      importStart = Math.min(importStart, node.getStart(sourceFile));
      importEnd = Math.max(importEnd, node.getEnd());
    }
    
    // Replace the imports
    newContent = content.substring(0, importStart) + newImportText + content.substring(importEnd);
  }
  
  // Return the result
  return {
    newContent,
    before: beforeImports,
    after: processedImports,
    needsChanges
  };
}

/**
 * Process imports by category and consolidate paths
 */
function processImportsByCategory(importsByCategory: Record<string, any[]>): string[] {
  const result: string[] = [];
  
  // Process each category
  const categoryOrder = ['builtins', 'external', 'internal', 'relative', 'index'];
  
  for (const category of categoryOrder) {
    const imports = importsByCategory[category];
    
    if (imports.length === 0) {
      continue;
    }
    
    // Add a blank line between categories
    if (result.length > 0) {
      result.push('');
    }
    
    // For internal imports, consolidate by base path
    if (category === 'internal') {
      const basePathImports: Record<string, NamedImport[]> = {};
      const otherImports: any[] = [];
      
      // Group imports by base path
      for (const imp of imports) {
        const sourcePath = imp.sourcePath;
        
        // Process @/ imports for components and lib
        if (sourcePath.startsWith('@/components/') || sourcePath.startsWith('@/lib/')) {
          // Get base path (e.g., @/components/ui, @/lib/graphql)
          const parts = sourcePath.split('/');
          if (parts.length >= 3) {
            const basePath = `@/${parts[1]}/${parts[2]}`;
            
            if (!basePathImports[basePath]) {
              basePathImports[basePath] = [];
            }
            
            // Add named imports with the component name
            if (imp.namedImports.length > 0) {
              for (const namedImport of imp.namedImports) {
                basePathImports[basePath].push(namedImport);
              }
            } else if (imp.defaultImport) {
              // Handle default imports (less common with this pattern)
              otherImports.push(imp);
            }
          } else {
            otherImports.push(imp);
          }
        } else {
          otherImports.push(imp);
        }
      }
      
      // Process consolidated imports
      const basePathOrder = Object.keys(basePathImports).sort();
      
      for (const basePath of basePathOrder) {
        const namedImports = basePathImports[basePath];
        
        if (namedImports.length > 0) {
          // Sort imports alphabetically
          namedImports.sort((a, b) => a.name.localeCompare(b.name));
          
          // Format the named imports
          const formattedImports = namedImports.map(imp => {
            if (imp.alias) {
              return `${imp.alias} as ${imp.name}`;
            }
            return imp.name;
          }).join(', ');
          
          // Create the import statement
          result.push(`import { ${formattedImports} } from "${basePath}";`);
        }
      }
      
      // Add any other imports that couldn't be consolidated
      if (otherImports.length > 0) {
        for (const imp of otherImports) {
          const importStatement = formatImport(imp);
          if (importStatement) {
            result.push(importStatement);
          }
        }
      }
    } else {
      // For other categories, just format and add
      const formattedImports = imports
        .map(formatImport)
        .filter(Boolean) as string[];
      
      // Sort imports alphabetically
      formattedImports.sort();
      
      result.push(...formattedImports);
    }
  }
  
  return result;
}

/**
 * Format an import object into an import statement
 */
function formatImport(imp: any): string | null {
  if (imp.defaultImport && imp.namedImports.length > 0) {
    // Both default and named imports
    const namedPart = imp.namedImports
      .map((n: NamedImport) => n.alias ? `${n.alias} as ${n.name}` : n.name)
      .join(', ');
    
    return `import ${imp.defaultImport}, { ${namedPart} } from "${imp.sourcePath}";`;
  } else if (imp.defaultImport) {
    // Only default import
    return `import ${imp.defaultImport} from "${imp.sourcePath}";`;
  } else if (imp.namedImports.length > 0) {
    // Only named imports
    const namedPart = imp.namedImports
      .map((n: NamedImport) => n.alias ? `${n.alias} as ${n.name}` : n.name)
      .join(', ');
    
    return `import { ${namedPart} } from "${imp.sourcePath}";`;
  }
  
  // For imports like "import 'some-module';"
  return imp.originalNode ? imp.originalNode.getText() : null;
}

/**
 * Check if a module is a Node.js built-in module
 */
function isBuiltinModule(moduleName: string): boolean {
  const builtins = [
    'assert', 'buffer', 'child_process', 'cluster', 'console', 'constants', 'crypto', 
    'dgram', 'dns', 'domain', 'events', 'fs', 'http', 'https', 'module', 'net', 
    'os', 'path', 'punycode', 'querystring', 'readline', 'repl', 'stream', 
    'string_decoder', 'sys', 'timers', 'tls', 'tty', 'url', 'util', 'v8', 'vm', 'zlib'
  ];
  
  return builtins.includes(moduleName);
}

/**
 * Parse command line arguments
 */
function parseArgs() {
  const args = process.argv.slice(2);
  const isDryRun = args.includes('--dry-run') || args.includes('-d');
  
  // Check for output file parameter
  let outputFile: string | undefined;
  const outputIndex = args.findIndex(arg => arg === '--output' || arg === '-o');
  
  if (outputIndex !== -1 && outputIndex < args.length - 1) {
    outputFile = args[outputIndex + 1];
  }
  
  return { isDryRun, outputFile };
}

/**
 * Entry point
 */
const { isDryRun, outputFile } = parseArgs();
standardizeImports(isDryRun, outputFile)
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(`❌ Error standardizing imports:`, error);
    process.exit(1);
  });