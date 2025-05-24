const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Log the current directory to help with debugging
console.log('Current directory:', process.cwd());

const GRAPHQL_DIR = path.resolve(process.cwd(), 'lib/graphql');
const FRAGMENTS_DIR = path.resolve(GRAPHQL_DIR, 'fragments');

console.log('Looking for GraphQL files in:', GRAPHQL_DIR);
console.log('Looking for fragments in:', FRAGMENTS_DIR);

// Check if directories exist
if (!fs.existsSync(GRAPHQL_DIR)) {
  console.error(`GraphQL directory not found: ${GRAPHQL_DIR}`);
  process.exit(1);
}

if (!fs.existsSync(FRAGMENTS_DIR)) {
  console.error(`Fragments directory not found: ${FRAGMENTS_DIR}`);
  process.exit(1);
}

// Get all fragment files
const fragmentFiles = glob.sync(`${FRAGMENTS_DIR}/*.ts`);
console.log(`Found ${fragmentFiles.length} fragment files`);

const fragmentNames = fragmentFiles.map(file => {
  const content = fs.readFileSync(file, 'utf8');
  const matches = content.match(/fragment\s+(\w+)\s+on/g);
  return matches ? matches.map(m => m.split(/\s+/)[1]) : [];
}).flat();

console.log(`Found ${fragmentNames.length} fragment names:`, fragmentNames);

// Check all query and mutation files
const graphqlFiles = [
  ...glob.sync(`${GRAPHQL_DIR}/queries/**/*.ts`),
  ...glob.sync(`${GRAPHQL_DIR}/mutations/**/*.ts`),
];

console.log(`Found ${graphqlFiles.length} GraphQL query/mutation files`);

let inconsistencies = 0;

graphqlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  
  // Check if file contains gql tag
  if (content.includes('gql`')) {
    // Check if file imports fragments correctly
    const hasFragmentImport = /import.*from\s+['"]\.\.\/\.\.\/fragments\//.test(content);
    
    if (!hasFragmentImport) {
      console.warn(`File ${file} uses gql but does not import fragments correctly`);
      inconsistencies++;
    }
    
    // Check if file uses fragments
    const hasFragmentUsage = fragmentNames.some(name => {
      return content.includes(`...${name}`);
    });
    
    if (!hasFragmentUsage && !file.includes('Fragment.ts')) {
      console.warn(`File ${file} uses gql but does not include any fragments`);
      inconsistencies++;
    }
    
    // Check if fragments are included in query
    if (hasFragmentUsage) {
      const hasFragmentInclude = /\$\{[A-Z_]+_FRAGMENT\}/.test(content);
      if (!hasFragmentInclude) {
        console.warn(`File ${file} uses fragments but does not include them in the query`);
        inconsistencies++;
      }
    }
  }
});

if (inconsistencies === 0) {
  console.log('✅ All GraphQL files use fragments correctly');
} else {
  console.error(`❌ Found ${inconsistencies} inconsistencies in GraphQL fragment usage`);
  process.exit(1);
}