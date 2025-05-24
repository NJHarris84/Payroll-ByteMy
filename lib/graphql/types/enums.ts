/**
 * Enum Type Handling Utilities
 * Provides type-safe enum validation and conversion with advanced error handling
 */
import { Logger } from '../../utils';


// Create a logger instance for enum handling
const logger = new Logger({
  minLevel: 'warn',
  enableTimestamp: true
});

// Configuration for enum error handling
interface EnumErrorConfig {
  throwOnInvalid?: boolean;
  logErrors?: boolean;
  defaultValue?: string;
}

const DEFAULT_ENUM_ERROR_CONFIG: EnumErrorConfig = {
  throwOnInvalid: true,
  logErrors: true,
  defaultValue: undefined
};

// Define known enum types
export enum LeaveStatusEnum {
  Pending = 'Pending',
  Approved = 'Approved',
  Rejected = 'Rejected'
}

export enum UserRoleEnum {
  Admin = 'admin',
  OrgAdmin = 'org_admin',
  Manager = 'manager',
  Consultant = 'consultant',
  Viewer = 'viewer'
}

export enum PayrollStatusEnum {
  Active = 'Active',
  Implementation = 'Implementation',
  Inactive = 'Inactive'
}

export enum PayrollCycleEnum {
  Weekly = 'Weekly',
  Fortnightly = 'Fortnightly',
  Monthly = 'Monthly'
}

export enum PayrollDateTypeEnum {
  PaymentDate = 'PaymentDate',
  PeriodStartDate = 'PeriodStartDate',
  PeriodEndDate = 'PeriodEndDate'
}

// Enhanced utility function to validate enum values with configurable error handling
export function validateEnum<T extends Record<string, string>>(
  enumType: T, 
  value: string,
  config: EnumErrorConfig = DEFAULT_ENUM_ERROR_CONFIG
): T[keyof T] | undefined {
  const mergedConfig = { ...DEFAULT_ENUM_ERROR_CONFIG, ...config };
  
  if (Object.values(enumType).includes(value as T[keyof T])) {
    return value as T[keyof T];
  }

  // Handle error based on configuration
  const errorMessage = `Invalid enum value: ${value} for enum ${enumType.constructor.name}`;
  
  if (mergedConfig.logErrors) {
    logger.warn(errorMessage);
  }

  if (mergedConfig.throwOnInvalid) {
    throw new Error(errorMessage);
  }

  return mergedConfig.defaultValue as T[keyof T] | undefined;
}

// Type guards for enums
export function isLeaveStatus(value: string): value is LeaveStatusEnum {
  return Object.values(LeaveStatusEnum).includes(value as LeaveStatusEnum);
}

export function isUserRole(value: string): value is UserRoleEnum {
  return Object.values(UserRoleEnum).includes(value as UserRoleEnum);
}

export function isPayrollStatus(value: string): value is PayrollStatusEnum {
  return Object.values(PayrollStatusEnum).includes(value as PayrollStatusEnum);
}

export function isPayrollCycle(value: string): value is PayrollCycleEnum {
  return Object.values(PayrollCycleEnum).includes(value as PayrollCycleEnum);
}

export function isPayrollDateType(value: string): value is PayrollDateTypeEnum {
  return Object.values(PayrollDateTypeEnum).includes(value as PayrollDateTypeEnum);
}

// Enhanced conversion utilities with error configuration
export const enumUtils = {
  toLeaveStatus: (value: string, config?: EnumErrorConfig): LeaveStatusEnum => 
    validateEnum(LeaveStatusEnum, value, config) as LeaveStatusEnum,
  
  toUserRole: (value: string, config?: EnumErrorConfig): UserRoleEnum => 
    validateEnum(UserRoleEnum, value, config) as UserRoleEnum,
  
  toPayrollStatus: (value: string, config?: EnumErrorConfig): PayrollStatusEnum => 
    validateEnum(PayrollStatusEnum, value, config) as PayrollStatusEnum,

  toPayrollCycle: (value: string, config?: EnumErrorConfig): PayrollCycleEnum => 
    validateEnum(PayrollCycleEnum, value, config) as PayrollCycleEnum,

  toPayrollDateType: (value: string, config?: EnumErrorConfig): PayrollDateTypeEnum => 
    validateEnum(PayrollDateTypeEnum, value, config) as PayrollDateTypeEnum
};

// Export configuration type for external use
export type { EnumErrorConfig };
