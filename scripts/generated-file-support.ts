// === Enhancement: Handle .generated.ts files ===

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

/**
 * Moves .generated.ts files alongside their parent .ts files.
 */
export async function moveGeneratedFiles(baseDir: string) {
  const allTsFiles = await glob(`${baseDir}/**/*.ts`, {

    ignore: ['**/node_modules/**', '**/.next/**', '**/.turbo/**', '**/dist/**', '**/out/**'],
    nodir: true,
  })

  for (const file of allTsFiles) {
    if (file.endsWith('.generated.ts')) continue // only move base files

    const dir = path.dirname(file)
    const basename = path.basename(file, '.ts')
    const generatedFile = path.join(dir, `${basename}.generated.ts`)
    if (fs.existsSync(generatedFile)) {
      const relative = path.relative(baseDir, file)
      const newDir = path.join(baseDir, path.dirname(relative))
      const newGeneratedPath = path.join(newDir, `${basename}.generated.ts`)

      if (!fs.existsSync(newDir)) fs.mkdirSync(newDir, { recursive: true })
      fs.renameSync(generatedFile, newGeneratedPath)
      console.log(`🧬 Moved generated file: ${generatedFile} → ${newGeneratedPath}`)
    }
  }
}
/**
 * Appends exports of .generated.ts constants to index.ts files.
 */
export async function appendGeneratedToBarrels(baseDir: string) {
  const generatedFiles = await glob(`${baseDir}/**/*.generated.ts`, {
    ignore: ['**/node_modules/**', '**/.next/**', '**/.turbo/**', '**/dist/**', '**/out/**'],
    nodir: true,
  });

  const indexMap: Record<string, string[]> = {};

  for (const file of generatedFiles) {
    const dir = path.dirname(file);
    const exportPath = './' + path.basename(file, '.ts');
    if (!indexMap[dir]) indexMap[dir] = [];
    indexMap[dir].push(`export * from '${exportPath}'`);
  }

  for (const [dir, exports] of Object.entries(indexMap)) {
    const indexFile = path.join(dir, 'index.ts');
    const existing = fs.existsSync(indexFile) ? fs.readFileSync(indexFile, 'utf-8') : '';
    const updated = [...new Set([...existing.split('\n'), ...exports])].join('\n').trim();
    fs.writeFileSync(indexFile, updated + '\n');
    console.log(`🔗 Updated barrel: ${indexFile}`);
  }
}