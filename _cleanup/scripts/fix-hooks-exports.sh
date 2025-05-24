#!/bin/bash

# fix-hooks-exports.sh
#
# This script resolves conflicting exports between hook files

# Text colors
GREEN='\033[0;32m'
RED='\033[0;31m'
BLUE='\033[0;34m'
YELLOW='\033[0;33m'
NC='\033[0m' # No Color

# Configuration
ROOT_DIR="$(pwd)" # Run from project root
HOOKS_DIR="$ROOT_DIR/lib/hooks"
HOOKS_INDEX="$HOOKS_DIR/index.ts"
BACKUP_DIR="$ROOT_DIR/import-fix-backups"
mkdir -p "$BACKUP_DIR"

echo -e "${BLUE}🔧 Fixing conflicting hook exports...${NC}"

# Check if the hooks directory exists
if [ ! -d "$HOOKS_DIR" ]; then
  echo -e "${RED}❌ Hooks directory not found: $HOOKS_DIR${NC}"
  exit 1
fi

# Check files with conflicting exports
client_hook="$HOOKS_DIR/api/useClient.ts"
client_queries_hook="$HOOKS_DIR/api/useClientQueries.ts"
payroll_hook="$HOOKS_DIR/api/usePayroll.ts"
payroll_queries_hook="$HOOKS_DIR/api/usePayrollQueries.ts"

# Back up the original files
for file in "$HOOKS_INDEX" "$client_hook" "$client_queries_hook" "$payroll_hook" "$payroll_queries_hook"; do
  if [ -f "$file" ]; then
    filename=$(basename "$file")
    cp "$file" "$BACKUP_DIR/hooks_${filename}" 2>/dev/null
    cp "$file" "${file}.bak" 2>/dev/null
    echo -e "${YELLOW}Backed up: ${file#$ROOT_DIR/}${NC}"
  fi
done

# First, update useClient.ts to avoid conflicts
if [ -f "$client_hook" ]; then
  echo -e "${BLUE}Updating useClient.ts...${NC}"
  
  # Create a new file with fixed exports
  cat > "$client_hook" << 'EOL'
import { useQuery, useMutation } from '@apollo/client';
import { 
  GET_CLIENTS_LIST 
} from '@/lib/graphql/queries/clients/getClientsList';
import { 
  GET_CLIENT_BY_ID 
} from '@/lib/graphql/queries/clients/getClientById';
import { 
  CREATE_CLIENT 
} from '@/lib/graphql/mutations/clients/createClient';
import { 
  UPDATE_CLIENT 
} from '@/lib/graphql/mutations/clients/updateClient';
import { 
  DELETE_CLIENT 
} from '@/lib/graphql/mutations/clients/deleteClient';

// Renamed to avoid conflicts with useClientQueries
export function useClientsListBasic(options = {}) {
  return useQuery(GET_CLIENTS_LIST, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-and-network',
    ...options
  });
}

// Renamed to avoid conflicts with useClientQueries
export function useClientByIdBasic(id: string, options = {}) {
  return useQuery(GET_CLIENT_BY_ID, {
    variables: { id },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-and-network',
    ...options
  });
}

// Renamed to avoid conflicts with useClientQueries
export function useCreateClientBasic() {
  return useMutation(CREATE_CLIENT);
}

// Renamed to avoid conflicts with useClientQueries
export function useUpdateClientBasic() {
  return useMutation(UPDATE_CLIENT);
}

export function useDeleteClient() {
  return useMutation(DELETE_CLIENT);
}
EOL

  echo -e "${GREEN}✅ Updated useClient.ts with renamed exports to avoid conflicts${NC}"
fi

# Now, update usePayroll.ts to avoid conflicts
if [ -f "$payroll_hook" ]; then
  echo -e "${BLUE}Updating usePayroll.ts...${NC}"
  
  # Create a new file with fixed exports
  cat > "$payroll_hook" << 'EOL'
import { Payroll, PayrollStatus } from '@/types/interface';
import { useQuery, useMutation } from '@apollo/client';
import { 
  GET_PAYROLL_SCHEDULE,
  GET_USER_PAYROLLS,
  INSERT_PAYROLL,
  UPDATE_PAYROLL
} from '@/lib/graphql/queries';
import { GET_PAYROLLS } from '@/lib/graphql/queries/payrolls/getPayrolls';
import { UPDATE_PAYROLL_STATUS } from '@/lib/graphql/mutations/payrolls/updatePayrollStatus';

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

  echo -e "${GREEN}✅ Updated usePayroll.ts with renamed exports to avoid conflicts${NC}"
fi

# Finally, update the hooks index to import correctly
if [ -f "$HOOKS_INDEX" ]; then
  echo -e "${BLUE}Updating hooks/index.ts...${NC}"
  
  # Create a new file with fixed exports
  cat > "$HOOKS_INDEX" << 'EOL'
// API Hooks
export * from './api/useApolloQuery';

// Import from useClient with renamed functions to avoid conflicts
export { 
  useClientsListBasic,
  useClientByIdBasic,
  useCreateClientBasic,
  useUpdateClientBasic,
  useDeleteClient
} from './api/useClient';

// Import all from useClientQueries
export * from './api/useClientQueries';

export * from './api/useLeave';

// Import from usePayroll with renamed functions to avoid conflicts
export { 
  usePayrollList,
  usePayrollSchedule, 
  useUserPayrolls, 
  useCreatePayrollBasic,
  useUpdatePayrollBasic,
  useUpdatePayrollStatus
} from './api/usePayroll';

// Import all from usePayrollQueries
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

  echo -e "${GREEN}✅ Updated hooks/index.ts with explicit imports to avoid conflicts${NC}"
fi

echo -e "\n${BLUE}📊 Summary:${NC}"
echo -e "${GREEN}✅ Fixed hook exports to resolve conflicts${NC}"
echo -e "${YELLOW}Note: Original files were backed up to the $BACKUP_DIR directory${NC}"
echo -e "${YELLOW}Note: Local .bak files were also created next to the original files${NC}"

echo -e "\n${BLUE}🔄 Next steps:${NC}"
echo -e "${YELLOW}1. Verify that the app builds without export conflicts${NC}"
echo -e "${YELLOW}2. Update any imports in your components to use the renamed hooks if needed${NC}"