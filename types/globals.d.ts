// types/globals.d.ts
import { HasuraRole } from "@/lib/auth/roles";

declare global {
  // Hasura JWT Claims structure
  interface HasuraClaims {
    'x-hasura-allowed-roles': string[];
    'x-hasura-default-role': string;
    'x-hasura-user-id': string;
    'x-hasura-org-id'?: string;
  }

  // Extended JWT payload with Hasura claims
  interface HasuraJWTPayload {
    'https://hasura.io/jwt/claims': HasuraClaims;
    exp: number;
    iat: number;
    iss: string;
    sub: string;
    azp?: string;
    // Add other standard JWT fields as needed
  }
}

declare module '@clerk/nextjs/server' {
  interface AuthObject {
    userId: string | null;
    sessionId: string | null;
    getToken: (options?: { template?: string }) => Promise<string | null>;
    sessionClaims: {
      publicMetadata?: {
        role?: HasuraRole;
      };
      // This is what Clerk actually provides after JWT template processing
      'https://hasura.io/jwt/claims'?: HasuraClaims;
    } | null;
  }
}

declare module '@clerk/clerk-react' {
  interface User {
    publicMetadata: {
      role?: HasuraRole;
    };
  }
}

// API Response Types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  errors?: string[] | Record<string, string[]>;
  message?: string;
  timestamp: string;
}

// Apollo Cache Types
export interface CacheReference {
  __typename: string;
  id: string;
}

// View State Types
export interface FilterState {
  client?: string;
  payroll?: string;
  consultant?: string;
  status?: PayrollStatus;
  dateRange?: [Date, Date];
}

export interface SortState {
  field: string;
  direction: 'asc' | 'desc';
}

export interface PaginationState {
  page: number;
  pageSize: number;
  totalItems: number;
}

// Re-export types from interface.ts to avoid duplication
export type { PayrollStatus, Client, Payroll, PayrollDate, User, Leave, Holiday, Note, WorkSchedule } from './interface';

export {}; // This makes the file a module