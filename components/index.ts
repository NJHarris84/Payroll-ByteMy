/**
 * Components barrel file for easier imports
 * This allows importing components like:
 * import { Button, Card } from "@/components"
 */

// UI Components
export * from "./ui/button";
export * from "./ui/card";
export * from "./ui/dialog";
export * from "./ui/input";
export * from "./ui/select";
export * from "./ui/switch";
export * from "./ui/form-layout";
export * from "./ui/table";
export * from "./ui/badge";
export * from "./ui/scroll-area";

// Layout Components
export * from "./layout/main-nav";
export * from "./layout/sidebar";
export * from "./layout/dashboard-shell";
export * from "./layout/client-wrapper";
export * from "./layout/theme-toggle";
export * from "./layout/user-nav";

// Payroll Components
export * from "./payroll/payroll-list-card";
export * from "./payroll/payroll-details-card";
export * from "./payroll/payroll-dates-view";
export * from "./payroll/upcoming-payrolls";
export * from "./payroll/generate-missing-dates-button";
export * from "./payroll/australian-tax-calculator";
export * from "./payroll/payroll-schedule-view";
export * from "./payroll/payroll-subscription";
export * from "./payroll/payrolls-missing-dates";
export * from "./payroll/regenerate-dates";

// Client Components
export * from "./client/client-card";
export * from "./client/client-payroll-table";
export * from "./client/clients-table";

// Dialog Components
export * from "./dialogs/custom-dialog";
export * from "./dialogs/confirm-dialog";
export * from "./dialogs/edit-payroll-dialog";
export * from "./dialogs/notes-modal";
export * from "./dialogs/modal-form";

// Form Components
export * from "./forms/user-role-management";

// Common Components
export * from "./common/notes-list";
export * from "./common/notes-list-with-add";
export * from "./common/add-note";
export * from "./common/export-csv";
export * from "./common/export-pdf";
export * from "./common/mardown-viewer";
export * from "./common/ai-chat";
export * from "./common/hasura-test";
export * from "./common/role-gates";
export * from "./common/real-time-updates";
export * from "./common/recent-activity";
export * from "./common/refresh-button";
export * from "./common/simple-test";
export * from "./common/subscription-test";
export * from "./common/test-subscription";
export * from "./common/urgent-alerts";