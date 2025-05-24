#!/usr/bin/env node
/**
 * GraphQL Export Fixer for Payroll-ByteMy
 * 
 * This script focuses specifically on fixing the naming patterns in .generated.ts files:
 * - Removes duplicate "Fragment" in constants (e.g., AdjustmentRuleFragmentFragmentDoc → ADJUSTMENT_RULE_FRAGMENT)
 * - Converts constants to UPPER_SNAKE_CASE
 * - Fixes fragment type names to use proper PascalCase
 */

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Colors for terminal output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',
  gray: '\x1b[90m',
};

// Print script banner
function printBanner() {
  console.log(`
${colors.cyan}╔═══════════════════════════════════════════════════════════════╗
║ ${colors.green}PAYROLL-BYTEMY GRAPHQL EXPORT FIXER${colors.cyan}                      ║
║ ${colors.gray}Standardizing GraphQL export naming conventions${colors.cyan}           ║
╚═══════════════════════════════════════════════════════════════╝${colors.reset}
  `);
}

// Helper to log with colors
function log(message: string, color = 'reset', indent = 0) {
  const indentStr = '  '.repeat(indent);
  console.log(`${indentStr}${colors[color]}${message}${colors.reset}`);
}

interface FixerOptions {
  rootDir: string;
  dryRun: boolean;
  verbose: boolean;
}

class GraphQLExportFixer {
  rootDir: string;
  dryRun: boolean;
  verbose: boolean;
  
  // Stats for reporting
  fixedFiles = 0;
  fixedExports = 0;
  
  // Logs for detailed reporting
  logs: string[] = [];
  
  constructor(options: FixerOptions) {
    this.rootDir = options.rootDir;
    this.dryRun = options.dryRun;
    this.verbose = options.verbose;
  }
  
  /**
   * Convert text to PascalCase
   */
  toPascalCase(text: string): string {
    return text
      .replace(/[-_](\w)/g, (_, c) => c.toUpperCase())
      .replace(/^\w/, c => c.toUpperCase());
  }
  
  /**
   * Convert text to UPPER_SNAKE_CASE
   */
  toUpperSnakeCase(text: string): string {
    return text
      .replace(/([A-Z])/g, '_$1')
      .replace(/^_/, '')
      .toUpperCase();
  }
  
  /**
   * Fix the exports in a GraphQL generated file
   */
  fixFileExports(filePath: string): boolean {
    try {
      // Read the file content
      const content = fs.readFileSync(filePath, 'utf-8');
      const fileName = path.basename(filePath);
      const relativePath = path.relative(this.rootDir, filePath);
      
      // Skip if no problematic patterns found
      if (!content.includes('FragmentDoc') && !content.includes('export const')) {
        if (this.verbose) {
          log(`Skipping ${relativePath} - no issues found`, 'gray', 1);
        }
        return false;
      }
      
      log(`Processing ${relativePath}`, 'blue', 1);
      
      // Track changes
      let fileChanged = false;
      let newContent = content;
      
      // Fix fragment document constant names
      if (content.includes('FragmentDoc')) {
        // Find all FragmentDoc constants
        const fragmentDocRegex = /export const (\w+)FragmentFragmentDoc = gql`/g;
        let match;
        
        while ((match = fragmentDocRegex.exec(content)) !== null) {
          const fullMatch = match[0];
          const baseName = match[1];
          
          // Create the proper constant name
          const properConstName = this.toUpperSnakeCase(baseName) + '_FRAGMENT';
          const replacement = `export const ${properConstName} = gql\``;
          
          // Replace in the content
          newContent = newContent.replace(fullMatch, replacement);
          fileChanged = true;
          
          log(`Fixed constant: ${baseName}FragmentFragmentDoc → ${properConstName}`, 'green', 2);
          this.fixedExports++;
        }
      }
      
      // Fix fragment type names
      const fragmentTypeRegex = /export type (\w+)FragmentFragment =/g;
      let typeMatch;
      
      while ((typeMatch = fragmentTypeRegex.exec(content)) !== null) {
        const fullMatch = typeMatch[0];
        const baseName = typeMatch[1];
        
        // Create the proper type name
        const properTypeName = this.toPascalCase(baseName) + 'Fragment';
        const replacement = `export type ${properTypeName} =`;
        
        // Replace in the content
        newContent = newContent.replace(fullMatch, replacement);
        fileChanged = true;
        
        log(`Fixed type: ${baseName}FragmentFragment → ${properTypeName}`, 'green', 2);
        this.fixedExports++;
      }
      
      // Write the fixed content if changes were made
      if (fileChanged) {
        if (this.dryRun) {
          log(`Would update ${relativePath} (dry run)`, 'yellow', 2);
          if (this.verbose) {
            log('Example of changes:', 'gray', 3);
            const originalLines = content.split('\n').slice(0, 20);
            const fixedLines = newContent.split('\n').slice(0, 20);
            log('Original (first 20 lines):', 'gray', 3);
            log(originalLines.join('\n'), 'gray', 4);
            log('Fixed (first 20 lines):', 'gray', 3);
            log(fixedLines.join('\n'), 'gray', 4);
          }
        } else {
          fs.writeFileSync(filePath, newContent);
          log(`Updated ${relativePath}`, 'green', 2);
          this.logs.push(`FIXED: ${relativePath} (${this.fixedExports} exports)`);
          this.fixedFiles++;
        }
        return true;
      }
      
      log(`No issues to fix in ${relativePath}`, 'gray', 1);
      return false;
    } catch (error) {
      log(`Error processing ${filePath}: ${error.message}`, 'red', 1);
      return false;
    }
  }
  
  /**
   * Write logs to a file
   */
  writeLogs(): void {
    if (this.dryRun || this.logs.length === 0) return;
    
    try {
      // Ensure logs directory exists
      const logsDir = path.join(this.rootDir, 'logs');
      if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir, { recursive: true });
      }
      
      // Write log file
      const logPath = path.join(logsDir, 'graphql-export-fixes.txt');
      const logContent = `
PAYROLL-BYTEMY GRAPHQL EXPORT FIXES
===================================
Date: ${new Date().toISOString()}

${this.logs.join('\n')}

SUMMARY:
- Fixed files: ${this.fixedFiles}
- Fixed exports: ${this.fixedExports}
`;
      
      fs.writeFileSync(logPath, logContent);
      log(`Logs written to logs/graphql-export-fixes.txt`, 'green', 1);
    } catch (error) {
      log(`Error writing logs: ${error.message}`, 'red', 1);
    }
  }
  
  /**
   * Run the fixer
   */
  async run(): Promise<number> {
    printBanner();
    
    try {
      log('🔍 Finding GraphQL generated files...', 'blue');
      
      // Find all .generated.ts files
      const files = await glob('lib/graphql/**/*.generated.ts', {
        cwd: this.rootDir,
        absolute: true
      });
      
      log(`Found ${files.length} GraphQL generated files`, 'blue');
      
      // Process each file
      for (const file of files) {
        this.fixFileExports(file);
      }
      
      // Write logs
      this.writeLogs();
      
      // Print summary
      log('\n📊 SUMMARY:', 'cyan');
      log(`Files processed: ${files.length}`, 'white', 1);
      log(`Files fixed: ${this.fixedFiles}`, 'white', 1);
      log(`Exports fixed: ${this.fixedExports}`, 'white', 1);
      
      if (this.dryRun) {
        log('\n⚠️  This was a DRY RUN. No changes were actually made.', 'yellow');
        log('To execute the changes, run the script again with --execute flag.', 'yellow');
      } else if (this.fixedFiles > 0) {
        log('\n✅ Successfully fixed GraphQL exports!', 'green');
      } else {
        log('\n✅ No issues found in GraphQL exports.', 'green');
      }
      
      return 0;
    } catch (error) {
      log(`\n❌ ERROR: ${error.message}`, 'red');
      console.error(error.stack);
      return 1;
    }
  }
}

// Parse command line arguments
function parseArgs(): FixerOptions {
  const args = process.argv.slice(2);
  
  return {
    rootDir: process.cwd(),
    dryRun: !args.includes('--execute'),
    verbose: args.includes('--verbose') || args.includes('-v')
  };
}

// Main execution
async function main() {
  const options = parseArgs();
  const fixer = new GraphQLExportFixer(options);
  const exitCode = await fixer.run();
  process.exit(exitCode);
}

// Run the script
main().catch(err => {
  console.error('Unhandled error:', err);
  process.exit(1);
});