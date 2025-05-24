// scripts/find-server-imports.js
// Find where server.ts is being imported (ES Module version)

import fs from 'fs';
import path from 'path';

function getAllFiles(dirPath, arrayOfFiles = []) {
  try {
    const files = fs.readdirSync(dirPath);

    files.forEach(file => {
      const fullPath = path.join(dirPath, file);
      
      if (fs.statSync(fullPath).isDirectory()) {
        if (!['node_modules', '.next', 'dist', '.git'].includes(file)) {
          arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
        }
      } else {
        if (/\.(ts|tsx|js|jsx)$/.test(file)) {
          arrayOfFiles.push(fullPath);
        }
      }
    });
  } catch (error) {
    // Skip directories we can't read
  }

  return arrayOfFiles;
}

function findServerImports(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    const matches = [];
    
    lines.forEach((line, index) => {
      // Look for imports of server.ts or server-only modules
      if (line.includes('@/lib/api/server') || 
          line.includes('./server') || 
          line.includes('../server') ||
          line.includes('lib/api/server') ||
          line.includes('auth.server') ||
          line.includes('apollo-client.server') ||
          line.includes('auth-guard.server')) {
        matches.push({
          line: index + 1,
          content: line.trim()
        });
      }
    });
    
    return matches;
  } catch (error) {
    return [];
  }
}

console.log('🔍 Searching for server-only imports...\n');

const dirs = ['app', 'components', 'lib', 'pages', 'src'];
let foundIssues = false;

dirs.forEach(dir => {
  if (fs.existsSync(dir)) {
    console.log(`📂 Scanning ${dir}/...`);
    const files = getAllFiles(dir);
    
    files.forEach(file => {
      const matches = findServerImports(file);
      if (matches.length > 0) {
        foundIssues = true;
        console.log(`\n❌ Found server imports in: ${file}`);
        matches.forEach(match => {
          console.log(`   Line ${match.line}: ${match.content}`);
        });
      }
    });
  }
});

if (!foundIssues) {
  console.log('\n✅ No problematic server imports found.');
} else {
  console.log('\n📋 Action needed:');
  console.log('1. Remove server-only imports from client components');
  console.log('2. Use client-safe alternatives from @/lib/api/client');
  console.log('3. Move server logic to API routes or Server Components');
}