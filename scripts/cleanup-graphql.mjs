import fs from 'fs';
import path from 'path';
import { globSync } from 'glob';

// Get current directory
const baseDir = process.cwd();

// Function to ensure directory exists
function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`Created directory: ${dirPath}`);
  }
}

// Find all GraphQL files
const graphqlFiles = globSync('lib/graphql/**/*.graphql', { cwd: baseDir });
console.log(`Found ${graphqlFiles.length} GraphQL files to process`);

// Track fragments in use and defined
const fragmentsInUse = new Set();
const definedFragments = new Set();

// First pass: collect all defined fragments
graphqlFiles.forEach(filePath => {
  if (filePath.includes('/fragments/')) {
    const content = fs.readFileSync(path.join(baseDir, filePath), 'utf-8');
    const fragmentMatch = content.match(/fragment\s+(\w+)\s+on/);
    if (fragmentMatch) {
      definedFragments.add(fragmentMatch[1]);
      console.log(`Found defined fragment: ${fragmentMatch[1]} in ${filePath}`);
    }
  }
});

// Second pass: fix files and collect used fragments
graphqlFiles.forEach(filePath => {
  const fullPath = path.join(baseDir, filePath);
  let content = fs.readFileSync(fullPath, 'utf-8');
  let modified = false;
  
  // Remove template literals
  if (content.includes('${')) {
    const templateLiteralRegex = /\s*\$\{(\w+)FragmentFragmentDoc\}/g;
    content = content.replace(templateLiteralRegex, '');
    modified = true;
    console.log(`Removed template literals from ${filePath}`);
  }
  
  // Find all fragment spreads
  const fragmentSpreadRegex = /\.\.\.(\w+)/g;
  const usedFragments = new Set();
  let spreadMatch;
  
  while ((spreadMatch = fragmentSpreadRegex.exec(content)) !== null) {
    const fragmentName = spreadMatch[1];
    usedFragments.add(fragmentName);
    fragmentsInUse.add(fragmentName);
  }
  
  // Fix imports
  if (usedFragments.size > 0) {
    // Remove existing imports
    content = content.replace(/^#\s*import.*$/gm, '');
    
    // Add new imports
    let imports = '';
    usedFragments.forEach(fragment => {
      imports += `# import "../fragments/${fragment}.graphql"\n`;
    });
    
    // Add imports at the top
    if (imports) {
      imports += '\n';
      content = imports + content.trim();
      modified = true;
    }
    
    console.log(`Added ${usedFragments.size} imports to ${filePath}`);
  }
  
  // Write back if modified
  if (modified) {
    fs.writeFileSync(fullPath, content);
    console.log(`Updated file: ${filePath}`);
  }
});

// Check for missing fragments
console.log("\nChecking for missing fragments...");
const missingFragments = [...fragmentsInUse].filter(fragment => !definedFragments.has(fragment));

if (missingFragments.length > 0) {
  console.log(`Found ${missingFragments.length} missing fragments:`);
  missingFragments.forEach(fragment => {
    console.log(`  - ${fragment}`);
  });
  
  // Create placeholder fragments for missing ones
  const createPlaceholders = true; // Set to false if you don't want placeholders
  
  if (createPlaceholders) {
    const fragmentsDir = path.join(baseDir, 'lib/graphql/fragments');
    ensureDirectoryExists(fragmentsDir);
    
    missingFragments.forEach(fragment => {
      const filePath = path.join(fragmentsDir, `${fragment}.graphql`);
      
      // Check if file exists before creating
      if (!fs.existsSync(filePath)) {
        // Create a placeholder fragment
        const placeholderContent = `fragment ${fragment} on PLACEHOLDER {\n  # Add fields here\n  id\n}\n`;
        fs.writeFileSync(filePath, placeholderContent);
        console.log(`Created placeholder for ${fragment} at ${filePath}`);
      }
    });
  }
} else {
  console.log("All fragments are defined! ✅");
}

console.log('All files processed successfully!');