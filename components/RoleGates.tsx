// components/role-gates.tsx
// This file provides authorization gate components for restricting access based on user roles and permissions
"use client"

import { ReactNode } from 'react'
import { Skeleton } from "@/components/ui/skeleton"
import { useUserRole } from '@/lib/hooks';
import { HasuraRole, Permission } from '@/lib/auth';

/**
 * Props for role-based access control gates
 * @interface RoleGateProps
 * @property {ReactNode} children - Content to show when user has access
 * @property {HasuraRole[]} allowedRoles - List of roles that have access to the content
 * @property {ReactNode} [fallback] - Content to show when user doesn't have access
 */
type RoleGateProps = {
  children: ReactNode
  allowedRoles: HasuraRole[]
  fallback?: ReactNode
}

/**
 * Component that renders content only if the current user has one of the allowed roles
 * Used for role-based access control throughout the application
 * 
 * @example
 * <HasuraRoleGate allowedRoles={['admin', 'manager']}>
 *   <AdminDashboard />
 * </HasuraRoleGate>
 */
export function HasuraRoleGate({ 
  children, 
  allowedRoles,
  fallback = <div className="p-4 text-muted-foreground">You don't have permission to view this content</div>
}: RoleGateProps) {
  const { userRole, isLoading } = useUserRole();
  
  // Handle loading state
  if (isLoading) {
    return <Skeleton className="w-full h-32" />
  }
  
  if (!userRole || !allowedRoles.includes(userRole)) {
    return <>{fallback}</>
  }
  
  return <>{children}</>
}

/**
 * Props for permission-based access control gates
 * @interface PermissionGateProps
 * @property {ReactNode} children - Content to show when user has permission
 * @property {Permission} requiredPermission - The specific permission required to view content
 * @property {ReactNode} [fallback] - Content to show when user doesn't have permission
 */
type PermissionGateProps = {
  children: ReactNode
  requiredPermission: Permission
  fallback?: ReactNode
}

/**
 * Component that renders content only if the current user has the specific permission
 * More granular than role-based control, used for feature-specific access
 * 
 * @example
 * <PermissionGate requiredPermission="edit:payroll">
 *   <EditPayrollButton />
 * </PermissionGate>
 */
export function PermissionGate({ 
  children, 
  requiredPermission,
  fallback = <div className="p-4 text-muted-foreground">You don't have permission to view this content</div>
}: PermissionGateProps) {
  const { hasPermission: userHasPermission, isLoading } = useUserRole();
  
  // Handle loading state
  if (isLoading) {
    return <Skeleton className="w-full h-32" />
  }
  
  if (!userHasPermission(requiredPermission)) {
    return <>{fallback}</>
  }
  
  return <>{children}</>
}