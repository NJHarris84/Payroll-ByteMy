#!/bin/bash

echo "Standardizing import paths..."

# Fix auth imports
find . -type f -name "*.ts" -o -name "*.tsx" | xargs sed -i '' 's|@/lib/auth/auth/roles|@/lib/auth/roles|g'

# Fix utilities imports
find . -type f -name "*.ts" -o -name "*.tsx" | xargs sed -i '' 's|from "./utils"|from "@/lib/utils"|g'
find . -type f -name "*.ts" -o -name "*.tsx" | xargs sed -i '' 's|from "./date-utils"|from "@/lib/utils/date-utils"|g'

# Fix db imports
find . -type f -name "*.ts" -o -name "*.tsx" | xargs sed -i '' 's|from "./db"|from "@/lib/db"|g'

# Fix schema imports
find . -type f -name "*.ts" -o -name "*.tsx" | xargs sed -i '' 's|from "@/lib/schema"|from "@/drizzle/schema"|g'

echo "Import paths standardized!"