// fix-imports-enhanced.js
// Enhanced script to update import paths across the codebase

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Command line arguments
const args = process.argv.slice(2);
const DRY_RUN = args.includes('--dry-run') || args.includes('-d');
const VERBOSE = args.includes('--verbose') || args.includes('-v');
const CONFIG_PATH = args.find(arg => arg.startsWith('--config='))?.split('=')[1] || 'import-mappings.json';
const INCLUDE_DIRS = args.find(arg => arg.startsWith('--include='))?.split('=')[1]?.split(',') || ['app', 'components', 'lib', 'pages', 'src', 'hooks', 'utils'];

// Colors for console output
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

// Banner
function printBanner() {
  console.log(`
${colors.cyan}╔═══════════════════════════════════════════════════════════════╗
║ ${colors.green}IMPORT PATH FIXER${colors.cyan}                                          ║
║ ${colors.gray}Fix import paths across your codebase with confidence${colors.cyan}       ║
╚═══════════════════════════════════════════════════════════════╝${colors.reset}
  `);
}

// Helper to log with colors
function log(message, color = 'reset', indent = 0) {
  const indentStr = '  '.repeat(indent);
  console.log(`${indentStr}${colors[color]}${message}${colors.reset}`);
}

// Load import mappings from JSON file
function loadImportMappings(configPath) {
  try {
    const fullPath = path.resolve(process.cwd(), configPath);
    if (fs.existsSync(fullPath)) {
      const config = JSON.parse(fs.readFileSync(fullPath, 'utf8'));
      // Filter out comment keys (keys starting with //)
      const mappings = {};
      Object.keys(config).forEach(key => {
        if (!key.startsWith('//')) {
          mappings[key] = config[key];
        }
      });
      return mappings;
    } else {
      log(`Config file not found: ${fullPath}`, 'red');
      log('Using default import mappings...', 'yellow');
      return {};
    }
  } catch (error) {
    log(`Error loading config: ${error.message}`, 'red');
    return {};
  }
}

// Find all files in the specified directories
function getAllFiles(dirPath, arrayOfFiles = []) {
  try {
    const files = fs.readdirSync(dirPath);

    files.forEach(file => {
      const fullPath = path.join(dirPath, file);
      
      try {
        if (fs.statSync(fullPath).isDirectory()) {
          // Skip node_modules, .next, dist directories
          if (!['node_modules', '.next', 'dist', '.git', '.pnpm-store'].includes(file)) {
            arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
          }
        } else {
          // Only process TypeScript and JavaScript files
          if (/\.(ts|tsx|js|jsx)$/.test(file)) {
            arrayOfFiles.push(fullPath);
          }
        }
      } catch (error) {
        // Skip files we can't access
        log(`⚠️  Skipping ${fullPath}: ${error.message}`, 'yellow', 1);
      }
    });
  } catch (error) {
    log(`⚠️  Cannot read directory ${dirPath}: ${error.message}`, 'yellow', 1);
  }

  return arrayOfFiles;
}

// Fix imports in a single file
function fixImportsInFile(filePath, importMappings, dryRun = false) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let updatedContent = content;
    let hasChanges = false;
    const changes = [];
    
    Object.entries(importMappings).forEach(([oldPath, newPath]) => {
      // Skip mappings where old and new paths are the same
      if (oldPath === newPath) return;
      
      // Simple regex patterns for common import styles
      const patterns = [
        // import ... from 'path'
        new RegExp(`(import\\s+[^;]+from\\s+')${escapeRegex(oldPath)}(')`,'g'), 
        // import ... from "path"
        new RegExp(`(import\\s+[^;]+from\\s+")${escapeRegex(oldPath)}(")`,'g'),
        // require('path') - for mixed codebases
        new RegExp(`(require\\s*\\(\\s*')${escapeRegex(oldPath)}('\\s*\\))`,'g'),
        // require("path") - for mixed codebases
        new RegExp(`(require\\s*\\(\\s*")${escapeRegex(oldPath)}("\\s*\\))`,'g'),
        // export ... from 'path'
        new RegExp(`(export\\s+[^;]+from\\s+')${escapeRegex(oldPath)}(')`,'g'),
        // export ... from "path"
        new RegExp(`(export\\s+[^;]+from\\s+")${escapeRegex(oldPath)}(")`,'g'),
        // dynamic import() with single quotes
        new RegExp(`(import\\s*\\(\\s*')${escapeRegex(oldPath)}('\\s*\\))`,'g'),
        // dynamic import() with double quotes  
        new RegExp(`(import\\s*\\(\\s*")${escapeRegex(oldPath)}("\\s*\\))`,'g'),
      ];
      
      patterns.forEach(pattern => {
        const matches = updatedContent.match(pattern);
        if (matches) {
          updatedContent = updatedContent.replace(pattern, `$1${newPath}$2`);
          changes.push({ from: oldPath, to: newPath, count: matches.length });
          hasChanges = true;
        }
      });
    });
    
    if (hasChanges) {
      if (!dryRun) {
        fs.writeFileSync(filePath, updatedContent, 'utf8');
      }
      log(`${dryRun ? '🔍 Would fix' : '✅ Fixed'} imports in: ${path.relative(process.cwd(), filePath)}`, 'green', 1);
      changes.forEach(change => {
        log(`${change.from} → ${change.to} (${change.count} occurrence${change.count > 1 ? 's' : ''})`, 'blue', 2);
      });
      return changes.reduce((total, change) => total + change.count, 0);
    }
    
    if (VERBOSE) {
      log(`No changes needed in: ${path.relative(process.cwd(), filePath)}`, 'gray', 1);
    }
    
    return 0;
  } catch (error) {
    log(`❌ Error processing ${filePath}: ${error.message}`, 'red', 1);
    return 0;
  }
}

// Escape special regex characters in a string
function escapeRegex(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Main function
async function main() {
  printBanner();
  log(`🚀 Starting import fix process...${DRY_RUN ? ' (DRY RUN - no changes will be made)' : ''}`, 'cyan');
  
  const importMappings = loadImportMappings(CONFIG_PATH);
  
  log(`📋 Loaded ${Object.keys(importMappings).length} import mappings from ${CONFIG_PATH}`, 'blue');
  if (VERBOSE) {
    Object.entries(importMappings).forEach(([oldPath, newPath]) => {
      log(`${oldPath} → ${newPath}`, 'gray', 1);
    });
  }
  
  // Get project root
  const projectRoot = process.cwd();
  
  // Get all files from specified directories
  let allFiles = [];
  
  log(`📂 Scanning directories: ${INCLUDE_DIRS.join(', ')}`, 'blue');
  INCLUDE_DIRS.forEach(dir => {
    const fullDirPath = path.join(projectRoot, dir);
    if (fs.existsSync(fullDirPath)) {
      log(`Scanning ${dir}/...`, 'gray', 1);
      allFiles = allFiles.concat(getAllFiles(fullDirPath));
    } else {
      log(`Directory not found: ${dir}/`, 'yellow', 1);
    }
  });
  
  log(`\n📁 Found ${allFiles.length} files to scan`, 'blue');
  
  let totalFixes = 0;
  let filesModified = 0;
  
  allFiles.forEach(file => {
    const fixes = fixImportsInFile(file, importMappings, DRY_RUN);
    if (fixes > 0) {
      filesModified++;
      totalFixes += fixes;
    }
  });
  
  log('\n📊 Summary:', 'magenta');
  log(`Files scanned: ${allFiles.length}`, 'white', 1);
  log(`Files ${DRY_RUN ? 'that would be' : ''} modified: ${filesModified}`, 'white', 1);
  log(`Total fixes ${DRY_RUN ? 'that would be' : ''} applied: ${totalFixes}`, 'white', 1);
  
  if (totalFixes > 0) {
    log(`\n${DRY_RUN ? '✨ Dry run completed!' : '✨ Import fixes completed!'}`, 'green');
    
    if (DRY_RUN) {
      log('\n📝 To apply these changes:', 'cyan');
      log('Run the script without the --dry-run flag:', 'white', 1);
      log('node fix-imports-enhanced.js', 'gray', 2);
    } else {
      log('\n📝 Next steps:', 'cyan');
      log('1. Run: pnpm build', 'white', 1);
      log('2. Check for any remaining issues', 'white', 1);
      log('3. Test your application', 'white', 1);
    }
  } else {
    log('\n💡 No matching import patterns found.', 'yellow');
    log('You may need to add more patterns to the import-mappings.json file.', 'white', 1);
  }
  
  log('\n🔍 To add more mappings, edit the import-mappings.json file.', 'blue');
}

// Run the script
main().catch(error => {
  log(`\n❌ Error: ${error.message}`, 'red');
  process.exit(1);
});
