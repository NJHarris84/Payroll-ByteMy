#!/bin/bash

mkdir -p cleanup

# List of files to move
files_to_move=(
  "auth-debug.txt"
  "file-list.txt"
  "text.txt"
  "tree-structure.txt"
  "users.txt"
  "list_tables.sql"
  "neon_db_schema1.sql"
  "schema_reference.txt"
  "schema.json"
  "components.json"
  "PayCalculator-Logic.md"
  "typescript-exports.md"
  "update-imports.js"
  "Database & Hasura Integration: Technical Overview.md"
  "graphql-import-updates.md"
)

# List of folders to move
folders_to_move=(
  "scripts"
  "test"
  "permissions"
)

# Find and move all .bak files anywhere in the repo
find . -type f -name "*.bak" ! -path "./cleanup/*" -exec mv {} cleanup/ \;

# Move files
for f in "${files_to_move[@]}"; do
  if [ -e "$f" ]; then
    mv "$f" cleanup/
  fi
done

# Move folders
for d in "${folders_to_move[@]}"; do
  if [ -d "$d" ]; then
    mv "$d" cleanup/
  fi
done

echo "All legacy/backup/unneeded files and folders moved to /cleanup/"
