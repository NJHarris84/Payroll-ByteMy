// save as fix-graphql-files.mjs
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { globSync } from 'glob';

// Get current directory
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const baseDir = process.cwd();

// Get all GraphQL files
const graphqlFiles = globSync('lib/graphql/**/*.graphql', { cwd: baseDir });

console.log(`Found ${graphqlFiles.length} GraphQL files to process`);

// Process each file
graphqlFiles.forEach(filePath => {
  const fullPath = path.join(baseDir, filePath);
  let content = fs.readFileSync(fullPath, 'utf-8');
  
  // Check if file contains template literals
  if (content.includes('${')) {
    console.log(`Fixing file: ${filePath}`);
    
    // Find all fragment references
    const fragmentRegex = /\$\{(\w+)FragmentFragmentDoc\}/g;
    const fragments = new Set();
    let match;
    
    while ((match = fragmentRegex.exec(content)) !== null) {
      fragments.add(match[1]);
    }
    
    // Remove template literals
    content = content.replace(/\s*\$\{\w+FragmentFragmentDoc\}/g, '');
    
    // Add import statements at the top
    let imports = '';
    fragments.forEach(fragment => {
      imports += `# import "../fragments/${fragment}Fragment.graphql"\n`;
    });
    
    if (imports) {
      imports += '\n';
      content = imports + content;
    }
    
    // Write the fixed content back
    fs.writeFileSync(fullPath, content);
    console.log(`  Fixed: added ${fragments.size} imports and removed template literals`);
  }
});

console.log('All files processed!');