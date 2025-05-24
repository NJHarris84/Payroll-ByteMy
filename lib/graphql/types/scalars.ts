/**
 * Custom scalar type handlers for GraphQL
 * Provides type safety and custom parsing for complex scalar types
 */

// Extended scalar type definitions
export type AnyScalar = any;
export type UuidScalar = string;
export type BpcharScalar = string;
export type JsonbScalar = any;
export type TimestamptzScalar = string;
export type DateScalar = string;

// Additional custom scalar types
export type LeaveStatusEnum = string;
export type NumericScalar = number;
export type PayrollCycleType = string;
export type PayrollDateType = string;
export type PayrollStatus = string;
export type TimestampScalar = string;
export type UserRoleEnum = string;

// Type guards for scalar types
export function isAnyScalar(value: unknown): value is AnyScalar {
  return value !== undefined && value !== null;
}

export function isUuid(value: string): value is UuidScalar {
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return uuidRegex.test(value);
}

export function isBpchar(value: string): value is BpcharScalar {
  return typeof value === 'string' && value.length === 1;
}

export function isJsonb(value: unknown): value is JsonbScalar {
  try {
    if (typeof value === 'string') {
      JSON.parse(value);
      return true;
    }
    JSON.parse(JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}

export function isTimestamptz(value: string): value is TimestamptzScalar {
  return !isNaN(Date.parse(value));
}

export function isDate(value: string): value is DateScalar {
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  return dateRegex.test(value);
}

export function isLeaveStatus(value: string): value is LeaveStatusEnum {
  return ['PENDING', 'APPROVED', 'REJECTED'].includes(value);
}

export function isNumeric(value: unknown): value is NumericScalar {
  return typeof value === 'number' && !isNaN(value);
}

export function isPayrollCycleType(value: string): value is PayrollCycleType {
  return ['WEEKLY', 'MONTHLY', 'QUARTERLY'].includes(value);
}

export function isPayrollDateType(value: string): value is PayrollDateType {
  return ['SOM', 'EOM', 'FIXED'].includes(value);
}

export function isPayrollStatus(value: string): value is PayrollStatus {
  return ['DRAFT', 'LIVE', 'COMPLETED'].includes(value);
}

export function isTimestamp(value: string): value is TimestampScalar {
  return /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?(Z|[+-]\d{2}:\d{2})?$/.test(value);
}

export function isUserRole(value: string): value is UserRoleEnum {
  return ['org_admin', 'manager', 'consultant', 'viewer'].includes(value);
}

// Type-safe scalar parsers with explicit input types
type ScalarParser<T> = (value: unknown) => T;

interface ScalarParsers {
  _Any: ScalarParser<AnyScalar>;
  uuid: ScalarParser<UuidScalar>;
  bpchar: ScalarParser<BpcharScalar>;
  jsonb: ScalarParser<JsonbScalar>;
  timestamptz: ScalarParser<TimestamptzScalar>;
  date: ScalarParser<DateScalar>;
  leave_status_enum: ScalarParser<LeaveStatusEnum>;
  numeric: ScalarParser<NumericScalar>;
  payroll_cycle_type: ScalarParser<PayrollCycleType>;
  payroll_date_type: ScalarParser<PayrollDateType>;
  payroll_status: ScalarParser<PayrollStatus>;
  timestamp: ScalarParser<TimestampScalar>;
  user_role: ScalarParser<UserRoleEnum>;
  DateTime: ScalarParser<Date>;
}

// Custom scalar parsing utilities
export const scalarParsers: ScalarParsers = {
  _Any: (value: unknown): AnyScalar => {
    if (isAnyScalar(value)) return value;
    handleScalarError('Invalid _Any scalar type');
    return value;
  },
  
  uuid: (value: unknown): UuidScalar => {
    if (typeof value === 'string' && isUuid(value)) return value;
    handleScalarError('Invalid UUID format');
    return value as string;
  },
  
  bpchar: (value: unknown): BpcharScalar => {
    if (typeof value === 'string' && isBpchar(value)) return value;
    handleScalarError('Invalid Bpchar scalar type');
    return value as string;
  },
  
  jsonb: (value: unknown): JsonbScalar => {
    if (isJsonb(value)) return value;
    handleScalarError('Invalid Jsonb scalar type');
    return value;
  },
  
  timestamptz: (value: unknown): TimestamptzScalar => {
    if (typeof value === 'string' && isTimestamptz(value)) return value;
    handleScalarError('Invalid Timestamptz format');
    return value as string;
  },
  
  DateTime: (value: unknown): Date => {
    if (typeof value === 'string') {
      const parsed = new Date(value);
      if (!isNaN(parsed.getTime())) return parsed;
    }
    handleScalarError('Invalid DateTime format');
    return new Date();
  },
  
  date: (value: unknown): DateScalar => {
    if (typeof value === 'string' && isDate(value)) return value;
    handleScalarError('Invalid Date scalar type');
    return value as string;
  },
  
  leave_status_enum: (value: unknown): LeaveStatusEnum => {
    if (typeof value === 'string' && isLeaveStatus(value)) return value;
    handleScalarError('Invalid Leave Status');
    return value as string;
  },
  
  numeric: (value: unknown): NumericScalar => {
    if (isNumeric(value)) return value as number;
    handleScalarError('Invalid Numeric value');
    return value as number;
  },
  
  payroll_cycle_type: (value: unknown): PayrollCycleType => {
    if (typeof value === 'string' && isPayrollCycleType(value)) return value;
    handleScalarError('Invalid Payroll Cycle Type');
    return value as string;
  },
  
  payroll_date_type: (value: unknown): PayrollDateType => {
    if (typeof value === 'string' && isPayrollDateType(value)) return value;
    handleScalarError('Invalid Payroll Date Type');
    return value as string;
  },
  
  payroll_status: (value: unknown): PayrollStatus => {
    if (typeof value === 'string' && isPayrollStatus(value)) return value;
    handleScalarError('Invalid Payroll Status');
    return value as string;
  },
  
  timestamp: (value: unknown): TimestampScalar => {
    if (typeof value === 'string' && isTimestamp(value)) return value;
    handleScalarError('Invalid Timestamp format');
    return value as string;
  },
  
  user_role: (value: unknown): UserRoleEnum => {
    if (typeof value === 'string' && isUserRole(value)) return value;
    handleScalarError('Invalid User Role');
    return value as string;
  }
};

// Utility for safe scalar parsing
export function parseScalar<T>(
  type: keyof ScalarParsers, 
  value: unknown
): T {
  const parser = scalarParsers[type];
  if (!parser) {
    throw new Error(`No parser found for scalar type: ${type}`);
  }
  return parser(value) as T;
}

// Enhanced error logging configuration
export interface ScalarErrorConfig {
  throwOnError?: boolean;
  logger?: (message: string) => void;
}

const defaultErrorConfig: ScalarErrorConfig = {
  throwOnError: true,
  logger: console.error
};

let globalScalarConfig: ScalarErrorConfig = { ...defaultErrorConfig };

export function configureScalarParsing(config: ScalarErrorConfig) {
  globalScalarConfig = { ...defaultErrorConfig, ...config };
}

function handleScalarError(message: string): void {
  const { throwOnError, logger } = globalScalarConfig;
  
  if (logger) {
    logger(`Scalar Parsing Error: ${message}`);
  }
  
  if (throwOnError) {
    throw new Error(message);
  }
}

// Optional: Convenience functions for type conversion and validation
export const scalarUtils = {
  toUuid: (value: string): UuidScalar => {
    if (!isUuid(value)) {
      throw new Error('Invalid UUID');
    }
    return value;
  },
  
  toBpchar: (value: string): BpcharScalar => {
    if (!isBpchar(value)) {
      throw new Error('Invalid Bpchar (must be single character)');
    }
    return value;
  },
  
  toTimestamptz: (value: string): TimestamptzScalar => {
    if (!isTimestamptz(value)) {
      throw new Error('Invalid Timestamptz');
    }
    return value;
  },
  
  toDate: (value: string): DateScalar => {
    if (!isDate(value)) {
      throw new Error('Invalid Date format (YYYY-MM-DD)');
    }
    return value;
  },
  
  toLeaveStatus: (value: string): LeaveStatusEnum => {
    if (!isLeaveStatus(value)) {
      throw new Error('Invalid Leave Status');
    }
    return value;
  },
  
  toNumeric: (value: unknown): NumericScalar => {
    if (!isNumeric(value)) {
      throw new Error('Invalid Numeric value');
    }
    return value as number;
  },
  
  toPayrollCycleType: (value: string): PayrollCycleType => {
    if (!isPayrollCycleType(value)) {
      throw new Error('Invalid Payroll Cycle Type');
    }
    return value;
  },
  
  toPayrollDateType: (value: string): PayrollDateType => {
    if (!isPayrollDateType(value)) {
      throw new Error('Invalid Payroll Date Type');
    }
    return value;
  },
  
  toPayrollStatus: (value: string): PayrollStatus => {
    if (!isPayrollStatus(value)) {
      throw new Error('Invalid Payroll Status');
    }
    return value;
  },
  
  toTimestamp: (value: string): TimestampScalar => {
    if (!isTimestamp(value)) {
      throw new Error('Invalid Timestamp format');
    }
    return value;
  },
  
  toUserRole: (value: string): UserRoleEnum => {
    if (!isUserRole(value)) {
      throw new Error('Invalid User Role');
    }
    return value;
  }
};
