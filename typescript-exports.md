# TypeScript Exports Analysis

Analysis completed on: 5/23/2025, 9:25:20 PM

Total files with exports: 275


## __mocks__/


### handlers.ts

- `handlers`

### mockData.ts

- `mockClients`
- `mockHolidays`
- `mockPayrolls`
- `mockUsers`

### server.ts

- `server`

## ./


### middleware.ts

- `config`
- `default clerkMiddleware(async (auth, request) => {
  const { pathname } = request.nextUrl;
  
  // Skip public routes
  if (isPublicRoute(request)) {
    return NextResponse.next();
  }

  // Get auth state
  const authState = await auth();
  
  // Check if user is authenticated
  if (!authState.userId) {
    // For API routes, return 401
    if (pathname.startsWith('/api/')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    // For other routes, redirect to sign-in
    return NextResponse.redirect(new URL('/sign-in', request.url));
  }

  try {
    // Get the Hasura token
    const token = await authState.getToken({ template: 'hasura' });
    
    if (!token) {
      console.error('No Hasura token available');
      return NextResponse.redirect(new URL('/sign-in', request.url));
    }

    // Parse the token to get user role
    let userRole = 'viewer'; // default role
    try {
      // Use Buffer.from for Node.js compatibility
      const payload = JSON.parse(
        Buffer.from(token.split('.')[1], 'base64').toString()
      );
      const hasuraClaims = payload['https://hasura.io/jwt/claims'];
      userRole = hasuraClaims?.['x-hasura-default-role'] || 'viewer';
    } catch (e) {
      console.error('Failed to parse JWT:', e);
    }

    // Check role-based access
    for (const [route, allowedRoles] of Object.entries(roleBasedRoutes)) {
      if (pathname.startsWith(route) && !allowedRoles.includes(userRole as any)) {
        if (pathname.startsWith('/api/')) {
          return NextResponse.json(
            { error: 'Forbidden: Insufficient permissions' },
            { status: 403 }
          );
        }
        // Redirect to dashboard with a message
        return NextResponse.redirect(new URL('/dashboard?error=unauthorized', request.url));
      }
    }

    // Add headers for downstream use
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-user-id', authState.userId);
    requestHeaders.set('x-user-role', userRole);
    requestHeaders.set('authorization', `Bearer ${token}`);

    return NextResponse.next({
      request: { headers: requestHeaders }
    });

  } catch (error) {
    console.error('Middleware error:', error);
    return NextResponse.redirect(new URL('/sign-in', request.url));
  }
})`

### tailwind.config.ts

- `default config`

## app/


### error.tsx

- `GlobalError`

### layout.tsx

- `RootLayout`
- `metadata`

### page.tsx

- `Home`

### providers.tsx

- `AppProviders`

## app/(auth)/


### layout.tsx

- `AuthLayout`

## app/(auth)/sign-in/[[...sign-in]]/


### page.tsx

- `Page`

## app/(dashboard)/


### layout.tsx

- `DashboardLayout`

## app/(dashboard)/ai-assistant/


### page.tsx

- `AIAssistantPage`

## app/(dashboard)/calendar/


### page.tsx

- `CalendarPage`

## app/(dashboard)/clients/


### loading.tsx

- `Loading`

### page.tsx

- `ClientsPage`

## app/(dashboard)/clients/[id]/


### page.tsx

- `ClientPage`

## app/(dashboard)/clients/new/


### page.tsx

- `NewClientPage`

## app/(dashboard)/dashboard/


### page.tsx

- `DashboardPage`

## app/(dashboard)/developer/


### page.tsx

- `DeveloperPage`

## app/(dashboard)/onboarding/


### page.tsx

- `OnboardingPage`

## app/(dashboard)/payroll-schedule/


### loading.tsx

- `Loading`

### page.tsx

- `PayrollSchedulePage`

## app/(dashboard)/payrolls/


### loading.tsx

- `Loading`

### page.tsx

- `PayrollsPage`

## app/(dashboard)/payrolls/[id]/


### error.tsx

- `Error`

### loading.tsx

- `Loading`

### page.tsx

- `PayrollPage`

## app/(dashboard)/settings/


### page.tsx

- `SettingsPage`

## app/(dashboard)/settings/account/


### page.tsx

- `AccountSettings`

## app/(dashboard)/staff/


### loading.tsx

- `Loading`

### page.tsx

- `UsersPage`

## app/(dashboard)/staff/[id]/


### page.tsx

- `UserInfoPage`

## app/(dashboard)/staff/new/


### page.tsx

- `CreateUserPage`

## app/(dashboard)/tax-calculator/


### page.tsx

- `TaxCalculatorPage`

## app/api/auth/token/


### route.ts

- `GET`

## app/api/chat/


### route.ts

- `POST`
- `maxDuration`

## app/api/clerk-webhooks/


### route.ts

- `POST`

## app/api/cron/generate-batch/


### route.ts

- `POST`

## app/api/cron/sync-holidays/


### route.ts

- `GET`
- `POST`

## app/api/cron/update-payroll-dates/


### route.ts

- `POST`

## app/api/developer/


### route.ts

- `POST`

## app/api/holidays/sync/


### route.ts

- `POST`

## app/api/payroll-dates/[payrollId]/


### route.ts

- `GET`
- `POST`

## app/api/payroll-dates/generated/


### route.ts

- `POST`

## app/api/payrolls/


### route.ts

- `GET`

## app/api/payrolls/[id]/


### route.ts

- `GET`

## app/api/payrolls/schedule/


### route.ts

- `GET`

## app/api/update-user-role/


### route.ts

- `POST`

## app/api/user/


### route.ts

- `POST`

## app/api/user/[id]/


### route.ts

- `PUT`

## app/sso-callback/


### page.tsx

- `SSOCallback`

## components/


### index.ts

- `* from "./client"`
- `* from "./common"`
- `* from "./dialogs"`
- `* from "./forms"`
- `* from "./layout"`
- `* from "./payroll"`
- `* from "./providers"`
- `* from "./ui"`
- `* from "./upcoming-payrolls"`

### upcoming-payrolls.tsx

- `UpcomingPayrolls`

## components/client/


### client-card.tsx

- `ClientCard`

### client-payroll-table.tsx

- `ClientPayrollTable`

### clients-table.tsx

- `ClientsTable`

### index.ts

- `* from "./client-card"`
- `* from "./client-payroll-table"`
- `* from "./clients-table"`

## components/common/


### add-note.tsx

- `AddNote`

### ai-chat.tsx

- `AIChat`

### alert.tsx

- `Alert`
- `Alert`
- `AlertDescription`
- `AlertTitle`

### data-table.tsx

- `DataTable`

### error-boundary.tsx

- `ErrorBoundary`
- `withErrorBoundary`

### error-display.tsx

- `ErrorDisplay`

### export-csv.tsx

- `ExportCsv`

### export-pdf.tsx

- `ExportPdf`

### form-field.tsx

- `FormField`

### index.ts

- `* from "./add-note"`
- `* from "./ai-chat"`
- `* from "./alert"`
- `* from "./data-table"`
- `* from "./error-boundary"`
- `* from "./error-display"`
- `* from "./export-csv"`
- `* from "./export-pdf"`
- `* from "./form-field"`
- `* from "./live-data-table"`
- `* from "./markdown-viewer"`
- `* from "./notes-list"`
- `* from "./notes-list-with-add"`
- `* from "./recent-activity"`
- `* from "./refresh-button"`
- `* from "./role-gates"`
- `* from "./urgent-alerts"`

### live-data-table.tsx

- `LiveDataTable`

### markdown-viewer.tsx

- `MarkdownViewer`

### notes-list-with-add.tsx

- `NotesListWithAdd`

### notes-list.tsx

- `NotesList`

### recent-activity.tsx

- `RecentActivity`

### refresh-button.tsx

- `RefreshButton`

### role-gates.tsx

- `HasuraRoleGate`
- `PermissionGate`

### urgent-alerts.tsx

- `UrgentAlerts`

## components/dialogs/


### confirm-dialog.tsx

- `ConfirmDialog`
- `ConfirmDialogProps`

### custom-dialog.tsx

- `CustomDialog`
- `CustomDialogProps`

### edit-payroll-dialog.tsx

- `EditPayrollDialog`

### index.ts

- `* from "./confirm-dialog"`
- `* from "./custom-dialog"`
- `* from "./edit-payroll-dialog"`
- `* from "./modal-form"`
- `* from "./notes-modal"`

### modal-form.tsx

- `default ModalForm`

### notes-modal.tsx

- `NotesModal`

## components/forms/


### index.ts

- `* from "./user-role-management"`

### user-role-management.tsx

- `UserRoleManagement`

## components/layout/


### client-wrapper.tsx

- `ClientWrapper`

### dashboard-shell.tsx

- `DashboardShell`

### index.ts

- `* from "./client-wrapper"`
- `* from "./dashboard-shell"`
- `* from "./main-nav"`
- `* from "./sidebar"`
- `* from "./theme-toggle"`
- `* from "./user-nav"`

### main-nav.tsx

- `MainNav`

### sidebar.tsx

- `Sidebar`

### theme-toggle.tsx

- `ThemeToggle`

### user-nav.tsx

- `UserNav`

## components/payroll/


### australian-tax-calculator.tsx

- `AustralianTaxCalculator`

### generate-missing-dates-button.tsx

- `GenerateMissingDatesButton`

### index.ts

- `* from "./australian-tax-calculator"`
- `* from "./generate-missing-dates-button"`
- `* from "./payroll-dates-view"`
- `* from "./payroll-details-card"`
- `* from "./payroll-list-card"`
- `* from "./payroll-schedule-view"`
- `* from "./payroll-subscription"`
- `* from "./payrolls-missing-dates"`
- `* from "./regenerate-dates"`
- `* from "./upcoming-payrolls"`

### payroll-dates-view.tsx

- `PayrollDatesView`

### payroll-details-card.tsx

- `PayrollDetailsCard`

### payroll-list-card.tsx

- `PayrollListCard`

### payroll-schedule-view.tsx

- `PayrollScheduleView`

### payroll-subscription.tsx

- `PayrollUpdatesComponent`

### payrolls-missing-dates.tsx

- `PayrollsMissingDates`

### regenerate-dates.tsx

- `RegenerateDates`

### upcoming-payrolls.tsx

- `UpcomingPayrolls`

## components/providers/


### client-theme-provider.tsx

- `ClientThemeProvider`

### index.ts

- `* from "./root-providers"`
- `* from "./theme-provider"`

### root-providers.tsx

- `RootProviders`

### theme-provider.tsx

- `ClientThemeProvider`
- `ThemeProvider`

## components/ui/


### alert-dialog.tsx

- `AlertDialog`
- `AlertDialogAction`
- `AlertDialogCancel`
- `AlertDialogContent`
- `AlertDialogDescription`
- `AlertDialogFooter`
- `AlertDialogHeader`
- `AlertDialogOverlay`
- `AlertDialogPortal`
- `AlertDialogTitle`
- `AlertDialogTrigger`

### alert.tsx

- `Alert`
- `AlertDescription`
- `AlertTitle`

### aspect-ratio.tsx

- `AspectRatio`

### avatar.tsx

- `Avatar`
- `AvatarFallback`
- `AvatarImage`

### badge.tsx

- `Badge`
- `BadgeProps`
- `badgeVariants`

### button.tsx

- `Button`
- `ButtonProps`

### calendar.tsx

- `Calendar`
- `CalendarProps`

### card.tsx

- `Card`
- `CardContent`
- `CardDescription`
- `CardFooter`
- `CardHeader`
- `CardTitle`

### chart.tsx

- `ChartConfig`
- `ChartContainer`
- `ChartLegend`
- `ChartLegendContent`
- `ChartStyle`
- `ChartTooltip`
- `ChartTooltipContent`

### checkbox.tsx

- `Checkbox`

### dialog.tsx

- `Dialog`
- `DialogClose`
- `DialogContent`
- `DialogDescription`
- `DialogFooter`
- `DialogHeader`
- `DialogOverlay`
- `DialogPortal`
- `DialogTitle`
- `DialogTrigger`

### dropdown-menu.tsx

- `DropdownMenu`
- `DropdownMenuCheckboxItem`
- `DropdownMenuContent`
- `DropdownMenuGroup`
- `DropdownMenuItem`
- `DropdownMenuLabel`
- `DropdownMenuPortal`
- `DropdownMenuRadioGroup`
- `DropdownMenuRadioItem`
- `DropdownMenuSeparator`
- `DropdownMenuShortcut`
- `DropdownMenuSub`
- `DropdownMenuSubContent`
- `DropdownMenuSubTrigger`
- `DropdownMenuTrigger`

### form-layout.tsx

- `FormContainer`
- `FormLayout`
- `FormSection`

### index.ts

- `* from "./alert"`
- `* from "./alert-dialog"`
- `* from "./aspect-ratio"`
- `* from "./avatar"`
- `* from "./badge"`
- `* from "./button"`
- `* from "./calendar"`
- `* from "./card"`
- `* from "./chart"`
- `* from "./checkbox"`
- `* from "./dialog"`
- `* from "./dropdown-menu"`
- `* from "./form-layout"`
- `* from "./input"`
- `* from "./label"`
- `* from "./loading-states"`
- `* from "./modal"`
- `* from "./page-header"`
- `* from "./popover"`
- `* from "./resizable"`
- `* from "./scroll-area"`
- `* from "./section-card"`
- `* from "./select"`
- `* from "./separator"`
- `* from "./skeleton"`
- `* from "./sonner"`
- `* from "./spinner"`
- `* from "./switch"`
- `* from "./table"`
- `* from "./tabs"`
- `* from "./textarea"`

### input.tsx

- `Input`

### label.tsx

- `Label`

### loading-states.tsx

- `CardLoading`
- `PageLoading`
- `TableLoading`

### modal.tsx

- `Modal`

### page-header.tsx

- `PageHeader`

### popover.tsx

- `Popover`
- `PopoverAnchor`
- `PopoverContent`
- `PopoverTrigger`

### resizable.tsx

- `ResizableHandle`
- `ResizablePanel`
- `ResizablePanelGroup`

### scroll-area.tsx

- `ScrollArea`
- `ScrollBar`

### section-card.tsx

- `SectionCard`

### select.tsx

- `Select`
- `SelectContent`
- `SelectGroup`
- `SelectItem`
- `SelectLabel`
- `SelectScrollDownButton`
- `SelectScrollUpButton`
- `SelectSeparator`
- `SelectTrigger`
- `SelectValue`

### separator.tsx

- `Separator`

### skeleton.tsx

- `Skeleton`

### sonner.tsx

- `Toaster`

### spinner.tsx

- `Spinner`

### switch.tsx

- `Switch`

### table.tsx

- `Table`
- `TableBody`
- `TableCaption`
- `TableCell`
- `TableFooter`
- `TableHead`
- `TableHeader`
- `TableRow`

### tabs.tsx

- `Tabs`
- `TabsContent`
- `TabsList`
- `TabsTrigger`

### textarea.tsx

- `Textarea`

## drizzle/


### schema.ts

- `clients`
- `holidays`
- `leave`
- `notes`
- `payrollDates`
- `payrolls`
- `staff`
- `workSchedule`

## lib/


### db.ts

- `db`

### index.ts

- `* from './api'`
- `* from './auth'`
- `* from './db'`
- `* from './hooks'`
- `* from './services'`
- `* from './utils'`

## lib/api/


### api-response.ts

- `ApiResponse`
- `apiError`
- `apiForbidden`
- `apiNotFound`
- `apiSuccess`
- `apiUnauthorized`
- `apiValidationError`

### apollo-auth-link.ts

- `createAuthLink`

### apollo-client.ts

- `adminApolloClient`
- `default getClientApolloClient()`
- `getClientApolloClient`
- `getServerApolloClient`

### auth-guard.ts

- `GET`
- `withAuth`

### error-boundary.tsx

- `ApolloErrorBoundary`

### index.ts

- `* from './api-response'`
- `* from './apollo-auth-link'`
- `* from './apollo-client'`
- `* from './auth-guard'`
- `* from './error-boundary'`
- `* from './optimistic-updates'`

### optimistic-updates.ts

- `addPayrollToCache`
- `removePayrollFromCache`
- `updatePayrollDateInCache`
- `updatePayrollInCache`
- `updatePayrollStatusInCache`

## lib/auth/


### auth.ts

- `getUserRole`
- `verifyHasuraRole`
- `verifyPermission`
- `withPermissionCheck`
- `withRoleCheck`

### index.ts

- `* from './auth'`
- `* from './roles'`
- `* from './token-manager'`
- `* from './token-manager.client'`
- `* from './token-manager.server'`

### roles.ts

- `AppRole`
- `HasuraRole`
- `Permission`
- `appRoles`
- `getAppRoleByHasuraRole`
- `getRoleDisplayName`
- `hasPermission`
- `isAdmin`
- `isConsultant`
- `isManager`
- `isViewer`
- `roleMapping`
- `rolePermissions`
- `validRoles`

### token-manager.client.ts

- `tokenManagerClient`

### token-manager.server.ts

- `tokenManagerServer`

### token-manager.ts

- `tokenManager`

## lib/graphql/


### index.ts

- `* from './fragments'`
- `* from './mutations'`
- `* from './queries'`

## lib/graphql/fragments/


### adjustmentRuleFragment.ts

- `ADJUSTMENT_RULE_FRAGMENT`

### appSettingsFragment.ts

- `APP_SETTINGS_FRAGMENT`

### clientExternalSystemFragment.ts

- `CLIENT_EXTERNAL_SYSTEM_FRAGMENT`

### clientFragment.ts

- `CLIENT_FRAGMENT`

### externalSystemFragment.ts

- `EXTERNAL_SYSTEM_FRAGMENT`

### featureFlagFragment.ts

- `FEATURE_FLAG_FRAGMENT`

### holidayFragment.ts

- `HOLIDAY_FRAGMENT`

### index.ts

- `* from './adjustmentRuleFragment'`
- `* from './appSettingsFragment'`
- `* from './clientExternalSystemFragment'`
- `* from './clientFragment'`
- `* from './externalSystemFragment'`
- `* from './featureFlagFragment'`
- `* from './holidayFragment'`
- `* from './leaveFragment'`
- `* from './noteFragment'`
- `* from './payrollCycleFragment'`
- `* from './payrollDateFragment'`
- `* from './payrollDateTypeFragment'`
- `* from './payrollFragment'`
- `* from './staffFragment'`
- `* from './workScheduleFragment'`

### leaveFragment.ts

- `LEAVE_FRAGMENT`

### noteFragment.ts

- `NOTE_FRAGMENT`

### payrollCycleFragment.ts

- `PAYROLL_CYCLE_FRAGMENT`

### payrollDateFragment.ts

- `PAYROLL_DATE_FRAGMENT`

### payrollDateTypeFragment.ts

- `PAYROLL_DATE_TYPE_FRAGMENT`

### payrollFragment.ts

- `PAYROLL_DETAIL_FRAGMENT`
- `PAYROLL_FRAGMENT`

### staffFragment.ts

- `STAFF_FRAGMENT`
- `STAFF_LEAVE_FRAGMENT`
- `STAFF_MANAGER_FRAGMENT`

### workScheduleFragment.ts

- `WORK_SCHEDULE_FRAGMENT`

## lib/graphql/generated/


### apollo-helpers.ts

- `AddNoteDocument`
- `AddNoteMutationFn`
- `AddNoteMutationHookResult`
- `AddNoteMutationOptions`
- `AddNoteMutationResult`
- `AdjustmentRuleFragmentFragmentDoc`
- `AppSettingsFragmentFragmentDoc`
- `ClientExternalSystemFragmentFragmentDoc`
- `ClientFragmentFragmentDoc`
- `CreateAdjustmentRuleDocument`
- `CreateAdjustmentRuleMutationFn`
- `CreateAdjustmentRuleMutationHookResult`
- `CreateAdjustmentRuleMutationOptions`
- `CreateAdjustmentRuleMutationResult`
- `CreateClientDocument`
- `CreateClientMutationFn`
- `CreateClientMutationHookResult`
- `CreateClientMutationOptions`
- `CreateClientMutationResult`
- `CreateLeaveDocument`
- `CreateLeaveMutationFn`
- `CreateLeaveMutationHookResult`
- `CreateLeaveMutationOptions`
- `CreateLeaveMutationResult`
- `CreatePayrollDocument`
- `CreatePayrollMutationFn`
- `CreatePayrollMutationHookResult`
- `CreatePayrollMutationOptions`
- `CreatePayrollMutationResult`
- `CreateStaffDocument`
- `CreateStaffMutationFn`
- `CreateStaffMutationHookResult`
- `CreateStaffMutationOptions`
- `CreateStaffMutationResult`
- `CreateWorkScheduleDocument`
- `CreateWorkScheduleMutationFn`
- `CreateWorkScheduleMutationHookResult`
- `CreateWorkScheduleMutationOptions`
- `CreateWorkScheduleMutationResult`
- `DeleteAdjustmentRuleDocument`
- `DeleteAdjustmentRuleMutationFn`
- `DeleteAdjustmentRuleMutationHookResult`
- `DeleteAdjustmentRuleMutationOptions`
- `DeleteAdjustmentRuleMutationResult`
- `DeleteClientDocument`
- `DeleteClientMutationFn`
- `DeleteClientMutationHookResult`
- `DeleteClientMutationOptions`
- `DeleteClientMutationResult`
- `DeletePayrollDocument`
- `DeletePayrollMutationFn`
- `DeletePayrollMutationHookResult`
- `DeletePayrollMutationOptions`
- `DeletePayrollMutationResult`
- `DeleteStaffDocument`
- `DeleteStaffMutationFn`
- `DeleteStaffMutationHookResult`
- `DeleteStaffMutationOptions`
- `DeleteStaffMutationResult`
- `ExternalSystemFragmentFragmentDoc`
- `FeatureFlagFragmentFragmentDoc`
- `GeneratePayrollDatesDocument`
- `GeneratePayrollDatesMutationFn`
- `GeneratePayrollDatesMutationHookResult`
- `GeneratePayrollDatesMutationOptions`
- `GeneratePayrollDatesMutationResult`
- `GetAdjustmentRuleByCycleAndTypeDocument`
- `GetAdjustmentRuleByCycleAndTypeLazyQueryHookResult`
- `GetAdjustmentRuleByCycleAndTypeQueryHookResult`
- `GetAdjustmentRuleByCycleAndTypeQueryResult`
- `GetAdjustmentRuleByCycleAndTypeSuspenseQueryHookResult`
- `GetAdjustmentRulesDocument`
- `GetAdjustmentRulesLazyQueryHookResult`
- `GetAdjustmentRulesQueryHookResult`
- `GetAdjustmentRulesQueryResult`
- `GetAdjustmentRulesSuspenseQueryHookResult`
- `GetAppSettingsDocument`
- `GetAppSettingsLazyQueryHookResult`
- `GetAppSettingsQueryHookResult`
- `GetAppSettingsQueryResult`
- `GetAppSettingsSuspenseQueryHookResult`
- `GetClientByIdDocument`
- `GetClientByIdLazyQueryHookResult`
- `GetClientByIdQueryHookResult`
- `GetClientByIdQueryResult`
- `GetClientByIdSuspenseQueryHookResult`
- `GetClientExternalSystemsDocument`
- `GetClientExternalSystemsLazyQueryHookResult`
- `GetClientExternalSystemsQueryHookResult`
- `GetClientExternalSystemsQueryResult`
- `GetClientExternalSystemsSuspenseQueryHookResult`
- `GetClientStatisticsDocument`
- `GetClientStatisticsLazyQueryHookResult`
- `GetClientStatisticsQueryHookResult`
- `GetClientStatisticsQueryResult`
- `GetClientStatisticsSuspenseQueryHookResult`
- `GetClientsListDocument`
- `GetClientsListLazyQueryHookResult`
- `GetClientsListQueryHookResult`
- `GetClientsListQueryResult`
- `GetClientsListSuspenseQueryHookResult`
- `GetDashboardDataDocument`
- `GetDashboardDataLazyQueryHookResult`
- `GetDashboardDataQueryHookResult`
- `GetDashboardDataQueryResult`
- `GetDashboardDataSuspenseQueryHookResult`
- `GetExternalSystemsDocument`
- `GetExternalSystemsLazyQueryHookResult`
- `GetExternalSystemsQueryHookResult`
- `GetExternalSystemsQueryResult`
- `GetExternalSystemsSuspenseQueryHookResult`
- `GetFeatureFlagsDocument`
- `GetFeatureFlagsLazyQueryHookResult`
- `GetFeatureFlagsQueryHookResult`
- `GetFeatureFlagsQueryResult`
- `GetFeatureFlagsSuspenseQueryHookResult`
- `GetHolidaysByCountryDocument`
- `GetHolidaysByCountryLazyQueryHookResult`
- `GetHolidaysByCountryQueryHookResult`
- `GetHolidaysByCountryQueryResult`
- `GetHolidaysByCountrySuspenseQueryHookResult`
- `GetHolidaysDocument`
- `GetHolidaysLazyQueryHookResult`
- `GetHolidaysQueryHookResult`
- `GetHolidaysQueryResult`
- `GetHolidaysSuspenseQueryHookResult`
- `GetLeaveDocument`
- `GetLeaveLazyQueryHookResult`
- `GetLeaveQueryHookResult`
- `GetLeaveQueryResult`
- `GetLeaveStatisticsDocument`
- `GetLeaveStatisticsLazyQueryHookResult`
- `GetLeaveStatisticsQueryHookResult`
- `GetLeaveStatisticsQueryResult`
- `GetLeaveStatisticsSuspenseQueryHookResult`
- `GetLeaveSuspenseQueryHookResult`
- `GetNotesDocument`
- `GetNotesLazyQueryHookResult`
- `GetNotesQueryHookResult`
- `GetNotesQueryResult`
- `GetNotesSuspenseQueryHookResult`
- `GetPayrollByIdDocument`
- `GetPayrollByIdLazyQueryHookResult`
- `GetPayrollByIdQueryHookResult`
- `GetPayrollByIdQueryResult`
- `GetPayrollByIdSuspenseQueryHookResult`
- `GetPayrollCyclesDocument`
- `GetPayrollCyclesLazyQueryHookResult`
- `GetPayrollCyclesQueryHookResult`
- `GetPayrollCyclesQueryResult`
- `GetPayrollCyclesSuspenseQueryHookResult`
- `GetPayrollDateTypesDocument`
- `GetPayrollDateTypesLazyQueryHookResult`
- `GetPayrollDateTypesQueryHookResult`
- `GetPayrollDateTypesQueryResult`
- `GetPayrollDateTypesSuspenseQueryHookResult`
- `GetPayrollDatesDocument`
- `GetPayrollDatesLazyQueryHookResult`
- `GetPayrollDatesQueryHookResult`
- `GetPayrollDatesQueryResult`
- `GetPayrollDatesSuspenseQueryHookResult`
- `GetPayrollListDocument`
- `GetPayrollListLazyQueryHookResult`
- `GetPayrollListQueryHookResult`
- `GetPayrollListQueryResult`
- `GetPayrollListSuspenseQueryHookResult`
- `GetPayrollStatisticsDocument`
- `GetPayrollStatisticsLazyQueryHookResult`
- `GetPayrollStatisticsQueryHookResult`
- `GetPayrollStatisticsQueryResult`
- `GetPayrollStatisticsSuspenseQueryHookResult`
- `GetPayrollsByMonthDocument`
- `GetPayrollsByMonthLazyQueryHookResult`
- `GetPayrollsByMonthQueryHookResult`
- `GetPayrollsByMonthQueryResult`
- `GetPayrollsByMonthSuspenseQueryHookResult`
- `GetPayrollsDocument`
- `GetPayrollsLazyQueryHookResult`
- `GetPayrollsMissingDatesDocument`
- `GetPayrollsMissingDatesLazyQueryHookResult`
- `GetPayrollsMissingDatesQueryHookResult`
- `GetPayrollsMissingDatesQueryResult`
- `GetPayrollsMissingDatesSuspenseQueryHookResult`
- `GetPayrollsQueryHookResult`
- `GetPayrollsQueryResult`
- `GetPayrollsSuspenseQueryHookResult`
- `GetStaffByIdDocument`
- `GetStaffByIdLazyQueryHookResult`
- `GetStaffByIdQueryHookResult`
- `GetStaffByIdQueryResult`
- `GetStaffByIdSuspenseQueryHookResult`
- `GetStaffListDocument`
- `GetStaffListLazyQueryHookResult`
- `GetStaffListQueryHookResult`
- `GetStaffListQueryResult`
- `GetStaffListSuspenseQueryHookResult`
- `GetUserPayrollsDocument`
- `GetUserPayrollsLazyQueryHookResult`
- `GetUserPayrollsQueryHookResult`
- `GetUserPayrollsQueryResult`
- `GetUserPayrollsSuspenseQueryHookResult`
- `GetUserWorkScheduleDocument`
- `GetUserWorkScheduleLazyQueryHookResult`
- `GetUserWorkScheduleQueryHookResult`
- `GetUserWorkScheduleQueryResult`
- `GetUserWorkScheduleSuspenseQueryHookResult`
- `HolidayFragmentFragmentDoc`
- `InsertBulkPayrollDatesDocument`
- `InsertBulkPayrollDatesMutationFn`
- `InsertBulkPayrollDatesMutationHookResult`
- `InsertBulkPayrollDatesMutationOptions`
- `InsertBulkPayrollDatesMutationResult`
- `InsertPayrollDocument`
- `InsertPayrollMutationFn`
- `InsertPayrollMutationHookResult`
- `InsertPayrollMutationOptions`
- `InsertPayrollMutationResult`
- `LeaveFragmentFragmentDoc`
- `NoteFragmentFragmentDoc`
- `PayrollCycleFragmentFragmentDoc`
- `PayrollDateFragmentFragmentDoc`
- `PayrollDateTypeFragmentFragmentDoc`
- `PayrollDetailFragmentFragmentDoc`
- `PayrollFragmentFragmentDoc`
- `StaffFragmentFragmentDoc`
- `StaffLeaveFragmentFragmentDoc`
- `StaffManagerFragmentFragmentDoc`
- `SyncHolidaysDocument`
- `SyncHolidaysMutationFn`
- `SyncHolidaysMutationHookResult`
- `SyncHolidaysMutationOptions`
- `SyncHolidaysMutationResult`
- `UpdateAdjustmentRuleDocument`
- `UpdateAdjustmentRuleMutationFn`
- `UpdateAdjustmentRuleMutationHookResult`
- `UpdateAdjustmentRuleMutationOptions`
- `UpdateAdjustmentRuleMutationResult`
- `UpdateClientDocument`
- `UpdateClientMutationFn`
- `UpdateClientMutationHookResult`
- `UpdateClientMutationOptions`
- `UpdateClientMutationResult`
- `UpdateLeaveDocument`
- `UpdateLeaveMutationFn`
- `UpdateLeaveMutationHookResult`
- `UpdateLeaveMutationOptions`
- `UpdateLeaveMutationResult`
- `UpdateNoteDocument`
- `UpdateNoteMutationFn`
- `UpdateNoteMutationHookResult`
- `UpdateNoteMutationOptions`
- `UpdateNoteMutationResult`
- `UpdatePayrollDateDocument`
- `UpdatePayrollDateMutationFn`
- `UpdatePayrollDateMutationHookResult`
- `UpdatePayrollDateMutationOptions`
- `UpdatePayrollDateMutationResult`
- `UpdatePayrollDocument`
- `UpdatePayrollMutationFn`
- `UpdatePayrollMutationHookResult`
- `UpdatePayrollMutationOptions`
- `UpdatePayrollMutationResult`
- `UpdatePayrollStatusDocument`
- `UpdatePayrollStatusMutationFn`
- `UpdatePayrollStatusMutationHookResult`
- `UpdatePayrollStatusMutationOptions`
- `UpdatePayrollStatusMutationResult`
- `UpdateStaffDocument`
- `UpdateStaffMutationFn`
- `UpdateStaffMutationHookResult`
- `UpdateStaffMutationOptions`
- `UpdateStaffMutationResult`
- `UpdateUserDocument`
- `UpdateUserMutationFn`
- `UpdateUserMutationHookResult`
- `UpdateUserMutationOptions`
- `UpdateUserMutationResult`
- `WorkScheduleFragmentFragmentDoc`
- `useAddNoteMutation`
- `useCreateAdjustmentRuleMutation`
- `useCreateClientMutation`
- `useCreateLeaveMutation`
- `useCreatePayrollMutation`
- `useCreateStaffMutation`
- `useCreateWorkScheduleMutation`
- `useDeleteAdjustmentRuleMutation`
- `useDeleteClientMutation`
- `useDeletePayrollMutation`
- `useDeleteStaffMutation`
- `useGeneratePayrollDatesMutation`
- `useGetAdjustmentRuleByCycleAndTypeLazyQuery`
- `useGetAdjustmentRuleByCycleAndTypeQuery`
- `useGetAdjustmentRuleByCycleAndTypeSuspenseQuery`
- `useGetAdjustmentRulesLazyQuery`
- `useGetAdjustmentRulesQuery`
- `useGetAdjustmentRulesSuspenseQuery`
- `useGetAppSettingsLazyQuery`
- `useGetAppSettingsQuery`
- `useGetAppSettingsSuspenseQuery`
- `useGetClientByIdLazyQuery`
- `useGetClientByIdQuery`
- `useGetClientByIdSuspenseQuery`
- `useGetClientExternalSystemsLazyQuery`
- `useGetClientExternalSystemsQuery`
- `useGetClientExternalSystemsSuspenseQuery`
- `useGetClientStatisticsLazyQuery`
- `useGetClientStatisticsQuery`
- `useGetClientStatisticsSuspenseQuery`
- `useGetClientsListLazyQuery`
- `useGetClientsListQuery`
- `useGetClientsListSuspenseQuery`
- `useGetDashboardDataLazyQuery`
- `useGetDashboardDataQuery`
- `useGetDashboardDataSuspenseQuery`
- `useGetExternalSystemsLazyQuery`
- `useGetExternalSystemsQuery`
- `useGetExternalSystemsSuspenseQuery`
- `useGetFeatureFlagsLazyQuery`
- `useGetFeatureFlagsQuery`
- `useGetFeatureFlagsSuspenseQuery`
- `useGetHolidaysByCountryLazyQuery`
- `useGetHolidaysByCountryQuery`
- `useGetHolidaysByCountrySuspenseQuery`
- `useGetHolidaysLazyQuery`
- `useGetHolidaysQuery`
- `useGetHolidaysSuspenseQuery`
- `useGetLeaveLazyQuery`
- `useGetLeaveQuery`
- `useGetLeaveStatisticsLazyQuery`
- `useGetLeaveStatisticsQuery`
- `useGetLeaveStatisticsSuspenseQuery`
- `useGetLeaveSuspenseQuery`
- `useGetNotesLazyQuery`
- `useGetNotesQuery`
- `useGetNotesSuspenseQuery`
- `useGetPayrollByIdLazyQuery`
- `useGetPayrollByIdQuery`
- `useGetPayrollByIdSuspenseQuery`
- `useGetPayrollCyclesLazyQuery`
- `useGetPayrollCyclesQuery`
- `useGetPayrollCyclesSuspenseQuery`
- `useGetPayrollDateTypesLazyQuery`
- `useGetPayrollDateTypesQuery`
- `useGetPayrollDateTypesSuspenseQuery`
- `useGetPayrollDatesLazyQuery`
- `useGetPayrollDatesQuery`
- `useGetPayrollDatesSuspenseQuery`
- `useGetPayrollListLazyQuery`
- `useGetPayrollListQuery`
- `useGetPayrollListSuspenseQuery`
- `useGetPayrollStatisticsLazyQuery`
- `useGetPayrollStatisticsQuery`
- `useGetPayrollStatisticsSuspenseQuery`
- `useGetPayrollsByMonthLazyQuery`
- `useGetPayrollsByMonthQuery`
- `useGetPayrollsByMonthSuspenseQuery`
- `useGetPayrollsLazyQuery`
- `useGetPayrollsMissingDatesLazyQuery`
- `useGetPayrollsMissingDatesQuery`
- `useGetPayrollsMissingDatesSuspenseQuery`
- `useGetPayrollsQuery`
- `useGetPayrollsSuspenseQuery`
- `useGetStaffByIdLazyQuery`
- `useGetStaffByIdQuery`
- `useGetStaffByIdSuspenseQuery`
- `useGetStaffListLazyQuery`
- `useGetStaffListQuery`
- `useGetStaffListSuspenseQuery`
- `useGetUserPayrollsLazyQuery`
- `useGetUserPayrollsQuery`
- `useGetUserPayrollsSuspenseQuery`
- `useGetUserWorkScheduleLazyQuery`
- `useGetUserWorkScheduleQuery`
- `useGetUserWorkScheduleSuspenseQuery`
- `useInsertBulkPayrollDatesMutation`
- `useInsertPayrollMutation`
- `useSyncHolidaysMutation`
- `useUpdateAdjustmentRuleMutation`
- `useUpdateClientMutation`
- `useUpdateLeaveMutation`
- `useUpdateNoteMutation`
- `useUpdatePayrollDateMutation`
- `useUpdatePayrollMutation`
- `useUpdatePayrollStatusMutation`
- `useUpdateStaffMutation`
- `useUpdateUserMutation`

### types.ts

- `AddNoteMutation`
- `AddNoteMutationVariables`
- `AdjustmentRuleFragmentFragment`
- `Adjustment_Rules`
- `Adjustment_Rules_Aggregate`
- `Adjustment_Rules_Aggregate_Bool_Exp`
- `Adjustment_Rules_Aggregate_Bool_Exp_Count`
- `Adjustment_Rules_Aggregate_Fields`
- `Adjustment_Rules_Aggregate_FieldsCountArgs`
- `Adjustment_Rules_Aggregate_Order_By`
- `Adjustment_Rules_Arr_Rel_Insert_Input`
- `Adjustment_Rules_Bool_Exp`
- `Adjustment_Rules_Constraint`
- `Adjustment_Rules_Insert_Input`
- `Adjustment_Rules_Max_Fields`
- `Adjustment_Rules_Max_Order_By`
- `Adjustment_Rules_Min_Fields`
- `Adjustment_Rules_Min_Order_By`
- `Adjustment_Rules_Mutation_Response`
- `Adjustment_Rules_On_Conflict`
- `Adjustment_Rules_Order_By`
- `Adjustment_Rules_Pk_Columns_Input`
- `Adjustment_Rules_Select_Column`
- `Adjustment_Rules_Set_Input`
- `Adjustment_Rules_Stream_Cursor_Input`
- `Adjustment_Rules_Stream_Cursor_Value_Input`
- `Adjustment_Rules_Update_Column`
- `Adjustment_Rules_Updates`
- `AppSettingsFragmentFragment`
- `App_Settings`
- `App_SettingsPermissionsArgs`
- `App_Settings_Aggregate`
- `App_Settings_Aggregate_Fields`
- `App_Settings_Aggregate_FieldsCountArgs`
- `App_Settings_Append_Input`
- `App_Settings_Bool_Exp`
- `App_Settings_Constraint`
- `App_Settings_Delete_At_Path_Input`
- `App_Settings_Delete_Elem_Input`
- `App_Settings_Delete_Key_Input`
- `App_Settings_Insert_Input`
- `App_Settings_Max_Fields`
- `App_Settings_Min_Fields`
- `App_Settings_Mutation_Response`
- `App_Settings_On_Conflict`
- `App_Settings_Order_By`
- `App_Settings_Pk_Columns_Input`
- `App_Settings_Prepend_Input`
- `App_Settings_Select_Column`
- `App_Settings_Set_Input`
- `App_Settings_Stream_Cursor_Input`
- `App_Settings_Stream_Cursor_Value_Input`
- `App_Settings_Update_Column`
- `App_Settings_Updates`
- `Boolean_Comparison_Exp`
- `Bpchar_Comparison_Exp`
- `ClientExternalSystemFragmentFragment`
- `ClientFragmentFragment`
- `Client_External_Systems`
- `Client_External_Systems_Aggregate`
- `Client_External_Systems_Aggregate_Bool_Exp`
- `Client_External_Systems_Aggregate_Bool_Exp_Count`
- `Client_External_Systems_Aggregate_Fields`
- `Client_External_Systems_Aggregate_FieldsCountArgs`
- `Client_External_Systems_Aggregate_Order_By`
- `Client_External_Systems_Arr_Rel_Insert_Input`
- `Client_External_Systems_Bool_Exp`
- `Client_External_Systems_Constraint`
- `Client_External_Systems_Insert_Input`
- `Client_External_Systems_Max_Fields`
- `Client_External_Systems_Max_Order_By`
- `Client_External_Systems_Min_Fields`
- `Client_External_Systems_Min_Order_By`
- `Client_External_Systems_Mutation_Response`
- `Client_External_Systems_On_Conflict`
- `Client_External_Systems_Order_By`
- `Client_External_Systems_Pk_Columns_Input`
- `Client_External_Systems_Select_Column`
- `Client_External_Systems_Set_Input`
- `Client_External_Systems_Stream_Cursor_Input`
- `Client_External_Systems_Stream_Cursor_Value_Input`
- `Client_External_Systems_Update_Column`
- `Client_External_Systems_Updates`
- `Clients`
- `ClientsClient_External_SystemsArgs`
- `ClientsClient_External_Systems_AggregateArgs`
- `ClientsPayrollsArgs`
- `ClientsPayrolls_AggregateArgs`
- `Clients_Aggregate`
- `Clients_Aggregate_Bool_Exp`
- `Clients_Aggregate_Bool_Exp_Bool_And`
- `Clients_Aggregate_Bool_Exp_Bool_Or`
- `Clients_Aggregate_Bool_Exp_Count`
- `Clients_Aggregate_Fields`
- `Clients_Aggregate_FieldsCountArgs`
- `Clients_Aggregate_Order_By`
- `Clients_Arr_Rel_Insert_Input`
- `Clients_Bool_Exp`
- `Clients_Constraint`
- `Clients_Insert_Input`
- `Clients_Max_Fields`
- `Clients_Max_Order_By`
- `Clients_Min_Fields`
- `Clients_Min_Order_By`
- `Clients_Mutation_Response`
- `Clients_Obj_Rel_Insert_Input`
- `Clients_On_Conflict`
- `Clients_Order_By`
- `Clients_Pk_Columns_Input`
- `Clients_Select_Column`
- `Clients_Select_Column_Clients_Aggregate_Bool_Exp_Bool_And_Arguments_Columns`
- `Clients_Select_Column_Clients_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns`
- `Clients_Set_Input`
- `Clients_Stream_Cursor_Input`
- `Clients_Stream_Cursor_Value_Input`
- `Clients_Update_Column`
- `Clients_Updates`
- `CreateAdjustmentRuleMutation`
- `CreateAdjustmentRuleMutationVariables`
- `CreateClientMutation`
- `CreateClientMutationVariables`
- `CreateLeaveMutation`
- `CreateLeaveMutationVariables`
- `CreatePayrollMutation`
- `CreatePayrollMutationVariables`
- `CreateStaffMutation`
- `CreateStaffMutationVariables`
- `CreateWorkScheduleMutation`
- `CreateWorkScheduleMutationVariables`
- `Cursor_Ordering`
- `Date_Comparison_Exp`
- `DeleteAdjustmentRuleMutation`
- `DeleteAdjustmentRuleMutationVariables`
- `DeleteClientMutation`
- `DeleteClientMutationVariables`
- `DeletePayrollMutation`
- `DeletePayrollMutationVariables`
- `DeleteStaffMutation`
- `DeleteStaffMutationVariables`
- `Exact`
- `ExternalSystemFragmentFragment`
- `External_Systems`
- `External_SystemsClient_External_SystemsArgs`
- `External_SystemsClient_External_Systems_AggregateArgs`
- `External_Systems_Aggregate`
- `External_Systems_Aggregate_Fields`
- `External_Systems_Aggregate_FieldsCountArgs`
- `External_Systems_Bool_Exp`
- `External_Systems_Constraint`
- `External_Systems_Insert_Input`
- `External_Systems_Max_Fields`
- `External_Systems_Min_Fields`
- `External_Systems_Mutation_Response`
- `External_Systems_Obj_Rel_Insert_Input`
- `External_Systems_On_Conflict`
- `External_Systems_Order_By`
- `External_Systems_Pk_Columns_Input`
- `External_Systems_Select_Column`
- `External_Systems_Set_Input`
- `External_Systems_Stream_Cursor_Input`
- `External_Systems_Stream_Cursor_Value_Input`
- `External_Systems_Update_Column`
- `External_Systems_Updates`
- `FeatureFlagFragmentFragment`
- `Feature_Flags`
- `Feature_FlagsAllowed_RolesArgs`
- `Feature_Flags_Aggregate`
- `Feature_Flags_Aggregate_Fields`
- `Feature_Flags_Aggregate_FieldsCountArgs`
- `Feature_Flags_Append_Input`
- `Feature_Flags_Bool_Exp`
- `Feature_Flags_Constraint`
- `Feature_Flags_Delete_At_Path_Input`
- `Feature_Flags_Delete_Elem_Input`
- `Feature_Flags_Delete_Key_Input`
- `Feature_Flags_Insert_Input`
- `Feature_Flags_Max_Fields`
- `Feature_Flags_Min_Fields`
- `Feature_Flags_Mutation_Response`
- `Feature_Flags_On_Conflict`
- `Feature_Flags_Order_By`
- `Feature_Flags_Pk_Columns_Input`
- `Feature_Flags_Prepend_Input`
- `Feature_Flags_Select_Column`
- `Feature_Flags_Set_Input`
- `Feature_Flags_Stream_Cursor_Input`
- `Feature_Flags_Stream_Cursor_Value_Input`
- `Feature_Flags_Update_Column`
- `Feature_Flags_Updates`
- `GeneratePayrollDatesMutation`
- `GeneratePayrollDatesMutationVariables`
- `Generate_Payroll_Dates_Args`
- `GetAdjustmentRuleByCycleAndTypeQuery`
- `GetAdjustmentRuleByCycleAndTypeQueryVariables`
- `GetAdjustmentRulesQuery`
- `GetAdjustmentRulesQueryVariables`
- `GetAppSettingsQuery`
- `GetAppSettingsQueryVariables`
- `GetClientByIdQuery`
- `GetClientByIdQueryVariables`
- `GetClientExternalSystemsQuery`
- `GetClientExternalSystemsQueryVariables`
- `GetClientStatisticsQuery`
- `GetClientStatisticsQueryVariables`
- `GetClientsListQuery`
- `GetClientsListQueryVariables`
- `GetDashboardDataQuery`
- `GetDashboardDataQueryVariables`
- `GetExternalSystemsQuery`
- `GetExternalSystemsQueryVariables`
- `GetFeatureFlagsQuery`
- `GetFeatureFlagsQueryVariables`
- `GetHolidaysByCountryQuery`
- `GetHolidaysByCountryQueryVariables`
- `GetHolidaysQuery`
- `GetHolidaysQueryVariables`
- `GetLeaveQuery`
- `GetLeaveQueryVariables`
- `GetLeaveStatisticsQuery`
- `GetLeaveStatisticsQueryVariables`
- `GetNotesQuery`
- `GetNotesQueryVariables`
- `GetPayrollByIdQuery`
- `GetPayrollByIdQueryVariables`
- `GetPayrollCyclesQuery`
- `GetPayrollCyclesQueryVariables`
- `GetPayrollDateTypesQuery`
- `GetPayrollDateTypesQueryVariables`
- `GetPayrollDatesQuery`
- `GetPayrollDatesQueryVariables`
- `GetPayrollListQuery`
- `GetPayrollListQueryVariables`
- `GetPayrollStatisticsQuery`
- `GetPayrollStatisticsQueryVariables`
- `GetPayrollsByMonthQuery`
- `GetPayrollsByMonthQueryVariables`
- `GetPayrollsMissingDatesQuery`
- `GetPayrollsMissingDatesQueryVariables`
- `GetPayrollsQuery`
- `GetPayrollsQueryVariables`
- `GetStaffByIdQuery`
- `GetStaffByIdQueryVariables`
- `GetStaffListQuery`
- `GetStaffListQueryVariables`
- `GetUserPayrollsQuery`
- `GetUserPayrollsQueryVariables`
- `GetUserWorkScheduleQuery`
- `GetUserWorkScheduleQueryVariables`
- `HolidayFragmentFragment`
- `Holidays`
- `Holidays_Aggregate`
- `Holidays_Aggregate_Fields`
- `Holidays_Aggregate_FieldsCountArgs`
- `Holidays_Avg_Fields`
- `Holidays_Bool_Exp`
- `Holidays_Constraint`
- `Holidays_Inc_Input`
- `Holidays_Insert_Input`
- `Holidays_Max_Fields`
- `Holidays_Min_Fields`
- `Holidays_Mutation_Response`
- `Holidays_On_Conflict`
- `Holidays_Order_By`
- `Holidays_Pk_Columns_Input`
- `Holidays_Select_Column`
- `Holidays_Set_Input`
- `Holidays_Stddev_Fields`
- `Holidays_Stddev_Pop_Fields`
- `Holidays_Stddev_Samp_Fields`
- `Holidays_Stream_Cursor_Input`
- `Holidays_Stream_Cursor_Value_Input`
- `Holidays_Sum_Fields`
- `Holidays_Update_Column`
- `Holidays_Updates`
- `Holidays_Var_Pop_Fields`
- `Holidays_Var_Samp_Fields`
- `Holidays_Variance_Fields`
- `Incremental`
- `InputMaybe`
- `InsertBulkPayrollDatesMutation`
- `InsertBulkPayrollDatesMutationVariables`
- `InsertPayrollMutation`
- `InsertPayrollMutationVariables`
- `Int_Comparison_Exp`
- `Jsonb_Cast_Exp`
- `Jsonb_Comparison_Exp`
- `Leave`
- `LeaveFragmentFragment`
- `Leave_Aggregate`
- `Leave_Aggregate_Bool_Exp`
- `Leave_Aggregate_Bool_Exp_Count`
- `Leave_Aggregate_Fields`
- `Leave_Aggregate_FieldsCountArgs`
- `Leave_Aggregate_Order_By`
- `Leave_Arr_Rel_Insert_Input`
- `Leave_Bool_Exp`
- `Leave_Constraint`
- `Leave_Insert_Input`
- `Leave_Max_Fields`
- `Leave_Max_Order_By`
- `Leave_Min_Fields`
- `Leave_Min_Order_By`
- `Leave_Mutation_Response`
- `Leave_On_Conflict`
- `Leave_Order_By`
- `Leave_Pk_Columns_Input`
- `Leave_Select_Column`
- `Leave_Set_Input`
- `Leave_Status_Enum_Comparison_Exp`
- `Leave_Stream_Cursor_Input`
- `Leave_Stream_Cursor_Value_Input`
- `Leave_Update_Column`
- `Leave_Updates`
- `MakeEmpty`
- `MakeMaybe`
- `MakeOptional`
- `Maybe`
- `Mutation_Root`
- `Mutation_RootDelete_Adjustment_RulesArgs`
- `Mutation_RootDelete_Adjustment_Rules_By_PkArgs`
- `Mutation_RootDelete_App_SettingsArgs`
- `Mutation_RootDelete_App_Settings_By_PkArgs`
- `Mutation_RootDelete_Client_External_SystemsArgs`
- `Mutation_RootDelete_Client_External_Systems_By_PkArgs`
- `Mutation_RootDelete_ClientsArgs`
- `Mutation_RootDelete_Clients_By_PkArgs`
- `Mutation_RootDelete_External_SystemsArgs`
- `Mutation_RootDelete_External_Systems_By_PkArgs`
- `Mutation_RootDelete_Feature_FlagsArgs`
- `Mutation_RootDelete_Feature_Flags_By_PkArgs`
- `Mutation_RootDelete_HolidaysArgs`
- `Mutation_RootDelete_Holidays_By_PkArgs`
- `Mutation_RootDelete_LeaveArgs`
- `Mutation_RootDelete_Leave_By_PkArgs`
- `Mutation_RootDelete_Neon_Auth_Users_SyncArgs`
- `Mutation_RootDelete_Neon_Auth_Users_Sync_By_PkArgs`
- `Mutation_RootDelete_NotesArgs`
- `Mutation_RootDelete_Notes_By_PkArgs`
- `Mutation_RootDelete_Payroll_CyclesArgs`
- `Mutation_RootDelete_Payroll_Cycles_By_PkArgs`
- `Mutation_RootDelete_Payroll_Date_TypesArgs`
- `Mutation_RootDelete_Payroll_Date_Types_By_PkArgs`
- `Mutation_RootDelete_Payroll_DatesArgs`
- `Mutation_RootDelete_Payroll_Dates_By_PkArgs`
- `Mutation_RootDelete_PayrollsArgs`
- `Mutation_RootDelete_Payrolls_By_PkArgs`
- `Mutation_RootDelete_Permission_Audit_LogArgs`
- `Mutation_RootDelete_Permission_Audit_Log_By_PkArgs`
- `Mutation_RootDelete_Permission_OverridesArgs`
- `Mutation_RootDelete_Permission_Overrides_By_PkArgs`
- `Mutation_RootDelete_UsersArgs`
- `Mutation_RootDelete_Users_By_PkArgs`
- `Mutation_RootDelete_Work_ScheduleArgs`
- `Mutation_RootDelete_Work_Schedule_By_PkArgs`
- `Mutation_RootInsert_Adjustment_RulesArgs`
- `Mutation_RootInsert_Adjustment_Rules_OneArgs`
- `Mutation_RootInsert_App_SettingsArgs`
- `Mutation_RootInsert_App_Settings_OneArgs`
- `Mutation_RootInsert_Client_External_SystemsArgs`
- `Mutation_RootInsert_Client_External_Systems_OneArgs`
- `Mutation_RootInsert_ClientsArgs`
- `Mutation_RootInsert_Clients_OneArgs`
- `Mutation_RootInsert_External_SystemsArgs`
- `Mutation_RootInsert_External_Systems_OneArgs`
- `Mutation_RootInsert_Feature_FlagsArgs`
- `Mutation_RootInsert_Feature_Flags_OneArgs`
- `Mutation_RootInsert_HolidaysArgs`
- `Mutation_RootInsert_Holidays_OneArgs`
- `Mutation_RootInsert_LeaveArgs`
- `Mutation_RootInsert_Leave_OneArgs`
- `Mutation_RootInsert_Neon_Auth_Users_SyncArgs`
- `Mutation_RootInsert_Neon_Auth_Users_Sync_OneArgs`
- `Mutation_RootInsert_NotesArgs`
- `Mutation_RootInsert_Notes_OneArgs`
- `Mutation_RootInsert_Payroll_CyclesArgs`
- `Mutation_RootInsert_Payroll_Cycles_OneArgs`
- `Mutation_RootInsert_Payroll_Date_TypesArgs`
- `Mutation_RootInsert_Payroll_Date_Types_OneArgs`
- `Mutation_RootInsert_Payroll_DatesArgs`
- `Mutation_RootInsert_Payroll_Dates_OneArgs`
- `Mutation_RootInsert_PayrollsArgs`
- `Mutation_RootInsert_Payrolls_OneArgs`
- `Mutation_RootInsert_Permission_Audit_LogArgs`
- `Mutation_RootInsert_Permission_Audit_Log_OneArgs`
- `Mutation_RootInsert_Permission_OverridesArgs`
- `Mutation_RootInsert_Permission_Overrides_OneArgs`
- `Mutation_RootInsert_UsersArgs`
- `Mutation_RootInsert_Users_OneArgs`
- `Mutation_RootInsert_Work_ScheduleArgs`
- `Mutation_RootInsert_Work_Schedule_OneArgs`
- `Mutation_RootUpdate_Adjustment_RulesArgs`
- `Mutation_RootUpdate_Adjustment_Rules_By_PkArgs`
- `Mutation_RootUpdate_Adjustment_Rules_ManyArgs`
- `Mutation_RootUpdate_App_SettingsArgs`
- `Mutation_RootUpdate_App_Settings_By_PkArgs`
- `Mutation_RootUpdate_App_Settings_ManyArgs`
- `Mutation_RootUpdate_Client_External_SystemsArgs`
- `Mutation_RootUpdate_Client_External_Systems_By_PkArgs`
- `Mutation_RootUpdate_Client_External_Systems_ManyArgs`
- `Mutation_RootUpdate_ClientsArgs`
- `Mutation_RootUpdate_Clients_By_PkArgs`
- `Mutation_RootUpdate_Clients_ManyArgs`
- `Mutation_RootUpdate_External_SystemsArgs`
- `Mutation_RootUpdate_External_Systems_By_PkArgs`
- `Mutation_RootUpdate_External_Systems_ManyArgs`
- `Mutation_RootUpdate_Feature_FlagsArgs`
- `Mutation_RootUpdate_Feature_Flags_By_PkArgs`
- `Mutation_RootUpdate_Feature_Flags_ManyArgs`
- `Mutation_RootUpdate_HolidaysArgs`
- `Mutation_RootUpdate_Holidays_By_PkArgs`
- `Mutation_RootUpdate_Holidays_ManyArgs`
- `Mutation_RootUpdate_LeaveArgs`
- `Mutation_RootUpdate_Leave_By_PkArgs`
- `Mutation_RootUpdate_Leave_ManyArgs`
- `Mutation_RootUpdate_Neon_Auth_Users_SyncArgs`
- `Mutation_RootUpdate_Neon_Auth_Users_Sync_By_PkArgs`
- `Mutation_RootUpdate_Neon_Auth_Users_Sync_ManyArgs`
- `Mutation_RootUpdate_NotesArgs`
- `Mutation_RootUpdate_Notes_By_PkArgs`
- `Mutation_RootUpdate_Notes_ManyArgs`
- `Mutation_RootUpdate_Payroll_CyclesArgs`
- `Mutation_RootUpdate_Payroll_Cycles_By_PkArgs`
- `Mutation_RootUpdate_Payroll_Cycles_ManyArgs`
- `Mutation_RootUpdate_Payroll_Date_TypesArgs`
- `Mutation_RootUpdate_Payroll_Date_Types_By_PkArgs`
- `Mutation_RootUpdate_Payroll_Date_Types_ManyArgs`
- `Mutation_RootUpdate_Payroll_DatesArgs`
- `Mutation_RootUpdate_Payroll_Dates_By_PkArgs`
- `Mutation_RootUpdate_Payroll_Dates_ManyArgs`
- `Mutation_RootUpdate_PayrollsArgs`
- `Mutation_RootUpdate_Payrolls_By_PkArgs`
- `Mutation_RootUpdate_Payrolls_ManyArgs`
- `Mutation_RootUpdate_Permission_Audit_LogArgs`
- `Mutation_RootUpdate_Permission_Audit_Log_By_PkArgs`
- `Mutation_RootUpdate_Permission_Audit_Log_ManyArgs`
- `Mutation_RootUpdate_Permission_OverridesArgs`
- `Mutation_RootUpdate_Permission_Overrides_By_PkArgs`
- `Mutation_RootUpdate_Permission_Overrides_ManyArgs`
- `Mutation_RootUpdate_UsersArgs`
- `Mutation_RootUpdate_Users_By_PkArgs`
- `Mutation_RootUpdate_Users_ManyArgs`
- `Mutation_RootUpdate_Work_ScheduleArgs`
- `Mutation_RootUpdate_Work_Schedule_By_PkArgs`
- `Mutation_RootUpdate_Work_Schedule_ManyArgs`
- `Neon_Auth_Users_Sync`
- `Neon_Auth_Users_SyncRaw_JsonArgs`
- `Neon_Auth_Users_Sync_Aggregate`
- `Neon_Auth_Users_Sync_Aggregate_Fields`
- `Neon_Auth_Users_Sync_Aggregate_FieldsCountArgs`
- `Neon_Auth_Users_Sync_Append_Input`
- `Neon_Auth_Users_Sync_Bool_Exp`
- `Neon_Auth_Users_Sync_Constraint`
- `Neon_Auth_Users_Sync_Delete_At_Path_Input`
- `Neon_Auth_Users_Sync_Delete_Elem_Input`
- `Neon_Auth_Users_Sync_Delete_Key_Input`
- `Neon_Auth_Users_Sync_Insert_Input`
- `Neon_Auth_Users_Sync_Max_Fields`
- `Neon_Auth_Users_Sync_Min_Fields`
- `Neon_Auth_Users_Sync_Mutation_Response`
- `Neon_Auth_Users_Sync_On_Conflict`
- `Neon_Auth_Users_Sync_Order_By`
- `Neon_Auth_Users_Sync_Pk_Columns_Input`
- `Neon_Auth_Users_Sync_Prepend_Input`
- `Neon_Auth_Users_Sync_Select_Column`
- `Neon_Auth_Users_Sync_Set_Input`
- `Neon_Auth_Users_Sync_Stream_Cursor_Input`
- `Neon_Auth_Users_Sync_Stream_Cursor_Value_Input`
- `Neon_Auth_Users_Sync_Update_Column`
- `Neon_Auth_Users_Sync_Updates`
- `NoteFragmentFragment`
- `Notes`
- `NotesNotes_By_ClientArgs`
- `NotesNotes_By_Client_AggregateArgs`
- `NotesNotes_By_PayrollArgs`
- `NotesNotes_By_Payroll_AggregateArgs`
- `Notes_Aggregate`
- `Notes_Aggregate_Bool_Exp`
- `Notes_Aggregate_Bool_Exp_Bool_And`
- `Notes_Aggregate_Bool_Exp_Bool_Or`
- `Notes_Aggregate_Bool_Exp_Count`
- `Notes_Aggregate_Fields`
- `Notes_Aggregate_FieldsCountArgs`
- `Notes_Aggregate_Order_By`
- `Notes_Arr_Rel_Insert_Input`
- `Notes_Bool_Exp`
- `Notes_Constraint`
- `Notes_Insert_Input`
- `Notes_Max_Fields`
- `Notes_Max_Order_By`
- `Notes_Min_Fields`
- `Notes_Min_Order_By`
- `Notes_Mutation_Response`
- `Notes_On_Conflict`
- `Notes_Order_By`
- `Notes_Pk_Columns_Input`
- `Notes_Select_Column`
- `Notes_Select_Column_Notes_Aggregate_Bool_Exp_Bool_And_Arguments_Columns`
- `Notes_Select_Column_Notes_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns`
- `Notes_Set_Input`
- `Notes_Stream_Cursor_Input`
- `Notes_Stream_Cursor_Value_Input`
- `Notes_Update_Column`
- `Notes_Updates`
- `Numeric_Comparison_Exp`
- `Order_By`
- `PayrollCycleFragmentFragment`
- `PayrollDateFragmentFragment`
- `PayrollDateTypeFragmentFragment`
- `PayrollDetailFragmentFragment`
- `PayrollFragmentFragment`
- `Payroll_Cycle_Type_Comparison_Exp`
- `Payroll_Cycles`
- `Payroll_CyclesAdjustment_RulesArgs`
- `Payroll_CyclesAdjustment_Rules_AggregateArgs`
- `Payroll_CyclesPayrollsArgs`
- `Payroll_CyclesPayrolls_AggregateArgs`
- `Payroll_Cycles_Aggregate`
- `Payroll_Cycles_Aggregate_Fields`
- `Payroll_Cycles_Aggregate_FieldsCountArgs`
- `Payroll_Cycles_Bool_Exp`
- `Payroll_Cycles_Constraint`
- `Payroll_Cycles_Insert_Input`
- `Payroll_Cycles_Max_Fields`
- `Payroll_Cycles_Min_Fields`
- `Payroll_Cycles_Mutation_Response`
- `Payroll_Cycles_Obj_Rel_Insert_Input`
- `Payroll_Cycles_On_Conflict`
- `Payroll_Cycles_Order_By`
- `Payroll_Cycles_Pk_Columns_Input`
- `Payroll_Cycles_Select_Column`
- `Payroll_Cycles_Set_Input`
- `Payroll_Cycles_Stream_Cursor_Input`
- `Payroll_Cycles_Stream_Cursor_Value_Input`
- `Payroll_Cycles_Update_Column`
- `Payroll_Cycles_Updates`
- `Payroll_Date_Type_Comparison_Exp`
- `Payroll_Date_Types`
- `Payroll_Date_TypesAdjustment_RulesArgs`
- `Payroll_Date_TypesAdjustment_Rules_AggregateArgs`
- `Payroll_Date_TypesPayrollsArgs`
- `Payroll_Date_TypesPayrolls_AggregateArgs`
- `Payroll_Date_Types_Aggregate`
- `Payroll_Date_Types_Aggregate_Fields`
- `Payroll_Date_Types_Aggregate_FieldsCountArgs`
- `Payroll_Date_Types_Bool_Exp`
- `Payroll_Date_Types_Constraint`
- `Payroll_Date_Types_Insert_Input`
- `Payroll_Date_Types_Max_Fields`
- `Payroll_Date_Types_Min_Fields`
- `Payroll_Date_Types_Mutation_Response`
- `Payroll_Date_Types_Obj_Rel_Insert_Input`
- `Payroll_Date_Types_On_Conflict`
- `Payroll_Date_Types_Order_By`
- `Payroll_Date_Types_Pk_Columns_Input`
- `Payroll_Date_Types_Select_Column`
- `Payroll_Date_Types_Set_Input`
- `Payroll_Date_Types_Stream_Cursor_Input`
- `Payroll_Date_Types_Stream_Cursor_Value_Input`
- `Payroll_Date_Types_Update_Column`
- `Payroll_Date_Types_Updates`
- `Payroll_Dates`
- `Payroll_Dates_Aggregate`
- `Payroll_Dates_Aggregate_Bool_Exp`
- `Payroll_Dates_Aggregate_Bool_Exp_Count`
- `Payroll_Dates_Aggregate_Fields`
- `Payroll_Dates_Aggregate_FieldsCountArgs`
- `Payroll_Dates_Aggregate_Order_By`
- `Payroll_Dates_Arr_Rel_Insert_Input`
- `Payroll_Dates_Bool_Exp`
- `Payroll_Dates_Constraint`
- `Payroll_Dates_Insert_Input`
- `Payroll_Dates_Max_Fields`
- `Payroll_Dates_Max_Order_By`
- `Payroll_Dates_Min_Fields`
- `Payroll_Dates_Min_Order_By`
- `Payroll_Dates_Mutation_Response`
- `Payroll_Dates_On_Conflict`
- `Payroll_Dates_Order_By`
- `Payroll_Dates_Pk_Columns_Input`
- `Payroll_Dates_Select_Column`
- `Payroll_Dates_Set_Input`
- `Payroll_Dates_Stream_Cursor_Input`
- `Payroll_Dates_Stream_Cursor_Value_Input`
- `Payroll_Dates_Update_Column`
- `Payroll_Dates_Updates`
- `Payroll_Status_Comparison_Exp`
- `Payrolls`
- `PayrollsPayroll_DatesArgs`
- `PayrollsPayroll_Dates_AggregateArgs`
- `Payrolls_Aggregate`
- `Payrolls_Aggregate_Bool_Exp`
- `Payrolls_Aggregate_Bool_Exp_Count`
- `Payrolls_Aggregate_Fields`
- `Payrolls_Aggregate_FieldsCountArgs`
- `Payrolls_Aggregate_Order_By`
- `Payrolls_Arr_Rel_Insert_Input`
- `Payrolls_Avg_Fields`
- `Payrolls_Avg_Order_By`
- `Payrolls_Bool_Exp`
- `Payrolls_Constraint`
- `Payrolls_Inc_Input`
- `Payrolls_Insert_Input`
- `Payrolls_Max_Fields`
- `Payrolls_Max_Order_By`
- `Payrolls_Min_Fields`
- `Payrolls_Min_Order_By`
- `Payrolls_Mutation_Response`
- `Payrolls_Obj_Rel_Insert_Input`
- `Payrolls_On_Conflict`
- `Payrolls_Order_By`
- `Payrolls_Pk_Columns_Input`
- `Payrolls_Select_Column`
- `Payrolls_Set_Input`
- `Payrolls_Stddev_Fields`
- `Payrolls_Stddev_Order_By`
- `Payrolls_Stddev_Pop_Fields`
- `Payrolls_Stddev_Pop_Order_By`
- `Payrolls_Stddev_Samp_Fields`
- `Payrolls_Stddev_Samp_Order_By`
- `Payrolls_Stream_Cursor_Input`
- `Payrolls_Stream_Cursor_Value_Input`
- `Payrolls_Sum_Fields`
- `Payrolls_Sum_Order_By`
- `Payrolls_Update_Column`
- `Payrolls_Updates`
- `Payrolls_Var_Pop_Fields`
- `Payrolls_Var_Pop_Order_By`
- `Payrolls_Var_Samp_Fields`
- `Payrolls_Var_Samp_Order_By`
- `Payrolls_Variance_Fields`
- `Payrolls_Variance_Order_By`
- `Permission_Audit_Log`
- `Permission_Audit_LogNew_ValueArgs`
- `Permission_Audit_LogPrevious_ValueArgs`
- `Permission_Audit_Log_Aggregate`
- `Permission_Audit_Log_Aggregate_Bool_Exp`
- `Permission_Audit_Log_Aggregate_Bool_Exp_Count`
- `Permission_Audit_Log_Aggregate_Fields`
- `Permission_Audit_Log_Aggregate_FieldsCountArgs`
- `Permission_Audit_Log_Aggregate_Order_By`
- `Permission_Audit_Log_Append_Input`
- `Permission_Audit_Log_Arr_Rel_Insert_Input`
- `Permission_Audit_Log_Bool_Exp`
- `Permission_Audit_Log_Constraint`
- `Permission_Audit_Log_Delete_At_Path_Input`
- `Permission_Audit_Log_Delete_Elem_Input`
- `Permission_Audit_Log_Delete_Key_Input`
- `Permission_Audit_Log_Insert_Input`
- `Permission_Audit_Log_Max_Fields`
- `Permission_Audit_Log_Max_Order_By`
- `Permission_Audit_Log_Min_Fields`
- `Permission_Audit_Log_Min_Order_By`
- `Permission_Audit_Log_Mutation_Response`
- `Permission_Audit_Log_On_Conflict`
- `Permission_Audit_Log_Order_By`
- `Permission_Audit_Log_Pk_Columns_Input`
- `Permission_Audit_Log_Prepend_Input`
- `Permission_Audit_Log_Select_Column`
- `Permission_Audit_Log_Set_Input`
- `Permission_Audit_Log_Stream_Cursor_Input`
- `Permission_Audit_Log_Stream_Cursor_Value_Input`
- `Permission_Audit_Log_Update_Column`
- `Permission_Audit_Log_Updates`
- `Permission_Overrides`
- `Permission_OverridesConditionsArgs`
- `Permission_Overrides_Aggregate`
- `Permission_Overrides_Aggregate_Bool_Exp`
- `Permission_Overrides_Aggregate_Bool_Exp_Bool_And`
- `Permission_Overrides_Aggregate_Bool_Exp_Bool_Or`
- `Permission_Overrides_Aggregate_Bool_Exp_Count`
- `Permission_Overrides_Aggregate_Fields`
- `Permission_Overrides_Aggregate_FieldsCountArgs`
- `Permission_Overrides_Aggregate_Order_By`
- `Permission_Overrides_Append_Input`
- `Permission_Overrides_Arr_Rel_Insert_Input`
- `Permission_Overrides_Bool_Exp`
- `Permission_Overrides_Constraint`
- `Permission_Overrides_Delete_At_Path_Input`
- `Permission_Overrides_Delete_Elem_Input`
- `Permission_Overrides_Delete_Key_Input`
- `Permission_Overrides_Insert_Input`
- `Permission_Overrides_Max_Fields`
- `Permission_Overrides_Max_Order_By`
- `Permission_Overrides_Min_Fields`
- `Permission_Overrides_Min_Order_By`
- `Permission_Overrides_Mutation_Response`
- `Permission_Overrides_On_Conflict`
- `Permission_Overrides_Order_By`
- `Permission_Overrides_Pk_Columns_Input`
- `Permission_Overrides_Prepend_Input`
- `Permission_Overrides_Select_Column`
- `Permission_Overrides_Select_Column_Permission_Overrides_Aggregate_Bool_Exp_Bool_And_Arguments_Columns`
- `Permission_Overrides_Select_Column_Permission_Overrides_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns`
- `Permission_Overrides_Set_Input`
- `Permission_Overrides_Stream_Cursor_Input`
- `Permission_Overrides_Stream_Cursor_Value_Input`
- `Permission_Overrides_Update_Column`
- `Permission_Overrides_Updates`
- `Query_Root`
- `Query_RootAdjustment_RulesArgs`
- `Query_RootAdjustment_Rules_AggregateArgs`
- `Query_RootAdjustment_Rules_By_PkArgs`
- `Query_RootApp_SettingsArgs`
- `Query_RootApp_Settings_AggregateArgs`
- `Query_RootApp_Settings_By_PkArgs`
- `Query_RootClient_External_SystemsArgs`
- `Query_RootClient_External_Systems_AggregateArgs`
- `Query_RootClient_External_Systems_By_PkArgs`
- `Query_RootClientsArgs`
- `Query_RootClients_AggregateArgs`
- `Query_RootClients_By_PkArgs`
- `Query_RootExternal_SystemsArgs`
- `Query_RootExternal_Systems_AggregateArgs`
- `Query_RootExternal_Systems_By_PkArgs`
- `Query_RootFeature_FlagsArgs`
- `Query_RootFeature_Flags_AggregateArgs`
- `Query_RootFeature_Flags_By_PkArgs`
- `Query_RootGenerate_Payroll_DatesArgs`
- `Query_RootGenerate_Payroll_Dates_AggregateArgs`
- `Query_RootHolidaysArgs`
- `Query_RootHolidays_AggregateArgs`
- `Query_RootHolidays_By_PkArgs`
- `Query_RootLeaveArgs`
- `Query_RootLeave_AggregateArgs`
- `Query_RootLeave_By_PkArgs`
- `Query_RootNeon_Auth_Users_SyncArgs`
- `Query_RootNeon_Auth_Users_Sync_AggregateArgs`
- `Query_RootNeon_Auth_Users_Sync_By_PkArgs`
- `Query_RootNotesArgs`
- `Query_RootNotes_AggregateArgs`
- `Query_RootNotes_By_PkArgs`
- `Query_RootPayroll_CyclesArgs`
- `Query_RootPayroll_Cycles_AggregateArgs`
- `Query_RootPayroll_Cycles_By_PkArgs`
- `Query_RootPayroll_Date_TypesArgs`
- `Query_RootPayroll_Date_Types_AggregateArgs`
- `Query_RootPayroll_Date_Types_By_PkArgs`
- `Query_RootPayroll_DatesArgs`
- `Query_RootPayroll_Dates_AggregateArgs`
- `Query_RootPayroll_Dates_By_PkArgs`
- `Query_RootPayrollsArgs`
- `Query_RootPayrolls_AggregateArgs`
- `Query_RootPayrolls_By_PkArgs`
- `Query_RootPermission_Audit_LogArgs`
- `Query_RootPermission_Audit_Log_AggregateArgs`
- `Query_RootPermission_Audit_Log_By_PkArgs`
- `Query_RootPermission_OverridesArgs`
- `Query_RootPermission_Overrides_AggregateArgs`
- `Query_RootPermission_Overrides_By_PkArgs`
- `Query_RootUsersArgs`
- `Query_RootUsers_AggregateArgs`
- `Query_RootUsers_By_PkArgs`
- `Query_RootWork_ScheduleArgs`
- `Query_RootWork_Schedule_AggregateArgs`
- `Query_RootWork_Schedule_By_PkArgs`
- `Query_Root_EntitiesArgs`
- `Scalars`
- `StaffFragmentFragment`
- `StaffLeaveFragmentFragment`
- `StaffManagerFragmentFragment`
- `String_Array_Comparison_Exp`
- `String_Comparison_Exp`
- `Subscription_Root`
- `Subscription_RootAdjustment_RulesArgs`
- `Subscription_RootAdjustment_Rules_AggregateArgs`
- `Subscription_RootAdjustment_Rules_By_PkArgs`
- `Subscription_RootAdjustment_Rules_StreamArgs`
- `Subscription_RootApp_SettingsArgs`
- `Subscription_RootApp_Settings_AggregateArgs`
- `Subscription_RootApp_Settings_By_PkArgs`
- `Subscription_RootApp_Settings_StreamArgs`
- `Subscription_RootClient_External_SystemsArgs`
- `Subscription_RootClient_External_Systems_AggregateArgs`
- `Subscription_RootClient_External_Systems_By_PkArgs`
- `Subscription_RootClient_External_Systems_StreamArgs`
- `Subscription_RootClientsArgs`
- `Subscription_RootClients_AggregateArgs`
- `Subscription_RootClients_By_PkArgs`
- `Subscription_RootClients_StreamArgs`
- `Subscription_RootExternal_SystemsArgs`
- `Subscription_RootExternal_Systems_AggregateArgs`
- `Subscription_RootExternal_Systems_By_PkArgs`
- `Subscription_RootExternal_Systems_StreamArgs`
- `Subscription_RootFeature_FlagsArgs`
- `Subscription_RootFeature_Flags_AggregateArgs`
- `Subscription_RootFeature_Flags_By_PkArgs`
- `Subscription_RootFeature_Flags_StreamArgs`
- `Subscription_RootGenerate_Payroll_DatesArgs`
- `Subscription_RootGenerate_Payroll_Dates_AggregateArgs`
- `Subscription_RootHolidaysArgs`
- `Subscription_RootHolidays_AggregateArgs`
- `Subscription_RootHolidays_By_PkArgs`
- `Subscription_RootHolidays_StreamArgs`
- `Subscription_RootLeaveArgs`
- `Subscription_RootLeave_AggregateArgs`
- `Subscription_RootLeave_By_PkArgs`
- `Subscription_RootLeave_StreamArgs`
- `Subscription_RootNeon_Auth_Users_SyncArgs`
- `Subscription_RootNeon_Auth_Users_Sync_AggregateArgs`
- `Subscription_RootNeon_Auth_Users_Sync_By_PkArgs`
- `Subscription_RootNeon_Auth_Users_Sync_StreamArgs`
- `Subscription_RootNotesArgs`
- `Subscription_RootNotes_AggregateArgs`
- `Subscription_RootNotes_By_PkArgs`
- `Subscription_RootNotes_StreamArgs`
- `Subscription_RootPayroll_CyclesArgs`
- `Subscription_RootPayroll_Cycles_AggregateArgs`
- `Subscription_RootPayroll_Cycles_By_PkArgs`
- `Subscription_RootPayroll_Cycles_StreamArgs`
- `Subscription_RootPayroll_Date_TypesArgs`
- `Subscription_RootPayroll_Date_Types_AggregateArgs`
- `Subscription_RootPayroll_Date_Types_By_PkArgs`
- `Subscription_RootPayroll_Date_Types_StreamArgs`
- `Subscription_RootPayroll_DatesArgs`
- `Subscription_RootPayroll_Dates_AggregateArgs`
- `Subscription_RootPayroll_Dates_By_PkArgs`
- `Subscription_RootPayroll_Dates_StreamArgs`
- `Subscription_RootPayrollsArgs`
- `Subscription_RootPayrolls_AggregateArgs`
- `Subscription_RootPayrolls_By_PkArgs`
- `Subscription_RootPayrolls_StreamArgs`
- `Subscription_RootPermission_Audit_LogArgs`
- `Subscription_RootPermission_Audit_Log_AggregateArgs`
- `Subscription_RootPermission_Audit_Log_By_PkArgs`
- `Subscription_RootPermission_Audit_Log_StreamArgs`
- `Subscription_RootPermission_OverridesArgs`
- `Subscription_RootPermission_Overrides_AggregateArgs`
- `Subscription_RootPermission_Overrides_By_PkArgs`
- `Subscription_RootPermission_Overrides_StreamArgs`
- `Subscription_RootUsersArgs`
- `Subscription_RootUsers_AggregateArgs`
- `Subscription_RootUsers_By_PkArgs`
- `Subscription_RootUsers_StreamArgs`
- `Subscription_RootWork_ScheduleArgs`
- `Subscription_RootWork_Schedule_AggregateArgs`
- `Subscription_RootWork_Schedule_By_PkArgs`
- `Subscription_RootWork_Schedule_StreamArgs`
- `SyncHolidaysMutation`
- `SyncHolidaysMutationVariables`
- `Timestamp_Comparison_Exp`
- `Timestamptz_Comparison_Exp`
- `UpdateAdjustmentRuleMutation`
- `UpdateAdjustmentRuleMutationVariables`
- `UpdateClientMutation`
- `UpdateClientMutationVariables`
- `UpdateLeaveMutation`
- `UpdateLeaveMutationVariables`
- `UpdateNoteMutation`
- `UpdateNoteMutationVariables`
- `UpdatePayrollDateMutation`
- `UpdatePayrollDateMutationVariables`
- `UpdatePayrollMutation`
- `UpdatePayrollMutationVariables`
- `UpdatePayrollStatusMutation`
- `UpdatePayrollStatusMutationVariables`
- `UpdateStaffMutation`
- `UpdateStaffMutationVariables`
- `UpdateUserMutation`
- `UpdateUserMutationVariables`
- `User_Role_Comparison_Exp`
- `Users`
- `UsersAudit_Logs_PerformedArgs`
- `UsersAudit_Logs_Performed_AggregateArgs`
- `UsersAudit_Logs_TargetedArgs`
- `UsersAudit_Logs_Targeted_AggregateArgs`
- `UsersLeavesArgs`
- `UsersLeaves_AggregateArgs`
- `UsersNotes_WrittenArgs`
- `UsersNotes_Written_AggregateArgs`
- `UsersOverrides_AssignedArgs`
- `UsersOverrides_Assigned_AggregateArgs`
- `UsersOverrides_CreatedArgs`
- `UsersOverrides_Created_AggregateArgs`
- `UsersPayrollsByBackupConsultantUserIdArgs`
- `UsersPayrollsByBackupConsultantUserId_AggregateArgs`
- `UsersPayrollsByManagerUserIdArgs`
- `UsersPayrollsByManagerUserId_AggregateArgs`
- `UsersPayrollsByPrimaryConsultantUserIdArgs`
- `UsersPayrollsByPrimaryConsultantUserId_AggregateArgs`
- `UsersStaffByManagerArgs`
- `UsersStaffByManager_AggregateArgs`
- `UsersUsersManagerArgs`
- `UsersUsersManager_AggregateArgs`
- `UsersWork_SchedulesArgs`
- `UsersWork_Schedules_AggregateArgs`
- `Users_Aggregate`
- `Users_Aggregate_Bool_Exp`
- `Users_Aggregate_Bool_Exp_Bool_And`
- `Users_Aggregate_Bool_Exp_Bool_Or`
- `Users_Aggregate_Bool_Exp_Count`
- `Users_Aggregate_Fields`
- `Users_Aggregate_FieldsCountArgs`
- `Users_Aggregate_Order_By`
- `Users_Arr_Rel_Insert_Input`
- `Users_Bool_Exp`
- `Users_Constraint`
- `Users_Insert_Input`
- `Users_Max_Fields`
- `Users_Max_Order_By`
- `Users_Min_Fields`
- `Users_Min_Order_By`
- `Users_Mutation_Response`
- `Users_Obj_Rel_Insert_Input`
- `Users_On_Conflict`
- `Users_Order_By`
- `Users_Pk_Columns_Input`
- `Users_Select_Column`
- `Users_Select_Column_Users_Aggregate_Bool_Exp_Bool_And_Arguments_Columns`
- `Users_Select_Column_Users_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns`
- `Users_Set_Input`
- `Users_Stream_Cursor_Input`
- `Users_Stream_Cursor_Value_Input`
- `Users_Update_Column`
- `Users_Updates`
- `Uuid_Comparison_Exp`
- `WorkScheduleFragmentFragment`
- `Work_Schedule`
- `Work_Schedule_Aggregate`
- `Work_Schedule_Aggregate_Bool_Exp`
- `Work_Schedule_Aggregate_Bool_Exp_Count`
- `Work_Schedule_Aggregate_Fields`
- `Work_Schedule_Aggregate_FieldsCountArgs`
- `Work_Schedule_Aggregate_Order_By`
- `Work_Schedule_Arr_Rel_Insert_Input`
- `Work_Schedule_Avg_Fields`
- `Work_Schedule_Avg_Order_By`
- `Work_Schedule_Bool_Exp`
- `Work_Schedule_Constraint`
- `Work_Schedule_Inc_Input`
- `Work_Schedule_Insert_Input`
- `Work_Schedule_Max_Fields`
- `Work_Schedule_Max_Order_By`
- `Work_Schedule_Min_Fields`
- `Work_Schedule_Min_Order_By`
- `Work_Schedule_Mutation_Response`
- `Work_Schedule_On_Conflict`
- `Work_Schedule_Order_By`
- `Work_Schedule_Pk_Columns_Input`
- `Work_Schedule_Select_Column`
- `Work_Schedule_Set_Input`
- `Work_Schedule_Stddev_Fields`
- `Work_Schedule_Stddev_Order_By`
- `Work_Schedule_Stddev_Pop_Fields`
- `Work_Schedule_Stddev_Pop_Order_By`
- `Work_Schedule_Stddev_Samp_Fields`
- `Work_Schedule_Stddev_Samp_Order_By`
- `Work_Schedule_Stream_Cursor_Input`
- `Work_Schedule_Stream_Cursor_Value_Input`
- `Work_Schedule_Sum_Fields`
- `Work_Schedule_Sum_Order_By`
- `Work_Schedule_Update_Column`
- `Work_Schedule_Updates`
- `Work_Schedule_Var_Pop_Fields`
- `Work_Schedule_Var_Pop_Order_By`
- `Work_Schedule_Var_Samp_Fields`
- `Work_Schedule_Var_Samp_Order_By`
- `Work_Schedule_Variance_Fields`
- `Work_Schedule_Variance_Order_By`
- `_Entity`
- `_Service`

## lib/graphql/mutations/


### index.ts

- `* from './adjustmentRules/createAdjustmentRule'`
- `* from './adjustmentRules/deleteAdjustmentRule'`
- `* from './adjustmentRules/updateAdjustmentRule'`
- `* from './clients/createClient'`
- `* from './clients/deleteClient'`
- `* from './clients/updateClient'`
- `* from './holidays/syncHolidays'`
- `* from './leave/createLeave'`
- `* from './leave/updateLeave'`
- `* from './notes/addNote'`
- `* from './notes/updateNote'`
- `* from './payrolls/createPayroll'`
- `* from './payrolls/deletePayroll'`
- `* from './payrolls/generatePayrollDates'`
- `* from './payrolls/updatePayroll'`
- `* from './payrolls/updatePayrollStatus'`
- `* from './staff/createStaff'`
- `* from './staff/deleteStaff'`
- `* from './staff/updateStaff'`
- `* from './work_schedule/createWorkSchedule'`

## lib/graphql/mutations/adjustmentRules/


### createAdjustmentRule.ts

- `CREATE_ADJUSTMENT_RULE`

### deleteAdjustmentRule.ts

- `DELETE_ADJUSTMENT_RULE`

### updateAdjustmentRule.ts

- `UPDATE_ADJUSTMENT_RULE`

## lib/graphql/mutations/clients/


### createClient.ts

- `CREATE_CLIENT`

### deleteClient.ts

- `DELETE_CLIENT`

### updateClient.ts

- `UPDATE_CLIENT`

## lib/graphql/mutations/holidays/


### syncHolidays.ts

- `SYNC_HOLIDAYS`

## lib/graphql/mutations/leave/


### createLeave.ts

- `CREATE_LEAVE`

### updateLeave.ts

- `UPDATE_LEAVE`

## lib/graphql/mutations/notes/


### addNote.ts

- `ADD_NOTE`

### updateNote.ts

- `UPDATE_NOTE`

## lib/graphql/mutations/payroll_dates/


### generatePayrollDates.ts

- `INSERT_BULK_PAYROLL_DATES`

### updatePayrollDate.ts

- `UPDATE_PAYROLL_DATE`

## lib/graphql/mutations/payrolls/


### createPayroll.ts

- `CREATE_PAYROLL`

### deletePayroll.ts

- `DELETE_PAYROLL`

### generatePayrollDates.ts

- `GENERATE_PAYROLL_DATES`

### insertPayroll.ts

- `INSERT_PAYROLL`

### updatePayroll.ts

- `UPDATE_PAYROLL`

### updatePayrollStatus.ts

- `UPDATE_PAYROLL_STATUS`

## lib/graphql/mutations/staff/


### createStaff.ts

- `CREATE_STAFF`

### deleteStaff.ts

- `DELETE_STAFF`

### updateStaff.ts

- `UPDATE_STAFF`

### updateUser.ts

- `UPDATE_USER`

## lib/graphql/mutations/work_schedule/


### createWorkSchedule.ts

- `CREATE_WORK_SCHEDULE`

## lib/graphql/queries/


### index.ts

- `* from './accounts/getAccounts'`
- `* from './adjustmentRules/getAdjustmentRules'`
- `* from './appSettings/getAppSettings'`
- `* from './clientExternalSystems/getClientExternalSystems'`
- `* from './clients/getClientById'`
- `* from './clients/getClientsList'`
- `* from './dashboard/getDashboardData'`
- `* from './externalSystems/getExternalSystems'`
- `* from './featureFlags/getFeatureFlags'`
- `* from './holidays/getHolidays'`
- `* from './holidays/getHolidaysByCountry'`
- `* from './holidays/getHolidaysByYear'`
- `* from './leave/getLeave'`
- `* from './notes/getNotes'`
- `* from './payrollCycles/getPayrollCycles'`
- `* from './payrollDateTypes/getPayrollDateTypes'`
- `* from './payrolls/getPayrollById'`
- `* from './payrolls/getPayrollsList'`
- `* from './payrolls/getPayrollsMissingDates'`
- `* from './staff/getStaffById'`
- `* from './staff/getStaffList'`
- `* from './statistics/getStatistics'`
- `* from './work_schedule/getUserWorkSchedule'`

## lib/graphql/queries/adjustmentRules/


### getAdjustmentRules.ts

- `GET_ADJUSTMENT_RULES`
- `GET_ADJUSTMENT_RULE_BY_CYCLE_AND_TYPE`

## lib/graphql/queries/appSettings/


### getAppSettings.ts

- `GET_APP_SETTINGS`

## lib/graphql/queries/clientExternalSystems/


### getClientExternalSystems.ts

- `GET_CLIENT_EXTERNAL_SYSTEMS`

## lib/graphql/queries/clients/


### getClientById.ts

- `GET_CLIENT_BY_ID`

### getClientsList.ts

- `GET_CLIENTS_LIST`

## lib/graphql/queries/dashboard/


### getDashboardData.ts

- `GET_DASHBOARD_DATA`

## lib/graphql/queries/externalSystems/


### getExternalSystems.ts

- `GET_EXTERNAL_SYSTEMS`

## lib/graphql/queries/featureFlags/


### getFeatureFlags.ts

- `GET_FEATURE_FLAGS`

## lib/graphql/queries/holidays/


### getHolidays.ts

- `GET_HOLIDAYS`

### getHolidaysByCountry.ts

- `GET_HOLIDAYS_BY_COUNTRY`

### getHolidaysByYear.ts

- `GET_HOLIDAYS_BY_YEAR`

## lib/graphql/queries/leave/


### getLeave.ts

- `GET_LEAVE`

## lib/graphql/queries/notes/


### getNotes.ts

- `GET_NOTES`

## lib/graphql/queries/payrollCycles/


### getPayrollCycles.ts

- `GET_PAYROLL_CYCLES`

## lib/graphql/queries/payrollDateTypes/


### getPayrollDateTypes.ts

- `GET_PAYROLL_DATE_TYPES`

## lib/graphql/queries/payrolls/


### getPayrollById.ts

- `GET_PAYROLL_BY_ID`

### getPayrollDates.ts

- `GET_PAYROLL_DATES`

### getPayrollList.ts

- `GET_PAYROLL_LIST`

### getPayrolls.ts

- `GET_PAYROLLS`

### getPayrollsByMonth.ts

- `GET_PAYROLLS_BY_MONTH`

### getPayrollsMissingDates.ts

- `GET_PAYROLLS_MISSING_DATES`

### getUserPayrolls.ts

- `GET_USER_PAYROLLS`

## lib/graphql/queries/staff/


### getStaffById.ts

- `GET_STAFF_BY_ID`

### getStaffList.ts

- `GET_STAFF_LIST`

## lib/graphql/queries/statistics/


### getStatistics.ts

- `GET_CLIENT_STATISTICS`
- `GET_LEAVE_STATISTICS`
- `GET_PAYROLL_STATISTICS`

## lib/graphql/queries/work_schedule/


### getUserWorkSchedule.ts

- `GET_USER_WORK_SCHEDULE`

## lib/hooks/


### index.ts

- `* from './api/useAccounts'`
- `* from './api/useApolloQuery'`
- `* from './api/useAppSettings'`
- `* from './api/useAuth'`
- `* from './api/useClient'`
- `* from './api/useClientExternalSystems'`
- `* from './api/useClientQueries'`
- `* from './api/useExternalSystems'`
- `* from './api/useFeatureFlags'`
- `* from './api/useLeave'`
- `* from './api/usePayroll'`
- `* from './api/usePayrollCycles'`
- `* from './api/usePayrollDateTypes'`
- `* from './api/usePolledQuery'`
- `* from './api/usePolling'`
- `* from './api/useSessions'`
- `* from './api/useStaff'`
- `* from './api/useStatistics'`
- `* from './api/useUserRole'`
- `* from './api/useUsers'`
- `* from './api/useWorkSchedule'`

## lib/hooks/api/


### useAccounts.ts

- `useAccountByUserId`
- `useAccounts`

### useAdjustmentRules.ts

- `useAdjustmentRuleByCycleAndType`
- `useAdjustmentRules`
- `useCreateAdjustmentRule`
- `useDeleteAdjustmentRule`
- `useUpdateAdjustmentRule`

### useApolloQuery.ts

- `useApolloMutation`
- `useApolloQuery`

### useAppSettings.ts

- `useAppSettingByKey`
- `useAppSettingValue`
- `useAppSettings`

### useAuth.ts

- `useAuth`

### useClient.ts

- `useClientByIdBasic`
- `useClientsListBasic`
- `useCreateClientBasic`
- `useDeleteClient`
- `useUpdateClientBasic`

### useClientExternalSystems.ts

- `useClientExternalSystems`
- `useCreateClientExternalSystem`
- `useDeleteClientExternalSystem`

### useClientQueries.ts

- `useClientById`
- `useClients`
- `useCreateClient`
- `useUpdateClient`

### useDashboard.ts

- `useDashboardAlerts`
- `useDashboardCharts`
- `useDashboardSummary`
- `useDashboardUpcomingTasks`

### useExternalSystems.ts

- `useCreateExternalSystem`
- `useDeleteExternalSystem`
- `useExternalSystemById`
- `useExternalSystemLogs`
- `useExternalSystems`
- `useTestExternalSystemConnection`
- `useUpdateExternalSystem`

### useFeatureFlags.ts

- `useFeatureFlag`
- `useFeatureFlags`
- `useIsFeatureEnabled`

### useHolidays.ts

- `useAustralianHolidays`
- `useHolidays`
- `useHolidaysByCountry`
- `useHolidaysByYear`
- `useSyncHolidays`

### useLeave.ts

- `useCreateLeave`
- `useDeleteLeave`
- `useLeave`
- `usePendingLeaveCount`
- `useUpdateLeave`

### useNotes.ts

- `useAddNote`
- `useDeleteNote`
- `useNotes`
- `useUpdateNote`

### usePayroll.ts

- `useCreatePayrollBasic`
- `usePayrollList`
- `usePayrollSchedule`
- `useUpdatePayrollBasic`
- `useUpdatePayrollStatus`
- `useUserPayrolls`

### usePayrollCycles.ts

- `usePayrollCycleOptions`
- `usePayrollCycles`

### usePayrollDateTypes.ts

- `useCreatePayrollDateType`
- `useDeletePayrollDateType`
- `usePayrollDateTypeOptions`
- `usePayrollDateTypes`
- `useUpdatePayrollDateType`

### usePayrollQueries.ts

- `useCreatePayroll`
- `useDeletePayroll`
- `useGeneratePayrollDates`
- `useGeneratePayrollDatesForPayroll`
- `usePayrollById`
- `usePayrolls`
- `usePayrollsByConsultant`
- `usePayrollsByManager`
- `usePayrollsByMonth`
- `usePayrollsByStatus`
- `usePayrollsMissingDates`
- `useUpdatePayroll`

### usePolledQuery.ts

- `usePolledQuery`

### usePolling.ts

- `useSmartPolling`

### useSessions.ts

- `useUserSessions`

### useStaff.ts

- `useCreateStaff`
- `useDeleteStaff`
- `useStaffById`
- `useStaffList`
- `useUpdateStaff`

### useStatistics.ts

- `useClientStatistics`
- `useCompletionRateStatistics`
- `usePayrollStatistics`
- `useProcessingTimeStatistics`

### useUserRole.ts

- `useUserRole`

### useUsers.ts

- `useCreateUser`
- `useDeleteUser`
- `useUpdateUser`
- `useUpdateUserRole`
- `useUserById`
- `useUsers`
- `useUsersByRole`

### useWorkSchedule.ts

- `useCreateWorkSchedule`
- `useDeleteWorkSchedule`
- `useTeamWorkSchedules`
- `useUpdateWorkSchedule`
- `useUserWorkSchedule`
- `useWorkSchedules`

## lib/hooks/ui/


### useDisclosure.ts

- `useDisclosure`

### useForm.ts

- `useForm`

### useMediaQuery.ts

- `useMediaQuery`

## lib/hooks/utils/


### index.ts

- `* from './useCacheInvalidation'`
- `* from './useDataFetching'`
- `* from './useDataRefresh'`
- `* from './useDebounce'`
- `* from './useLocalStorage'`
- `* from './useSubscription'`

### useCacheInvalidation.ts

- `useCacheInvalidation`

### useDataFetching.ts

- `useDataFetching`

### useDataRefresh.ts

- `useDataRefresh`

### useDebounce.ts

- `useDebounce`

### useLocalStorage.ts

- `useLocalStorage`

### useSubscription.ts

- `useRealTimeSubscription`

## lib/services/


### holiday-sync-service.ts

- `PublicHoliday`
- `fetchPublicHolidays`
- `syncAustralianHolidays`
- `syncHolidaysForCountry`
- `syncMultipleYears`

### index.ts

- `* from './holiday-sync-service'`
- `* from './payroll-date-service'`
- `* from './payroll-service'`
- `* from './user-sync'`

### payroll-date-service.ts

- `ensurePayrollDatesExist`
- `extendAllPayrollDates`
- `recalculatePayrollDates`

### payroll-service.ts

- `CYCLE_TYPES`
- `DATE_TYPES`
- `generatePayrollServiceSchedule`
- `getHolidays`
- `getPayrollById`

### user-sync.ts

- `deleteUserFromDatabase`
- `syncAllUsers`
- `syncUserById`
- `syncUserWithDatabase`

## lib/utils/


### date-utils.ts

- `AdjustmentRule`
- `Holiday`
- `PayrollCycleType`
- `PayrollDate`
- `PayrollDateType`
- `PayrollStatus`
- `adjustDate`
- `calculateNextEftDate`
- `calculatePayrollDates`
- `generatePayrollSchedule`
- `getBusinessDaysInMonth`
- `isHoliday`

### error-handling.tsx

- `classifyGraphQLError`
- `getUserFriendlyErrorMessage`
- `handleApiError`
- `handleFetchError`

### index.ts

- `* from './date-utils'`
- `* from './error-handling'`
- `* from './utils'`

### jwt-utils.ts

- `getHasuraClaims`
- `parseJWT`

### utils.ts

- `calculateGST`
- `calculateIncomeTax`
- `calculateSuperannuation`
- `cn`
- `formatABN`
- `formatCurrency`
- `formatDate`
- `formatPhoneNumber`
- `formatTFN`

## pages/api/admin/


### sync-users.ts

- `handler`

## pages/api/webhooks/


### clerk.ts

- `handler`

## types/


### interface.ts

- `AdjustmentRule`
- `AppSettings`
- `Client`
- `ClientExternalSystem`
- `ClientQueryResponse`
- `ExternalSystem`
- `FeatureFlag`
- `GeneratePayrollDatesResponse`
- `HasuraClaims`
- `HasuraJWTPayload`
- `HasuraRole`
- `Holiday`
- `Leave`
- `LeaveStatus`
- `LeaveType`
- `Note`
- `Payroll`
- `PayrollCycle`
- `PayrollDate`
- `PayrollDateType`
- `PayrollMutationResponse`
- `PayrollQueryResponse`
- `PayrollStatus`
- `User`
- `UserQueryResponse`
- `UserSync`
- `UserSyncInsertInput`
- `WorkSchedule`