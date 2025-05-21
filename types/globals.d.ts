// types/globals.d.ts
import { HasuraRole } from '@/lib/roles';

declare module '@clerk/nextjs/server' {
  interface AuthObject {
    userId: string | null;
    sessionId: string | null;
    getToken: (options?: { template?: string }) => Promise<string | null>;
    sessionClaims: {
      hasura?: {
        role: HasuraRole;
      }
    };
  }
}

declare module '@clerk/clerk-react' {
  interface User {
    publicMetadata: {
      defaultRole?: HasuraRole;
      allowedRoles?: HasuraRole[];
    };
  }
}

// JWT claims structure for Hasura
interface CustomJwtSessionClaims {
  'https://hasura.io/jwt/claims': {
    'x-hasura-allowed-roles': string[]
    'x-hasura-default-role': string
    'x-hasura-user-id': string
    'x-hasura-org-id'?: string
  }
  metadata: {
    role?: HasuraRole
  }
}

// Enum for Payroll Status
export type PayrollStatus = "Active" | "Inactive" | "Implementation";

// Payroll Dates Interface (Matches Hasura Schema)
export interface PayrollDate {
  original_eft_date: string;
  adjusted_eft_date: string;
  processing_date: string;
  notes?: string;
}

// Main Payroll Interface for UI & API
export interface Payroll {
  id: string;
  name: string;
  client: { name: string };
  payroll_cycle?: { name: string };
  payroll_date_type?: { name: string };
  processing_days_before_eft: number;
  payroll_system?: string;
  date_value?: number;
  status: PayrollStatus;
  payroll_dates?: PayrollDate[];
  created_at: string;
  updated_at: string;
}

// Payroll Input for API Requests
export interface PayrollInput {
  clientId: string;
  name: string;
  cycleId: string;
  dateTypeId: string;
  dateValue?: number;
  primaryConsultantId?: string;
  backupConsultantId?: string;
  managerId?: string;
  processingDaysBeforeEft: number;
  payrollSystem?: string;
  status: PayrollStatus;
}

// Database Model for Payroll (matches Hasura schema)
export interface PayrollDB {
  id: string;
  name: string;
  client_id: string;
  cycle_id: string;
  date_type_id: string;
  date_value?: number;
  primary_consultant_id?: string;
  backup_consultant_id?: string;
  manager_id?: string;
  processing_days_before_eft: number;
  payroll_system?: string;
  status: PayrollStatus;
  created_at: string;
  updated_at: string;
}

// Notes for Payrolls or Clients
export interface NoteInput {
  entityType: "payroll" | "client";
  entityId: string;
  userId?: string;
  content: string;
  isImportant?: boolean;
}

// Notes in Database
export interface Note {
  id: string;
  entity_type: "payroll" | "client";
  entity_id: string;
  user_id?: string;
  content: string;
  is_important: boolean;
  created_at: string;
  updated_at: string;
}

// Client Interface
export interface Client {
  id: string;
  name: string;
  contact_person?: string;
  contact_email?: string;
  contact_phone?: string;
  active: boolean;
  created_at: string;
  updated_at: string;
}

// Staff Interface
export interface StaffMember {
  id: string;
  name: string;
  email: string;
  phone?: string;
  position?: string;
  active: boolean;
  created_at: string;
  updated_at: string;
}

export {}