import fs from 'fs';
import path from 'path';
import process from 'process';

// Function to ensure directory exists
function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`Created directory: ${dirPath}`);
  }
}

// Function to extract and process GraphQL fragments
function extractFragments(content) {
  const fragments = {};
  const fragmentRegex = /export const (\w+)FragmentFragmentDoc = gql`([^`]+)`/g;
  let match;
  
  while ((match = fragmentRegex.exec(content)) !== null) {
    const fragmentName = match[1];
    const fragmentContent = match[2].trim();
    
    if (fragmentContent.startsWith('fragment')) {
      fragments[fragmentName] = fragmentContent;
    }
  }
  
  return fragments;
}

// Function to extract queries and mutations
function extractOperations(content, fragments) {
  const operations = [];
  const operationRegex = /export const (\w+)Document = gql`([^`]+)`/g;
  let match;
  
  while ((match = operationRegex.exec(content)) !== null) {
    const operationName = match[1];
    const operationContent = match[2].trim();
    const usedFragments = [];
    
    // Find fragment references
    const fragmentRefRegex = /\.\.\.(\w+)Fragment/g;
    let fragmentMatch;
    while ((fragmentMatch = fragmentRefRegex.exec(operationContent)) !== null) {
      const fragmentName = fragmentMatch[1];
      if (fragments[fragmentName]) {
        usedFragments.push(fragmentName);
      }
    }
    
    operations.push({
      name: operationName,
      content: operationContent,
      fragments: usedFragments,
      type: operationContent.startsWith('query') ? 'queries' : 
            operationContent.startsWith('mutation') ? 'mutations' : 'unknown'
    });
  }
  
  return operations;
}

// Main function to process and save GraphQL files
async function processGraphQLFiles() {
  try {
    // Get current directory
    const currentDir = process.cwd();
    console.log(`Working in directory: ${currentDir}`);
    
    // Read apollo-helpers.ts
    const apolloHelpersPath = path.join(currentDir, 'apollo-helpers.ts');
    if (!fs.existsSync(apolloHelpersPath)) {
      console.error(`Error: apollo-helpers.ts not found at ${apolloHelpersPath}`);
      return;
    }
    
    const content = fs.readFileSync(apolloHelpersPath, 'utf-8');
    console.log('Successfully read apollo-helpers.ts');
    
    // Create directory structure
    const graphqlDir = path.join(currentDir, 'lib', 'graphql');
    const fragmentsDir = path.join(graphqlDir, 'fragments');
    const queriesDir = path.join(graphqlDir, 'queries');
    const mutationsDir = path.join(graphqlDir, 'mutations');
    
    ensureDirectoryExists(graphqlDir);
    ensureDirectoryExists(fragmentsDir);
    ensureDirectoryExists(queriesDir);
    ensureDirectoryExists(mutationsDir);
    
    // Extract fragments and operations
    const fragments = extractFragments(content);
    const operations = extractOperations(content, fragments);
    
    console.log(`Found ${Object.keys(fragments).length} fragments and ${operations.length} operations`);
    
    // Save fragments
    let fragmentCount = 0;
    for (const [name, fragmentContent] of Object.entries(fragments)) {
      const filePath = path.join(fragmentsDir, `${name}Fragment.graphql`);
      fs.writeFileSync(filePath, fragmentContent);
      fragmentCount++;
      console.log(`Created fragment file: ${filePath}`);
    }
    
    // Save operations
    let operationCount = 0;
    for (const operation of operations) {
      if (operation.type === 'unknown') continue;
      
      const targetDir = operation.type === 'queries' ? queriesDir : mutationsDir;
      const filePath = path.join(targetDir, `${operation.name}.graphql`);
      
      // Create operation file with import statements
      let fileContent = '';
      
      // Add import statements for fragments
      if (operation.fragments.length > 0) {
        for (const fragmentName of operation.fragments) {
          fileContent += `#import "../fragments/${fragmentName}Fragment.graphql"\n`;
        }
        fileContent += '\n';
      }
      
      // Add operation content
      fileContent += operation.content;
      
      fs.writeFileSync(filePath, fileContent);
      operationCount++;
      console.log(`Created operation file: ${filePath}`);
    }
    
    console.log(`Successfully created ${fragmentCount} fragment files and ${operationCount} operation files.`);
  } catch (error) {
    console.error('Error during processing:', error);
    console.error(error.stack);
  }
}

// Run the main function
processGraphQLFiles();