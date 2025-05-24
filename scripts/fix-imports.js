// scripts/fix-imports.js
// ES Module version for projects with "type": "module"

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define the file mappings (old import path -> new import path)
const importMappings = {
  // Auth files
  "@/lib/auth/auth": "@/lib/auth/auth.server",
  "./auth": "./auth.server",
  "../auth": "../auth.server",
  
  // API files  
  "@/lib/api/apollo-client": "@/lib/api/apollo-client.client",
  "./apollo-client": "./apollo-client.client",
  "../apollo-client": "../apollo-client.client",
  
  "@/lib/api/auth-guard": "@/lib/api/auth-guard.server",
  "./auth-guard": "./auth-guard.server",
  "../auth-guard": "../auth-guard.server",
  
  "@/lib/api/error-boundary": "@/lib/api/error-boundary.client",
  "./error-boundary": "./error-boundary.client",
  "../error-boundary": "../error-boundary.client",
  
  "@/lib/api/optimistic-updates": "@/lib/api/optimistic-updates.client",
  "./optimistic-updates": "./optimistic-updates.client",
  "../optimistic-updates": "../optimistic-updates.client",
  
  // GraphQL files (add more as needed)
  "@/lib/graphql/queries/notes": "@/lib/graphql/queries/notes/index",
  // Add other GraphQL mappings here
};

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
        console.warn(`⚠️  Skipping ${fullPath}: ${error.message}`);
      }
    });
  } catch (error) {
    console.warn(`⚠️  Cannot read directory ${dirPath}: ${error.message}`);
  }

  return arrayOfFiles;
}

function fixImportsInFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let updatedContent = content;
    let hasChanges = false;
    const changes = [];
    
    Object.entries(importMappings).forEach(([oldPath, newPath]) => {
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
      fs.writeFileSync(filePath, updatedContent, 'utf8');
      console.log(`✅ Fixed imports in: ${path.relative(process.cwd(), filePath)}`);
      changes.forEach(change => {
        console.log(`   ${change.from} → ${change.to} (${change.count} occurrence${change.count > 1 ? 's' : ''})`);
      });
      return changes.length;
    }
    
    return 0;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return 0;
  }
}

function escapeRegex(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function main() {
  console.log('🚀 Starting import fix process...\n');
  
  // Get project root (parent of scripts directory)
  const projectRoot = path.dirname(__dirname);
  
  // Get all files from common directories
  const commonDirs = ['app', 'components', 'lib', 'pages', 'src', 'hooks', 'utils'];
  let allFiles = [];
  
  commonDirs.forEach(dir => {
    const fullDirPath = path.join(projectRoot, dir);
    if (fs.existsSync(fullDirPath)) {
      console.log(`📂 Scanning ${dir}/...`);
      allFiles = allFiles.concat(getAllFiles(fullDirPath));
    }
  });
  
  console.log(`\n📁 Found ${allFiles.length} files to scan\n`);
  
  let totalFixes = 0;
  let filesModified = 0;
  
  allFiles.forEach(file => {
    const fixes = fixImportsInFile(file);
    if (fixes > 0) {
      filesModified++;
      totalFixes += fixes;
    }
  });
  
  console.log('\n📊 Summary:');
  console.log(`   Files scanned: ${allFiles.length}`);
  console.log(`   Files modified: ${filesModified}`);
  console.log(`   Total fixes: ${totalFixes}`);
  
  if (totalFixes > 0) {
    console.log('\n✨ Import fixes completed!');
    console.log('\n📝 Next steps:');
    console.log('1. Run: pnpm build');
    console.log('2. Check for any remaining issues');
    console.log('3. Test your application');
  } else {
    console.log('\n💡 No matching import patterns found.');
    console.log('You may need to add more patterns to the importMappings object.');
  }
  
  console.log('\n🔍 To add more mappings, edit this script and add entries to importMappings:');
  console.log('   "@/your/old/path": "@/your/new/path"');
}

// Run the script
main();