// lib/auth/roles.ts

// Define the HasuraRole type that matches what comes from Clerk JWT
export type HasuraRole = "admin" | "org_admin" | "manager" | "consultant" | "viewer";

// Define application roles (with display names)
export interface AppRole {
  id: HasuraRole;
  name: string;
  description: string;
  permissions: Permission[];
}

// Define permissions
export type Permission = 
  | "manage_users" 
  | "manage_clients" 
  | "manage_payrolls" 
  | "view_reports" 
  | "manage_settings"
  | "view_payrolls";

// Map from HasuraRole to permissions
export const rolePermissions: Record<HasuraRole, Permission[]> = {
  "admin": ["manage_users", "manage_clients", "manage_payrolls", "view_reports", "manage_settings"],
  "org_admin": ["manage_users", "manage_clients", "manage_payrolls", "view_reports", "manage_settings"],
  "manager": ["manage_clients", "manage_payrolls", "view_reports"],
  "consultant": ["view_payrolls", "view_reports"],
  "viewer": ["view_payrolls"]
};

// Standard app roles with display names
export const appRoles: AppRole[] = [
  {
    id: "admin",
    name: "Developer",
    description: "Full access to all features",
    permissions: rolePermissions.admin
  },
  {
    id: "org_admin",
    name: "Administrator", 
    description: "Full access to organisation features", // ✅ Australian spelling
    permissions: rolePermissions.org_admin
  },
  {
    id: "manager",
    name: "Manager",
    description: "Can manage clients and payrolls",
    permissions: rolePermissions.manager
  },
  {
    id: "consultant",
    name: "Consultant",
    description: "Can view payrolls and reports",
    permissions: rolePermissions.consultant
  },
  {
    id: "viewer",
    name: "Viewer", 
    description: "Can only view payrolls",
    permissions: rolePermissions.viewer
  }
];

// Role checker functions
export const isAdmin = (role: HasuraRole): boolean => role === "admin" || role === "org_admin";
export const isManager = (role: HasuraRole): boolean => role === "manager";
export const isConsultant = (role: HasuraRole): boolean => role === "consultant";
export const isViewer = (role: HasuraRole): boolean => role === "viewer";

// Helper function to check if a role has a specific permission
export function hasPermission(role: HasuraRole, permission: Permission): boolean {
  return rolePermissions[role]?.includes(permission) || false;
}

// Helper function to get an AppRole by Hasura role
export function getAppRoleByHasuraRole(hasuraRole: HasuraRole): AppRole | undefined {
  return appRoles.find(role => role.id === hasuraRole);
}

// Helper function to get display name for a Hasura role
export function getRoleDisplayName(hasuraRole: HasuraRole): string {
  const role = getAppRoleByHasuraRole(hasuraRole);
  return role?.name || hasuraRole;
}

// Get a list of all valid role values
export const validRoles = appRoles.map(role => role.id);

// Role to display name mapping
export const roleMapping: Record<HasuraRole, string> = {
  "admin": "Developer",
  "org_admin": "Administrator",
  "manager": "Manager",
  "consultant": "Consultant",
  "viewer": "Viewer"
};

// Export constants for index.ts re-exports
export const ROLES = {
  ADMIN: "admin" as HasuraRole,
  ORG_ADMIN: "org_admin" as HasuraRole,
  MANAGER: "manager" as HasuraRole,
  CONSULTANT: "consultant" as HasuraRole,
  VIEWER: "viewer" as HasuraRole
};

export const PERMISSIONS: Permission[] = [
  "manage_users",
  "manage_clients", 
  "manage_payrolls",
  "view_reports",
  "manage_settings",
  "view_payrolls"
];