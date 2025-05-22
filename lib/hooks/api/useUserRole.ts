import { useUser } from "@clerk/nextjs";
import { useState, useEffect } from "react";
import { Role, isAdmin, isManager, isConsultant } from "@/lib/auth/roles"; // Import your roles utilities

interface UseUserRoleOptions {
  fallbackRole?: Role;
  onRoleChange?: (role: Role) => void;
}

export function useUserRole(options: UseUserRoleOptions = {}) {
  const { fallbackRole, onRoleChange } = options;
  const { user, isLoaded } = useUser();
  const [role, setRole] = useState<Role | undefined>(fallbackRole);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (isLoaded) {
      try {
        // Extract role from user metadata, using your existing Role type
        const userRole = user?.publicMetadata?.role as Role || 
                         user?.privateMetadata?.role as Role;
        
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

  // Use your existing role check functions
  return {
    role,
    isAdmin: role ? isAdmin(role) : false,
    isManager: role ? isManager(role) : false,
    isConsultant: role ? isConsultant(role) : false,
    isClient: role === 'client',
    isLoading: !isLoaded || isLoading,
    error
  };
}