#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';
import { fileURLToPath } from 'url';
import { pathToFileURL } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class BarrelImportUpdater {
  constructor(options = {}) {
    this.rootDir = options.rootDir || process.cwd();
    this.srcDir = options.srcDir || this.detectSourceDirectory();
    this.extensions = options.extensions || ['.js', '.jsx', '.ts', '.tsx'];
    this.barrelFiles = new Map(); // Map of directory -> barrel file info
    this.dryRun = options.dryRun || false;
    
    console.log(`🔍 Starting barrel file import updater...`);
    console.log(`📁 Root directory: ${this.rootDir}`);
    console.log(`📂 Source directory: ${this.srcDir}`);
    console.log(`📂 Full source path: ${path.join(this.rootDir, this.srcDir)}`);
    console.log(`🔧 Dry run mode: ${this.dryRun ? 'ON' : 'OFF'}`);
    
    // Check if source directory exists
    const srcPath = path.join(this.rootDir, this.srcDir);
    if (!fs.existsSync(srcPath)) {
      console.log(`⚠️  Source directory does not exist: ${srcPath}`);
      console.log(`📂 Available directories:`);
      try {
        const items = fs.readdirSync(this.rootDir, { withFileTypes: true });
        items.filter(item => item.isDirectory()).forEach(dir => {
          console.log(`   - ${dir.name}/`);
        });
      } catch (err) {
        console.log(`   Could not read root directory: ${err.message}`);
      }
    }
  }

  // Auto-detect common source directory structures
  detectSourceDirectory() {
    const commonDirs = ['src', 'app', 'components', 'lib', 'pages'];
    
    for (const dir of commonDirs) {
      const dirPath = path.join(this.rootDir, dir);
      if (fs.existsSync(dirPath)) {
        console.log(`📂 Auto-detected source directory: ${dir}`);
        return dir;
      }
    }
    
    console.log(`📂 No common source directory found, defaulting to 'src'`);
    return 'src';
  }

  // Find all barrel files (index.js, index.ts, etc.)
  async findBarrelFiles() {
    console.log('\n🔍 Step 1: Finding barrel files...');
    
    // Search in multiple common directories, not just the main source dir
    const searchDirs = [this.srcDir, 'app', 'components', 'lib', 'src', 'pages'].filter(Boolean);
    const uniqueDirs = [...new Set(searchDirs)]; // Remove duplicates
    
    let allBarrelFiles = [];
    
    for (const searchDir of uniqueDirs) {
      const dirPath = path.join(this.rootDir, searchDir);
      if (fs.existsSync(dirPath)) {
        const barrelPattern = path.join(this.rootDir, searchDir, '**/index.{js,jsx,ts,tsx}');
        console.log(`🔍 Searching in ${searchDir}: ${barrelPattern}`);
        
        const dirBarrelFiles = await glob(barrelPattern);
        allBarrelFiles.push(...dirBarrelFiles);
        console.log(`   Found ${dirBarrelFiles.length} barrel files in ${searchDir}`);
      }
    }
    
    console.log(`📄 Total barrel files found: ${allBarrelFiles.length}`);
    
    for (const barrelFile of allBarrelFiles) {
      const dir = path.dirname(barrelFile);
      const relativePath = path.relative(this.rootDir, dir);
      
      // Read the barrel file to understand what it exports
      const content = fs.readFileSync(barrelFile, 'utf8');
      const exports = this.parseExports(content, dir);
      
      console.log(`📄 Checking: ${relativePath}/index.*`);
      
      if (exports.length > 0) {
        this.barrelFiles.set(relativePath, {
          filePath: barrelFile,
          relativePath,
          exports,
          content
        });
        
        console.log(`  ✅ Found barrel: ${relativePath}`);
        console.log(`     Exports: ${exports.map(e => e.name).join(', ')}`);
      } else {
        console.log(`  ⚠️  Empty barrel (no exports): ${relativePath}`);
      }
    }
    
    console.log(`\n📊 Found ${this.barrelFiles.size} barrel files`);
    return this.barrelFiles;
  }

  // Parse export statements from barrel files
  parseExports(content, barrelDir) {
    const exports = [];
    const lines = content.split('\n');
    
    for (const line of lines) {
      const trimmed = line.trim();
      
      // Handle: export { something } from './path'
      const namedExportMatch = trimmed.match(/export\s*{\s*([^}]+)\s*}\s*from\s*['"`]([^'"`]+)['"`]/);
      if (namedExportMatch) {
        const names = namedExportMatch[1].split(',').map(n => n.trim().split(' as ')[0].trim());
        const fromPath = namedExportMatch[2];
        const fullPath = path.resolve(barrelDir, fromPath);
        
        names.forEach(name => {
          exports.push({
            name,
            type: 'named',
            originalPath: this.resolveImportPath(fullPath)
          });
        });
      }
      
      // Handle: export * from './path'
      const starExportMatch = trimmed.match(/export\s*\*\s*from\s*['"`]([^'"`]+)['"`]/);
      if (starExportMatch) {
        const fromPath = starExportMatch[1];
        const fullPath = path.resolve(barrelDir, fromPath);
        
        exports.push({
          name: '*',
          type: 'star',
          originalPath: this.resolveImportPath(fullPath)
        });
      }
      
      // Handle: export { default as Something } from './path'
      const defaultAsMatch = trimmed.match(/export\s*{\s*default\s+as\s+(\w+)\s*}\s*from\s*['"`]([^'"`]+)['"`]/);
      if (defaultAsMatch) {
        const name = defaultAsMatch[1];
        const fromPath = defaultAsMatch[2];
        const fullPath = path.resolve(barrelDir, fromPath);
        
        exports.push({
          name,
          type: 'default-as',
          originalPath: this.resolveImportPath(fullPath)
        });
      }
    }
    
    return exports;
  }

  // Resolve import path and handle file extensions
  resolveImportPath(fullPath) {
    // Try to find the actual file with extensions
    for (const ext of this.extensions) {
      if (fs.existsSync(fullPath + ext)) {
        return fullPath + ext;
      }
    }
    
    // Check if it's already a file
    if (fs.existsSync(fullPath)) {
      return fullPath;
    }
    
    return fullPath;
  }

  // Find all files that need to be updated
  async findFilesToUpdate() {
    console.log('\n🔍 Step 2: Finding files with imports to update...');
    
    // Search in the same directories we searched for barrel files
    const searchDirs = [this.srcDir, 'app', 'components', 'lib', 'src', 'pages'].filter(Boolean);
    const uniqueDirs = [...new Set(searchDirs)]; // Remove duplicates
    
    let allFiles = [];
    
    for (const searchDir of uniqueDirs) {
      const dirPath = path.join(this.rootDir, searchDir);
      if (fs.existsSync(dirPath)) {
        const filePattern = path.join(this.rootDir, searchDir, '**/*.{js,jsx,ts,tsx}');
        const dirFiles = await glob(filePattern);
        allFiles.push(...dirFiles);
        console.log(`   Found ${dirFiles.length} files in ${searchDir}`);
      }
    }
    
    // Remove duplicates and exclude barrel files themselves
    allFiles = [...new Set(allFiles)];
    const barrelPaths = Array.from(this.barrelFiles.values()).map(b => b.filePath);
    const filesToCheck = allFiles.filter(file => !barrelPaths.includes(file));
    
    console.log(`  📄 Total files to check: ${filesToCheck.length}`);
    
    return filesToCheck;
  }

  // Update imports in a single file
  updateFileImports(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    let updatedContent = content;
    let hasChanges = false;
    const changes = [];
    
    // Find all import statements
    const importRegex = /import\s+(?:(?:\{[^}]*\}|\w+(?:\s*,\s*\{[^}]*\})?)\s+from\s+)?['"`]([^'"`]+)['"`]/g;
    let match;
    
    while ((match = importRegex.exec(content)) !== null) {
      const importPath = match[1];
      const fullMatch = match[0];
      
      // Skip if it's already using a barrel import (ends with index or is a directory)
      if (importPath.includes('/index') || importPath.endsWith('/index')) {
        continue;
      }
      
      // Check if this import can be replaced with a barrel import
      const replacement = this.findBarrelReplacement(importPath, filePath);
      if (replacement) {
        const newImport = fullMatch.replace(importPath, replacement.newPath);
        updatedContent = updatedContent.replace(fullMatch, newImport);
        hasChanges = true;
        changes.push({
          original: importPath,
          replacement: replacement.newPath,
          barrel: replacement.barrelPath
        });
      }
    }
    
    return {
      hasChanges,
      updatedContent,
      changes
    };
  }

  // Find if an import path can be replaced with a barrel import
  findBarrelReplacement(importPath, currentFilePath) {
    const currentDir = path.dirname(currentFilePath);
    
    // Resolve the absolute path of the import
    let absoluteImportPath;
    
    if (importPath.startsWith('@/')) {
      // Handle alias imports like @/lib/hooks/api
      const aliasPath = importPath.replace('@/', this.srcDir + '/');
      absoluteImportPath = path.resolve(this.rootDir, aliasPath);
    } else if (importPath.startsWith('./') || importPath.startsWith('../')) {
      // Handle relative imports
      absoluteImportPath = path.resolve(currentDir, importPath);
    } else {
      // Skip node_modules imports
      return null;
    }
    
    // Check each barrel file to see if it exports this path
    for (const [barrelRelativePath, barrelInfo] of this.barrelFiles) {
      const barrelAbsolutePath = path.resolve(this.rootDir, barrelRelativePath);
      
      // Check if the import is for a file that this barrel re-exports
      for (const exportInfo of barrelInfo.exports) {
        if (exportInfo.originalPath === absoluteImportPath || 
            exportInfo.originalPath.startsWith(absoluteImportPath)) {
          
          // Calculate the new import path
          let newPath;
          if (importPath.startsWith('@/')) {
            // Keep using alias
            newPath = '@/' + path.relative(this.srcDir, barrelAbsolutePath).replace(/\\/g, '/');
          } else {
            // Use relative path
            newPath = path.relative(currentDir, barrelAbsolutePath).replace(/\\/g, '/');
            if (!newPath.startsWith('../')) {
              newPath = './' + newPath;
            }
          }
          
          return {
            newPath,
            barrelPath: barrelRelativePath
          };
        }
      }
    }
    
    return null;
  }

  // Main execution function
  async run() {
    try {
      // Step 1: Find all barrel files
      await this.findBarrelFiles();
      
      if (this.barrelFiles.size === 0) {
        console.log('❌ No barrel files found. Make sure you have index.js/ts files that re-export modules.');
        return;
      }
      
      // Step 2: Find files to update
      const filesToUpdate = await this.findFilesToUpdate();
      
      // Step 3: Update imports
      console.log('\n🔄 Step 3: Updating imports...');
      
      let totalFiles = 0;
      let totalChanges = 0;
      
      for (const filePath of filesToUpdate) {
        const result = this.updateFileImports(filePath);
        
        if (result.hasChanges) {
          totalFiles++;
          totalChanges += result.changes.length;
          
          const relativePath = path.relative(this.rootDir, filePath);
          console.log(`  ✏️  ${relativePath}`);
          
          result.changes.forEach(change => {
            console.log(`     📦 ${change.original} → ${change.replacement} (via ${change.barrel})`);
          });
          
          if (!this.dryRun) {
            fs.writeFileSync(filePath, result.updatedContent, 'utf8');
          }
        }
      }
      
      // Summary
      console.log(`\n📊 Summary:`);
      console.log(`   Files updated: ${totalFiles}`);
      console.log(`   Total changes: ${totalChanges}`);
      
      if (this.dryRun) {
        console.log(`\n💡 This was a dry run. Add --execute flag to apply changes.`);
      } else {
        console.log(`\n✅ All imports have been updated to use barrel files!`);
      }
      
    } catch (error) {
      console.error('❌ Error:', error.message);
      process.exit(1);
    }
  }
}

// CLI interface
console.log('🔧 Checking CLI execution...');
console.log('🔧 import.meta.url:', import.meta.url);
console.log('🔧 process.argv[1]:', process.argv[1]);

// More reliable CLI detection for ES modules
const isMainModule = import.meta.url === pathToFileURL(process.argv[1]).href;
console.log('🔧 Is main module:', isMainModule);

if (isMainModule) {
  console.log('✅ Running as main module, starting updater...');
  
  const args = process.argv.slice(2);
  const options = {
    dryRun: !args.includes('--execute'),
    rootDir: process.cwd(),
    srcDir: 'src'
  };
  
  // Parse command line arguments
  const rootDirIndex = args.indexOf('--root');
  if (rootDirIndex !== -1 && args[rootDirIndex + 1]) {
    options.rootDir = path.resolve(args[rootDirIndex + 1]);
  }
  
  const srcDirIndex = args.indexOf('--src');
  if (srcDirIndex !== -1 && args[srcDirIndex + 1]) {
    options.srcDir = args[srcDirIndex + 1];
  }
  
  const updater = new BarrelImportUpdater(options);
  updater.run().catch(console.error);
} else {
  console.log('ℹ️  Not running as main module, exporting class only');
}

export default BarrelImportUpdater;