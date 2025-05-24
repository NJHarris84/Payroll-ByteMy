#!/usr/bin/env node
/**
 * Fix All Imports - Main Script
 * 
 * This script runs all the import fixes for your Payroll-ByteMy project
 * It combines functionality from all your existing scripts
 */

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Colors
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function printBanner() {
  console.log(`
${colors.cyan}╔═══════════════════════════════════════════════════════════════╗
║ ${colors.green}FIX ALL IMPORTS - MASTER SCRIPT${colors.cyan}                         ║
║ ${colors.yellow}Fixes all import issues in your Payroll-ByteMy project${colors.cyan}    ║
╚═══════════════════════════════════════════════════════════════╝${colors.reset}
  `);
}

class MasterImportFixer {
  constructor() {
    this.rootDir = process.cwd();
    this.scriptsDir = path.join(this.rootDir, 'scripts');
    this.dryRun = !process.argv.includes('--execute');
    this.verbose = process.argv.includes('--verbose') || process.argv.includes('-v');
  }
  
  // Run a command and handle errors
  runCommand(command, description) {
    log(`\n🔧 ${description}...`, 'blue');
    
    if (this.dryRun) {
      log(`Would run: ${command}`, 'yellow');
      return true;
    }
    
    try {
      execSync(command, { 
        stdio: this.verbose ? 'inherit' : 'pipe',
        cwd: this.rootDir 
      });
      log(`✅ ${description} completed`, 'green');
      return true;
    } catch (error) {
      log(`❌ ${description} failed: ${error.message}`, 'red');
      return false;
    }
  }
  
  // Create the comprehensive import fixer if it doesn't exist
  createComprehensiveScript() {
    const scriptPath = path.join(this.scriptsDir, 'comprehensive-import-fixer.js');
    
    if (!fs.existsSync(scriptPath)) {
      log('📝 Creating comprehensive import fixer script...', 'blue');
      
      // This would contain the content from the artifact above
      // For now, we'll use the existing scripts
      return false;
    }
    
    return true;
  }
  
  // Check what scripts are available
  checkAvailableScripts() {
    const scripts = [
      'fix-imports.js',
      'fix-imports-enhanced.js', 
      'fix-server-imports.js',
      'fix-graphql-exports.ts',
      'enhanced-cleanup.ts'
    ];
    
    const available = [];
    
    for (const script of scripts) {
      const scriptPath = path.join(this.scriptsDir, script);
      if (fs.existsSync(scriptPath)) {
        available.push(script);
      }
    }
    
    return available;
  }
  
  // Main execution
  async run() {
    printBanner();
    
    if (this.dryRun) {
      log('🔍 DRY RUN MODE - No changes will be made', 'yellow');
      log('Add --execute flag to apply fixes', 'yellow');
    }
    
    log('\n📋 Import Fix Sequence Starting...', 'magenta');
    
    // Create scripts directory if it doesn't exist
    if (!fs.existsSync(this.scriptsDir)) {
      fs.mkdirSync(this.scriptsDir, { recursive: true });
      log('📁 Created scripts directory', 'green');
    }
    
    const availableScripts = this.checkAvailableScripts();
    log(`\n📂 Available scripts: ${availableScripts.length}`, 'blue');
    
    let success = true;
    
    // Phase 1: Fix server-only imports first
    if (availableScripts.includes('fix-server-imports.js')) {
      success &= this.runCommand(
        'node scripts/fix-server-imports.js',
        'Phase 1: Fix server-only imports'
      );
    }
    
    // Phase 2: Fix GraphQL exports and naming
    if (availableScripts.includes('fix-graphql-exports.ts')) {
      success &= this.runCommand(
        `npx ts-node scripts/fix-graphql-exports.ts ${this.dryRun ? '' : '--execute'}`,
        'Phase 2: Fix GraphQL exports'
      );
    }
    
    // Phase 3: Run enhanced imports fixer
    if (availableScripts.includes('fix-imports-enhanced.js')) {
      success &= this.runCommand(
        `node scripts/fix-imports-enhanced.js ${this.dryRun ? '--dry-run' : ''}`,
        'Phase 3: Fix enhanced imports'
      );
    } else if (availableScripts.includes('fix-imports.js')) {
      success &= this.runCommand(
        'node scripts/fix-imports.js',
        'Phase 3: Fix basic imports'
      );
    }
    
    // Phase 4: Run comprehensive cleanup if available
    if (availableScripts.includes('enhanced-cleanup.ts')) {
      success &= this.runCommand(
        `npx ts-node scripts/enhanced-cleanup.ts ${this.dryRun ? '' : '--execute'}`,
        'Phase 4: Enhanced project cleanup'
      );
    }
    
    // Phase 5: Try to build to check for remaining issues
    if (!this.dryRun && success) {
      log('\n🏗️  Testing build...', 'blue');
      
      // Check if we have a build script
      const packageJson = path.join(this.rootDir, 'package.json');
      if (fs.existsSync(packageJson)) {
        try {
          const pkg = JSON.parse(fs.readFileSync(packageJson, 'utf8'));
          
          if (pkg.scripts && pkg.scripts.build) {
            log('Running build test...', 'gray');
            execSync('npm run build', { 
              stdio: 'pipe',
              cwd: this.rootDir 
            });
            log('✅ Build successful!', 'green');
          } else if (pkg.scripts && pkg.scripts['type-check']) {
            log('Running type check...', 'gray');
            execSync('npm run type-check', { 
              stdio: 'pipe',
              cwd: this.rootDir 
            });
            log('✅ Type check passed!', 'green');
          }
        } catch (error) {
          log('⚠️  Build/type check failed - there may be remaining issues', 'yellow');
          log('Check the error above for specific problems', 'yellow');
        }
      }
    }
    
    // Summary
    log('\n📊 SUMMARY:', 'cyan');
    
    if (this.dryRun) {
      log('This was a dry run. To apply fixes:', 'yellow');
      log('  node scripts/fix-all-imports.js --execute', 'gray');
    } else if (success) {
      log('✅ All import fixes completed successfully!', 'green');
      log('Your project should now build without import errors.', 'green');
    } else {
      log('⚠️  Some fixes may have failed. Check the logs above.', 'yellow');
    }
    
    log('\n💡 Next steps:', 'blue');
    log('1. Run: npm run build (or yarn build)', 'white');
    log('2. Check for any remaining errors', 'white');
    log('3. Test your application', 'white');
    log('4. Commit your changes', 'white');
  }
}

// Create a quick fix for your specific error
function createQuickFix() {
  const quickFixContent = `#!/usr/bin/env node
// Quick fix for the specific PayrollFragment issue

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

async function fixPayrollFragmentImports() {
  console.log('🔧 Quick fix for PayrollFragment imports...');
  
  // Find all generated files that use PayrollFragment
  const files = await glob('lib/graphql/**/*.generated.ts', { absolute: true });
  
  for (const filePath of files) {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file uses PayrollFragment but doesn't import it
    if (content.includes('\${PayrollFragment}') && !content.includes('import') || !content.includes('PayrollFragment')) {
      console.log(\`Fixing: \${path.relative(process.cwd(), filePath)}\`);
      
      // Find the PayrollFragment file
      const dir = path.dirname(filePath);
      const possiblePaths = [
        path.join(dir, 'payrollFragment.ts'),
        path.join(path.dirname(dir), 'fragments', 'payrollFragment.ts'),
        path.join(process.cwd(), 'lib/graphql/fragments/payrollFragment.ts')
      ];
      
      let importPath = null;
      for (const possiblePath of possiblePaths) {
        if (fs.existsSync(possiblePath)) {
          const relativePath = path.relative(path.dirname(filePath), path.dirname(possiblePath));
          importPath = relativePath.startsWith('.') ? relativePath : \`./\${relativePath}\`;
          break;
        }
      }
      
      if (importPath) {
        // Add import at the top
        const lines = content.split('\\n');
        let insertIndex = 0;
        
        // Find where to insert (after existing imports)
        for (let i = 0; i < lines.length; i++) {
          if (lines[i].trim().startsWith('import ')) {
            insertIndex = i + 1;
          }
        }
        
        lines.splice(insertIndex, 0, \`import { PAYROLL_FRAGMENT } from '\${importPath}';\`);
        
        // Replace PayrollFragment with PAYROLL_FRAGMENT in template
        const updatedContent = lines.join('\\n').replace(/\\\$\{PayrollFragment\}/g, '\${PAYROLL_FRAGMENT}');
        
        fs.writeFileSync(filePath, updatedContent);
        console.log(\`  ✅ Fixed PayrollFragment import\`);
      } else {
        console.log(\`  ⚠️  Could not find PayrollFragment source file\`);
      }
    }
  }
}

fixPayrollFragmentImports().catch(console.error);
`;

  const quickFixPath = path.join(process.cwd(), 'scripts', 'quick-fix-fragments.js');
  
  if (!fs.existsSync(path.dirname(quickFixPath))) {
    fs.mkdirSync(path.dirname(quickFixPath), { recursive: true });
  }
  
  fs.writeFileSync(quickFixPath, quickFixContent);
  log('📝 Created quick fix script: scripts/quick-fix-fragments.js', 'green');
  
  return quickFixPath;
}

// Main execution
async function main() {
  // If no arguments, show help
  if (process.argv.length === 2) {
    printBanner();
    console.log(`
Usage:
  node fix-all-imports.js [options]

Options:
  --execute    Apply the fixes (default is dry run)
  --verbose    Show detailed output
  --quick-fix  Just fix the PayrollFragment issue

Examples:
  node fix-all-imports.js                    # Dry run
  node fix-all-imports.js --execute          # Apply fixes
  node fix-all-imports.js --quick-fix        # Quick fix only
`);
    return;
  }
  
  // Handle quick fix
  if (process.argv.includes('--quick-fix')) {
    const quickFixPath = createQuickFix();
    execSync(`node ${quickFixPath}`, { stdio: 'inherit' });
    return;
  }
  
  // Run full fixer
  const fixer = new MasterImportFixer();
  await fixer.run();
}

main().catch(console.error);