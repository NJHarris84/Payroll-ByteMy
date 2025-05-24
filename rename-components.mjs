/**
 * Component Renaming Script for Other Component Directories
 * 
 * This script renames component files from PascalCase to kebab-case
 * in directories other than components/ui
 * 
 * Usage: node rename-other-components.mjs
 */

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

// Setup ESM equivalent of __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const PROJECT_ROOT = path.join(__dirname);
const COMPONENTS_DIR = path.join(__dirname, 'components');
const DIRECTORIES_TO_PROCESS = ['auth', 'client', 'common', 'layout', 'payroll', 'providers'];

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

// Function to process a single directory
function processDirectory(dirName) {
  const dirPath = path.join(COMPONENTS_DIR, dirName);
  console.log(`\nProcessing directory: ${dirPath}`);
  
  try {
    if (!fs.existsSync(dirPath)) {
      console.log(`Directory does not exist: ${dirPath}`);
      return [];
    }
    
    const files = fs.readdirSync(dirPath);
    console.log(`Found ${files.length} files in directory`);
    
    const renameMappings = [];

    // Create a mapping of files to rename
    files.forEach(file => {
      const fullPath = path.join(dirPath, file);
      const stats = fs.statSync(fullPath);
      
      if (stats.isFile() && isPascalCase(file)) {
        const extension = path.extname(file);
        const baseName = path.basename(file, extension);
        const kebabName = pascalToKebab(baseName) + extension;
        
        console.log(`Found PascalCase file: ${baseName}`);
        
        renameMappings.push({
          oldPath: fullPath,
          newPath: path.join(dirPath, kebabName),
          oldImport: `@/components/${dirName}/${baseName}`,
          newImport: `@/components/${dirName}/${pascalToKebab(baseName)}`,
          baseName,
          kebabName: pascalToKebab(baseName),
          dirName
        });
      }
    });

    console.log(`Found ${renameMappings.length} files to rename in ${dirName}`);
    
    if (renameMappings.length > 0) {
      // Create backups before renaming
      console.log('Creating backups...');
      renameMappings.forEach(({ oldPath }) => createBackup(oldPath));
      
      // Perform renaming
      renameMappings.forEach(({ oldPath, newPath }) => {
        console.log(`Renaming: ${path.basename(oldPath)} → ${path.basename(newPath)}`);
        fs.renameSync(oldPath, newPath);
      });
    }

    return renameMappings;
  } catch (error) {
    console.error(`Error processing directory ${dirName}: ${error.message}`);
    return [];
  }
}

// Function to update the index file for a directory
function updateIndexFile(dirName, renameMappings) {
  const filteredMappings = renameMappings.filter(mapping => mapping.dirName === dirName);
  if (filteredMappings.length === 0) {
    return;
  }
  
  const indexPath = path.join(COMPONENTS_DIR, dirName, 'index.ts');
  let indexContent = '';
  
  try {
    if (fs.existsSync(indexPath)) {
      // Create backup of index file
      createBackup(indexPath);
      indexContent = fs.readFileSync(indexPath, 'utf8');
      console.log(`Successfully read index.ts file for ${dirName}`);
      
      // Update import paths in the index file
      filteredMappings.forEach(({ baseName, kebabName }) => {
        const oldImportPattern = new RegExp(`from ["']\\.\/${baseName}["']`, 'g');
        indexContent = indexContent.replace(oldImportPattern, `from "./${kebabName}"`);
      });
      
      fs.writeFileSync(indexPath, indexContent);
      console.log(`Updated index.ts file for ${dirName}`);
    } else {
      console.log(`No index.ts file found for ${dirName}, creating one`);
      
      // Generate a new index file with exports for all components
      const files = fs.readdirSync(path.join(COMPONENTS_DIR, dirName));
      
      files.forEach(file => {
        const extension = path.extname(file);
        if ((extension === '.tsx' || extension === '.ts') && file !== 'index.ts') {
          const baseName = path.basename(file, extension);
          indexContent += `export * from "./${baseName}";\n`;
        }
      });
      
      fs.writeFileSync(indexPath, indexContent);
      console.log(`Created new index.ts file for ${dirName}`);
    }
  } catch (error) {
    console.log(`Error updating index file for ${dirName}: ${error.message}`);
  }
}

// Function to find all TypeScript/TSX files in the project
function findTsFiles() {
  try {
    const command = `find ${PROJECT_ROOT} -type f \\( -name "*.ts" -o -name "*.tsx" \\) -not -path "*/node_modules/*" -not -path "*/.next/*" -not -path "*/.pnpm/*" -not -path "*/dist/*"`;
    const files = execSync(command, { encoding: 'utf8' }).split('\n').filter(Boolean);
    console.log(`Found ${files.length} TypeScript files in the project`);
    return files;
  } catch (error) {
    console.error('Error finding TypeScript files:', error.message);
    return [];
  }
}

// Function to update import references throughout the project
function updateImportReferences(renameMappings) {
  console.log('\nUpdating import references throughout the project...');
  
  if (renameMappings.length === 0) {
    console.log('No files were renamed, so no import references need updating.');
    return;
  }
  
  // Find all TypeScript/TSX files in the project
  const tsFiles = findTsFiles();
  
  // Process each file
  let updatedFileCount = 0;
  
  tsFiles.forEach(filePath => {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      let updatedContent = content;
      let fileWasUpdated = false;
      
      // Check each renaming mapping against the file content
      renameMappings.forEach(({ oldImport, newImport, baseName, kebabName, dirName }) => {
        // Look for imports using the old name
        const importRegex = new RegExp(`@/components/${dirName}/${baseName}`, 'g');
        if (importRegex.test(updatedContent)) {
          // Create backup of the file if we haven't already
          if (!fileWasUpdated) {
            createBackup(filePath);
            fileWasUpdated = true;
          }
          
          // Replace the import
          updatedContent = updatedContent.replace(importRegex, `@/components/${dirName}/${kebabName}`);
          console.log(`Updated imports in: ${filePath}`);
        }
      });
      
      // Only write the file if changes were made
      if (fileWasUpdated) {
        fs.writeFileSync(filePath, updatedContent);
        updatedFileCount++;
      }
    } catch (error) {
      console.error(`Error processing file ${filePath}:`, error.message);
    }
  });
  
  console.log(`Updated import references in ${updatedFileCount} files`);
}

// Function to generate a log file with the changes made
function generateChangeLog(renameMappings) {
  if (renameMappings.length === 0) {
    console.log('No changes were made, so no log file will be generated.');
    return;
  }
  
  const logPath = path.join(PROJECT_ROOT, 'component-rename-other.log');
  let logContent = 'Component Renaming Log (Other Components)\n';
  logContent += '=====================================\n\n';
  logContent += `Date: ${new Date().toISOString()}\n\n`;
  
  DIRECTORIES_TO_PROCESS.forEach(dirName => {
    const dirMappings = renameMappings.filter(mapping => mapping.dirName === dirName);
    if (dirMappings.length > 0) {
      logContent += `\nDirectory: ${dirName}\n`;
      logContent += '----------------\n';
      dirMappings.forEach(({ oldPath, newPath }) => {
        logContent += `${path.basename(oldPath)} → ${path.basename(newPath)}\n`;
      });
    }
  });
  
  fs.writeFileSync(logPath, logContent);
  console.log(`Change log generated at: ${logPath}`);
}

// Main function
function main() {
  console.log('Starting component renaming process for other component directories...');
  
  // Process each directory and collect all renaming mappings
  let allRenameMappings = [];
  
  DIRECTORIES_TO_PROCESS.forEach(dirName => {
    const renameMappings = processDirectory(dirName);
    allRenameMappings = [...allRenameMappings, ...renameMappings];
    
    // Update the index file for each directory
    updateIndexFile(dirName, renameMappings);
  });
  
  if (allRenameMappings.length === 0) {
    console.log('\nNo files need renaming. All components already follow kebab-case convention.');
    return;
  }
  
  // Update import references throughout the project
  updateImportReferences(allRenameMappings);
  
  // Generate a log of all changes made
  generateChangeLog(allRenameMappings);
  
  console.log('\nComponent renaming completed successfully!');
  console.log('Please review the changes and run your tests to ensure everything works correctly.');
  console.log('Backups of the original files were created with .bak extension.');
}

// Run the script
main();