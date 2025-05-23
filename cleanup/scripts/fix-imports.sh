#!/bin/bash

# fix-imports.sh
#
# This script standardizes imports across the codebase to use "@/lib/" format
# It searches for all TypeScript and JavaScript files and updates the imports

# Text colors
GREEN='\033[0;32m'
RED='\033[0;31m'
BLUE='\033[0;34m'
YELLOW='\033[0;33m'
NC='\033[0m' # No Color

# Configuration - use quotes to handle spaces in paths
ROOT_DIR="$(pwd)" # Run from project root
LIB_DIR="$ROOT_DIR/lib"
BACKUP_DIR="$ROOT_DIR/import-fix-backups"
mkdir -p "$BACKUP_DIR"

# File extensions to process
FILE_EXTENSIONS=("ts" "tsx" "js" "jsx")

# Directories to ignore
IGNORE_DIRS=("node_modules" ".next" "out" "dist" "build" "import-fix-backups")

# Track statistics
FILES_PROCESSED=0
FILES_MODIFIED=0
TOTAL_IMPORTS_FIXED=0

echo -e "${BLUE}🔍 Scanning for files to process...${NC}"

# Function to check if a directory should be ignored
should_ignore_dir() {
  local dir_path="$1"
  for ignore_dir in "${IGNORE_DIRS[@]}"; do
    if [[ "$dir_path" == *"/$ignore_dir"* || "$dir_path" == *"/$ignore_dir/"* ]]; then
      return 0 # True, should ignore
    fi
  done
  return 1 # False, should not ignore
}

# Function to process a single file
process_file() {
  local file="$1"
  local relative_path="${file#$ROOT_DIR/}"
  local imports_fixed=0
  local file_modified=0
  
  # Skip files in ignored directories
  if should_ignore_dir "$file"; then
    return
  fi
  
  # Make a backup of the file
  local backup_path="${file}.bak"
  cp "$file" "$backup_path" 2>/dev/null
  
  # Pattern 1: Fix relative imports to lib
  # Example: from '../lib/utils' to from '@/lib/utils'
  if grep -q "from ['\"]\\.\\.\/.*lib\/" "$file" 2>/dev/null; then
    sed -i.tmp -E "s/from ['\"](\\.\\.\/)+lib\/([^'\"]+)['\"]([;]?)/from \"@\/lib\/\2\"\3/g" "$file" 2>/dev/null
    imports_fixed=$((imports_fixed + 1))
    file_modified=1
  fi
  
  # Pattern 2: Fix single-quoted @/lib imports
  # Example: from '@/lib/utils' to from "@/lib/utils"
  if grep -q "from '@/lib/" "$file" 2>/dev/null; then
    sed -i.tmp -E "s/from ['']@\/lib\/([^'']+)['']([;]?)/from \"@\/lib\/\1\"\2/g" "$file" 2>/dev/null
    imports_fixed=$((imports_fixed + 1))
    file_modified=1
  fi
  
  # Pattern 3: Fix lib imports without @/
  # Example: from 'lib/utils' to from '@/lib/utils'
  if grep -q "from ['\"]lib\/" "$file" 2>/dev/null; then
    sed -i.tmp -E "s/from ['\"](lib)\/([^'\"]+)['\"]([;]?)/from \"@\/\1\/\2\"\3/g" "$file" 2>/dev/null
    imports_fixed=$((imports_fixed + 1))
    file_modified=1
  fi
  
  # Pattern 4: Fix broken quotes in imports
  # Example: from '@/lib/utils" to from "@/lib/utils"
  if grep -q "from ['\"]@/lib/.*[^\"'][;]" "$file" 2>/dev/null; then
    sed -i.tmp -E "s/from (['\"])@\/lib\/([^\"']*)['\"]?([;])/from \"\@\/lib\/\2\"\3/g" "$file" 2>/dev/null
    imports_fixed=$((imports_fixed + 1))
    file_modified=1
  fi
  
  # Cleanup temp files
  rm -f "$file.tmp" 2>/dev/null
  
  # If the file was modified, count it and report
  if [ $file_modified -eq 1 ]; then
    # Create a backup in the backup directory
    local backup_filename=$(echo "$relative_path" | tr '/' '_')
    cp "$backup_path" "$BACKUP_DIR/$backup_filename" 2>/dev/null
    
    FILES_MODIFIED=$((FILES_MODIFIED + 1))
    TOTAL_IMPORTS_FIXED=$((TOTAL_IMPORTS_FIXED + imports_fixed))
    echo -e "${GREEN}✅ Fixed $imports_fixed imports in $relative_path${NC}"
  else
    # Remove the backup if no changes were made
    rm -f "$backup_path" 2>/dev/null
  fi
  
  FILES_PROCESSED=$((FILES_PROCESSED + 1))
  
  # Log progress every 50 files
  if [ $((FILES_PROCESSED % 50)) -eq 0 ]; then
    echo -e "${BLUE}Progress: $FILES_PROCESSED files processed${NC}"
  fi
}

# Find all relevant files directly, avoiding issues with spaces in paths
find_ts_files() {
  find "$ROOT_DIR" -type f -name "*.ts" 2>/dev/null | grep -v "node_modules" | grep -v ".next"
}

find_tsx_files() {
  find "$ROOT_DIR" -type f -name "*.tsx" 2>/dev/null | grep -v "node_modules" | grep -v ".next"
}

find_js_files() {
  find "$ROOT_DIR" -type f -name "*.js" 2>/dev/null | grep -v "node_modules" | grep -v ".next"
}

find_jsx_files() {
  find "$ROOT_DIR" -type f -name "*.jsx" 2>/dev/null | grep -v "node_modules" | grep -v ".next"
}

# Collect all files to scan
files_to_process=$(find_ts_files)
files_to_process+=$'\n'$(find_tsx_files)
files_to_process+=$'\n'$(find_js_files)
files_to_process+=$'\n'$(find_jsx_files)

# Remove empty lines
files_to_process=$(echo "$files_to_process" | grep -v "^$")

# Count files
file_count=$(echo "$files_to_process" | wc -l)

echo -e "${BLUE}🔎 Found approximately $file_count files to process${NC}"

# Process each file
while IFS= read -r file; do
  # Skip empty lines
  if [ -z "$file" ]; then
    continue
  fi
  process_file "$file"
done <<< "$files_to_process"

# Fix specific index files
echo -e "${BLUE}🔧 Checking if specific index files need fixing...${NC}"

# Fix graphql/mutations/index.ts
mutations_index="$LIB_DIR/graphql/mutations/index.ts"
if [ -f "$mutations_index" ] && grep -q "INSERT_BULK_PAYROLL_DATES" "$mutations_index" 2>/dev/null; then
  echo -e "${BLUE}Fixing $mutations_index${NC}"
  backup_filename=$(echo "graphql/mutations/index.ts" | tr '/' '_')
  cp "$mutations_index" "$BACKUP_DIR/$backup_filename" 2>/dev/null
  
  cat > "$mutations_index" << 'EOL'
// Client mutations
export * from './clients/createClient';
export * from './clients/updateClient';
export * from './clients/deleteClient';

// Holiday mutations
export * from './holidays/syncHolidays';

// Leave mutations
export * from './leave/createLeave';
export * from './leave/updateLeave';

// Note mutations
export * from './notes/addNote';
export * from './notes/updateNote';

// Payroll mutations
export * from './payrolls/createPayroll';
export * from './payrolls/updatePayroll';
export * from './payrolls/deletePayroll';
export * from './payrolls/updatePayrollStatus';
export * from './payrolls/generatePayrollDates';
export * from './payroll_dates/generatePayrollDates';
export * from './payroll_dates/updatePayrollDate';

// Staff mutations
export * from './staff/createStaff';
export * from './staff/updateStaff';
export * from './staff/deleteStaff';
export * from './staff/updateUser';

// Work schedule mutations
export * from './work_schedule/createWorkSchedule';
EOL
  echo -e "${GREEN}✅ Fixed mutations/index.ts${NC}"
  FILES_MODIFIED=$((FILES_MODIFIED + 1))
  TOTAL_IMPORTS_FIXED=$((TOTAL_IMPORTS_FIXED + 1))
fi

# Fix hooks/index.ts
hooks_index="$LIB_DIR/hooks/index.ts"
if [ -f "$hooks_index" ] && (grep -q "Missing" "$hooks_index" 2>/dev/null || grep -q "Adding missing" "$hooks_index" 2>/dev/null); then
  echo -e "${BLUE}Fixing $hooks_index${NC}"
  backup_filename=$(echo "hooks/index.ts" | tr '/' '_')
  cp "$hooks_index" "$BACKUP_DIR/$backup_filename" 2>/dev/null
  
  cat > "$hooks_index" << 'EOL'
// API Hooks
export * from './api/useApolloQuery';
export * from './api/useClient';
export * from './api/useClientQueries';
export * from './api/useLeave';
export * from './api/usePayroll';
export * from './api/usePayrollQueries';
export * from './api/usePolledQuery';
export * from './api/usePolling';
export * from './api/useStaff';
export * from './api/useUserRole';

// UI Hooks
export * from './ui/useDisclosure';
export * from './ui/useForm';
export * from './ui/useMediaQuery';

// Utility Hooks
export * from './utils/useCacheInvalidation';
export * from './utils/useDataFetching';
export * from './utils/useDataRefresh';
export * from './utils/useDebounce';
export * from './utils/useLocalStorage';
export * from './utils/useSubscription';
EOL
  echo -e "${GREEN}✅ Fixed hooks/index.ts${NC}"
  FILES_MODIFIED=$((FILES_MODIFIED + 1))
  TOTAL_IMPORTS_FIXED=$((TOTAL_IMPORTS_FIXED + 1))
fi

# Print summary
echo -e "\n${BLUE}📊 Summary:${NC}"
echo -e "${BLUE}🔢 Total files processed: $FILES_PROCESSED${NC}"
echo -e "${BLUE}📝 Files modified: $FILES_MODIFIED${NC}"
echo -e "${BLUE}🛠️ Total imports fixed: $TOTAL_IMPORTS_FIXED${NC}"

if [ $FILES_MODIFIED -eq 0 ]; then
  echo -e "${GREEN}✨ All imports already in the correct format!${NC}"
else
  echo -e "${GREEN}✅ Import standardization complete!${NC}"
  echo -e "${YELLOW}Note: Backup files were created in: $BACKUP_DIR${NC}"
fi