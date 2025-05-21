// hooks/useUserRole.ts
"use client";

import { useState, useEffect } from 'react';
import { useAuth } from '@clerk/nextjs';
import { hasPermission, HasuraRole, Permission } from '@/lib/roles';

interface UserRoleState {
  userRole: HasuraRole | null;  // Changed from 'role' to 'userRole' for consistency
  isAdmin: boolean;
  isOrgAdmin: boolean;
  isManager: boolean;
  isConsultant: boolean;
  isViewer: boolean;
  hasPermission: (permission: Permission) => boolean;
  isLoading: boolean;
}

export function useUserRole(): UserRoleState {
  const { isLoaded, getToken } = useAuth();
  const [roleState, setRoleState] = useState<UserRoleState>({
    userRole: null,
    isAdmin: false,
    isOrgAdmin: false,
    isManager: false,
    isConsultant: false,
    isViewer: false,
    hasPermission: () => false,
    isLoading: true
  });

  useEffect(() => {
    async function checkRole() {
      if (!isLoaded) return;
      
      try {
        // Get the token with Hasura claims
        const token = await getToken({ template: 'hasura' });
        
        if (!token) {
          setRoleState(prev => ({ ...prev, isLoading: false }));
          return;
        }
        
        // Decode the JWT to get the claims
        const parts = token.split('.');
        if (parts.length !== 3) {
          console.error('Invalid JWT format');
          setRoleState(prev => ({ ...prev, isLoading: false }));
          return;
        }
        
        const payload = JSON.parse(atob(parts[1]));
        const hasuraClaims = payload['https://hasura.io/jwt/claims'];
        
        if (!hasuraClaims) {
          console.error('No Hasura claims found in token');
          setRoleState(prev => ({ ...prev, isLoading: false }));
          return;
        }
        
        const userRole = hasuraClaims['x-hasura-default-role'] as HasuraRole;
        
        setRoleState({
          userRole,
          isAdmin: userRole === 'admin',
          isOrgAdmin: userRole === 'org_admin',
          isManager: userRole === 'manager',
          isConsultant: userRole === 'consultant',
          isViewer: userRole === 'viewer',
          hasPermission: (permission: Permission) => hasPermission(userRole, permission),
          isLoading: false
        });
      } catch (error) {
        console.error('Error checking role:', error);
        setRoleState(prev => ({ ...prev, isLoading: false }));
      }
    }
    
    checkRole();
  }, [isLoaded, getToken]);
  
  return roleState;
}
