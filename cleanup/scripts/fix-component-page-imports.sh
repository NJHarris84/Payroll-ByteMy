#!/bin/bash

# fix-component-page-imports-improved.sh
#
# This script fixes imports in component and page files, including all subdirectories
# It ensures proper handling of the nested folder structure in app pages

# Text colors
GREEN='\033[0;32m'
RED='\033[0;31m'
BLUE='\033[0;34m'
YELLOW='\033[0;33m'
NC='\033[0m' # No Color

# Configuration
ROOT_DIR="$(pwd)" # Run from project root
COMPONENTS_DIR="$ROOT_DIR/components"
PAGES_DIR="$ROOT_DIR/app"
BACKUP_DIR="$ROOT_DIR/import-fix-backups"
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
BACKUP_FOLDER="$BACKUP_DIR/components_pages_$TIMESTAMP"

# Create backup directory
mkdir -p "$BACKUP_FOLDER"

echo -e "${BLUE}🔧 Fixing imports in component and page files (including all subdirectories)...${NC}"
echo -e "${BLUE}Using backup directory: $BACKUP_FOLDER${NC}"

# Count of processed and modified files
FILES_PROCESSED=0
FILES_MODIFIED=0

# Process a single file
process_file() {
  local file="$1"
  local relative_path="${file#$ROOT_DIR/}"
  local was_modified=0
  
  # Skip node_modules and other irrelevant files
  if [[ "$file" == *"node_modules"* || "$file" == *".next"* || "$file" == *"dist"* ]]; then
    return
  fi
  
  # Only process TypeScript/JavaScript/JSX/TSX files
  if [[ "$file" != *".ts" && "$file" != *".tsx" && "$file" != *".js" && "$file" != *".jsx" ]]; then
    return
  fi
  
  # Create backup of the file in our backup folder
  local backup_filename="$(basename "$file")"
  local backup_path="$BACKUP_FOLDER/${relative_path//\//_}"
  cp "$file" "$backup_path" 2>/dev/null
  
  # Also create a local backup
  cp "$file" "${file}.bak" 2>/dev/null
  
  # Check if file contains any imports
  if grep -q "from ['\"]" "$file" 2>/dev/null; then
    FILES_PROCESSED=$((FILES_PROCESSED + 1))
    
    # 1. Fix relative paths to lib directory
    # Example: from '../../lib/utils' to from '@/lib/utils'
    if grep -q "from ['\"]\\.\\..*lib/" "$file" 2>/dev/null; then
      sed -i.tmp -E "s/from ['\"](\\.\\.\\/)+lib\\//from \"@\\/lib\\//g" "$file" 2>/dev/null
      was_modified=1
    fi
    
    # 2. Fix relative paths to components directory
    # Example: from '../../components/ui' to from '@/components/ui'
    if grep -q "from ['\"]\\.\\..*components/" "$file" 2>/dev/null; then
      sed -i.tmp -E "s/from ['\"](\\.\\.\\/)+components\\//from \"@\\/components\\//g" "$file" 2>/dev/null
      was_modified=1
    fi
    
    # 3. Fix relative paths to app directory
    # Example: from '../../app/utils' to from '@/app/utils'
    if grep -q "from ['\"]\\.\\..*app/" "$file" 2>/dev/null; then
      sed -i.tmp -E "s/from ['\"](\\.\\.\\/)+app\\//from \"@\\/app\\//g" "$file" 2>/dev/null
      was_modified=1
    fi
    
    # 4. Fix relative paths within components or pages
    # Example: from './button' to from '@/components/ui/button'
    # This is trickier and would require more complex processing
    # For now, we'll focus on the most common patterns
    
    # 5. Fix paths without @/ prefix
    # Example: from 'components/ui' to from '@/components/ui'
    if grep -q "from ['\"]components/" "$file" 2>/dev/null; then
      sed -i.tmp -E "s/from ['\"]components\\//from \"@\\/components\\//g" "$file" 2>/dev/null
      was_modified=1
    fi
    
    # Example: from 'lib/utils' to from '@/lib/utils'
    if grep -q "from ['\"]lib/" "$file" 2>/dev/null; then
      sed -i.tmp -E "s/from ['\"]lib\\//from \"@\\/lib\\//g" "$file" 2>/dev/null
      was_modified=1
    fi
    
    # Example: from 'app/utils' to from '@/app/utils'
    if grep -q "from ['\"]app/" "$file" 2>/dev/null; then
      sed -i.tmp -E "s/from ['\"]app\\//from \"@\\/app\\//g" "$file" 2>/dev/null
      was_modified=1
    fi
    
    # 6. Standardize single quotes to double quotes for @/ imports
    # Example: from '@/lib/utils' to from "@/lib/utils"
    if grep -q "from '@/" "$file" 2>/dev/null; then
      sed -i.tmp -E "s/from '(@\\/[^']+)'/from \"\1\"/g" "$file" 2>/dev/null
      was_modified=1
    fi
    
    # 7. Fix specific known broken imports
    
    # ErrorDisplay import
    if grep -q "ErrorDisplay.*from ['\"]@/lib/utils/error-handling" "$file" 2>/dev/null; then
      sed -i.tmp -E "s/import \{([^}]*) ErrorDisplay([^}]*)\} from ['\"]@\\/lib\\/utils\\/error-handling['\"];/import \{\1 ErrorDisplay\2\} from \"@\\/components\\/common\\/error-display\";/g" "$file" 2>/dev/null
      was_modified=1
    fi
    
    # Conflicting hook imports - add specific patterns as needed
    if grep -q "import { useClientById } from ['\"]@/lib/hooks" "$file" 2>/dev/null; then
      sed -i.tmp -E "s/import \{ useClientById([^}]*)\} from ['\"]@\\/lib\\/hooks['\"];/import \{ useClientByIdBasic as useClientById\1\} from \"@\\/lib\\/hooks\";/g" "$file" 2>/dev/null
      was_modified=1
    fi
    
    if grep -q "import { useCreateClient } from ['\"]@/lib/hooks" "$file" 2>/dev/null; then
      sed -i.tmp -E "s/import \{ useCreateClient([^}]*)\} from ['\"]@\\/lib\\/hooks['\"];/import \{ useCreateClientBasic as useCreateClient\1\} from \"@\\/lib\\/hooks\";/g" "$file" 2>/dev/null
      was_modified=1
    fi
    
    if grep -q "import { useUpdateClient } from ['\"]@/lib/hooks" "$file" 2>/dev/null; then
      sed -i.tmp -E "s/import \{ useUpdateClient([^}]*)\} from ['\"]@\\/lib\\/hooks['\"];/import \{ useUpdateClientBasic as useUpdateClient\1\} from \"@\\/lib\\/hooks\";/g" "$file" 2>/dev/null
      was_modified=1
    fi
    
    if grep -q "import { useCreatePayroll } from ['\"]@/lib/hooks" "$file" 2>/dev/null; then
      sed -i.tmp -E "s/import \{ useCreatePayroll([^}]*)\} from ['\"]@\\/lib\\/hooks['\"];/import \{ useCreatePayrollBasic as useCreatePayroll\1\} from \"@\\/lib\\/hooks\";/g" "$file" 2>/dev/null
      was_modified=1
    fi
    
    if grep -q "import { useUpdatePayroll } from ['\"]@/lib/hooks" "$file" 2>/dev/null; then
      sed -i.tmp -E "s/import \{ useUpdatePayroll([^}]*)\} from ['\"]@\\/lib\\/hooks['\"];/import \{ useUpdatePayrollBasic as useUpdatePayroll\1\} from \"@\\/lib\\/hooks\";/g" "$file" 2>/dev/null
      was_modified=1
    fi
    
    # Clean up temp files
    rm -f "${file}.tmp" 2>/dev/null
    
    # Report if file was modified
    if [ $was_modified -eq 1 ]; then
      FILES_MODIFIED=$((FILES_MODIFIED + 1))
      echo -e "${GREEN}✅ Fixed imports in: $relative_path${NC}"
    else
      # Remove backup if file wasn't modified
      rm -f "${file}.bak" 2>/dev/null
    fi
  fi
}

# Create ErrorDisplay component if it doesn't exist
ERROR_DISPLAY="$COMPONENTS_DIR/common/error-display.tsx"
if [ ! -f "$ERROR_DISPLAY" ]; then
  echo -e "${BLUE}Creating ErrorDisplay component...${NC}"
  
  mkdir -p "$(dirname "$ERROR_DISPLAY")"
  cat > "$ERROR_DISPLAY" << 'EOL'
import React from 'react';

export interface ErrorDisplayProps {
  error: Error | string;
  title?: string;
  showDetails?: boolean;
}

export function ErrorDisplay({ error, title = 'Error', showDetails = true }: ErrorDisplayProps) {
  const errorMessage = typeof error === 'string' ? error : error.message;
  
  return (
    <div className="rounded-md bg-red-50 p-4 my-4 border border-red-200">
      <div className="flex">
        <div className="flex-shrink-0">
          <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-red-800">{title}</h3>
          <div className="mt-2 text-sm text-red-700">
            <p>{errorMessage}</p>
            {showDetails && typeof error !== 'string' && error.stack && (
              <details className="mt-2 text-xs">
                <summary className="cursor-pointer">Show details</summary>
                <pre className="mt-2 whitespace-pre-wrap">{error.stack}</pre>
              </details>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
EOL

  # Update the common/index.ts file to export ErrorDisplay
  COMMON_INDEX="$COMPONENTS_DIR/common/index.ts"
  if [ -f "$COMMON_INDEX" ]; then
    echo -e "${BLUE}Updating components/common/index.ts to export ErrorDisplay...${NC}"
    
    # Backup the file
    cp "$COMMON_INDEX" "$BACKUP_FOLDER/common_index.ts" 2>/dev/null
    
    # Add export if not already present
    if ! grep -q "error-display" "$COMMON_INDEX" 2>/dev/null; then
      echo "export * from './error-display';" >> "$COMMON_INDEX"
      echo -e "${GREEN}✅ Added ErrorDisplay export to components/common/index.ts${NC}"
    else
      echo -e "${BLUE}ErrorDisplay already exported in components/common/index.ts${NC}"
    fi
  fi
  
  echo -e "${GREEN}✅ Created ErrorDisplay component${NC}"
fi

echo -e "${BLUE}Processing components directory...${NC}"

# Use find to locate all component files including those in subdirectories
find "$COMPONENTS_DIR" -type f -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" | while read -r file; do
  process_file "$file"
done

echo -e "${BLUE}Processing app directory with all pages and nested routes...${NC}"

# Use find to locate all page files including those in subdirectories
find "$PAGES_DIR" -type f -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" | while read -r file; do
  process_file "$file"
done

echo -e "\n${BLUE}📊 Summary:${NC}"
echo -e "${BLUE}🔢 Total files processed: $FILES_PROCESSED${NC}"
echo -e "${GREEN}✅ Files with fixed imports: $FILES_MODIFIED${NC}"

if [ -f "$ERROR_DISPLAY" ]; then
  echo -e "${GREEN}✅ ErrorDisplay component is available at: components/common/error-display.tsx${NC}"
fi

echo -e "${YELLOW}Note: All original files were backed up to: $BACKUP_FOLDER${NC}"

echo -e "\n${BLUE}🔄 Next steps:${NC}"
echo -e "${YELLOW}1. Verify that components and pages import correctly${NC}"
echo -e "${YELLOW}2. Run the app to ensure everything renders properly${NC}"
echo -e "${YELLOW}3. If you encounter any issues, restore from the backups in $BACKUP_FOLDER${NC}"