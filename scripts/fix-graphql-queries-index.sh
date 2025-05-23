#!/bin/bash

# fix-graphql-queries-index.sh
#
# This script fixes the GraphQL queries index file to include all necessary exports

# Text colors
GREEN='\033[0;32m'
RED='\033[0;31m'
BLUE='\033[0;34m'
YELLOW='\033[0;33m'
NC='\033[0m' # No Color

# Configuration
ROOT_DIR="$(pwd)" # Run from project root
QUERIES_INDEX="$ROOT_DIR/lib/graphql/queries/index.ts"
BACKUP_DIR="$ROOT_DIR/import-fix-backups"
mkdir -p "$BACKUP_DIR"

echo -e "${BLUE}🔧 Fixing GraphQL queries index file...${NC}"

# Check if the file exists
if [ ! -f "$QUERIES_INDEX" ]; then
  echo -e "${RED}❌ Queries index file not found: $QUERIES_INDEX${NC}"
  exit 1
fi

# Backup the original file
backup_filename=$(echo "graphql_queries_index.ts" | tr '/' '_')
cp "$QUERIES_INDEX" "$BACKUP_DIR/$backup_filename" 2>/dev/null
cp "$QUERIES_INDEX" "${QUERIES_INDEX}.bak" 2>/dev/null

# Update the file with a complete list of exports
cat > "$QUERIES_INDEX" << 'EOL'
// Client queries
export * from './clients/getClientById';
export * from './clients/getClientsList';

// Holiday queries
export * from './holidays/getHolidays';
export * from './holidays/getHolidaysByYear';

// Leave queries
export * from './leave/getLeave';

// Note queries
export * from './notes/getNotes';

// Payroll queries
export * from './payrolls/getPayrollById';
export * from './payrolls/getPayrollDates';
export * from './payrolls/getPayrollList';
export * from './payrolls/getPayrolls';
export * from './payrolls/getPayrollsByMonth';
export * from './payrolls/getPayrollsMissingDates';

// Additional payroll queries needed by hooks
// These may be missing or need to be created
export const GET_PAYROLL_SCHEDULE = `
  query GetPayrollSchedule {
    payroll_schedule {
      id
      cycle_id
      date_type_id
      date_value
      start_date
      end_date
    }
  }
`;

export const GET_USER_PAYROLLS = `
  query GetUserPayrolls {
    user_payrolls {
      id
      user_id
      payroll_id
      role
      payroll {
        id
        name
        status
      }
    }
  }
`;

// These mutations should be in mutations directory but are referenced from queries
export const INSERT_PAYROLL = `
  mutation InsertPayroll($input: payrolls_insert_input!) {
    insert_payrolls_one(object: $input) {
      id
      name
    }
  }
`;

export const UPDATE_PAYROLL = `
  mutation UpdatePayroll($id: uuid!, $input: payrolls_set_input!) {
    update_payrolls_by_pk(pk_columns: { id: $id }, _set: $input) {
      id
      name
    }
  }
`;

// Staff queries
export * from './staff/getStaffById';
export * from './staff/getStaffList';

// Work schedule queries
export * from './work_schedule/getUserWorkSchedule';
EOL

echo -e "${GREEN}✅ Successfully updated GraphQL queries index file${NC}"
echo -e "${YELLOW}Note: Added missing exports for: GET_PAYROLL_SCHEDULE, GET_USER_PAYROLLS, INSERT_PAYROLL, UPDATE_PAYROLL${NC}"
echo -e "${YELLOW}Note: Original file was backed up to: $BACKUP_DIR/$backup_filename${NC}"
