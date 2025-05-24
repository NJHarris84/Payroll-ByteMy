#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';
import { pathToFileURL } from 'url';

console.log('🔍 GraphQL Index Files Checker Starting...');

class GraphQLChecker {
  constructor(options = {}) {
    this.rootDir = options.rootDir || process.cwd();
    this.extensions = ['.ts', '.tsx', '.js', '.jsx', '.graphql', '.gql'];
    this.missingFiles = [];
    this.foundFiles = [];
    this.indexFiles = [];
  }

  // Find all index files that might contain GraphQL exports
  async findIndexFiles() {
    console.log('\n🔍 Step 1: Finding index files...');
    
    const indexPattern = path.join(this.rootDir, '**/index.{ts,tsx,js,jsx}');
    const indexFiles = await glob(indexPattern);
    
    // Filter to only GraphQL-related index files
    for (const indexFile of indexFiles) {
      const content = fs.readFileSync(indexFile, 'utf8');
      
      // Check if this index file contains GraphQL-related exports
      if (this.containsGraphQLExports(content)) {
        this.indexFiles.push(indexFile);
        const relativePath = path.relative(this.rootDir, indexFile);
        console.log(`  ✅ Found GraphQL index: ${relativePath}`);
      }
    }
    
    console.log(`\n📊 Found ${this.indexFiles.length} GraphQL index files`);
    return this.indexFiles;
  }

  // Check if file contains GraphQL-related exports
  containsGraphQLExports(content) {
    const graphqlKeywords = [
      'query', 'mutation', 'subscription', 'graphql', 'gql',
      'Query', 'Mutation', 'Subscription', 'GraphQL', 'GQL'
    ];
    
    const lines = content.toLowerCase();
    return graphqlKeywords.some(keyword => lines.includes(keyword)) ||
           content.includes('export') && (
             content.includes('/queries/') ||
             content.includes('/mutations/') ||
             content.includes('/subscriptions/') ||
             content.includes('/graphql/')
           );
  }

  // Parse export statements and check if referenced files exist
  checkIndexFile(indexFilePath) {
    console.log(`\n🔍 Checking: ${path.relative(this.rootDir, indexFilePath)}`);
    
    const content = fs.readFileSync(indexFilePath, 'utf8');
    const indexDir = path.dirname(indexFilePath);
    const exports = this.parseExports(content);
    
    const results = {
      file: indexFilePath,
      missing: [],
      found: [],
      total: exports.length
    };

    for (const exportInfo of exports) {
      const result = this.checkExportExists(exportInfo, indexDir);
      
      if (result.exists) {
        results.found.push(result);
        console.log(`  ✅ ${exportInfo.path} → ${result.resolvedPath}`);
      } else {
        results.missing.push(result);
        console.log(`  ❌ ${exportInfo.path} (missing)`);
        
        // Show what we tried to find
        console.log(`     Tried: ${result.attemptedPaths.join(', ')}`);
      }
    }

    return results;
  }

  // Parse export statements from index file
  parseExports(content) {
    const exports = [];
    const lines = content.split('\n');
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      const lineNumber = i + 1;
      
      // Handle: export * from './path'
      const starExportMatch = line.match(/export\s*\*\s*from\s*['"`]([^'"`]+)['"`]/);
      if (starExportMatch) {
        exports.push({
          type: 'star',
          path: starExportMatch[1],
          line: lineNumber,
          raw: line
        });
      }
      
      // Handle: export { something } from './path'
      const namedExportMatch = line.match(/export\s*{\s*([^}]+)\s*}\s*from\s*['"`]([^'"`]+)['"`]/);
      if (namedExportMatch) {
        exports.push({
          type: 'named',
          names: namedExportMatch[1].split(',').map(n => n.trim()),
          path: namedExportMatch[2],
          line: lineNumber,
          raw: line
        });
      }
      
      // Handle: export { default as Something } from './path'
      const defaultAsMatch = line.match(/export\s*{\s*default\s+as\s+(\w+)\s*}\s*from\s*['"`]([^'"`]+)['"`]/);
      if (defaultAsMatch) {
        exports.push({
          type: 'default-as',
          name: defaultAsMatch[1],
          path: defaultAsMatch[2],
          line: lineNumber,
          raw: line
        });
      }
    }
    
    return exports;
  }

  // Check if the exported file actually exists
  checkExportExists(exportInfo, indexDir) {
    const relativePath = exportInfo.path;
    const attemptedPaths = [];
    
    // Try different file extensions
    for (const ext of this.extensions) {
      const fullPath = path.resolve(indexDir, relativePath + ext);
      attemptedPaths.push(fullPath);
      
      if (fs.existsSync(fullPath)) {
        return {
          exists: true,
          exportInfo,
          resolvedPath: path.relative(this.rootDir, fullPath),
          attemptedPaths
        };
      }
    }
    
    // Also try without extension (in case it's already included)
    const directPath = path.resolve(indexDir, relativePath);
    attemptedPaths.push(directPath);
    
    if (fs.existsSync(directPath)) {
      return {
        exists: true,
        exportInfo,
        resolvedPath: path.relative(this.rootDir, directPath),
        attemptedPaths
      };
    }

    return {
      exists: false,
      exportInfo,
      resolvedPath: null,
      attemptedPaths: attemptedPaths.map(p => path.relative(this.rootDir, p))
    };
  }

  // Find all GraphQL files in the project
  async findAllGraphQLFiles() {
    console.log('\n🔍 Finding all GraphQL files in project...');
    
    const patterns = [
      path.join(this.rootDir, '**/*.{graphql,gql}'),
      path.join(this.rootDir, '**/queries/**/*.{ts,tsx,js,jsx}'),
      path.join(this.rootDir, '**/mutations/**/*.{ts,tsx,js,jsx}'),
      path.join(this.rootDir, '**/subscriptions/**/*.{ts,tsx,js,jsx}'),
      path.join(this.rootDir, '**/graphql/**/*.{ts,tsx,js,jsx}')
    ];
    
    let allFiles = [];
    for (const pattern of patterns) {
      const files = await glob(pattern);
      allFiles.push(...files);
    }
    
    // Remove duplicates and filter out index files
    allFiles = [...new Set(allFiles)];
    allFiles = allFiles.filter(file => !file.endsWith('/index.ts') && !file.endsWith('/index.js'));
    
    console.log(`📊 Found ${allFiles.length} GraphQL-related files`);
    
    // Group by directory
    const byDirectory = {};
    for (const file of allFiles) {
      const dir = path.dirname(file);
      const relativePath = path.relative(this.rootDir, file);
      
      if (!byDirectory[dir]) {
        byDirectory[dir] = [];
      }
      byDirectory[dir].push(relativePath);
    }
    
    // Show grouped results
    for (const [dir, files] of Object.entries(byDirectory)) {
      const relativeDir = path.relative(this.rootDir, dir);
      console.log(`\n  📁 ${relativeDir}:`);
      files.forEach(file => {
        console.log(`     ${path.basename(file)}`);
      });
    }
    
    return allFiles;
  }

  // Generate suggestions for missing files
  generateSuggestions(missingResults, allGraphQLFiles) {
    console.log('\n💡 Suggestions for missing files:');
    
    for (const missing of missingResults) {
      const missingFileName = path.basename(missing.exportInfo.path);
      console.log(`\n❌ Missing: ${missing.exportInfo.path}`);
      
      // Find similar files
      const similarFiles = allGraphQLFiles.filter(file => {
        const fileName = path.basename(file, path.extname(file));
        return fileName.toLowerCase().includes(missingFileName.toLowerCase()) ||
               missingFileName.toLowerCase().includes(fileName.toLowerCase());
      });
      
      if (similarFiles.length > 0) {
        console.log('   🔍 Similar files found:');
        similarFiles.forEach(file => {
          const relativePath = path.relative(this.rootDir, file);
          console.log(`     - ${relativePath}`);
        });
      } else {
        console.log('   ❓ No similar files found - you may need to create this file');
      }
    }
  }

  // Main execution
  async run() {
    try {
      // Step 1: Find all index files
      await this.findIndexFiles();
      
      if (this.indexFiles.length === 0) {
        console.log('❌ No GraphQL index files found.');
        return;
      }
      
      // Step 2: Check each index file
      console.log('\n🔍 Step 2: Checking exports in index files...');
      
      let totalMissing = 0;
      let totalFound = 0;
      const allMissingResults = [];
      
      for (const indexFile of this.indexFiles) {
        const result = this.checkIndexFile(indexFile);
        totalMissing += result.missing.length;
        totalFound += result.found.length;
        allMissingResults.push(...result.missing);
      }
      
      // Step 3: Find all actual GraphQL files
      const allGraphQLFiles = await glob(path.join(this.rootDir, '**/*.{ts,tsx,js,jsx,graphql,gql}'));
      
      // Step 4: Generate suggestions
      if (allMissingResults.length > 0) {
        this.generateSuggestions(allMissingResults, allGraphQLFiles);
      }
      
      // Summary
      console.log(`\n📊 Summary:`);
      console.log(`   ✅ Found exports: ${totalFound}`);
      console.log(`   ❌ Missing exports: ${totalMissing}`);
      console.log(`   📁 Index files checked: ${this.indexFiles.length}`);
      
      if (totalMissing > 0) {
        console.log(`\n⚠️  You have ${totalMissing} missing GraphQL files that need to be created or fixed.`);
      } else {
        console.log(`\n🎉 All GraphQL exports are properly resolved!`);
      }
      
    } catch (error) {
      console.error('❌ Error:', error.message);
      console.error(error.stack);
    }
  }
}

// CLI interface
const isMainModule = import.meta.url === pathToFileURL(process.argv[1]).href;

if (isMainModule) {
  const args = process.argv.slice(2);
  const options = {
    rootDir: process.cwd()
  };
  
  const rootDirIndex = args.indexOf('--root');
  if (rootDirIndex !== -1 && args[rootDirIndex + 1]) {
    options.rootDir = path.resolve(args[rootDirIndex + 1]);
  }
  
  const checker = new GraphQLChecker(options);
  checker.run().catch(console.error);
}

export default GraphQLChecker;