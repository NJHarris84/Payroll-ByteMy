#!/usr/bin/env node
/**
 * Enhanced Project Cleanup Script for Payroll-ByteMy
 * 
 * Based on the updated file structure, this script focuses on:
 * 1. Standardizing GraphQL organization and export naming
 * 2. Improving hooks categorization
 * 3. Cleaning up redundant files
 * 4. Updating barrel exports
 * 5. Fixing imports for restructured files
 */

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';
import { execSync } from 'child_process';
import { appendGeneratedToBarrels } from './generated-file-support.ts';
// Colors for terminal output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',
  gray: '\x1b[90m',
};

// Print script banner
function printBanner() {
  console.log(`
${colors.cyan}╔═══════════════════════════════════════════════════════════════╗
║ ${colors.green}PAYROLL-BYTEMY ENHANCED CLEANUP${colors.cyan}                          ║
║ ${colors.gray}Refining and optimizing the project structure${colors.cyan}             ║
╚═══════════════════════════════════════════════════════════════╝${colors.reset}
  `);
}

// Helper to log with colors
function log(message: string, color = 'reset', indent = 0) {
  const indentStr = '  '.repeat(indent);
  console.log(`${indentStr}${colors[color]}${message}${colors.reset}`);
}

interface CleanupOptions {
  rootDir: string;
  dryRun: boolean;
  verbose: boolean;
  skipPhases?: string[];
  includePhases?: string[];
}

class ProjectCleanup {
  rootDir: string;
  dryRun: boolean;
  verbose: boolean;
  skipPhases: string[];
  includePhases: string[];
  
  // Stats for reporting
  stats = {
    renamedFiles: 0,
    movedFiles: 0,
    createdDirectories: 0,
    updatedBarrels: 0,
    fixedImports: 0,
    fixedGraphQLExports: 0,
    removedRedundantFiles: 0,
    reviewFlagged: 0,
  };
  
  // Logs for detailed reporting
  logs: Record<string, string[]> = {
    renamedFiles: [],
    movedFiles: [],
    createdDirectories: [],
    updatedBarrels: [],
    fixedImports: [],
    fixedGraphQLExports: [],
    removedRedundantFiles: [],
    reviewFlagged: [],
  };
  
  // Tracking moved files to update imports
  fileMoves: Record<string, string> = {};
  
  constructor(options: CleanupOptions) {
    this.rootDir = options.rootDir;
    this.dryRun = options.dryRun;
    this.verbose = options.verbose;
    this.skipPhases = options.skipPhases || [];
    this.includePhases = options.includePhases || [];
    
    // Create necessary directories
    this.ensureDirectoryExists('_cleanup/review');
    this.ensureDirectoryExists('logs');
  }
  
  /**
   * Ensure a directory exists
   */
  ensureDirectoryExists(dirPath: string): boolean {
    const fullPath = path.join(this.rootDir, dirPath);
    if (!fs.existsSync(fullPath)) {
      if (this.dryRun) {
        log(`Would create directory: ${dirPath}`, 'yellow', 1);
        return false;
      } else {
        try {
          fs.mkdirSync(fullPath, { recursive: true });
          log(`Created directory: ${dirPath}`, 'green', 1);
          this.stats.createdDirectories++;
          this.logs.createdDirectories.push(`CREATED: ${dirPath}`);
          return true;
        } catch (error) {
          log(`Failed to create directory ${dirPath}: ${error.message}`, 'red', 1);
          return false;
        }
      }
    }
    return true;
  }
  
  /**
   * Check if a phase should be executed
   */
  shouldRunPhase(phaseName: string): boolean {
    if (this.includePhases.length > 0) {
      return this.includePhases.includes(phaseName);
    }
    return !this.skipPhases.includes(phaseName);
  }
  
  /**
   * Copy or move a file
   */
  moveFile(sourcePath: string, targetPath: string, copy = false): boolean {
    // Skip if source and target are the same
    if (sourcePath === targetPath) {
      return true;
    }
    
    // Ensure the target directory exists
    this.ensureDirectoryExists(path.dirname(path.relative(this.rootDir, targetPath)));
    
    if (this.dryRun) {
      log(`Would ${copy ? 'copy' : 'move'}: ${path.relative(this.rootDir, sourcePath)} → ${path.relative(this.rootDir, targetPath)}`, 'yellow', 1);
      return true;
    }
    
    try {
      // Make sure source exists
      if (!fs.existsSync(sourcePath)) {
        log(`Source file doesn't exist: ${sourcePath}`, 'red', 1);
        return false;
      }
      
      // Check if target already exists
      if (fs.existsSync(targetPath)) {
        log(`Target already exists: ${targetPath}`, 'red', 1);
        return false;
      }
      
      // Copy the file
      fs.copyFileSync(sourcePath, targetPath);
      
      // If not just copying, delete the original
      if (!copy) {
        fs.unlinkSync(sourcePath);
      }
      
      // Track the move for import updates
      const relativeSource = path.relative(this.rootDir, sourcePath);
      const relativeTarget = path.relative(this.rootDir, targetPath);
      this.fileMoves[relativeSource] = relativeTarget;
      
      log(`${copy ? 'Copied' : 'Moved'}: ${relativeSource} → ${relativeTarget}`, 'green', 1);
      this.stats.movedFiles++;
      this.logs.movedFiles.push(`${copy ? 'COPIED' : 'MOVED'}: ${relativeSource} → ${relativeTarget}`);
      return true;
    } catch (error) {
      log(`Failed to ${copy ? 'copy' : 'move'} file: ${error.message}`, 'red', 1);
      return false;
    }
  }
  
  /**
   * Rename a file (keeping it in the same directory)
   */
  renameFile(filePath: string, newName: string): boolean {
    const dirName = path.dirname(filePath);
    const newPath = path.join(dirName, newName);
    const relativeSource = path.relative(this.rootDir, filePath);
    const relativeTarget = path.relative(this.rootDir, newPath);
    
    if (this.dryRun) {
      log(`Would rename: ${relativeSource} → ${relativeTarget}`, 'yellow', 1);
      return true;
    }
    
    try {
      // Make sure source exists
      if (!fs.existsSync(filePath)) {
        log(`Source file doesn't exist: ${filePath}`, 'red', 1);
        return false;
      }
      
      // Check if target already exists
      if (fs.existsSync(newPath)) {
        log(`Target already exists: ${newPath}`, 'red', 1);
        return false;
      }
      
      fs.renameSync(filePath, newPath);
      
      // Track the move for import updates
      this.fileMoves[relativeSource] = relativeTarget;
      
      log(`Renamed: ${relativeSource} → ${relativeTarget}`, 'green', 1);
      this.stats.renamedFiles++;
      this.logs.renamedFiles.push(`RENAMED: ${relativeSource} → ${relativeTarget}`);
      return true;
    } catch (error) {
      log(`Failed to rename file: ${error.message}`, 'red', 1);
      return false;
    }
  }
  
  /**
   * Flag a file for review
   */
  flagForReview(filePath: string, reason: string): boolean {
    const relativePath = path.relative(this.rootDir, filePath);
    const reviewPath = path.join(this.rootDir, '_cleanup/review', relativePath);
    
    if (this.moveFile(filePath, reviewPath, true)) {
      this.stats.reviewFlagged++;
      this.logs.reviewFlagged.push(`REVIEW: ${relativePath} - ${reason}`);
      return true;
    }
    
    return false;
  }
  
  /**
   * Convert text to PascalCase
   */
  toPascalCase(text: string): string {
    return text
      .replace(/[-_](\w)/g, (_, c) => c.toUpperCase())
      .replace(/^\w/, c => c.toUpperCase());
  }
  
  /**
   * Convert text to camelCase
   */
  toCamelCase(text: string): string {
    return text
      .replace(/[-_](\w)/g, (_, c) => c.toUpperCase())
      .replace(/^\w/, c => c.toLowerCase());
  }
  
  /**
   * Convert text to UPPER_SNAKE_CASE
   */
  toUpperSnakeCase(text: string): string {
    return text
      .replace(/([A-Z])/g, '_$1')
      .replace(/[-_]+/g, '_')
      .replace(/^_/, '')
      .toUpperCase();
  }
  
  /**
   * Get all project files matching a pattern
   */
async getFiles(pattern: string): Promise<string[]> {
  return glob(pattern, {
    cwd: this.rootDir,
    absolute: true,
    ignore: [
      '**/node_modules/**',
      '**/.git/**',
      '**/.next/**',
      '**/dist/**',
      '**/coverage/**',
      '**/build/**',
      '**/_cleanup/**'
    ]
  });
}
  
  /**
   * Create or update a barrel file (index.ts) for a directory
   */
  updateBarrelFile(dirPath: string): boolean {
    const dirFullPath = path.join(this.rootDir, dirPath);
    const barrelPath = path.join(dirFullPath, 'index.ts');
    const dirName = path.basename(dirPath);
    
    if (!fs.existsSync(dirFullPath)) {
      log(`Directory doesn't exist: ${dirPath}`, 'red', 1);
      return false;
    }
    
    // Get all files in the directory
    const files = fs.readdirSync(dirFullPath)
      .filter(file => 
        file !== 'index.ts' && 
        !file.includes('.test.') && 
        !file.includes('.spec.') && 
        (file.endsWith('.ts') || file.endsWith('.tsx')) &&
        !file.endsWith('.d.ts')
      );
    
    if (files.length === 0) {
      log(`No files to include in barrel for: ${dirPath}`, 'gray', 1);
      return false;
    }
    
    // Generate barrel content
    let barrelContent = `/**
 * ${dirName} - Barrel file
 * Generated by enhanced-cleanup script
 */

`;
    
    // Add exports for each file
    for (const file of files) {
      const baseName = path.basename(file, path.extname(file));
      
      // Different export styles based on file type
      if (file.endsWith('.tsx')) {
        // For React components, use named default export
        barrelContent += `export { default as ${baseName} } from './${baseName}';\n`;
      } else if (file.endsWith('.graphql')) {
        // Skip GraphQL files in barrel exports
        continue;
      } else if (file.endsWith('.generated.ts')) {
        // Skip generated GraphQL files in barrel exports
        continue;
      } else {
        // For other files, use wildcard export
        barrelContent += `export * from './${baseName}';\n`;
      }
    }
    
    if (this.dryRun) {
      log(`Would update barrel file: ${dirPath}/index.ts`, 'yellow', 1);
      if (this.verbose) {
        log(`Barrel content would be:\n${barrelContent}`, 'gray', 2);
      }
      return true;
    }
    
    try {
      fs.writeFileSync(barrelPath, barrelContent);
      log(`Updated barrel file: ${dirPath}/index.ts`, 'green', 1);
      this.stats.updatedBarrels++;
      this.logs.updatedBarrels.push(`BARREL: ${dirPath}/index.ts - Updated with ${files.length} exports`);
      return true;
    } catch (error) {
      log(`Failed to update barrel file: ${error.message}`, 'red', 1);
      return false;
    }
  }
  
  /**
   * Phase 1: Fix GraphQL naming conventions and exports
   */
  async fixGraphQLExports(): Promise<void> {
    if (!this.shouldRunPhase('graphql-exports')) return;
    
    log('\n📝 Phase 1: Fixing GraphQL naming conventions and exports...', 'magenta');
    
    // 1. Find all generated GraphQL files
    const generatedFiles = await this.getFiles('lib/graphql/**/*.generated.ts');
    
    for (const filePath of generatedFiles) {
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const fileName = path.basename(filePath);
      const baseName = fileName.replace('.generated.ts', '');
      
      // Check if we need to fix naming conventions in this file
      let isFragmentFile = false;
      let needsFixing = false;
      
      // Check if this is a fragment file (both naming and if it contains fragment references)
      isFragmentFile = baseName.includes('Fragment') || fileContent.includes('fragment');
      
      // Check for fragment naming issues
      if (isFragmentFile && fileContent.includes('FragmentDoc')) {
        needsFixing = true;
      }
      
      // Skip if no fixing needed
      if (!needsFixing) continue;
      
      log(`Fixing GraphQL exports in: ${path.relative(this.rootDir, filePath)}`, 'blue', 1);
      
      // Extract the fragment name without the duplicate "Fragment" part
      const fragmentBaseName = baseName.replace(/Fragment$/, '');
      const fragmentPascalName = this.toPascalCase(fragmentBaseName) + 'Fragment';
      const fragmentConstName = this.toUpperSnakeCase(fragmentBaseName) + '_FRAGMENT';
      
      // Fix the content
      let newContent = fileContent;
      
      // Replace fragment document constant name (avoid the duplicated Fragment part)
      newContent = newContent.replace(
        /export const (\w+)FragmentFragmentDoc = gql/g, 
        `export const ${fragmentConstName} = gql`
      );
      
      // Replace the type name if needed
      if (newContent.includes(`export type ${fragmentBaseName}FragmentFragment =`)) {
        newContent = newContent.replace(
          `export type ${fragmentBaseName}FragmentFragment =`,
          `export type ${fragmentPascalName} =`
        );
      }
      
      // Write the fixed content
      if (this.dryRun) {
        log(`Would fix GraphQL exports in: ${path.relative(this.rootDir, filePath)}`, 'yellow', 2);
        if (this.verbose) {
          log('Original:', 'gray', 3);
          log(fileContent.split('\n').slice(0, 10).join('\n'), 'gray', 4);
          log('Fixed:', 'gray', 3);
          log(newContent.split('\n').slice(0, 10).join('\n'), 'gray', 4);
        }
      } else {
        try {
          fs.writeFileSync(filePath, newContent);
          log(`Fixed GraphQL exports in: ${path.relative(this.rootDir, filePath)}`, 'green', 2);
          this.stats.fixedGraphQLExports++;
          this.logs.fixedGraphQLExports.push(`FIXED: ${path.relative(this.rootDir, filePath)}`);
        } catch (error) {
          log(`Failed to fix GraphQL exports: ${error.message}`, 'red', 2);
        }
      }
    }
    
    // 2. Fix fragment file naming if needed
    const fragmentFiles = await this.getFiles('lib/graphql/fragments/**/*.ts');
    
    for (const filePath of fragmentFiles) {
      const fileName = path.basename(filePath);
      
      // Skip generated files
      if (fileName.includes('.generated.')) continue;
      
      // Check if this is a GraphQL fragment implementation file
      const baseName = path.basename(fileName, '.ts');
      
      // If it's not camelCase, rename it
      if (baseName.charAt(0) !== baseName.charAt(0).toLowerCase() || 
          baseName.includes('-') || 
          baseName.includes('_')) {
        // Generate the camelCase name
        const camelName = this.toCamelCase(baseName) + '.ts';
        this.renameFile(filePath, camelName);
      }
    }
    
    // 3. Fix GraphQL fragment files if needed
    const graphqlFragmentFiles = await this.getFiles('lib/graphql/fragments/**/*.graphql');
    
    for (const filePath of graphqlFragmentFiles) {
      const fileName = path.basename(filePath);
      
      // The .graphql fragment files should be in PascalCase
      const baseName = path.basename(fileName, '.graphql');
      
      // If it's not PascalCase, rename it
      if (baseName.charAt(0) !== baseName.charAt(0).toUpperCase() || 
          baseName.includes('-') || 
          baseName.includes('_')) {
        // Generate the PascalCase name
        const pascalName = this.toPascalCase(baseName) + '.graphql';
        this.renameFile(filePath, pascalName);
      }
    }
    
    log(`✅ Completed GraphQL export fixes`, 'green');
  }
  
  /**
   * Phase 2: Clean up GraphQL organization
   */
  async cleanupGraphQL(): Promise<void> {
    if (!this.shouldRunPhase('graphql-structure')) return;
    
    log('\n📊 Phase 2: Cleaning up GraphQL structure...', 'magenta');
    
    // 1. Check for duplicate GraphQL files
    const graphqlFiles = await this.getFiles('lib/graphql/**/*.{graphql,ts}');
    const graphqlByName = new Map<string, string[]>();
    
    // Group files by base name to find duplicates
    graphqlFiles.forEach(file => {
      const fileName = path.basename(file);
      const baseName = fileName.replace('.generated.ts', '').replace('.graphql', '').replace('.ts', '');
      
      if (!graphqlByName.has(baseName)) {
        graphqlByName.set(baseName, []);
      }
      graphqlByName.get(baseName)?.push(file);
    });
    
    // Flag duplicate files for review
    graphqlByName.forEach((files, baseName) => {
      if (files.length > 2) {
        log(`Found ${files.length} files for ${baseName}`, 'yellow', 1);
        
        // Keep files in the correct directories, flag others for review
        const graphqlFileInRoot = files.find(f => f.includes('/lib/graphql/') && f.endsWith('.graphql') && !f.includes('/fragments/'));
        const generatedFile = files.find(f => f.includes('/generated/') && f.endsWith('.generated.ts'));
        
        files.forEach(file => {
          // Skip if it's the main GraphQL file or generated file
          if (file === graphqlFileInRoot || file === generatedFile) {
            return;
          }
          
          // Flag others for review
          this.flagForReview(file, `Duplicate GraphQL file for ${baseName}`);
        });
      }
    });
    
    // 2. Fix fragment files - ensure they have consistent naming
    const fragmentFiles = await this.getFiles('lib/graphql/fragments/**/*');
    const fragmentPairs = new Map<string, {graphql?: string, ts?: string}>();
    
    // Group fragment files by base name
    fragmentFiles.forEach(file => {
      const fileName = path.basename(file);
      const ext = path.extname(file);
      const baseName = fileName.replace('.graphql', '').replace('.ts', '');
      
      if (!fragmentPairs.has(baseName)) {
        fragmentPairs.set(baseName, {});
      }
      
      if (ext === '.graphql') {
        fragmentPairs.get(baseName)!.graphql = file;
      } else if (ext === '.ts') {
        fragmentPairs.get(baseName)!.ts = file;
      }
    });
    
    // Flag fragments missing either .graphql or .ts counterpart
    fragmentPairs.forEach((files, baseName) => {
      if (!files.graphql || !files.ts) {
        log(`Incomplete fragment pair for ${baseName}`, 'yellow', 1);
        
        if (!files.graphql) {
          log(`Missing .graphql file for ${baseName}`, 'red', 2);
          // Flag the .ts file for review
          if (files.ts) {
            this.flagForReview(files.ts, `Missing .graphql counterpart for fragment`);
          }
        }
        
        if (!files.ts) {
          log(`Missing .ts file for ${baseName}`, 'red', 2);
          // Flag the .graphql file for review
          if (files.graphql) {
            this.flagForReview(files.graphql, `Missing .ts counterpart for fragment`);
          }
        }
      }
    });
    
    // 3. Move root-level GraphQL files to domain subdirectories if they don't have a matching domain directory
    const rootGraphQLFiles = await this.getFiles('lib/graphql/*.graphql');
    
    // Define operation types and domain directories
    const operationTypes = {
      query: ['Get', 'Find', 'List', 'Fetch'],
      mutation: ['Create', 'Update', 'Delete', 'Insert', 'Sync', 'Add', 'Remove']
    };
    
    const domainDirs = {
      clients: ['Client', 'Clients'],
      payrolls: ['Payroll', 'Payrolls'],
      staff: ['Staff', 'User', 'Users'],
      leave: ['Leave'],
      holidays: ['Holiday', 'Holidays'],
      'payroll_cycles': ['PayrollCycle', 'PayrollCycles'],
      'payroll_dates': ['PayrollDate', 'PayrollDates'],
      'adjustment_rules': ['AdjustmentRule', 'AdjustmentRules'],
      'work_schedule': ['WorkSchedule'],
      notes: ['Note', 'Notes'],
      'app_settings': ['AppSettings'],
      'feature_flags': ['FeatureFlag', 'FeatureFlags']
    };
    
    for (const filePath of rootGraphQLFiles) {
      const fileName = path.basename(filePath);
      const baseName = path.basename(fileName, '.graphql');
      
      // Determine if it's a query or mutation
      let operationType = 'queries';
      for (const [type, prefixes] of Object.entries(operationTypes)) {
        if (prefixes.some(prefix => baseName.startsWith(prefix))) {
          operationType = type === 'query' ? 'queries' : 'mutations';
          break;
        }
      }
      
      // Determine the domain
      let domain = '';
      for (const [dir, keywords] of Object.entries(domainDirs)) {
        if (keywords.some(keyword => baseName.includes(keyword))) {
          domain = dir;
          break;
        }
      }
      
      // Skip if we couldn't determine the domain
      if (!domain) {
        log(`Could not determine domain for ${fileName}`, 'yellow', 1);
        continue;
      }
      
      // Create the target directory structure
      const targetDir = `lib/graphql/${operationType}/${domain}`;
      this.ensureDirectoryExists(targetDir);
      
      // Move the file
      const targetPath = path.join(this.rootDir, targetDir, fileName);
      this.moveFile(filePath, targetPath);
      
      // Move the generated file too if it exists
      const generatedFilePath = filePath.replace('.graphql', '.generated.ts');
      if (fs.existsSync(generatedFilePath)) {
        const generatedTargetPath = path.join(this.rootDir, targetDir, path.basename(generatedFilePath));
        this.moveFile(generatedFilePath, generatedTargetPath);
      }
    }
    
    // 4. Update barrel files for GraphQL directories
    const graphqlDirs = await this.getFiles('lib/graphql/**/*');
    const graphqlDirSet = new Set<string>();
    
    // Collect all GraphQL directories
    graphqlDirs.forEach(file => {
      const dirPath = path.dirname(path.relative(this.rootDir, file));
      if (dirPath !== 'lib/graphql' && !dirPath.includes('generated')) {
        graphqlDirSet.add(dirPath);
      }
    });
    
    // Update barrel files
    graphqlDirSet.forEach(dir => {
      this.updateBarrelFile(dir);
    });
    
    log(`✅ Completed GraphQL structure cleanup`, 'green');
  }
  
  /**
   * Phase 3: Organize hooks better
   */
  async organizeHooks(): Promise<void> {
    if (!this.shouldRunPhase('hooks')) return;
    
    log('\n🪝 Phase 3: Organizing hooks...', 'magenta');
    
    // 1. Create an 'entity' directory to group entity-specific hooks
    this.ensureDirectoryExists('lib/hooks/entity');
    
    // 2. Map hooks to their appropriate categories
    const hookCategories = {
      'lib/hooks/entity': [
        'useClient',
        'usePayroll',
        'useStaff',
        'useLeave',
        'useWorkSchedule',
        'useNotes',
        'useAdjustmentRules',
        'useHolidays'
      ],
      'lib/hooks/utils': [
        'useDebounce',
        'useLocalStorage',
        'useSubscription',
        'useDataFetching',
        'useCacheInvalidation',
        'usePolling',
        'usePolledQuery'
      ]
    };
    
    // 3. Move entity hooks from root to the entity directory
    const rootHooks = await this.getFiles('lib/hooks/*.ts');
    
    for (const hookFile of rootHooks) {
      const fileName = path.basename(hookFile);
      
      // Skip index files and test files
      if (fileName === 'index.ts' || fileName.includes('.test.') || fileName.includes('.spec.')) {
        continue;
      }
      
      // Determine the category for this hook
      let targetCategory = null;
      for (const [category, hooks] of Object.entries(hookCategories)) {
        if (hooks.some(hook => fileName.startsWith(hook))) {
          targetCategory = category;
          break;
        }
      }
      
      // Move to the appropriate category if found
      if (targetCategory) {
        const targetPath = path.join(this.rootDir, targetCategory, fileName);
        this.moveFile(hookFile, targetPath);
        
        // Move associated test files
        const testFile = hookFile.replace('.ts', '.test.ts');
        if (fs.existsSync(testFile)) {
          const testTargetPath = path.join(this.rootDir, targetCategory, path.basename(testFile));
          this.moveFile(testFile, testTargetPath);
        }
      }
    }
    
    // 4. Update barrel files for hook directories
    this.updateBarrelFile('lib/hooks/entity');
    this.updateBarrelFile('lib/hooks');
    this.updateBarrelFile('lib/hooks/api');
    this.updateBarrelFile('lib/hooks/ui');
    this.updateBarrelFile('lib/hooks/utils');
    
    log(`✅ Completed hooks organization`, 'green');
  }
  
  /**
   * Phase 4: Clean up redundant files
   */
  async cleanupRedundant(): Promise<void> {
    if (!this.shouldRunPhase('redundant')) return;
    
    log('\n🧹 Phase 4: Cleaning up redundant files...', 'magenta');
    
    // 1. Identify potentially redundant patterns
    const redundantPatterns = [
      // Backup files
      '**/*.{bak,old,original}',
      
      // Multiple client/API implementations
      'lib/api/*client*.{ts,tsx}',
      
      // Duplicate files
      '**/*.{draft,temp,tmp}',
      
      // Generated files in the wrong locations
      'lib/graphql/*.generated.ts'
    ];
    
    // 2. Process each pattern
    for (const pattern of redundantPatterns) {
      const files = await this.getFiles(pattern);
      
      log(`Found ${files.length} files matching redundant pattern: ${pattern}`, 'blue', 1);
      
      for (const file of files) {
        // For API client files, we want to keep only client.ts and server.ts
        if (pattern.includes('client')) {
          const fileName = path.basename(file);
          
          // Skip if it's a canonical file
          if (fileName === 'apollo-client.client.ts' || fileName === 'apollo-client.server.ts') {
            continue;
          }
          
          this.flagForReview(file, `Potential redundant API client implementation`);
        } 
        // For generated files in wrong location, move to generated directory
        else if (pattern.includes('generated.ts')) {
          const fileName = path.basename(file);
          const targetPath = path.join(this.rootDir, 'lib/graphql/generated', fileName);
          
          // Move file to generated directory
          this.moveFile(file, targetPath);
        }
        // For other redundant patterns, flag for review
        else {
          this.flagForReview(file, `Matches redundant pattern: ${pattern}`);
        }
      }
    }
    
    // 3. Look for duplicate components with different naming conventions
    const componentFiles = await this.getFiles('components/**/*.tsx');
    const componentNames = new Map<string, string[]>();
    
    // Group components by normalized name
    componentFiles.forEach(file => {
      const fileName = path.basename(file, '.tsx');
      
      // Normalize name by removing case and special chars
      const normalizedName = fileName.toLowerCase().replace(/[-_]/g, '');
      
      if (!componentNames.has(normalizedName)) {
        componentNames.set(normalizedName, []);
      }
      componentNames.get(normalizedName)?.push(file);
    });
    
    // Flag duplicate components
    componentNames.forEach((files, normalizedName) => {
      if (files.length > 1) {
        log(`Found ${files.length} components with similar name: ${normalizedName}`, 'yellow', 1);
        
        // Keep the first file, flag others for review
        for (let i = 1; i < files.length; i++) {
          this.flagForReview(files[i], `Potential duplicate component for ${normalizedName}`);
        }
      }
    });
    
    log(`✅ Completed redundant files cleanup`, 'green');
  }
  
  /**
   * Phase 5: Update barrel files
   */
  async updateBarrels(): Promise<void> {
    if (!this.shouldRunPhase('barrels')) return;
    
    log('\n📦 Phase 5: Updating barrel files...', 'magenta');
    
    // 1. Define key directories that should have barrel files
    const barrelDirs = [
      'components/ui',
      'components/payroll',
      'components/client',
      'components/common',
      'components/layout',
      'components/providers',
      'lib/hooks',
      'lib/hooks/api',
      'lib/hooks/ui',
      'lib/hooks/utils',
      'lib/hooks/entity',
      'lib/utils',
      'lib/auth',
      'lib/api',
      'lib/services',
      'lib/graphql/fragments',
      'lib/graphql/queries',
      'lib/graphql/mutations'
    ];
    
    // 2. Update all barrel files
    for (const dir of barrelDirs) {
      if (fs.existsSync(path.join(this.rootDir, dir))) {
        this.updateBarrelFile(dir);
      }
    }
    
    // 3. Update subdirectory barrel files for GraphQL operations
    const graphqlSubdirs = [
      'lib/graphql/queries',
      'lib/graphql/mutations'
    ];
    
    for (const baseDir of graphqlSubdirs) {
      if (fs.existsSync(path.join(this.rootDir, baseDir))) {
        const subDirs = fs.readdirSync(path.join(this.rootDir, baseDir), { withFileTypes: true })
          .filter(dirent => dirent.isDirectory())
          .map(dirent => path.join(baseDir, dirent.name));
        
        for (const subDir of subDirs) {
          this.updateBarrelFile(subDir);
        }
      }
    }
    
    log(`✅ Completed barrel file updates`, 'green');
  }
  
  /**
   * Phase 6: Fix imports for moved files
   */
  async fixImports(): Promise<void> {
    if (!this.shouldRunPhase('imports') || this.dryRun) return;
    
    log('\n🔄 Phase 6: Fixing imports for moved files...', 'magenta');
    
    // Skip in dry run mode
    if (this.dryRun) {
      log(`Would update imports for ${Object.keys(this.fileMoves).length} moved files (skipped in dry run)`, 'yellow', 1);
      return;
    }
    
    // If no files were moved, skip
    if (Object.keys(this.fileMoves).length === 0) {
      log(`No files were moved, skipping import fixes`, 'gray', 1);
      return;
    }
    
    // 1. Create a temporary file with file moves mapping
    const mappingsFile = path.join(this.rootDir, 'scripts/import-mappings.json');
    
    try {
      // Write the mappings file
      fs.writeFileSync(mappingsFile, JSON.stringify(this.fileMoves, null, 2));
      
      // 2. Run the import fixer script
      log(`Running import fixer for ${Object.keys(this.fileMoves).length} moved files...`, 'blue', 1);
      
      execSync('pnpm exec node ./scripts/fix-imports-enhanced.js', { 
        stdio: this.verbose ? 'inherit' : 'pipe',
        cwd: this.rootDir
      });
      
      this.stats.fixedImports = Object.keys(this.fileMoves).length;
      log(`✅ Updated imports for ${this.stats.fixedImports} files`, 'green', 1);
    } catch (error) {
      log(`Error updating imports: ${error.message}`, 'red', 1);
    }
  }
  
  /**
   * Write logs to files
   */
  writeLogs(): void {
    if (this.dryRun) {
      log('\n📋 Would write logs to logs/ directory (skipped in dry run)', 'yellow');
      return;
    }
    
    log('\n📋 Writing logs...', 'blue');
    
    // Ensure logs directory exists
    this.ensureDirectoryExists('logs');
    
    // Write a log file for each action type
    for (const [logType, entries] of Object.entries(this.logs)) {
      if (entries.length > 0) {
        const logPath = path.join(this.rootDir, 'logs', `enhanced-cleanup-${logType}.txt`);
        fs.writeFileSync(logPath, entries.join('\n'), 'utf-8');
        log(`Wrote ${entries.length} entries to logs/enhanced-cleanup-${logType}.txt`, 'green', 1);
      }
    }
    
    // Write a summary file
    const summaryPath = path.join(this.rootDir, 'logs', 'enhanced-cleanup-summary.txt');
    const summaryContent = `
PAYROLL-BYTEMY ENHANCED CLEANUP SUMMARY
=======================================
Date: ${new Date().toISOString()}
Mode: ${this.dryRun ? 'DRY RUN' : 'EXECUTION'}

ACTIONS:
- Files renamed: ${this.stats.renamedFiles}
- Files moved: ${this.stats.movedFiles}
- Directories created: ${this.stats.createdDirectories}
- Barrel files updated: ${this.stats.updatedBarrels}
- GraphQL exports fixed: ${this.stats.fixedGraphQLExports}
- Imports fixed: ${this.stats.fixedImports}
- Files flagged for review: ${this.stats.reviewFlagged}

See individual log files for details.
`;
    
    fs.writeFileSync(summaryPath, summaryContent, 'utf-8');
    log(`Wrote summary to logs/enhanced-cleanup-summary.txt`, 'green', 1);
  }
  
  /**
   * Print summary of actions
   */
  printSummary(): void {
    log('\n📊 CLEANUP SUMMARY:', 'cyan');
    log(`Files renamed: ${this.stats.renamedFiles}`, 'white', 1);
    log(`Files moved: ${this.stats.movedFiles}`, 'white', 1);
    log(`Directories created: ${this.stats.createdDirectories}`, 'white', 1);
    log(`Barrel files updated: ${this.stats.updatedBarrels}`, 'white', 1);
    log(`GraphQL exports fixed: ${this.stats.fixedGraphQLExports}`, 'white', 1);
    log(`Imports fixed: ${this.stats.fixedImports}`, 'white', 1);
    log(`Files flagged for review: ${this.stats.reviewFlagged}`, 'white', 1);
    
    if (this.dryRun) {
      log('\n⚠️  This was a DRY RUN. No changes were actually made.', 'yellow');
      log('To execute the changes, run the script again with --execute flag.', 'yellow');
    } else {
      log('\n✅ Cleanup completed successfully!', 'green');
      log('Check the logs directory for detailed information.', 'green');
    }
  }
  
  /**
   * Run the entire cleanup process
   */
  async run(): Promise<number> {
    printBanner();
    
    try {
      // Run all phases
      await this.fixGraphQLExports();
      await this.cleanupGraphQL();
      await this.organizeHooks();
      await this.cleanupRedundant();
      await this.updateBarrels();
      await this.fixImports();
      
      // Write logs and print summary
      this.writeLogs();
      this.printSummary();
      
      return 0;
    } catch (error) {
      log(`\n❌ ERROR: ${error.message}`, 'red');
      console.error(error.stack);
      return 1;
    }
  }
}

// Parse command line arguments
function parseArgs(): CleanupOptions {
  const args = process.argv.slice(2);
  
  return {
    rootDir: process.cwd(),
    dryRun: !args.includes('--execute'),
    verbose: args.includes('--verbose') || args.includes('-v'),
    skipPhases: args.includes('--skip') ? 
      args[args.indexOf('--skip') + 1]?.split(',') || [] : [],
    includePhases: args.includes('--only') ? 
      args[args.indexOf('--only') + 1]?.split(',') || [] : []
  };
}

// Main execution
async function main() {
  const options = parseArgs();
  const cleanup = new ProjectCleanup(options);
  const exitCode = await cleanup.run();

  await appendGeneratedToBarrels('lib/graphql');

  process.exit(exitCode);
}

// Run the script
main().catch(err => {
  console.error('Unhandled error:', err);
  process.exit(1);
});