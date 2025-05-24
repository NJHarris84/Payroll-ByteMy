import { useUser } from "@clerk/nextjs";
import { useState, useEffect } from "react";
import { HasuraRole, Permission, isAdmin, isManager, isConsultant } from "@/lib/auth/roles"; // Import directly from roles
import { checkUserHasPermission } from "@/lib/auth/auth.client"; // Import client-specific functions

interface UseUserRoleOptions {
  fallbackRole?: HasuraRole;
  onRoleChange?: (role: HasuraRole) => void;
}

export function useUserRole(options: UseUserRoleOptions = {}) {
  const { fallbackRole, onRoleChange } = options;
  const { user, isLoaded } = useUser();
  const [role, setRole] = useState<HasuraRole | undefined>(fallbackRole);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (isLoaded) {
      try {
        // Extract role from user metadata, using your existing Role type
        const userRole = user?.publicMetadata?.role as HasuraRole || "viewer";
        setRole(userRole || fallbackRole);
        
        if (onRoleChange && userRole) {
          onRoleChange(userRole);
        }
      } catch (err) {
        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    }
  }, [user, isLoaded, fallbackRole, onRoleChange]);

  return {
    role,
    isAdmin: role ? isAdmin(role) : false,
    isManager: role ? isManager(role) : false,
    isConsultant: role ? isConsultant(role) : false,
    hasPermission: (permission: Permission) => role ? checkUserHasPermission(role, permission) : false,
    isLoading: !isLoaded || isLoading,
    error
  };
}