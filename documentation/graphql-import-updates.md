# GraphQL Import Updates Report

Generated on: 5/23/2025, 9:24:03 PM

Total imports to update: 95


## Files requiring updates:


### app/(dashboard)/calendar/page.tsx

- Update import of `GET_PAYROLLS`
  - From: `@/lib/graphql/queries/payrolls/getPayrolls`
  - To: `@/lib/graphql/queries/payrolls`
- Update import of `GET_HOLIDAYS_BY_YEAR`
  - From: `@/lib/graphql/queries/holidays/getHolidaysByYear`
  - To: `@/lib/graphql/queries/holidays`

### app/(dashboard)/clients/[id]/page.tsx

- Update import of `useSmartPolling`
  - From: `@/lib/hooks`
  - To: `@/lib/hooks/api`
- Update import of `GET_CLIENT_BY_ID`
  - From: `@/lib/graphql/queries/clients/getClientById`
  - To: `@/lib/graphql/queries/clients`

### app/(dashboard)/clients/new/page.tsx

- Update import of `useUserRole`
  - From: `@/lib/hooks/api/useUserRole`
  - To: `@/lib/hooks/api`
- Update import of `CREATE_CLIENT`
  - From: `@/lib/graphql/mutations/clients/createClient`
  - To: `@/lib/graphql/mutations/clients`

### app/(dashboard)/clients/page.tsx

- Update import of `useSmartPolling, useUserRole`
  - From: `@/lib/hooks`
  - To: `@/lib/hooks/api`

### app/(dashboard)/developer/page.tsx

- Update import of `useUserRole`
  - From: `@/lib/hooks/api/useUserRole`
  - To: `@/lib/hooks/api`

### app/(dashboard)/payroll-schedule/page.tsx

- Update import of `cn`
  - From: `@/lib/utils/utils`
  - To: `@/lib/utils`
- Update import of `GET_PAYROLLS_BY_MONTH`
  - From: `@/lib/graphql/queries/payrolls/getPayrollsByMonth`
  - To: `@/lib/graphql/queries/payrolls`
- Update import of `GET_HOLIDAYS`
  - From: `@/lib/graphql/queries/holidays/getHolidays`
  - To: `@/lib/graphql/queries/holidays`
- Update import of `useSmartPolling`
  - From: `@/lib/hooks`
  - To: `@/lib/hooks/api`

### app/(dashboard)/payrolls/[id]/page.tsx

- Update import of `GET_PAYROLL_BY_ID`
  - From: `@/lib/graphql/queries/payrolls/getPayrollById`
  - To: `@/lib/graphql/queries/payrolls`
- Update import of `handleApiError`
  - From: `@/lib/utils/error-handling`
  - To: `@/lib/utils`

### app/(dashboard)/payrolls/page.tsx

- Update import of `useUserRole`
  - From: `@/lib/hooks`
  - To: `@/lib/hooks/api`

### app/(dashboard)/staff/[id]/page.tsx

- Update import of `GET_STAFF_BY_ID`
  - From: `@/lib/graphql/queries/staff/getStaffById`
  - To: `@/lib/graphql/queries/staff`
- Update import of `useUserRole`
  - From: `@/lib/hooks`
  - To: `@/lib/hooks/api`

### app/(dashboard)/staff/page.tsx

- Update import of `GET_STAFF_LIST`
  - From: `@/lib/graphql/queries/staff/getStaffList`
  - To: `@/lib/graphql/queries/staff`
- Update import of `UPDATE_STAFF`
  - From: `@/lib/graphql/mutations/staff/updateStaff`
  - To: `@/lib/graphql/mutations/staff`
- Update import of `DELETE_STAFF`
  - From: `@/lib/graphql/mutations/staff/deleteStaff`
  - To: `@/lib/graphql/mutations/staff`
- Update import of `useUserRole`
  - From: `@/lib/hooks`
  - To: `@/lib/hooks/api`
- Update import of `roleMapping, validRoles`
  - From: `@/lib/auth/roles`
  - To: `@/lib/auth`

### app/api/clerk-webhooks/route.ts

- Update import of `syncUserWithDatabase, deleteUserFromDatabase`
  - From: `@/lib/services/user-sync`
  - To: `@/lib/services`

### app/api/cron/sync-holidays/route.ts

- Update import of `syncAustralianHolidays, syncMultipleYears`
  - From: `@/lib/services/holiday-sync-service`
  - To: `@/lib/services`

### app/api/cron/update-payroll-dates/route.ts

- Update import of `getServerApolloClient`
  - From: `@/lib/api/apollo-client`
  - To: `@/lib/api`
- Update import of `GENERATE_PAYROLL_DATES`
  - From: `@/lib/graphql/mutations/payroll_dates/generatePayrollDates`
  - To: `@/lib/graphql/mutations/payrolls`
- Update import of `UPDATE_PAYROLL_STATUS`
  - From: `@/lib/graphql/mutations/payrolls/updatePayrollStatus`
  - To: `@/lib/graphql/mutations/payrolls`

### app/api/holidays/sync/route.ts

- Update import of `syncAustralianHolidays`
  - From: `@/lib/services/holiday-sync-service`
  - To: `@/lib/services`

### app/api/payroll-dates/[payrollId]/route.ts

- Update import of `adminApolloClient`
  - From: `@/lib/api/apollo-client`
  - To: `@/lib/api`
- Update import of `GENERATE_PAYROLL_DATES`
  - From: `@/lib/graphql/mutations/payroll_dates/generatePayrollDates`
  - To: `@/lib/graphql/mutations/payrolls`
- Update import of `GET_PAYROLL_DATES`
  - From: `@/lib/graphql/queries/payrolls/getPayrollDates`
  - To: `@/lib/graphql/queries/payrolls`

### app/api/payroll-dates/generated/route.ts

- Update import of `getServerApolloClient`
  - From: `@/lib/api/apollo-client`
  - To: `@/lib/api`

### app/api/payrolls/[id]/route.ts

- Update import of `getServerApolloClient`
  - From: `@/lib/api/apollo-client`
  - To: `@/lib/api`
- Update import of `GET_PAYROLL_BY_ID`
  - From: `@/lib/graphql/queries/payrolls/getPayrollById`
  - To: `@/lib/graphql/queries/payrolls`
- Update import of `apiSuccess, apiError, apiNotFound, apiUnauthorized`
  - From: `@/lib/api/api-response`
  - To: `@/lib/api`

### app/api/payrolls/route.ts

- Update import of `getServerApolloClient`
  - From: `@/lib/api/apollo-client`
  - To: `@/lib/api`
- Update import of `GET_PAYROLLS`
  - From: `@/lib/graphql/queries/payrolls/getPayrolls`
  - To: `@/lib/graphql/queries/payrolls`
- Update import of `apiSuccess, apiError, apiUnauthorized`
  - From: `@/lib/api/api-response`
  - To: `@/lib/api`

### app/api/payrolls/schedule/route.ts

- Update import of `generatePayrollSchedule`
  - From: `@/lib/services/payroll-service`
  - To: `@/lib/utils`

### app/api/update-user-role/route.ts

- Update import of `getServerApolloClient`
  - From: `@/lib/api/apollo-client`
  - To: `@/lib/api`
- Update import of `UPDATE_STAFF`
  - From: `@/lib/graphql/mutations/staff/updateStaff`
  - To: `@/lib/graphql/mutations/staff`

### app/api/user/[id]/route.ts

- Update import of `adminApolloClient`
  - From: `@/lib/api/apollo-client`
  - To: `@/lib/api`

### app/api/user/route.ts

- Update import of `apiSuccess, apiError, apiUnauthorized, apiForbidden, apiValidationError`
  - From: `@/lib/api/api-response`
  - To: `@/lib/api`

### app/providers.tsx

- Update import of `getClientApolloClient`
  - From: `@/lib/api/apollo-client`
  - To: `@/lib/api`

### components/client/client-payroll-table.tsx

- Update import of `formatDate`
  - From: `@/lib/utils/utils`
  - To: `@/lib/utils`

### components/common/export-csv.tsx

- Update import of `GET_PAYROLL_DATES`
  - From: `@/lib/graphql/queries/payrolls/getPayrollDates`
  - To: `@/lib/graphql/queries/payrolls`

### components/common/export-pdf.tsx

- Update import of `GET_PAYROLL_DATES`
  - From: `@/lib/graphql/queries/payrolls/getPayrollDates`
  - To: `@/lib/graphql/queries/payrolls`

### components/common/form-field.tsx

- Update import of `cn`
  - From: `@/lib/utils/utils`
  - To: `@/lib/utils`

### components/common/markdown-viewer.tsx

- Update import of `cn`
  - From: `@/lib/utils/utils`
  - To: `@/lib/utils`

### components/common/notes-list-with-add.tsx

- Update import of `GET_NOTES`
  - From: `@/lib/graphql/queries/notes/getNotes`
  - To: `@/lib/graphql/queries/notes`

### components/common/refresh-button.tsx

- Update import of `cn`
  - From: `@/lib/utils/utils`
  - To: `@/lib/utils`
- Update import of `useCacheInvalidation`
  - From: `@/hooks/useCacheInvalidation`
  - To: `@/lib/hooks/utils`

### components/common/role-gates.tsx

- Update import of `useUserRole`
  - From: `@/hooks/useUserRole`
  - To: `@/lib/hooks/api`
- Update import of `HasuraRole, Permission`
  - From: `@/lib/auth/roles`
  - To: `@/lib/auth`

### components/dialogs/edit-payroll-dialog.tsx

- Update import of `UPDATE_PAYROLL`
  - From: `@/lib/graphql/mutations/payrolls/updatePayroll`
  - To: `@/lib/graphql/mutations/payrolls`
- Update import of `CYCLE_TYPES`
  - From: `@/lib/services/payroll-service`
  - To: `@/lib/services`

### components/forms/user-role-management.tsx

- Update import of `appRoles, validRoles`
  - From: `@/lib/auth/roles`
  - To: `@/lib/auth`

### components/layout/main-nav.tsx

- Update import of `cn`
  - From: `@/lib/utils/utils`
  - To: `@/lib/utils`

### components/layout/sidebar.tsx

- Update import of `cn`
  - From: `@/lib/utils/utils`
  - To: `@/lib/utils`

### components/payroll/generate-missing-dates-button.tsx

- Update import of `GET_PAYROLLS_MISSING_DATES`
  - From: `@/lib/graphql/queries`
  - To: `@/lib/graphql/queries/payrolls`
- Update import of `GENERATE_PAYROLL_DATES`
  - From: `@/lib/graphql/mutations`
  - To: `@/lib/graphql/mutations/payrolls`

### components/payroll/payroll-dates-view.tsx

- Update import of `GET_PAYROLL_DATES`
  - From: `@/lib/graphql/queries/payrolls/getPayrollDates`
  - To: `@/lib/graphql/queries/payrolls`

### components/payroll/payroll-list-card.tsx

- Update import of `formatDate`
  - From: `@/lib/utils/utils`
  - To: `@/lib/utils`

### components/payroll/payrolls-missing-dates.tsx

- Update import of `useUserRole`
  - From: `@/lib/hooks/api/useUserRole`
  - To: `@/lib/hooks/api`
- Update import of `GET_PAYROLLS_MISSING_DATES`
  - From: `@/lib/graphql/queries/payrolls/getPayrollsMissingDates`
  - To: `@/lib/graphql/queries/payrolls`
- Update import of `GENERATE_PAYROLL_DATES`
  - From: `@/lib/graphql/mutations/payrolls/generatePayrollDates`
  - To: `@/lib/graphql/mutations/payrolls`
- Update import of `useSmartPolling`
  - From: `@/lib/hooks/api/usePolling`
  - To: `@/lib/hooks/api`

### components/ui/alert-dialog.tsx

- Update import of `cn`
  - From: `@/lib/utils/utils`
  - To: `@/lib/utils`

### components/ui/alert.tsx

- Update import of `cn`
  - From: `@/lib/utils/utils`
  - To: `@/lib/utils`

### components/ui/avatar.tsx

- Update import of `cn`
  - From: `@/lib/utils/utils`
  - To: `@/lib/utils`

### components/ui/badge.tsx

- Update import of `cn`
  - From: `@/lib/utils/utils`
  - To: `@/lib/utils`

### components/ui/button.tsx

- Update import of `cn`
  - From: `@/lib/utils/utils`
  - To: `@/lib/utils`

### components/ui/calendar.tsx

- Update import of `cn`
  - From: `@/lib/utils/utils`
  - To: `@/lib/utils`

### components/ui/card.tsx

- Update import of `cn`
  - From: `@/lib/utils/utils`
  - To: `@/lib/utils`

### components/ui/chart.tsx

- Update import of `cn`
  - From: `@/lib/utils/utils`
  - To: `@/lib/utils`

### components/ui/checkbox.tsx

- Update import of `cn`
  - From: `@/lib/utils/utils`
  - To: `@/lib/utils`

### components/ui/dialog.tsx

- Update import of `cn`
  - From: `@/lib/utils/utils`
  - To: `@/lib/utils`

### components/ui/dropdown-menu.tsx

- Update import of `cn`
  - From: `@/lib/utils/utils`
  - To: `@/lib/utils`

### components/ui/form-layout.tsx

- Update import of `cn`
  - From: `@/lib/utils/utils`
  - To: `@/lib/utils`

### components/ui/input.tsx

- Update import of `cn`
  - From: `@/lib/utils/utils`
  - To: `@/lib/utils`

### components/ui/label.tsx

- Update import of `cn`
  - From: `@/lib/utils/utils`
  - To: `@/lib/utils`

### components/ui/page-header.tsx

- Update import of `cn`
  - From: `@/lib/utils/utils`
  - To: `@/lib/utils`

### components/ui/popover.tsx

- Update import of `cn`
  - From: `@/lib/utils/utils`
  - To: `@/lib/utils`

### components/ui/resizable.tsx

- Update import of `cn`
  - From: `@/lib/utils/utils`
  - To: `@/lib/utils`

### components/ui/scroll-area.tsx

- Update import of `cn`
  - From: `@/lib/utils/utils`
  - To: `@/lib/utils`

### components/ui/section-card.tsx

- Update import of `cn`
  - From: `@/lib/utils/utils`
  - To: `@/lib/utils`

### components/ui/select.tsx

- Update import of `cn`
  - From: `@/lib/utils/utils`
  - To: `@/lib/utils`

### components/ui/separator.tsx

- Update import of `cn`
  - From: `@/lib/utils/utils`
  - To: `@/lib/utils`

### components/ui/skeleton.tsx

- Update import of `cn`
  - From: `@/lib/utils/utils`
  - To: `@/lib/utils`

### components/ui/switch.tsx

- Update import of `cn`
  - From: `@/lib/utils/utils`
  - To: `@/lib/utils`

### components/ui/table.tsx

- Update import of `cn`
  - From: `@/lib/utils/utils`
  - To: `@/lib/utils`

### components/ui/tabs.tsx

- Update import of `cn`
  - From: `@/lib/utils/utils`
  - To: `@/lib/utils`

### components/ui/textarea.tsx

- Update import of `cn`
  - From: `@/lib/utils/utils`
  - To: `@/lib/utils`

### pages/api/admin/sync-users.ts

- Update import of `syncAllUsers, syncUserById`
  - From: `@/lib/services/user-sync`
  - To: `@/lib/services`

### pages/api/webhooks/clerk.ts

- Update import of `adminApolloClient`
  - From: `@/lib/api/apollo-client`
  - To: `@/lib/api`

## GraphQL Exports Summary


### Fragments (18)

- ADJUSTMENT_RULE_FRAGMENT
- APP_SETTINGS_FRAGMENT
- CLIENT_EXTERNAL_SYSTEM_FRAGMENT
- CLIENT_FRAGMENT
- EXTERNAL_SYSTEM_FRAGMENT
- FEATURE_FLAG_FRAGMENT
- HOLIDAY_FRAGMENT
- LEAVE_FRAGMENT
- NOTE_FRAGMENT
- PAYROLL_CYCLE_FRAGMENT
- ... and 8 more

### Types (1325)

- AddNoteDocument
- AddNoteMutation
- AddNoteMutationFn
- AddNoteMutationHookResult
- AddNoteMutationOptions
- AddNoteMutationResult
- AddNoteMutationVariables
- AdjustmentRule
- AdjustmentRuleFragmentFragment
- AdjustmentRuleFragmentFragmentDoc
- ... and 1315 more

### Hooks (201)

- useAccountByUserId
- useAccounts
- useAddNote
- useAddNoteMutation
- useAdjustmentRuleByCycleAndType
- useAdjustmentRules
- useAppSettingByKey
- useAppSettingValue
- useAppSettings
- useAustralianHolidays
- ... and 191 more

### Mutations (24)

- ADD_NOTE
- CREATE_ADJUSTMENT_RULE
- CREATE_CLIENT
- CREATE_LEAVE
- CREATE_PAYROLL
- CREATE_STAFF
- CREATE_WORK_SCHEDULE
- DELETE_ADJUSTMENT_RULE
- DELETE_CLIENT
- DELETE_PAYROLL
- ... and 14 more

### Querys (49)

- GET_ADJUSTMENT_RULES
- GET_ADJUSTMENT_RULE_BY_CYCLE_AND_TYPE
- GET_APP_SETTINGS
- GET_CLIENTS_LIST
- GET_CLIENT_BY_ID
- GET_CLIENT_EXTERNAL_SYSTEMS
- GET_CLIENT_STATISTICS
- GET_DASHBOARD_DATA
- GET_EXTERNAL_SYSTEMS
- GET_FEATURE_FLAGS
- ... and 39 more

## Import Path Recommendations

- Use `@/lib` for all lib imports
- Use `@/lib/hooks` for hook imports when available from index
- Use `@/lib/graphql` for GraphQL queries/mutations when available from index
- Use `@/components` for component imports
- Avoid deep relative imports like `../../../lib`