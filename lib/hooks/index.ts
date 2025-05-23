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

// API Hooks Continued
export * from './api/useUsers';
export * from './api/useWorkSchedule';
export * from './api/useStatistics';
export * from './api/useDashboard';
export * from './api/useExternalSystems';

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
