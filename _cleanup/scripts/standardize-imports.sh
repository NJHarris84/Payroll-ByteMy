#!/bin/zsh

echo "🔄 Starting import generalisation using barrel files..."

# List all index.ts files under lib/
for index in $(find ./lib -type f -name "index.ts"); do
  dir=$(dirname "$index")
  import_base="@${dir#./}"

  echo "📁 Processing barrel file: $index"
  echo "   → Import base path: $import_base"

  # For each sibling file (not index.ts)
  for file in "$dir"/*.ts "$dir"/*.tsx; do
    [ "$file" = "$index" ] && continue
    base=$(basename "$file" .ts)
    base=${base%.tsx}

    echo "   🔧 Replacing imports of: $import_base/$base → $import_base"

    # Replace imports of this file with the barrel import
    find . -type f \( -name "*.ts" -o -name "*.tsx" \) -exec sed -i '' "s|$import_base/$base|$import_base|g" {} +
  done
done

echo "✅ Imports have been generalised to use barrel files where possible."
