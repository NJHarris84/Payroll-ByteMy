#!/bin/bash

# check-imports.sh
#
# This script scans your codebase to identify import issues without making any changes
# Use this to find problems before applying fixes

# Text colors
GREEN='\033[0;32m'
RED='\033[0;31m'
BLUE='\033[0;34m'
YELLOW='\033[0;33m'
NC='\033[0m' # No Color

# Configuration - use quotes to handle spaces in paths
ROOT_DIR="$(pwd)" # Run from project root
LIB_DIR="$ROOT_DIR/lib"

# File extensions to process
FILE_EXTENSIONS=("ts" "tsx" "js" "jsx")

# Directories to ignore
IGNORE_DIRS=("node_modules" ".next" "out" "dist" "build" "import-fix-backups")

# Track statistics
FILES_SCANNED=0
FILES_WITH_ISSUES=0
TOTAL_ISSUES=0

echo -e "${BLUE}🔍 Scanning for import issues...${NC}"

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

# Function to scan a single file
scan_file() {
  local file="$1"
  local relative_path="${file#$ROOT_DIR/}"
  local issues_found=0
  
  # Skip files in ignored directories
  if should_ignore_dir "$file"; then
    return
  fi
  
  # Check for relative imports to lib
  if grep -q "from ['\"]\\.\\.\/.*lib\/" "$file" 2>/dev/null; then
    if [ $issues_found -eq 0 ]; then
      echo -e "${YELLOW}Issues found in $relative_path:${NC}"
      issues_found=1
      FILES_WITH_ISSUES=$((FILES_WITH_ISSUES + 1))
    fi
    echo -e "${RED}Relative import to lib:${NC}"
    grep -n "from ['\"]\\.\\.\/.*lib\/" "$file" 2>/dev/null
    TOTAL_ISSUES=$((TOTAL_ISSUES + $(grep -c "from ['\"]\\.\\.\/.*lib\/" "$file" 2>/dev/null)))
  fi
  
  # Check for single-quoted @/lib imports
  if grep -q "from '@/lib/" "$file" 2>/dev/null; then
    if [ $issues_found -eq 0 ]; then
      echo -e "${YELLOW}Issues found in $relative_path:${NC}"
      issues_found=1
      FILES_WITH_ISSUES=$((FILES_WITH_ISSUES + 1))
    fi
    echo -e "${RED}Single-quoted @/lib import:${NC}"
    grep -n "from '@/lib/" "$file" 2>/dev/null
    TOTAL_ISSUES=$((TOTAL_ISSUES + $(grep -c "from '@/lib/" "$file" 2>/dev/null)))
  fi
  
  # Check for lib imports without @/
  if grep -q "from ['\"]lib\/" "$file" 2>/dev/null; then
    if [ $issues_found -eq 0 ]; then
      echo -e "${YELLOW}Issues found in $relative_path:${NC}"
      issues_found=1
      FILES_WITH_ISSUES=$((FILES_WITH_ISSUES + 1))
    fi
    echo -e "${RED}Import without @/ prefix:${NC}"
    grep -n "from ['\"]lib\/" "$file" 2>/dev/null
    TOTAL_ISSUES=$((TOTAL_ISSUES + $(grep -c "from ['\"]lib\/" "$file" 2>/dev/null)))
  fi
  
  # Check for mismatched quotes in imports
  if grep -q "from ['\"]@/lib/.*[^\"'][;]" "$file" 2>/dev/null; then
    if [ $issues_found -eq 0 ]; then
      echo -e "${YELLOW}Issues found in $relative_path:${NC}"
      issues_found=1
      FILES_WITH_ISSUES=$((FILES_WITH_ISSUES + 1))
    fi
    echo -e "${RED}Mismatched quotes in import:${NC}"
    grep -n "from ['\"]@/lib/.*[^\"'][;]" "$file" 2>/dev/null
    TOTAL_ISSUES=$((TOTAL_ISSUES + $(grep -c "from ['\"]@/lib/.*[^\"'][;]" "$file" 2>/dev/null)))
  fi
  
  # Special checks for specific files
  if [[ "$file" == *"holiday-sync-service.ts" ]]; then
    if grep -q "SYNC_HOLIDAYS.*syncHolidays\";" "$file" 2>/dev/null; then
      if [ $issues_found -eq 0 ]; then
        echo -e "${YELLOW}Issues found in $relative_path:${NC}"
        issues_found=1
        FILES_WITH_ISSUES=$((FILES_WITH_ISSUES + 1))
      fi
      echo -e "${RED}Missing closing quote in syncHolidays import:${NC}"
      grep -n "SYNC_HOLIDAYS.*syncHolidays\";" "$file" 2>/dev/null
      TOTAL_ISSUES=$((TOTAL_ISSUES + 1))
    fi
  fi
  
  if [[ "$file" == *"payroll-date-service.ts" ]]; then
    if grep -q "import { db } from .*db\"" "$file" 2>/dev/null; then
      if [ $issues_found -eq 0 ]; then
        echo -e "${YELLOW}Issues found in $relative_path:${NC}"
        issues_found=1
        FILES_WITH_ISSUES=$((FILES_WITH_ISSUES + 1))
      fi
      echo -e "${RED}Missing closing quote in db import:${NC}"
      grep -n "import { db } from .*db\"" "$file" 2>/dev/null
      TOTAL_ISSUES=$((TOTAL_ISSUES + 1))
    fi
  fi
  
  # Check for index files with redundant exports
  if [[ "$file" == "$LIB_DIR/graphql/mutations/index.ts" ]]; then
    if grep -q "INSERT_BULK_PAYROLL_DATES" "$file" 2>/dev/null; then
      if [ $issues_found -eq 0 ]; then
        echo -e "${YELLOW}Issues found in $relative_path:${NC}"
        issues_found=1
        FILES_WITH_ISSUES=$((FILES_WITH_ISSUES + 1))
      fi
      echo -e "${RED}Redundant export in mutations/index.ts - uses both export * and named export${NC}"
      TOTAL_ISSUES=$((TOTAL_ISSUES + 1))
    fi
  fi
  
  # Check for missing/commented hooks in hooks/index.ts
  if [[ "$file" == "$LIB_DIR/hooks/index.ts" ]]; then
    if grep -q "Missing" "$file" 2>/dev/null || grep -q "Adding missing" "$file" 2>/dev/null; then
      if [ $issues_found -eq 0 ]; then
        echo -e "${YELLOW}Issues found in $relative_path:${NC}"
        issues_found=1
        FILES_WITH_ISSUES=$((FILES_WITH_ISSUES + 1))
      fi
      echo -e "${RED}Commented or missing hook exports in hooks/index.ts${NC}"
      TOTAL_ISSUES=$((TOTAL_ISSUES + 1))
    fi
  fi
  
  FILES_SCANNED=$((FILES_SCANNED + 1))
  
  # Log progress every 50 files
  if [ $((FILES_SCANNED % 50)) -eq 0 ]; then
    echo -e "${BLUE}Progress: $FILES_SCANNED files scanned${NC}"
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
files_to_scan=$(find_ts_files)
files_to_scan+=$'\n'$(find_tsx_files)
files_to_scan+=$'\n'$(find_js_files)
files_to_scan+=$'\n'$(find_jsx_files)

# Remove empty lines
files_to_scan=$(echo "$files_to_scan" | grep -v "^$")

# Count files
file_count=$(echo "$files_to_scan" | wc -l)
echo -e "${BLUE}🔎 Found approximately $file_count files to scan${NC}"

# Process each file
while IFS= read -r file; do
  # Skip empty lines
  if [ -z "$file" ]; then
    continue
  fi
  scan_file "$file"
done <<< "$files_to_scan"

# Print summary
echo -e "\n${BLUE}📊 Summary:${NC}"
echo -e "${BLUE}🔢 Total files scanned: $FILES_SCANNED${NC}"
echo -e "${YELLOW}📝 Files with issues: $FILES_WITH_ISSUES${NC}"
echo -e "${RED}🛠️ Total issues found: $TOTAL_ISSUES${NC}"

if [ $TOTAL_ISSUES -eq 0 ]; then
  echo -e "${GREEN}✨ No import issues found!${NC}"
else
  echo -e "\n${BLUE}📋 Recommended fixes:${NC}"
  echo -e "${YELLOW}1. First fix critical files with specific issues:${NC}"
  echo -e "${YELLOW}   ./scripts/fix-critical-files.sh${NC}"
  echo -e "${YELLOW}2. Then run the general import standardization:${NC}"
  echo -e "${YELLOW}   ./scripts/fix-imports.sh${NC}"
fi