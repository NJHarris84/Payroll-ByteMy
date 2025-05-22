// types/interface.ts
export type PayrollStatus = "Active" | "Inactive" | "Implementation";

export interface Client {
  id: string;
  name: string;
  contact_person: string;
  contact_email: string;
  contact_phone: string;
  active: boolean;
  created_at: string;
  updated_at: string;
  payrolls?: Payroll[];
}

export interface Payroll {
  id: string;
  name: string;
  client: Client;
  client_id: string;
  status: PayrollStatus;
  notes?: string;
  cycle_id: string;
  date_type_id: string;
  date_value: string | number;
  processing_days_before_eft: number;
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
  name: string;
  days: number;
}

export interface PayrollDateType {
  id: string;
  name: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  image?: string;
  is_staff: boolean;
  role: string;
  manager_id?: string;
  manager?: User;
  leaves?: Leave[];
  created_at: string;
  updated_at: string;
}

export interface Leave {
  id: string;
  user_id: string;
  start_date: string;
  end_date: string;
  leave_type: string;
  reason?: string;
  status: string;
  user?: User;
  created_at: string;
  updated_at: string;
}

export interface Holiday {
  id: string;
  name: string;
  date: string;
  region: string;
  created_at: string;
  updated_at: string;
}

export interface Note {
  id: string;
  entity_id: string;
  entity_type: string;
  content: string;
  created_by: string;
  created_at: string;
  updated_at: string;
}

export interface WorkSchedule {
  id: string;
  user_id: string;
  day_of_week: number;
  start_time: string;
  end_time: string;
  is_working_day: boolean;
  user?: User;
  created_at: string;
  updated_at: string;
}

