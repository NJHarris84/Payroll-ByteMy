/**
 * Component Renaming Script for pnpm projects
 * 
 * This script renames UI component files from PascalCase to kebab-case
 * and updates all import references throughout the project.
 * 
 * Usage: node rename-components.js
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuration
const UI_COMPONENTS_DIR = path.join(__dirname, 'components', 'ui');
const PROJECT_ROOT = path.join(__dirname);

// Helper function to convert PascalCase to kebab-case
function pascalToKebab(str) {
  return str
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
    .toLowerCase();
}

// Helper function to check if a file is in PascalCase
function isPascalCase(filename) {
  const baseName = path.basename(filename, path.extname(filename));
  return /^[A-Z]/.test(baseName) && !baseName.includes('-');
}

// Function to create a backup of files before modifying
function createBackup(filePath) {
  const backupPath = `${filePath}.bak`;
  fs.copyFileSync(filePath, backupPath);
  return backupPath;
}

// Function to rename files
function renameComponentFiles() {
  const files = fs.readdirSync(UI_COMPONENTS_DIR);
  const renameMappings = [];

  // Create a mapping of files to rename
  files.forEach(file => {
    const fullPath = path.join(UI_COMPONENTS_DIR, file);
    const stats = fs.statSync(fullPath);
    
    if (stats.isFile() && isPascalCase(file)) {
      const extension = path.extname(file);
      const baseName = path.basename(file, extension);
      const kebabName = pascalToKebab(baseName) + extension;
      
      renameMappings.push({
        oldPath: fullPath,
        newPath: path.join(UI_COMPONENTS_DIR, kebabName),
        oldImport: `@/components/ui/${baseName}`,
        newImport: `@/components/ui/${pascalToKebab(baseName)}`,
        baseName,
        kebabName: pascalToKebab(baseName),
      });
    }
  });

  console.log(`Found ${renameMappings.length} files to rename`);
  
  // Create backups before renaming
  console.log('Creating backups...');
  const backups = renameMappings.map(({ oldPath }) => createBackup(oldPath));
  
  // Perform renaming
  renameMappings.forEach(({ oldPath, newPath }) => {
    console.log(`Renaming: ${path.basename(oldPath)} → ${path.basename(newPath)}`);
    fs.renameSync(oldPath, newPath);
  });

  return renameMappings;
}

// Function to update the UI components index file
function updateIndexFile(renameMappings) {
  const indexPath = path.join(UI_COMPONENTS_DIR, 'index.ts');
  let indexContent = '';
  
  try {
    if (fs.existsSync(indexPath)) {
      // Create backup of index file
      createBackup(indexPath);
      indexContent = fs.readFileSync(indexPath, 'utf8');
    } else {
      console.log('Index file not found, will create a new one');
    }
  } catch (error) {
    console.log('Error reading index file:', error.message);
  }

  // Update import paths in the index file
  renameMappings.forEach(({ baseName, kebabName }) => {
    const oldImportPattern = new RegExp(`from ["']\\.\/${baseName}["']`, 'g');
    indexContent = indexContent.replace(oldImportPattern, `from "./${kebabName}"`);
  });

  fs.writeFileSync(indexPath, indexContent);
  console.log('Updated index.ts file');
}

// Function to find all TypeScript/TSX files in the project
function findTsFiles() {
  try {
    const command = `find ${PROJECT_ROOT} -type f \\( -name "*.ts" -o -name "*.tsx" \\) -not -path "*/node_modules/*" -not -path "*/.next/*" -not -path "*/.pnpm/*" -not -path "*/dist/*"`;
    return execSync(command, { encoding: 'utf8' }).split('\n').filter(Boolean);
  } catch (error) {
    console.error('Error finding TypeScript files:', error.message);
    return [];
  }
}

// Function to update import references throughout the project
function updateImportReferences(renameMappings) {
  console.log('Updating import references throughout the project...');
  
  // Find all TypeScript/TSX files in the project
  const tsFiles = findTsFiles();
  console.log(`Found ${tsFiles.length} TypeScript files to check for imports`);
  
  // Process each file
  tsFiles.forEach(filePath => {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      let updatedContent = content;
      let fileWasUpdated = false;
      
      // Check each renaming mapping against the file content
      renameMappings.forEach(({ oldImport, newImport, baseName, kebabName }) => {
        // Look for imports using the old name
        const importRegex = new RegExp(`@/components/ui/${baseName}`, 'g');
        if (importRegex.test(updatedContent)) {
          // Create backup of the file if we haven't already
          if (!fileWasUpdated) {
            createBackup(filePath);
            fileWasUpdated = true;
          }
          
          // Replace the import
          updatedContent = updatedContent.replace(importRegex, `@/components/ui/${kebabName}`);
          console.log(`Updated imports in: ${filePath}`);
        }
      });
      
      // Only write the file if changes were made
      if (fileWasUpdated) {
        fs.writeFileSync(filePath, updatedContent);
      }
    } catch (error) {
      console.error(`Error processing file ${filePath}:`, error.message);
    }
  });
}

// Function to generate a log file with the changes made
function generateChangeLog(renameMappings) {
  const logPath = path.join(PROJECT_ROOT, 'component-rename.log');
  let logContent = 'Component Renaming Log\n';
  logContent += '======================\n\n';
  logContent += `Date: ${new Date().toISOString()}\n\n`;
  logContent += 'Files Renamed:\n';
  
  renameMappings.forEach(({ oldPath, newPath }) => {
    logContent += `${path.basename(oldPath)} → ${path.basename(newPath)}\n`;
  });
  
  fs.writeFileSync(logPath, logContent);
  console.log(`Change log generated at: ${logPath}`);
}

// Main function
function main() {
  console.log('Starting component renaming process for pnpm project...');
  
  // 1. Rename component files
  const renameMappings = renameComponentFiles();
  
  if (renameMappings.length === 0) {
    console.log('No files need renaming. All components already follow kebab-case convention.');
    return;
  }
  
  // 2. Update the UI components index file
  updateIndexFile(renameMappings);
  
  // 3. Update import references throughout the project
  updateImportReferences(renameMappings);
  
  // 4. Generate a log of all changes made
  generateChangeLog(renameMappings);
  
  console.log('\nComponent renaming completed successfully!');
  console.log('Please review the changes and run your tests to ensure everything works correctly.');
  console.log('Backups of the original files were created with .bak extension.');
}

// Run the script
main();
