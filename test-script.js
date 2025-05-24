console.log('Starting script...');

const fs = require('fs');
const path = require('path');

// Check if UI components directory exists
const UI_COMPONENTS_DIR = path.join(__dirname, 'components', 'ui');
console.log(`Checking if directory exists: ${UI_COMPONENTS_DIR}`);

try {
  if (fs.existsSync(UI_COMPONENTS_DIR)) {
    console.log('Directory exists!');
    
    // List files in the directory
    const files = fs.readdirSync(UI_COMPONENTS_DIR);
    console.log(`Found ${files.length} files in the UI components directory`);
    
    // Display the first 5 files
    console.log('Sample files:');
    files.slice(0, 5).forEach(file => console.log(`- ${file}`));
    
    // Count PascalCase files
    const pascalCaseFiles = files.filter(file => {
      const baseName = path.basename(file, path.extname(file));
      return /^[A-Z]/.test(baseName) && !baseName.includes('-');
    });
    
    console.log(`Found ${pascalCaseFiles.length} PascalCase files that could be renamed`);
    if (pascalCaseFiles.length > 0) {
      console.log('Examples:');
      pascalCaseFiles.slice(0, 3).forEach(file => console.log(`- ${file}`));
    }
  } else {
    console.log('Directory does NOT exist!');
  }
} catch (error) {
  console.error('Error checking directory:', error.message);
}

console.log('Script completed.');
