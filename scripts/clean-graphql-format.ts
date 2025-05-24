#!/usr/bin/env ts-node

import fs from 'fs'
import path from 'path'
import * as glob from 'glob'

const ROOT = 'lib/graphql'

// Utility to convert camelCase or PascalCase to UPPER_SNAKE_CASE
function toUpperSnakeCase(name: string): string {
  return name.replace(/([a-z])([A-Z])/g, '$1_$2')
             .replace(/([A-Z])([A-Z][a-z])/g, '$1_$2')
             .toUpperCase()
}

// Utility to determine if it's a fragment file
function isFragmentFile(filename: string): boolean {
  return filename.toLowerCase().includes('fragment')
}

// Fixed function to handle export type names correctly
function typeExportFix(content: string): string {
  // First, preserve original variable types by temporarily marking them
  let preservedContent = content.replace(
    /(export type )([A-Z][a-zA-Z0-9]+?)(Query|Mutation|Subscription)(Variables\b)/g,
    "$1##PRESERVE##$2$3$4"
  );
  
  // Then perform the normal transformation on non-Variables types
  preservedContent = preservedContent.replace(
    /export type ([A-Z][a-zA-Z0-9]+?)(Query|Mutation|Subscription)([A-Z][a-zA-Z0-9]*)?(?!Variables\b)\b/g,
    (_match, p1, opType, suffix = '') => {
      const opName = `${p1}_${opType}`;
      const transformed = `export type ${toUpperSnakeCase(opName)}${suffix}`;
      return transformed;
    }
  );
  
  // Finally, restore the marked variable types to their original format
  return preservedContent.replace(
    /export type ##PRESERVE##([A-Z][a-zA-Z0-9]+?)(Query|Mutation|Subscription)(Variables\b)/g,
    "export type $1$2$3"
  );
}

// Fix duplicate Fragment in type definitions
function fixDuplicateFragmentInTypes(content: string): string {
  return content.replace(
    /export type ([A-Za-z0-9]+)FragmentFragment\b/g,
    "export type $1Fragment"
  );
}

// Rename files and refactor content
function processFile(file: string): { newName: string, updatedContent: string } {
  const originalContent = fs.readFileSync(file, 'utf-8')
  const ext = path.extname(file)
  const basename = path.basename(file, ext)
  let updatedContent = originalContent

  // Remove `FragmentFragmentDoc` and `Document` imports
  updatedContent = updatedContent.replace(/import\s+\{[^}]*?(FragmentFragmentDoc|Document)[^}]*\}\s+from\s+['"][^'"]+['"];?/g, '')

  // Remove `export const NAMEDocument = gql`
  updatedContent = updatedContent.replace(/export\s+const\s+(\w+Document)\s*=\s*gql`/g, (_match, p1) => {
    const name = p1.replace(/Document$/, '')
    return `export const ${toUpperSnakeCase(name)} = gql\``
  })

  // Rename fragment export const
  updatedContent = updatedContent.replace(/export\s+const\s+(\w+FragmentFragmentDoc)\s*=\s*gql`/g, (_match, p1) => {
    const name = p1.replace(/FragmentFragmentDoc$/, 'Fragment')
    return `export const ${toUpperSnakeCase(name)} = gql\``
  })

  // Fix fragment name inside gql string
  updatedContent = updatedContent.replace(/fragment\s+(\w+FragmentFragmentDoc|\w+Fragment)\s+on/g, (_match, name) => {
    const fixedName = name.replace(/FragmentFragmentDoc$/, '').replace(/Fragment$/, '')
    return `fragment ${fixedName.charAt(0).toUpperCase() + fixedName.slice(1)}Fragment on`
  })

  // Determine proper filename
  const newFileName = isFragmentFile(basename)
    ? `${basename.charAt(0).toUpperCase()}${basename.slice(1)}${ext}`
    : `${basename.charAt(0).toLowerCase()}${basename.slice(1)}${ext}`

  return { newName: newFileName, updatedContent }
}

// Update index.ts barrels
function updateIndexes(root: string) {
  const dirs = glob.sync(`${root}/**/`, { ignore: ['**/node_modules/**', '**/.next/**'] })
  for (const dir of dirs) {
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts') && f !== 'index.ts')
    const exports = files.map(f => `export * from './${f.replace(/\.ts$/, '')}'`).join('\n')
    fs.writeFileSync(path.join(dir, 'index.ts'), exports + '\n')
    console.log(`📦 Updated index.ts in ${dir}`)
  }
}

// Also fix any transformed Variable types that already exist in the file
function fixExistingTransformedVariables(content: string): string {
  return content.replace(
    /(export type )([A-Z_]+)(_QUERY|_MUTATION|_SUBSCRIPTION)(Variables\b)/g,
    (_match, p1, p2, p3, p4) => {
      // Convert UPPER_SNAKE_CASE back to PascalCase for variable types
      const baseName = p2.toLowerCase().split('_').map(part => 
        part.charAt(0).toUpperCase() + part.slice(1)
      ).join('');
      
      const opType = p3.toLowerCase().split('_')[1];
      const pascalOpType = opType.charAt(0).toUpperCase() + opType.slice(1);
      
      return `${p1}${baseName}${pascalOpType}${p4}`;
    }
  );
}

function run() {
  const changes: string[] = []

  const allFiles = glob.sync(`${ROOT}/**/*.ts`, { ignore: ['**/node_modules/**', '**/.next/**'] })

  for (const file of allFiles) {
    if (file.endsWith('index.ts')) continue

    const { newName, updatedContent } = processFile(file)
    const dir = path.dirname(file)
    const newPath = path.join(dir, newName)

    if (file !== newPath) {
      fs.renameSync(file, newPath); changes.push(`Renamed: ${file} → ${newPath}`)
      console.log(`✏️  Renamed ${path.basename(file)} → ${path.basename(newPath)}`)
    }

    // Apply all fixes in sequence
    let processedContent = typeExportFix(updatedContent);
    processedContent = fixExistingTransformedVariables(processedContent);
    processedContent = fixDuplicateFragmentInTypes(processedContent);
    
    fs.writeFileSync(newPath, processedContent); changes.push(`Updated content: ${newPath}`)
    console.log(`✅ Updated content in ${newPath}`)
  }

  updateIndexes(ROOT);

  // Create logs directory if it doesn't exist
  const logsDir = './logs';
  if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir, { recursive: true });
  }

  // Write detailed log to file
  const logPath = path.join('./logs', 'graphql-cleanup.log')
  fs.writeFileSync(logPath, changes.join('\n') + '\n')
  console.log(`📝 Change log saved to: ${logPath}`)
  console.log(`✅ ${changes.length} change(s) made.`)
}

run()