#!/bin/bash

echo "Checking for direct imports that could use barrel files..."

# Check for direct imports that could use barrel files
echo "API imports:"
grep -r "from ['\"]@/lib/api/" --include="*.ts" --include="*.tsx" ./app ./components

echo "Auth imports:"
grep -r "from ['\"]@/lib/auth/" --include="*.ts" --include="*.tsx" ./app ./components

echo "Services imports:"
grep -r "from ['\"]@/lib/services/" --include="*.ts" --include="*.tsx" ./app ./components

echo "Utils imports:"
grep -r "from ['\"]@/lib/utils/" --include="*.ts" --include="*.tsx" ./app ./components

echo "Hooks imports:"
grep -r "from ['\"]@/lib/hooks/" --include="*.ts" --include="*.tsx" ./app ./components

echo "Check complete. Consider standardizing imports to use barrel files where possible."
