// components/role-gates.tsx
"use client"

import { ReactNode } from 'react'
import { Skeleton } from '@/components/ui/skeleton'
import { useUserRole } from '@/hooks/useUserRole';
import { HasuraRole, Permission } from '@/lib/roles';

type RoleGateProps = {
  children: ReactNode
  allowedRoles: HasuraRole[]
  fallback?: ReactNode
}

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

type PermissionGateProps = {
  children: ReactNode
  requiredPermission: Permission
  fallback?: ReactNode
}

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