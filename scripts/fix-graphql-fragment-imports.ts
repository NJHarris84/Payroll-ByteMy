#!/usr/bin/env ts-node

import fs from 'fs';
import path from 'path';
import {glob} from 'glob';

const FRAGMENTS_DIR = 'lib/graphql/fragments';
const GENERATED_SUFFIX = '.generated.ts';

glob(`${FRAGMENTS_DIR}/*${GENERATED_SUFFIX}`, (err, files) => {
  if (err) throw err;

  files.forEach(filePath => {
    let content = fs.readFileSync(filePath, 'utf-8');

    // Find all fragment usages: ...PayrollFragment, ...ClientFragment, etc.
    const usedFragments = Array.from(
      content.matchAll(/\.\.\.(\w+Fragment)\b/g)
    ).map(m => m[1]);

    // Find already imported fragments
    const existingImports = Array.from(
      content.matchAll(/import\s+\{\s*(\w+)\s*\}\s+from\s+['"](.*)['"]/g)
    ).map(m => m[1]);

    const missingImports = usedFragments.filter(name => !existingImports.includes(name));
    if (missingImports.length === 0) return;

    const currentFileName = path.basename(filePath, GENERATED_SUFFIX);

    const importLines = missingImports
      .filter(name => name !== currentFileName) // avoid self-import
      .map(name => {
        const importPath = `./${name}.generated`;
        return `import { ${name} } from '${importPath}';`;
      })
      .join('\n');

    // Clean up incorrect `${XFragmentFragmentDoc}` usages
    content = content.replace(/\$\{(\w+Fragment)FragmentDoc\}/g, '${$1}');

    // Insert imports at the top (after first block of existing imports if any)
    const insertIndex = content.indexOf('import');
    const firstNonImportIndex = content.search(/^((?!import).)+$/m);
    const splitPoint = firstNonImportIndex > insertIndex ? firstNonImportIndex : content.indexOf('\n\n');

    const updatedContent =
      content.slice(0, splitPoint).trim() +
      '\n' +
      importLines +
      '\n\n' +
      content.slice(splitPoint).trimStart();

    fs.writeFileSync(filePath, updatedContent, 'utf-8');
    console.log(`✅ Fixed imports in: ${filePath}`);
  });
});
