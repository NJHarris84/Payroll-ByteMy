// types/interface.ts
import { HasuraRole } from "@/lib/auth/roles";

export type PayrollStatus = "Active" | "Inactive" | "Implementation";
export type LeaveStatus = "Pending" | "Approved" | "Rejected";
export type LeaveType = "Annual" | "Sick" | "Unpaid" | "Other";

export interface UserSync {
  id: string;
  name: string | null;
  email: string | null;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

export interface UserSyncInsertInput {
  id: string;
  name?: string | null;
  email?: string | null;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string | null;
}

export interface Client {
  id: string;
  name: string;
  contact_person?: string;
  contact_email?: string;
  contact_phone?: string;
  active: boolean;
  created_at: string;
  updated_at: string;
  payrolls?: Payroll[];
  client_external_systems?: ClientExternalSystem[];
}

export interface Payroll {
  id: string;
  name: string;
  client: Client;
  client_id: string;
  status: PayrollStatus;
  cycle_id: string;
  date_type_id: string;
  date_value?: number;
  primary_consultant_user_id?: string;
  backup_consultant_user_id?: string;
  manager_user_id?: string;
  processing_days_before_eft: number;
  processing_time: number;
  employee_count?: number;
  payroll_system?: string;
  payroll_dates?: PayrollDate[];
  payroll_cycle?: PayrollCycle;
  payroll_date_type?: PayrollDateType;
  userByPrimaryConsultantUserId?: User;
  userByBackupConsultantUserId?: User;
  userByManagerUserId?: User;
  created_at: string;
  updated_at: string;
}

export interface PayrollDate {
  id: string;
  payroll_id: string;
  original_eft_date: string;
  adjusted_eft_date: string;
  processing_date: string;
  notes?: string;
  payroll?: Payroll;
  created_at: string;
  updated_at: string;
}

export interface PayrollCycle {
  id: string;
  name: 'weekly' | 'fortnightly' | 'bi_monthly' | 'monthly' | 'quarterly';
  description?: string;
  created_at: string;
  updated_at: string;
}

export interface PayrollDateType {
  id: string;
  name: 'fixed_date' | 'eom' | 'som' | 'week_a' | 'week_b' | 'dow';
  description?: string;
  created_at: string;
  updated_at: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  username?: string;
  image?: string;
  is_staff: boolean;
  role: HasuraRole;
  manager_id?: string;
  clerk_user_id?: string;
  manager?: User;
  leaves?: Leave[];
  work_schedules?: WorkSchedule[];
  notes_written?: Note[];
  created_at: string;
  updated_at: string;
}

export interface Leave {
  id: string;
  user_id: string;
  start_date: string;
  end_date: string;
  leave_type: LeaveType;
  reason?: string;
  status: LeaveStatus;
  user?: User;
  leave_user?: User;
}

export interface Holiday {
  id: string;
  date: string;
  local_name: string;
  name: string;
  country_code: string;
  region?: string[];
  is_fixed: boolean;
  is_global: boolean;
  launch_year?: number;
  types: string[];
  created_at: string;
  updated_at: string;
}

export interface Note {
  id: string;
  entity_id: string;
  entity_type: 'payroll' | 'client';
  user_id?: string;
  content: string;
  is_important: boolean;
  user?: User;
  created_at: string;
  updated_at: string;
}

export interface WorkSchedule {
  id: string;
  user_id: string;
  work_day: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
  work_hours: number;
  user?: User;
  work_schedule_user?: User;
  created_at: string;
  updated_at: string;
}

export interface ExternalSystem {
  id: string;
  name: string;
  url: string;
  description?: string;
  icon?: string;
  created_at: string;
  updated_at: string;
}

export interface ClientExternalSystem {
  id: string;
  client_id: string;
  system_id: string;
  system_client_id?: string;
  client?: Client;
  external_system?: ExternalSystem;
  created_at: string;
  updated_at: string;
}

export interface AdjustmentRule {
  id: string;
  cycle_id: string;
  date_type_id: string;
  rule_description: string;
  rule_code: 'previous' | 'next' | 'nearest';
  payroll_cycle?: PayrollCycle;
  payroll_date_type?: PayrollDateType;
  created_at: string;
  updated_at: string;
}

export interface FeatureFlag {
  id: string;
  feature_name: string;
  is_enabled: boolean;
  allowed_roles: HasuraRole[];
  updated_at: string;
}

export interface AppSettings {
  id: string;
  permissions?: Record<string, any>;
}

// GraphQL Response Types
export namespace GraphQL {
  export interface PayrollQueryResponse {
    payrolls: Payroll[];
  }

  export interface PayrollMutationResponse {
    insert_payrolls_one?: Payroll;
    update_payrolls_by_pk?: Payroll;
    delete_payrolls_by_pk?: Payroll;
  }

  export interface ClientQueryResponse {
    clients: Client[];
    clients_by_pk?: Client;
  }

  export interface UserQueryResponse {
    users: User[];
    users_by_pk?: User;
  }

  export interface GeneratePayrollDatesResponse {
    generatePayrollDates: {
      payroll_dates: PayrollDate[];
      success: boolean;
      message: string;
    };
  }
}

export type HasuraRole = 'admin' | 'manager' | 'consultant' | 'viewer';

export interface HasuraClaims {
  'x-hasura-allowed-roles': HasuraRole[];
  'x-hasura-default-role': HasuraRole;
  'x-hasura-user-id': string;
  'x-hasura-org-id'?: string;
  [key: string]: string | string[] | undefined;
}

export interface HasuraJWTPayload {
  'https://hasura.io/jwt/claims': HasuraClaims;
  iat: number;
  exp: number;
  sub: string;
  iss?: string;
  [key: string]: unknown;
}