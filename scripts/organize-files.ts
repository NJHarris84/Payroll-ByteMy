#!/usr/bin/env node
/**
 * Project Cleanup Script for Payroll-ByteMy
 * 
 * This script analyzes and cleans up the project structure:
 * - Standardizes file naming conventions
 * - Reorganizes GraphQL files into consistent structure
 * - Improves hooks organization
 * - Identifies and moves redundant files
 * - Creates barrel files for better exports
 * - Updates imports to match new structure
 */

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';
import { execSync } from 'child_process';

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
║ ${colors.green}PAYROLL-BYTEMY COMPREHENSIVE CLEANUP${colors.cyan}                      ║
║ ${colors.gray}Organizing and standardizing the project structure${colors.cyan}         ║
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
   * Flag a file for review (move to _cleanup/review with path structure preserved)
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
   * Convert kebab-case to PascalCase
   */
  kebabToPascalCase(str: string): string {
    return str
      .split('-')
      .map(part => part.charAt(0).toUpperCase() + part.slice(1))
      .join('');
  }
  
  /**
   * Convert PascalCase to kebab-case
   */
  pascalToKebabCase(str: string): string {
    return str
      .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
      .toLowerCase();
  }
  
  /**
   * Convert camelCase to kebab-case
   */
  camelToKebabCase(str: string): string {
    return str
      .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
      .toLowerCase();
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
        '**/build/**'
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
        (file.endsWith('.ts') || file.endsWith('.tsx'))
      );
    
    if (files.length === 0) {
      log(`No files to include in barrel for: ${dirPath}`, 'gray', 1);
      return false;
    }
    
    // Generate barrel content
    let barrelContent = `/**
 * ${dirName} - Barrel file
 * Generated by project-cleanup script
 */

`;
    
    // Add exports for each file
    for (const file of files) {
      const baseName = path.basename(file, path.extname(file));
      
      // Different export styles based on file type
      if (file.endsWith('.tsx')) {
        // For React components, use named default export
        barrelContent += `export { default as ${baseName} } from './${baseName}';\n`;
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
   * Phase 1: Standardize file naming conventions
   */
  async standardizeNaming(): Promise<void> {
    if (!this.shouldRunPhase('naming')) return;
    
    log('\n📝 Phase 1: Standardizing file naming conventions...', 'magenta');
    
    // 1. Fix component file naming (ensure PascalCase for components)
    const componentFiles = await this.getFiles('components/**/*.tsx');
    
    for (const filePath of componentFiles) {
      const fileName = path.basename(filePath);
      const ext = path.extname(filePath);
      const baseName = path.basename(fileName, ext);
      
      // Skip if already in PascalCase
      if (baseName.charAt(0) === baseName.charAt(0).toUpperCase() && !baseName.includes('-')) {
        continue;
      }
      
      // Convert kebab-case to PascalCase
      if (baseName.includes('-')) {
        const pascalName = this.kebabToPascalCase(baseName);
        this.renameFile(filePath, `${pascalName}${ext}`);
      } else if (baseName.charAt(0) !== baseName.charAt(0).toUpperCase()) {
        // Just capitalize first letter
        const pascalName = baseName.charAt(0).toUpperCase() + baseName.slice(1);
        this.renameFile(filePath, `${pascalName}${ext}`);
      }
    }
    
    // 2. Fix test file naming to match component naming
    const testFiles = await this.getFiles('**/*.{test,spec}.{ts,tsx}');
    
    for (const filePath of testFiles) {
      const fileName = path.basename(filePath);
      const ext = path.extname(filePath);
      const baseName = path.basename(fileName, ext);
      
      // If it's a component test with kebab-case
      if (baseName.includes('-') && (baseName.includes('.test') || baseName.includes('.spec'))) {
        // Extract the component name part
        const parts = baseName.split('.');
        const componentName = parts[0];
        const testPart = parts.slice(1).join('.');
        
        // Convert to PascalCase
        const pascalName = this.kebabToPascalCase(componentName);
        this.renameFile(filePath, `${pascalName}.${testPart}${ext}`);
      }
    }
    
    // 3. Standardize GraphQL fragment file naming
    const fragmentFiles = await this.getFiles('lib/graphql/fragments/**/*Fragment*');
    
    for (const filePath of fragmentFiles) {
      const fileName = path.basename(filePath);
      const ext = path.extname(filePath);
      const baseName = path.basename(fileName, ext);
      
      // Ensure PascalCase for fragment names
      if (baseName.includes('-')) {
        const pascalName = this.kebabToPascalCase(baseName);
        this.renameFile(filePath, `${pascalName}${ext}`);
      }
      
      // Ensure proper casing for .ts exports of fragments
      if (ext === '.ts' && baseName.charAt(0) !== baseName.charAt(0).toLowerCase()) {
        const camelName = baseName.charAt(0).toLowerCase() + baseName.slice(1);
        this.renameFile(filePath, `${camelName}${ext}`);
      }
    }
    
    // 4. Standardize hook naming (ensure camelCase)
    const hookFiles = await this.getFiles('lib/hooks/**/*.ts');
    
    for (const filePath of hookFiles) {
      const fileName = path.basename(filePath);
      const ext = path.extname(filePath);
      const baseName = path.basename(fileName, ext);
      
      // Skip test files and index files
      if (baseName.includes('.test') || baseName.includes('.spec') || baseName === 'index') {
        continue;
      }
      
      // If it's a hook with kebab-case instead of camelCase
      if (baseName.startsWith('use') && baseName.includes('-')) {
        const camelName = baseName
          .split('-')
          .map((part, index) => 
            index === 0 ? part : part.charAt(0).toUpperCase() + part.slice(1)
          )
          .join('');
        
        this.renameFile(filePath, `${camelName}${ext}`);
      }
    }
    
    log(`✅ Completed naming standardization`, 'green');
  }
  
  /**
   * Phase 2: Reorganize GraphQL files
   */
  async reorganizeGraphQL(): Promise<void> {
    if (!this.shouldRunPhase('graphql')) return;
    
    log('\n📊 Phase 2: Reorganizing GraphQL files...', 'magenta');
    
    // 1. Ensure proper directory structure
    const graphqlDirs = [
      'lib/graphql/queries',
      'lib/graphql/mutations',
      'lib/graphql/fragments',
      'lib/graphql/subscriptions',
      'lib/graphql/generated'
    ];
    
    for (const dir of graphqlDirs) {
      this.ensureDirectoryExists(dir);
    }
    
    // 2. Domain-specific subdirectories for better organization
    const domainDirs = [
      'clients',
      'payrolls',
      'staff',
      'leave',
      'holidays',
      'payroll_cycles',
      'payroll_dates',
      'adjustment_rules',
      'work_schedule',
      'notes',
      'app_settings',
      'feature_flags'
    ];
    
    // Create domain subdirectories in queries and mutations
    for (const domainDir of domainDirs) {
      this.ensureDirectoryExists(`lib/graphql/queries/${domainDir}`);
      this.ensureDirectoryExists(`lib/graphql/mutations/${domainDir}`);
    }
    
    // 3. Move root-level GraphQL files to appropriate directories
    const rootGraphQLFiles = await this.getFiles('lib/graphql/*.graphql');
    
    for (const filePath of rootGraphQLFiles) {
      const fileName = path.basename(filePath);
      
      // Determine the type of operation
      let operationType = 'queries';
      if (
        fileName.startsWith('Create') || 
        fileName.startsWith('Update') || 
        fileName.startsWith('Delete') || 
        fileName.startsWith('Insert') || 
        fileName.startsWith('Sync')
      ) {
        operationType = 'mutations';
      }
      
      // Skip fragment files (we'll handle them separately)
      if (fileName.includes('Fragment')) {
        continue;
      }
      
      // Determine the domain
      let domain = 'other';
      for (const domainDir of domainDirs) {
        const singularDomain = domainDir.endsWith('s') ? 
          domainDir.slice(0, -1) : domainDir;
        
        if (
          fileName.includes(this.kebabToPascalCase(domainDir)) || 
          fileName.includes(this.kebabToPascalCase(singularDomain))
        ) {
          domain = domainDir;
          break;
        }
      }
      
      // Move the file to the appropriate directory
      const targetDir = `lib/graphql/${operationType}/${domain}`;
      this.ensureDirectoryExists(targetDir);
      
      const targetPath = path.join(this.rootDir, targetDir, fileName);
      this.moveFile(filePath, targetPath);
    }
    
    // 4. Fix fragment naming and location
    const fragmentFiles = await this.getFiles('lib/graphql/fragments/*');
    
    for (const filePath of fragmentFiles) {
      const fileName = path.basename(filePath);
      const ext = path.extname(filePath);
      
      // Skip barrel files
      if (fileName === 'index.ts') continue;
      
      // Make sure .ts files match their .graphql counterparts
      if (ext === '.ts') {
        const baseName = path.basename(fileName, ext);
        
        // If it's not already camelCase, fix it
        if (baseName.charAt(0) !== baseName.charAt(0).toLowerCase()) {
          const camelName = baseName.charAt(0).toLowerCase() + baseName.slice(1);
          this.renameFile(filePath, `${camelName}${ext}`);
        }
        
        // Make sure there's a corresponding .graphql file
        const graphqlFileName = baseName.charAt(0).toUpperCase() + baseName.slice(1);
        const graphqlPath = path.join(path.dirname(filePath), `${graphqlFileName}.graphql`);
        
        // Flag if missing corresponding .graphql file
        if (!fs.existsSync(graphqlPath)) {
          this.flagForReview(filePath, 'Missing corresponding .graphql file');
        }
      } 
      // For .graphql fragment files
      else if (ext === '.graphql') {
        const baseName = path.basename(fileName, ext);
        
        // Make sure there's a corresponding .ts file (camelCase)
        const tsFileName = baseName.charAt(0).toLowerCase() + baseName.slice(1);
        const tsPath = path.join(path.dirname(filePath), `${tsFileName}.ts`);
        
        // Flag if missing corresponding .ts file
        if (!fs.existsSync(tsPath)) {
          this.flagForReview(filePath, 'Missing corresponding .ts file');
        }
      }
    }
    
    // 5. Update barrel files for GraphQL directories
    this.updateBarrelFile('lib/graphql/fragments');
    this.updateBarrelFile('lib/graphql/queries');
    this.updateBarrelFile('lib/graphql/mutations');
    
    // Update domain-specific barrel files
    for (const domainDir of domainDirs) {
      this.updateBarrelFile(`lib/graphql/queries/${domainDir}`);
      this.updateBarrelFile(`lib/graphql/mutations/${domainDir}`);
    }
    
    log(`✅ Completed GraphQL reorganization`, 'green');
  }
  
  /**
   * Phase 3: Improve hooks organization
   */
  async reorganizeHooks(): Promise<void> {
    if (!this.shouldRunPhase('hooks')) return;
    
    log('\n🪝 Phase 3: Reorganizing hooks...', 'magenta');
    
    // 1. Create proper directory structure for hooks
    const hookDirs = [
      'lib/hooks/api',
      'lib/hooks/ui',
      'lib/hooks/utils',
      'lib/hooks/entity'
    ];
    
    for (const dir of hookDirs) {
      this.ensureDirectoryExists(dir);
    }
    
    // 2. Categorize hooks by their domain/purpose
    const hookCategories = {
      'lib/hooks/entity': [
        'useClient', 
        'usePayroll', 
        'useStaff', 
        'useLeave',
        'useWorkSchedule',
        'useNote',
        'useNotes',
        'useAdjustmentRule',
        'useAdjustmentRules',
        'useHolidays'
      ],
      'lib/hooks/api': [
        'useApolloQuery', 
        'useAuth', 
        'useDataRefresh',
        'usePolledQuery',
        'usePolling',
        'useClientQueries',
        'usePayrollQueries',
        'useUsers',
        'useUserRole'
      ],
      'lib/hooks/ui': [
        'useForm', 
        'useDisclosure', 
        'useMediaQuery',
        'useToggle',
        'useModal'
      ],
      'lib/hooks/utils': [
        'useDebounce', 
        'useLocalStorage', 
        'useSubscription',
        'useDataFetching',
        'useCacheInvalidation'
      ]
    };
    
    // 3. Get all hook files
    const hookFiles = await this.getFiles('lib/hooks/**/*.ts');
    
    // 4. Move hooks to appropriate directories
    for (const filePath of hookFiles) {
      const fileName = path.basename(filePath);
      const dirName = path.dirname(filePath);
      const currentDir = path.relative(this.rootDir, dirName);
      
      // Skip if it's already in a subdirectory and it's an index file
      if (
        fileName === 'index.ts' && 
        (currentDir === 'lib/hooks/api' || 
         currentDir === 'lib/hooks/ui' || 
         currentDir === 'lib/hooks/utils' || 
         currentDir === 'lib/hooks/entity')
      ) {
        continue;
      }
      
      // Skip test files, they'll follow their implementation
      if (fileName.includes('.test.') || fileName.includes('.spec.')) {
        continue;
      }
      
      // Find the appropriate category for this hook
      let targetDir = 'lib/hooks';
      for (const [dir, hookPatterns] of Object.entries(hookCategories)) {
        for (const pattern of hookPatterns) {
          if (fileName.startsWith(pattern) || fileName.includes(pattern)) {
            targetDir = dir;
            break;
          }
        }
        if (targetDir !== 'lib/hooks') break;
      }
      
      // Skip if it's already in the right directory
      if (currentDir === targetDir) continue;
      
      // Move hook to the appropriate directory
      const targetPath = path.join(this.rootDir, targetDir, fileName);
      this.moveFile(filePath, targetPath);
      
      // Move associated test files
      const testFileBase = path.basename(fileName, '.ts');
      const testFilePath = path.join(dirName, `${testFileBase}.test.ts`);
      const testSpecPath = path.join(dirName, `${testFileBase}.spec.ts`);
      
      if (fs.existsSync(testFilePath)) {
        const targetTestPath = path.join(this.rootDir, targetDir, `${testFileBase}.test.ts`);
        this.moveFile(testFilePath, targetTestPath);
      }
      
      if (fs.existsSync(testSpecPath)) {
        const targetSpecPath = path.join(this.rootDir, targetDir, `${testFileBase}.spec.ts`);
        this.moveFile(testSpecPath, targetSpecPath);
      }
    }
    
    // 5. Update barrel files for hook directories
    this.updateBarrelFile('lib/hooks');
    this.updateBarrelFile('lib/hooks/api');
    this.updateBarrelFile('lib/hooks/ui');
    this.updateBarrelFile('lib/hooks/utils');
    this.updateBarrelFile('lib/hooks/entity');
    
    log(`✅ Completed hooks reorganization`, 'green');
  }
  
  /**
   * Phase 4: Clean up redundant files
   */
  async cleanupRedundantFiles(): Promise<void> {
    if (!this.shouldRunPhase('redundant')) return;
    
    log('\n🧹 Phase 4: Cleaning up redundant files...', 'magenta');
    
    // 1. Identify potentially redundant files
    const redundantPatterns = [
      // Multiple client/API implementations
      'lib/api/*client*.{ts,tsx}',
      
      // Backup files
      '**/*.{bak,old,original}',
      
      // Duplicate components with variant naming
      'components/**/index.{js,jsx}', // In TypeScript project, likely legacy
      
      // Draft or temp files
      '**/*.{draft,temp,tmp}',
      
      // Unused configuration
      'config/**/*.disabled.{js,ts,json}',
      
      // Legacy files
      '**/*.legacy.{ts,tsx,js,jsx}'
    ];
    
    // 2. Process each pattern and flag files for review
    for (const pattern of redundantPatterns) {
      const files = await this.getFiles(pattern);
      
      log(`Found ${files.length} potential redundant files matching: ${pattern}`, 'blue', 1);
      
      for (const filePath of files) {
        const relativePath = path.relative(this.rootDir, filePath);
        
        // For API client files, keep only the canonical versions
        if (pattern.includes('client')) {
          // Keep only the .client.ts and .server.ts files, flag others
          if (!filePath.includes('.client.ts') && !filePath.includes('.server.ts')) {
            this.flagForReview(filePath, `Potential redundant API client implementation. Keep only .client.ts and .server.ts versions.`);
          }
          continue;
        }
        
        // For other files, flag all matching the patterns
        this.flagForReview(filePath, `Matches redundant pattern: ${pattern}`);
      }
    }
    
    // 3. Clean up empty directories
    this.cleanEmptyDirs('components');
    this.cleanEmptyDirs('lib');
    
    log(`✅ Completed redundant files cleanup`, 'green');
  }
  
  /**
   * Recursively clean up empty directories
   */
  cleanEmptyDirs(startDir: string): void {
    const fullPath = path.join(this.rootDir, startDir);
    
    if (!fs.existsSync(fullPath)) return;
    
    // Get all subdirectories
    const items = fs.readdirSync(fullPath);
    
    // First, recurse into subdirectories
    for (const item of items) {
      const itemPath = path.join(fullPath, item);
      const stat = fs.statSync(itemPath);
      
      if (stat.isDirectory()) {
        this.cleanEmptyDirs(path.join(startDir, item));
      }
    }
    
    // Now check if this directory is empty
    const updatedItems = fs.readdirSync(fullPath);
    if (updatedItems.length === 0) {
      if (this.dryRun) {
        log(`Would remove empty directory: ${startDir}`, 'yellow', 1);
      } else {
        try {
          fs.rmdirSync(fullPath);
          log(`Removed empty directory: ${startDir}`, 'green', 1);
        } catch (error) {
          log(`Failed to remove directory: ${error.message}`, 'red', 1);
        }
      }
    }
  }
  
  /**
   * Phase 5: Create or update barrel files
   */
  async createBarrelFiles(): Promise<void> {
    if (!this.shouldRunPhase('barrels')) return;
    
    log('\n📦 Phase 5: Creating/updating barrel files...', 'magenta');
    
    // 1. Define directories that should have barrel files
    const barrelDirs = [
      'components/ui',
      'components/payroll',
      'components/client',
      'components/common',
      'components/forms',
      'components/layout',
      'components/providers',
      'components/dialogs',
      'lib/hooks',
      'lib/hooks/api',
      'lib/hooks/ui',
      'lib/hooks/utils',
      'lib/hooks/entity',
      'lib/utils',
      'lib/auth',
      'lib/api',
      'lib/services',
      'lib/graphql/queries',
      'lib/graphql/mutations',
      'lib/graphql/fragments',
      'types'
    ];
    
    // 2. Update all barrel files
    for (const dir of barrelDirs) {
      if (fs.existsSync(path.join(this.rootDir, dir))) {
        this.updateBarrelFile(dir);
      }
    }
    
    // 3. Create root barrel files for key directories
    this.createRootBarrels();
    
    log(`✅ Completed barrel file updates`, 'green');
  }
  
  /**
   * Create root-level barrel files for key directories
   */
  createRootBarrels(): void {
    // Create components/index.ts that exports from subdirectories
    const componentDirs = [
      'ui',
      'payroll',
      'client',
      'common',
      'forms',
      'layout',
      'providers',
      'dialogs'
    ];
    
    this.createRootBarrel('components', componentDirs);
    
    // Create lib/index.ts that exports from subdirectories
    const libDirs = [
      'hooks',
      'utils',
      'auth',
      'api',
      'services',
      'graphql'
    ];
    
    this.createRootBarrel('lib', libDirs);
    
    // Create lib/hooks/index.ts that exports from subdirectories
    const hookDirs = [
      'api',
      'ui',
      'utils',
      'entity'
    ];
    
    this.createRootBarrel('lib/hooks', hookDirs);
  }
  
  /**
   * Create a root barrel file that exports from subdirectories
   */
  createRootBarrel(dirPath: string, subdirs: string[]): boolean {
    const barrelPath = path.join(this.rootDir, dirPath, 'index.ts');
    
    // Build content
    let barrelContent = `/**
 * ${path.basename(dirPath)} - Root barrel file
 * Generated by project-cleanup script
 */

`;
    
    // Add exports for subdirectories
    for (const subdir of subdirs) {
      const subdirPath = path.join(this.rootDir, dirPath, subdir);
      
      // Only include directories that exist and have an index.ts
      if (fs.existsSync(subdirPath) && fs.existsSync(path.join(subdirPath, 'index.ts'))) {
        barrelContent += `export * from './${subdir}';\n`;
      }
    }
    
    if (this.dryRun) {
      log(`Would create root barrel file: ${dirPath}/index.ts`, 'yellow', 1);
      if (this.verbose) {
        log(`Barrel content would be:\n${barrelContent}`, 'gray', 2);
      }
      return true;
    }
    
    try {
      fs.writeFileSync(barrelPath, barrelContent);
      log(`Created root barrel file: ${dirPath}/index.ts`, 'green', 1);
      this.stats.updatedBarrels++;
      this.logs.updatedBarrels.push(`ROOT BARREL: ${dirPath}/index.ts - Created with exports from ${subdirs.length} subdirectories`);
      return true;
    } catch (error) {
      log(`Failed to create root barrel file: ${error.message}`, 'red', 1);
      return false;
    }
  }
  
  /**
   * Phase 6: Update imports for moved files
   */
  async updateImports(): Promise<void> {
    if (!this.shouldRunPhase('imports') || this.dryRun) return;
    
    log('\n🔄 Phase 6: Updating imports for moved files...', 'magenta');
    
    // Skip in dry run mode since we didn't actually move files
    if (this.dryRun) {
      log(`Would update imports for ${Object.keys(this.fileMoves).length} moved files (skipped in dry run)`, 'yellow', 1);
      return;
    }
    
    // If no files were moved, skip
    if (Object.keys(this.fileMoves).length === 0) {
      log(`No files were moved, skipping import updates`, 'gray', 1);
      return;
    }
    
    // 1. Create a temporary file with file moves mapping
    const tempMappingFile = path.join(this.rootDir, 'temp-file-moves.json');
    fs.writeFileSync(tempMappingFile, JSON.stringify(this.fileMoves, null, 2));
    
    try {
      // 2. Run import updater script
      log(`Running import updater for ${Object.keys(this.fileMoves).length} moved files...`, 'blue', 1);
      
      // Create or update the import mappings file for the import fixer
      const importMappingsFile = path.join(this.rootDir, 'scripts/import-mappings.json');
      fs.writeFileSync(importMappingsFile, JSON.stringify(this.fileMoves, null, 2));
      
      // Run the import fixer script
      execSync('node scripts/fix-imports-enhanced.js', { 
        cwd: this.rootDir,
        stdio: this.verbose ? 'inherit' : 'pipe'
      });
      
      this.stats.fixedImports = Object.keys(this.fileMoves).length;
      log(`✅ Updated imports for ${this.stats.fixedImports} files`, 'green', 1);
    } catch (error) {
      log(`Error updating imports: ${error.message}`, 'red', 1);
    } finally {
      // Clean up temp file
      if (fs.existsSync(tempMappingFile)) {
        fs.unlinkSync(tempMappingFile);
      }
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
        const logPath = path.join(this.rootDir, 'logs', `${logType}.txt`);
        fs.writeFileSync(logPath, entries.join('\n'), 'utf-8');
        log(`Wrote ${entries.length} entries to logs/${logType}.txt`, 'green', 1);
      }
    }
    
    // Write a summary file
    const summaryPath = path.join(this.rootDir, 'logs', 'cleanup-summary.txt');
    const summaryContent = `
PAYROLL-BYTEMY PROJECT CLEANUP SUMMARY
=====================================
Date: ${new Date().toISOString()}
Mode: ${this.dryRun ? 'DRY RUN' : 'EXECUTION'}

ACTIONS:
- Files renamed: ${this.stats.renamedFiles}
- Files moved: ${this.stats.movedFiles}
- Directories created: ${this.stats.createdDirectories}
- Barrel files updated: ${this.stats.updatedBarrels}
- Imports fixed: ${this.stats.fixedImports}
- Files flagged for review: ${this.stats.reviewFlagged}

See individual log files for details.
`;
    
    fs.writeFileSync(summaryPath, summaryContent, 'utf-8');
    log(`Wrote summary to logs/cleanup-summary.txt`, 'green', 1);
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
      // Ensure required directories
      this.ensureDirectoryExists('_cleanup/review');
      this.ensureDirectoryExists('logs');
      
      // Run all phases
      await this.standardizeNaming();
      await this.reorganizeGraphQL();
      await this.reorganizeHooks();
      await this.cleanupRedundantFiles();
      await this.createBarrelFiles();
      await this.updateImports();
      
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
  process.exit(exitCode);
}

// Run the script
main().catch(err => {
  console.error('Unhandled error:', err);
  process.exit(1);
});