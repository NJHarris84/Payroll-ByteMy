// lib/auth/auth.client.ts
// Client-side auth utilities (no server imports)
import type { HasuraRole, Permission } from './roles';
import { hasPermission } from './'; // Use ES6 import instead of require

// Client-side utility for checking if the user has a specific role
// This can be used in React components
export function checkUserHasRole(userRole: HasuraRole | null, allowedRoles: HasuraRole[]): boolean {
  if (!userRole) return false;
  return allowedRoles.includes(userRole);
}

// Client-side utility for checking if the user has a specific permission
// This will be called from React hooks and components
export function checkUserHasPermission(
  userRole: HasuraRole | null, 
  requiredPermission: Permission
): boolean {
  if (!userRole) return false;
  
  // Use ES6 import instead of require
  return hasPermission(userRole, requiredPermission);
}