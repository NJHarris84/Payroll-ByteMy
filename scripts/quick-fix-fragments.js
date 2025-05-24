#!/usr/bin/env node
// Quick fix for the specific PayrollFragment issue

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

async function fixPayrollFragmentImports() {
  console.log('🔧 Quick fix for PayrollFragment imports...');
  
  // Find all generated files that use PayrollFragment
  const files = await glob('lib/graphql/**/*.generated.ts', { absolute: true });
  
  for (const filePath of files) {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file uses PayrollFragment but doesn't import it
    if (content.includes('${PayrollFragment}') && !content.includes('import') || !content.includes('PayrollFragment')) {
      console.log(`Fixing: ${path.relative(process.cwd(), filePath)}`);
      
      // Find the PayrollFragment file
      const dir = path.dirname(filePath);
      const possiblePaths = [
        path.join(dir, 'payrollFragment.ts'),
        path.join(path.dirname(dir), 'fragments', 'payrollFragment.ts'),
        path.join(process.cwd(), 'lib/graphql/fragments/payrollFragment.ts')
      ];
      
      let importPath = null;
      for (const possiblePath of possiblePaths) {
        if (fs.existsSync(possiblePath)) {
          const relativePath = path.relative(path.dirname(filePath), path.dirname(possiblePath));
          importPath = relativePath.startsWith('.') ? relativePath : `./${relativePath}`;
          break;
        }
      }
      
      if (importPath) {
        // Add import at the top
        const lines = content.split('\n');
        let insertIndex = 0;
        
        // Find where to insert (after existing imports)
        for (let i = 0; i < lines.length; i++) {
          if (lines[i].trim().startsWith('import ')) {
            insertIndex = i + 1;
          }
        }
        
        lines.splice(insertIndex, 0, `import { PAYROLL_FRAGMENT } from '${importPath}';`);
        
        // Replace PayrollFragment with PAYROLL_FRAGMENT in template
        const updatedContent = lines.join('\n').replace(/\${PayrollFragment}/g, '${PAYROLL_FRAGMENT}');
        
        fs.writeFileSync(filePath, updatedContent);
        console.log(`  ✅ Fixed PayrollFragment import`);
      } else {
        console.log(`  ⚠️  Could not find PayrollFragment source file`);
      }
    }
  }
}

fixPayrollFragmentImports().catch(console.error);
