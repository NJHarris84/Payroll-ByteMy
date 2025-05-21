import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Promisify fs functions
const readdir = (path) => fs.promises.readdir(path, { withFileTypes: true });
const readFile = (path) => fs.promises.readFile(path, 'utf8');
const writeFile = (path, content) => fs.promises.writeFile(path, content, 'utf8');
const stat = (path) => fs.promises.stat(path);

// Map of components to their new directories
const componentMap = {
  // Layout components
  'main-nav': 'layout',
  'sidebar': 'layout',
  'dashboard-shell': 'layout',
  'client-wrapper': 'layout',
  'theme-toggle': 'layout',
  'user-nav': 'layout',
  
  // Payroll components
  'payroll-list-card': 'payroll',
  'payroll-details-card': 'payroll',
  'payroll-dates-view': 'payroll',
  'upcoming-payrolls': 'payroll',
  'generate-missing-dates-button': 'payroll',
  'australian-tax-calculator': 'payroll',
  'payroll-schedule-view': 'payroll',
  'payroll-subscription': 'payroll',
  'payrolls-missing-dates': 'payroll',
  'regenerate-dates': 'payroll',
  
  // Client components
  'client-card': 'client',
  'client-payroll-table': 'client',
  'clients-table': 'client',
  
  // Dialog components
  'custom-dialog': 'dialogs',
  'edit-payroll-dialog': 'dialogs',
  'notes-modal': 'dialogs',
  'modal-form': 'dialogs',
  'confirm-dialog': 'dialogs',
  
  // Form components
  'user-role-management': 'forms',
  
  // Common components
  'notes-list': 'common',
  'notes-list-with-add': 'common',
  'add-note': 'common',
  'export-csv': 'common',
  'export-pdf': 'common',
  'mardown-viewer': 'common',
  'ai-chat': 'common',
  'hasura-test': 'common',
  'role-gates': 'common',
  'real-time-updates': 'common',
  'recent-activity': 'common',
  'refresh-button': 'common',
  'simple-test': 'common',
  'subscription-test': 'common',
  'test-subscription': 'common',
  'urgent-alerts': 'common',
};

// Directories to search in
const dirsToSearch = [
  'app',
  'components',
  'lib',
  'hooks',
  'utils',
  'pages'
];

// Extensions to process
const extensions = ['.ts', '.tsx', '.js', '.jsx'];

// Function to check if a file should be processed
const shouldProcessFile = (filePath) => {
  const ext = path.extname(filePath);
  return extensions.includes(ext);
};

// Function to update imports in a file
async function updateImportsInFile(filePath) {
  try {
    // Read file content
    const content = await readFile(filePath);
    
    // Check for component imports
    let updatedContent = content;
    let changed = false;
    
    for (const [component, category] of Object.entries(componentMap)) {
      // Pattern to match "@/components/component-name" or 'components/component-name'
      const importPattern = new RegExp(`(['"])@?\\/?components\\/${component}(['"])`, 'g');
      
      if (importPattern.test(updatedContent)) {
        updatedContent = updatedContent.replace(
          importPattern, 
          `$1@/components/${category}/${component}$2`
        );
        changed = true;
      }
    }
    
    // Only write file if changes were made
    if (changed) {
      await writeFile(filePath, updatedContent);
      console.log(`Updated imports in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
  }
}

// Recursively walk directories
async function walkDir(dir) {
  try {
    const entries = await readdir(dir);
    
    for (const entry of entries) {
      const entryPath = path.join(dir, entry.name);
      
      if (entry.isDirectory() && entry.name !== 'node_modules' && entry.name !== '.next') {
        await walkDir(entryPath);
      } else if (entry.isFile() && shouldProcessFile(entryPath)) {
        await updateImportsInFile(entryPath);
      }
    }
  } catch (error) {
    console.error(`Error walking directory ${dir}:`, error);
  }
}

// Main function
async function main() {
  console.log('Starting import updates...');
  
  for (const dir of dirsToSearch) {
    const dirPath = path.join(__dirname, dir);
    try {
      // Check if directory exists
      await stat(dirPath);
      console.log(`Scanning directory: ${dir}`);
      await walkDir(dirPath);
    } catch (error) {
      // Directory doesn't exist, skip
      console.log(`Directory ${dir} not found, skipping.`);
    }
  }
  
  console.log('Import updates complete!');
}

main().catch(console.error);