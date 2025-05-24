#!/usr/bin/env ts-node

import fs from 'fs';
import path from 'path';

const ROOT = process.argv[2] || '.';
const OUTPUT = process.argv[3] || 'project_structure.txt';

const EXCLUDE_DIRS = new Set([
  'node_modules', '.next', '.turbo', '.git', 'dist', 'out', '.vercel'
]);

function walk(dir: string, indent: string = ''): string {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
    .filter(e => !EXCLUDE_DIRS.has(e.name))
    .sort((a, b) => a.name.localeCompare(b.name));

  return entries.map(entry => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      return `${indent}${entry.name}/\n` + walk(fullPath, indent + '  ');
    } else {
      return `${indent}${entry.name}`;
    }
  }).join('\n');
}

console.log(`📁 Generating file structure for: ${ROOT}`);
const structure = walk(ROOT);
fs.writeFileSync(OUTPUT, structure);
console.log(`✅ File structure saved to: ${OUTPUT}`);
