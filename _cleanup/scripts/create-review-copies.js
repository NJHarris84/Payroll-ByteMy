import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Review folder where all copies will be placed
const REVIEW_FOLDER = 'review-copies';

// Get the directory name in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to create a copy of a file in the review folder
async function createReviewCopy(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`File not found: ${filePath}`);
      return;
    }
    
    // Create the path for the new file inside the review folder
    // while preserving the original directory structure
    const relativePath = filePath;
    const newPath = path.join(REVIEW_FOLDER, relativePath);
    
    // Create directories if they don't exist
    fs.mkdirSync(path.dirname(newPath), { recursive: true });
    
    // Copy the file
    fs.copyFileSync(filePath, newPath);
    console.log(`Created review copy: ${newPath}`);
  } catch (error) {
    console.error(`Error copying ${filePath}: ${error.message}`);
  }
}

// Function to recursively find all files in a directory
function findFilesInDir(startPath) {
  try {
    if (!fs.existsSync(startPath)) {
      console.log(`Directory not found: ${startPath}`);
      return [];
    }

    let results = [];
    const files = fs.readdirSync(startPath);
    
    for (let file of files) {
      const filename = path.join(startPath, file);
      const stats = fs.statSync(filename);
      
      if (stats.isDirectory()) {
        const subDirFiles = findFilesInDir(filename);
        results = results.concat(subDirFiles);
      } else {
        results.push(filename);
      }
    }
    
    return results;
  } catch (error) {
    console.error(`Error reading directory ${startPath}: ${error.message}`);
    return [];
  }
}

// Process files in a directory
async function processDirectory(dirPath) {
  console.log(`Processing directory: ${dirPath}`);
  try {
    if (!fs.existsSync(dirPath)) {
      console.log(`Directory not found: ${dirPath}`);
      return;
    }
    
    const files = findFilesInDir(dirPath);
    for (const file of files) {
      await createReviewCopy(file);
    }
  } catch (error) {
    console.error(`Error processing directory ${dirPath}: ${error.message}`);
  }
}

// Main function
async function createReviewCopies() {
  console.log('Creating review copies of files...');
  
  // Create review folder if it doesn't exist
  try {
    fs.mkdirSync(REVIEW_FOLDER, { recursive: true });
    console.log(`Created review folder: ${REVIEW_FOLDER}`);
  } catch (error) {
    console.error(`Error creating review folder: ${error.message}`);
    return;
  }
  
  // Configuration and Setup Files
  const configFiles = [
    'tsconfig.json',
    'next.config.js',
    '.eslintrc.js',
    'eslint.config.mjs',
    'tailwind.config.ts',
    'package.json',
    'jest.config.js',
    'jest.setup.js',
    'components.json',
    'vercel.json'
  ];
  
  // Core Logic and Utilities
  const coreFiles = [
    'app/providers.tsx',
    'components/providers/root-providers.tsx',
    'components/providers/theme-provider.tsx',
    'components/providers/client-theme-provider.tsx',
    'lib/utils/utils.ts',
    'lib/utils/error-handling.tsx',
    'lib/auth/token-manager.ts',
    'lib/auth/token-manager.client.ts',
    'lib/auth/token-manager.server.ts',
    'lib/auth/roles.ts'
  ];
  
  // Process individual files
  for (const file of [...configFiles, ...coreFiles]) {
    if (fs.existsSync(file)) {
      await createReviewCopy(file);
    } else {
      console.log(`File not found: ${file}`);
    }
  }
  
  // Process directories
  const directories = [
    'lib/api',
    'components/ui',
    'components/common',
    'components/forms',
    'components/dialogs',
    'lib/graphql/fragments',
    'lib/graphql/queries',
    'lib/graphql/mutations',
    'app/api'
  ];
  
  for (const dir of directories) {
    await processDirectory(dir);
  }
  
  console.log(`Review copies have been created in the '${REVIEW_FOLDER}' directory.`);
}

// Run the main function
createReviewCopies().catch(error => {
  console.error('An error occurred:', error);
});