// scripts/fix-server-imports.js
// Fix common server import issues (ES Module version)

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

function fixServerImports(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let updatedContent = content;
    let hasChanges = false;
    
    // Common problematic patterns and their fixes
    const fixes = [
      // Fix server.ts imports in client components
      {
        pattern: /import\s+{[^}]*}\s+from\s+['"]@\/lib\/api\/server['"]/g,
        replacement: "// Removed server-only import - use @/lib/api/client instead"
      },
      {
        pattern: /import\s+\*\s+as\s+\w+\s+from\s+['"]@\/lib\/api\/server['"]/g,
        replacement: "// Removed server-only import - use @/lib/api/client instead"
      },
      // Fix direct server module imports
      {
        pattern: /import\s+{[^}]*}\s+from\s+['"]@\/lib\/auth\/auth\.server['"]/g,
        replacement: "// Removed server-only auth import - use client auth methods"
      },
      {
        pattern: /import\s+{[^}]*}\s+from\s+['"]@\/lib\/api\/apollo-client\.server['"]/g,
        replacement: "// Removed server-only Apollo client - use @/lib/api/apollo-client.client"
      },
      {
        pattern: /import\s+{[^}]*}\s+from\s+['"]@\/lib\/api\/auth-guard\.server['"]/g,
        replacement: "// Removed server-only auth guard - implement client-side auth checks"
      }
    ];
    
    fixes.forEach(fix => {
      if (fix.pattern.test(updatedContent)) {
        updatedContent = updatedContent.replace(fix.pattern, fix.replacement);
        hasChanges = true;
      }
    });
    
    // Also check for export * from server
    const exportServerPattern = /export\s+\*\s+from\s+['"][^'"]*server['"]/g;
    if (exportServerPattern.test(updatedContent)) {
      updatedContent = updatedContent.replace(exportServerPattern, "// Removed server-only export");
      hasChanges = true;
    }
    
    if (hasChanges) {
      fs.writeFileSync(filePath, updatedContent, 'utf8');
      console.log(`✅ Fixed server imports in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

function isClientComponent(filePath) {
  // Check if this is likely a client component
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    return content.includes('"use client"') || 
           content.includes("'use client'") ||
           filePath.includes('/components/') ||
           filePath.includes('/hooks/') ||
           filePath.endsWith('.client.ts') ||
           filePath.endsWith('.client.tsx');
  } catch (error) {
    return false;
  }
}

console.log('🚀 Fixing server import issues...\n');

const dirs = ['app', 'components', 'lib', 'pages', 'src'];
let totalFixed = 0;

dirs.forEach(dir => {
  if (fs.existsSync(dir)) {
    console.log(`📂 Processing ${dir}/...`);
    const files = getAllFiles(dir);
    
    files.forEach(file => {
      // Only fix client components and pages
      if (isClientComponent(file) || file.includes('/pages/')) {
        if (fixServerImports(file)) {
          totalFixed++;
        }
      }
    });
  }
});

console.log(`\n✨ Fixed ${totalFixed} files`);

if (totalFixed > 0) {
  console.log('\n📝 Next steps:');
  console.log('1. Review the commented-out imports');
  console.log('2. Replace with client-safe alternatives:');
  console.log('   - Use @/lib/api/client for Apollo Client');
  console.log('   - Use @/lib/auth for client auth utilities');
  console.log('   - Move server logic to API routes');
  console.log('3. Run: pnpm build');
}