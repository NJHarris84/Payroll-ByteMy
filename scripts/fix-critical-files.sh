#!/bin/bash

# fix-critical-files.sh
#
# This script fixes specific critical files with known import issues
# It focuses on the most problematic files identified in the codebase

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

echo -e "${BLUE}🔨 Starting to fix critical files with known import issues...${NC}"

# Function to backup a file before modifying it
backup_file() {
  local file="$1"
  local relative_path="${file#$ROOT_DIR/}"
  local backup_path="$BACKUP_DIR/${relative_path//\//_}"
  
  # Create a copy in the backup directory
  cp "$file" "$backup_path" 2>/dev/null
  
  # Also create a backup with .bak extension
  cp "$file" "${file}.bak" 2>/dev/null
  
  echo -e "${YELLOW}Backed up $relative_path${NC}"
}

# Function to fix holiday-sync-service.ts
fix_holiday_sync_service() {
  local file="$LIB_DIR/services/holiday-sync-service.ts"
  
  if [ ! -f "$file" ]; then
    echo -e "${RED}❌ File not found: $file${NC}"
    return 1
  fi
  
  echo -e "${BLUE}Fixing imports in services/holiday-sync-service.ts${NC}"
  backup_file "$file"
  
  # Fix the broken import - need to handle different possible patterns
  if grep -q "SYNC_HOLIDAYS.*syncHolidays\";" "$file" 2>/dev/null; then
    # Approach 1: Using sed with specific pattern
    sed -i.tmp -E 's/(import \{ SYNC_HOLIDAYS \} from .*syncHolidays)";/\1";/g' "$file" 2>/dev/null
    
    # Approach 2: More general pattern
    sed -i.tmp -E 's/from (.*)syncHolidays";/from "@\/lib\/graphql\/mutations\/holidays\/syncHolidays";/g' "$file" 2>/dev/null
    
    # Check if the fix was applied
    if grep -q 'import { SYNC_HOLIDAYS } from "@/lib/graphql/mutations/holidays/syncHolidays";' "$file" 2>/dev/null; then
      echo -e "${GREEN}✅ Successfully fixed holiday-sync-service.ts${NC}"
      rm -f "$file.tmp" 2>/dev/null
      return 0
    else
      # If the above approaches failed, try a more direct replacement
      echo -e "${YELLOW}⚠️ Trying alternative fix for holiday-sync-service.ts${NC}"
      
      # Create a temporary file with the fixed content
      cat "$file" | sed 's/import { SYNC_HOLIDAYS } from .*syncHolidays";/import { SYNC_HOLIDAYS } from "@\/lib\/graphql\/mutations\/holidays\/syncHolidays";/g' > "${file}.new" 2>/dev/null
      
      # If the new file was created and is not empty, replace the original
      if [ -s "${file}.new" ]; then
        mv "${file}.new" "$file" 2>/dev/null
        echo -e "${GREEN}✅ Successfully fixed holiday-sync-service.ts with alternative method${NC}"
        rm -f "$file.tmp" 2>/dev/null
        return 0
      else
        echo -e "${RED}❌ Failed to fix holiday-sync-service.ts${NC}"
        rm -f "$file.tmp" "${file}.new" 2>/dev/null
        return 1
      fi
    fi
  else
    echo -e "${YELLOW}⚠️ No import issues found in holiday-sync-service.ts${NC}"
    rm -f "$file.tmp" 2>/dev/null
    return 0
  fi
}

# Function to fix payroll-date-service.ts
fix_payroll_date_service() {
  local file="$LIB_DIR/services/payroll-date-service.ts"
  
  if [ ! -f "$file" ]; then
    echo -e "${RED}❌ File not found: $file${NC}"
    return 1
  fi
  
  echo -e "${BLUE}Fixing imports in services/payroll-date-service.ts${NC}"
  backup_file "$file"
  
  # Fix the broken import - need to handle different possible patterns
  if grep -q "import { db } from .*db\"" "$file" 2>/dev/null; then
    # Approach 1: Using sed with specific pattern
    sed -i.tmp -E 's/(import \{ db \} from .*db)"/\1";/g' "$file" 2>/dev/null
    
    # Approach 2: More general pattern
    sed -i.tmp -E 's/import \{ db \} from (.*)db"/import { db } from "@\/lib\/db";/g' "$file" 2>/dev/null
    
    # Check if the fix was applied
    if grep -q 'import { db } from "@/lib/db";' "$file" 2>/dev/null; then
      echo -e "${GREEN}✅ Successfully fixed payroll-date-service.ts${NC}"
      rm -f "$file.tmp" 2>/dev/null
      return 0
    else
      # If the above approaches failed, try a more direct replacement
      echo -e "${YELLOW}⚠️ Trying alternative fix for payroll-date-service.ts${NC}"
      
      # Create a temporary file with the fixed content
      cat "$file" | sed 's/import { db } from .*db"/import { db } from "@\/lib\/db";/g' > "${file}.new" 2>/dev/null
      
      # If the new file was created and is not empty, replace the original
      if [ -s "${file}.new" ]; then
        mv "${file}.new" "$file" 2>/dev/null
        echo -e "${GREEN}✅ Successfully fixed payroll-date-service.ts with alternative method${NC}"
        rm -f "$file.tmp" 2>/dev/null
        return 0
      else
        echo -e "${RED}❌ Failed to fix payroll-date-service.ts${NC}"
        rm -f "$file.tmp" "${file}.new" 2>/dev/null
        return 1
      fi
    fi
  else
    echo -e "${YELLOW}⚠️ No import issues found in payroll-date-service.ts${NC}"
    rm -f "$file.tmp" 2>/dev/null
    return 0
  fi
}

# Function to fix graphql/mutations/index.ts
fix_mutations_index() {
  local file="$LIB_DIR/graphql/mutations/index.ts"
  
  if [ ! -f "$file" ]; then
    echo -e "${RED}❌ File not found: $file${NC}"
    return 1
  fi
  
  echo -e "${BLUE}Fixing graphql/mutations/index.ts${NC}"
  backup_file "$file"
  
  # Replace the entire content with the corrected version
  cat > "$file" << 'EOL'
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

  # Check if the file was written successfully
  if [ -s "$file" ]; then
    echo -e "${GREEN}✅ Successfully fixed graphql/mutations/index.ts${NC}"
    return 0
  else
    echo -e "${RED}❌ Failed to fix graphql/mutations/index.ts${NC}"
    return 1
  fi
}

# Function to fix hooks/index.ts
fix_hooks_index() {
  local file="$LIB_DIR/hooks/index.ts"
  
  if [ ! -f "$file" ]; then
    echo -e "${RED}❌ File not found: $file${NC}"
    return 1
  fi
  
  echo -e "${BLUE}Fixing hooks/index.ts${NC}"
  backup_file "$file"
  
  # Replace the entire content with the corrected version
  cat > "$file" << 'EOL'
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

  # Check if the file was written successfully
  if [ -s "$file" ]; then
    echo -e "${GREEN}✅ Successfully fixed hooks/index.ts${NC}"
    return 0
  else
    echo -e "${RED}❌ Failed to fix hooks/index.ts${NC}"
    return 1
  fi
}

# Initialize success counter
SUCCESS_COUNT=0
TOTAL_FILES=4

# Fix each file and track successes
fix_holiday_sync_service
if [ $? -eq 0 ]; then
  SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
fi

fix_payroll_date_service
if [ $? -eq 0 ]; then
  SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
fi

fix_mutations_index
if [ $? -eq 0 ]; then
  SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
fi

fix_hooks_index
if [ $? -eq 0 ]; then
  SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
fi

# Print summary
echo -e "\n${BLUE}📊 Summary:${NC}"
echo -e "${GREEN}✅ Fixed $SUCCESS_COUNT/$TOTAL_FILES critical files successfully${NC}"

# Cleanup info
echo -e "${YELLOW}Note: Original files were backed up to the directory: $BACKUP_DIR${NC}"
echo -e "${YELLOW}      Local .bak files were also created next to the original files${NC}"

# Suggest running the main import fix script after this
echo -e "\n${BLUE}🔄 Next steps:${NC}"
echo -e "${YELLOW}1. Verify that the critical files were fixed correctly${NC}"
echo -e "${YELLOW}2. Run the main import fix script to standardize all other imports:${NC}"
echo -e "${YELLOW}   ./scripts/fix-imports.sh${NC}"