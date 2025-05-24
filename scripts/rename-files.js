// scripts/rename-files.js
// Cross-platform Node.js script to rename files

const fs = require('fs');
const path = require('path');

const renames = [
  {
    from: 'lib/auth/auth.ts',
    to: 'lib/auth/auth.server.ts'
  },
  {
    from: 'lib/api/apollo-client.ts', 
    to: 'lib/api/apollo-client.client.ts'
  },
  {
    from: 'lib/api/auth-guard.ts',
    to: 'lib/api/auth-guard.server.ts'
  },
  {
    from: 'lib/api/error-boundary.tsx',
    to: 'lib/api/error-boundary.client.tsx'
  },
  {
    from: 'lib/api/optimistic-updates.ts',
    to: 'lib/api/optimistic-updates.client.ts'
  }
];

console.log('🔄 Starting file renaming process...\n');

renames.forEach(({ from, to }) => {
  try {
    if (fs.existsSync(from)) {
      fs.renameSync(from, to);
      console.log(`✅ Renamed: ${from} → ${to}`);
    } else {
      console.log(`⚠️  File not found: ${from}`);
    }
  } catch (error) {
    console.error(`❌ Error renaming ${from}:`, error.message);
  }
});

console.log('\n🎉 File renaming process complete!');
console.log('\n📝 Next steps:');
console.log('1. Update import statements in your barrel export files');
console.log('2. Update any direct imports in your components/pages');
console.log('3. Run your build to check for any broken imports');
console.log('4. Update your IDE/editor if it has cached the old file names');