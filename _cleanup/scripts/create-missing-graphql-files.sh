#!/bin/bash

# create-missing-graphql-files.sh
#
# This script creates missing GraphQL query files referenced in the hooks

# Text colors
GREEN='\033[0;32m'
RED='\033[0;31m'
BLUE='\033[0;34m'
YELLOW='\033[0;33m'
NC='\033[0m' # No Color

# Configuration
ROOT_DIR="$(pwd)" # Run from project root
GRAPHQL_DIR="$ROOT_DIR/lib/graphql"
QUERIES_DIR="$GRAPHQL_DIR/queries"
MUTATIONS_DIR="$GRAPHQL_DIR/mutations"
PAYROLLS_QUERIES_DIR="$QUERIES_DIR/payrolls"
PAYROLLS_MUTATIONS_DIR="$MUTATIONS_DIR/payrolls"

echo -e "${BLUE}🔧 Creating missing GraphQL query files...${NC}"

# Create directories if they don't exist
mkdir -p "$PAYROLLS_QUERIES_DIR"
mkdir -p "$PAYROLLS_MUTATIONS_DIR"

# Create getPayrollSchedule.ts
PAYROLL_SCHEDULE_FILE="$PAYROLLS_QUERIES_DIR/getPayrollSchedule.ts"
if [ ! -f "$PAYROLL_SCHEDULE_FILE" ]; then
  echo -e "${BLUE}Creating $PAYROLL_SCHEDULE_FILE...${NC}"
  
  cat > "$PAYROLL_SCHEDULE_FILE" << 'EOL'
import { gql } from "@apollo/client";

export const GET_PAYROLL_SCHEDULE = gql`
  query GetPayrollSchedule {
    payroll_schedule {
      id
      cycle_id
      date_type_id
      date_value
      start_date
      end_date
      payroll_cycle {
        id
        name
      }
      payroll_date_type {
        id
        name
      }
    }
  }
`;
EOL

  echo -e "${GREEN}✅ Created getPayrollSchedule.ts${NC}"
fi

# Create getUserPayrolls.ts
USER_PAYROLLS_FILE="$PAYROLLS_QUERIES_DIR/getUserPayrolls.ts"
if [ ! -f "$USER_PAYROLLS_FILE" ]; then
  echo -e "${BLUE}Creating $USER_PAYROLLS_FILE...${NC}"
  
  cat > "$USER_PAYROLLS_FILE" << 'EOL'
import { gql } from "@apollo/client";
import { PAYROLL_FRAGMENT } from "../../fragments/payrollFragment";

export const GET_USER_PAYROLLS = gql`
  query GetUserPayrolls {
    user_payrolls {
      id
      user_id
      payroll_id
      role
      payroll {
        ...PayrollFragment
        client {
          id
          name
        }
      }
    }
  }
  ${PAYROLL_FRAGMENT}
`;
EOL

  echo -e "${GREEN}✅ Created getUserPayrolls.ts${NC}"
fi

# Create insertPayroll.ts in mutations directory
INSERT_PAYROLL_FILE="$PAYROLLS_MUTATIONS_DIR/insertPayroll.ts"
if [ ! -f "$INSERT_PAYROLL_FILE" ]; then
  echo -e "${BLUE}Creating $INSERT_PAYROLL_FILE...${NC}"
  
  cat > "$INSERT_PAYROLL_FILE" << 'EOL'
import { gql } from "@apollo/client";
import { PAYROLL_FRAGMENT } from "../../fragments/payrollFragment";

export const INSERT_PAYROLL = gql`
  mutation InsertPayroll($input: payrolls_insert_input!) {
    insert_payrolls_one(object: $input) {
      ...PayrollFragment
    }
  }
  ${PAYROLL_FRAGMENT}
`;
EOL

  echo -e "${GREEN}✅ Created insertPayroll.ts${NC}"
fi

# Update mutations index to include insertPayroll
MUTATIONS_INDEX="$MUTATIONS_DIR/index.ts"
if [ -f "$MUTATIONS_INDEX" ] && ! grep -q "insertPayroll" "$MUTATIONS_INDEX" 2>/dev/null; then
  echo -e "${BLUE}Updating mutations/index.ts to include insertPayroll...${NC}"
  
  # Backup the file
  cp "$MUTATIONS_INDEX" "${MUTATIONS_INDEX}.bak" 2>/dev/null
  
  # Add the import to the Payroll mutations section
  sed -i.tmp -e '/\/\/ Payroll mutations/a export * from '\''./payrolls/insertPayroll'\'';' "$MUTATIONS_INDEX" 2>/dev/null
  
  # Remove temporary file
  rm -f "${MUTATIONS_INDEX}.tmp" 2>/dev/null
  
  echo -e "${GREEN}✅ Updated mutations/index.ts${NC}"
fi

# Update queries index to include new files
QUERIES_INDEX="$QUERIES_DIR/index.ts"
if [ -f "$QUERIES_INDEX" ]; then
  echo -e "${BLUE}Ensuring queries/index.ts includes new files...${NC}"
  
  # Backup the file
  cp "$QUERIES_INDEX" "${QUERIES_INDEX}.bak" 2>/dev/null
  
  # Check if we need to add exports
  if ! grep -q "getPayrollSchedule" "$QUERIES_INDEX" 2>/dev/null; then
    # Add the import to the Payroll queries section
    sed -i.tmp -e '/\/\/ Payroll queries/a export * from '\''./payrolls/getPayrollSchedule'\'';' "$QUERIES_INDEX" 2>/dev/null
  fi
  
  if ! grep -q "getUserPayrolls" "$QUERIES_INDEX" 2>/dev/null; then
    # Add the import to the Payroll queries section
    sed -i.tmp -e '/\/\/ Payroll queries/a export * from '\''./payrolls/getUserPayrolls'\'';' "$QUERIES_INDEX" 2>/dev/null
  fi
  
  # Remove temporary file
  rm -f "${QUERIES_INDEX}.tmp" 2>/dev/null
  
  echo -e "${GREEN}✅ Updated queries/index.ts${NC}"
fi

# Update usePayroll.ts to import from the correct locations
PAYROLL_HOOK="$ROOT_DIR/lib/hooks/api/usePayroll.ts"
if [ -f "$PAYROLL_HOOK" ]; then
  echo -e "${BLUE}Updating usePayroll.ts to import from correct locations...${NC}"
  
  # Backup the file
  cp "$PAYROLL_HOOK" "${PAYROLL_HOOK}.bak2" 2>/dev/null
  
  # Create a new file with fixed imports
  cat > "$PAYROLL_HOOK" << 'EOL'
import { Payroll, PayrollStatus } from '@/types/interface';
import { useQuery, useMutation } from '@apollo/client';
import { GET_PAYROLLS } from '@/lib/graphql/queries/payrolls/getPayrolls';
import { GET_PAYROLL_SCHEDULE } from '@/lib/graphql/queries/payrolls/getPayrollSchedule';
import { GET_USER_PAYROLLS } from '@/lib/graphql/queries/payrolls/getUserPayrolls';
import { UPDATE_PAYROLL_STATUS } from '@/lib/graphql/mutations/payrolls/updatePayrollStatus';
import { INSERT_PAYROLL } from '@/lib/graphql/mutations/payrolls/insertPayroll';
import { UPDATE_PAYROLL } from '@/lib/graphql/mutations/payrolls/updatePayroll';

export function usePayrollList(options = {}) {
  const { data, loading, error, refetch } = useQuery(GET_PAYROLLS, options);
  
  return {
    payrolls: data?.payrolls as Payroll[] || [],
    loading,
    error,
    refetch
  };
}

export function usePayrollSchedule(options = {}) {
  return useQuery(GET_PAYROLL_SCHEDULE, {
    notifyOnNetworkStatusChange: true,
    ...options
  });
}

export function useUserPayrolls(options = {}) {
  return useQuery(GET_USER_PAYROLLS, {
    notifyOnNetworkStatusChange: true,
    ...options
  });
}

// Renamed to avoid conflicts with usePayrollQueries
export function useCreatePayrollBasic() {
  return useMutation(INSERT_PAYROLL);
}

// Renamed to avoid conflicts with usePayrollQueries
export function useUpdatePayrollBasic() {
  return useMutation(UPDATE_PAYROLL);
}

export function useUpdatePayrollStatus() {
  const [updateStatus, { loading }] = useMutation(UPDATE_PAYROLL_STATUS);
  
  const updatePayrollStatus = async (id: string, status: PayrollStatus) => {
    try {
      const result = await updateStatus({
        variables: { id, status },
        optimisticResponse: {
          update_payrolls_by_pk: {
            __typename: 'payrolls',
            id,
            status
          }
        }
      });
      
      return result.data?.update_payrolls_by_pk;
    } catch (error) {
      console.error('Error updating payroll status:', error);
      throw error;
    }
  };
  
  return { updatePayrollStatus, loading };
}
EOL

  echo -e "${GREEN}✅ Updated usePayroll.ts with correct imports${NC}"
fi

echo -e "\n${BLUE}📊 Summary:${NC}"
echo -e "${GREEN}✅ Created missing GraphQL query files${NC}"
echo -e "${GREEN}✅ Updated imports to reference the correct locations${NC}"

echo -e "\n${BLUE}🔄 Next steps:${NC}"
echo -e "${YELLOW}1. Verify that the app builds without missing export errors${NC}"
echo -e "${YELLOW}2. Run the app to ensure the GraphQL queries work correctly${NC}"