#!/bin/bash

echo "🔍 Migrating from next-auth to Clerk..."

# Set root directory relative to this script
ROOT_DIR=$(dirname "$0")/..

# Search .ts and .tsx files, excluding node_modules, .next, .git
find "$ROOT_DIR" -type f \( -name "*.ts" -o -name "*.tsx" \) \
  -not -path "*/node_modules/*" \
  -not -path "*/.next/*" \
  -not -path "*/.git/*" \
| while read -r file; do
  if grep -q "next-auth/react" "$file"; then
    echo "🔧 Updating imports in $file"

    # Replace import path
    sed -i '' 's|from "next-auth/react"|from "@clerk/nextjs"|g' "$file"

    # Replace useSession with useUser
    sed -i '' 's|\<useSession\>|useUser|g' "$file"

    # Replace session.user with user.*
    sed -i '' 's|session\.user\.|user.|g' "$file"
    sed -i '' 's|session?.user?.|user?.|g' "$file"
  fi
done

# Remove next-auth from package.json
if grep -q '"next-auth"' "$ROOT_DIR/package.json"; then
  echo "🧹 Removing next-auth from package.json..."
  cd "$ROOT_DIR" && pnpm remove next-auth
else
  echo "✅ No next-auth entry found in package.json."
fi

echo "🎉 Migration complete! Review the changes to ensure everything looks correct."
