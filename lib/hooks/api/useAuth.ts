// hooks/useAuth.ts
import { useAuth as useClerkAuth, useUser } from '@clerk/nextjs'
import { useEffect, useState } from 'react'
import { tokenManager } from '@/lib/auth/token-manager.base'
import { syncUserById } from '@/lib/services'

export function useAuth() {
  const { isLoaded, isSignedIn, user } = useClerkAuth()
  const { user: userData } = useUser()
  const [userRole, setUserRole] = useState<string | null>(null)
  const [isLoadingRole, setIsLoadingRole] = useState(true)
  
  useEffect(() => {
    if (!isLoaded || !isSignedIn) {
      setIsLoadingRole(false)
      return
    }
    
    async function loadRole() {
      try {
        const token = await tokenManager.getToken(false)
        if (token) {
          const payload = JSON.parse(atob(token.split('.')[1]))
          const hasuraClaims = payload['https://hasura.io/jwt/claims']
          setUserRole(hasuraClaims?.['x-hasura-default-role'] || 'viewer')
        }
      } catch (error) {
        console.error('Failed to load user role:', error)
      } finally {
        setIsLoadingRole(false)
      }
    }
    
    loadRole()
  }, [isLoaded, isSignedIn])
  
  useEffect(() => {
    // When a user signs in, ensure their data is synced
    if (isSignedIn && user) {
      // Optional: Only sync if this is a new session
      // This prevents unnecessary syncs on every page load
      const lastSyncTime = localStorage.getItem(`lastSync-${user.id}`)
      const now = Date.now()
      const syncInterval = 24 * 60 * 60 * 1000 // 24 hours
      
      if (!lastSyncTime || now - parseInt(lastSyncTime) > syncInterval) {
        syncUserById(user.id)
          .then(() => {
            localStorage.setItem(`lastSync-${user.id}`, now.toString())
          })
          .catch(error => {
            console.error('Error syncing user on login:', error)
          })
      }
    }
  }, [isSignedIn, user])
  
  return {
    isLoaded,
    isSignedIn,
    user,
    userRole,
    isLoadingRole,
    hasRole: (roles: string[]) => roles.includes(userRole || ''),
    canAccess: (permission: string) => {
      // Map permissions to roles
      const permissionMap: Record<string, string[]> = {
        'manage_users': ['admin', 'org_admin'],
        'manage_clients': ['admin', 'org_admin', 'manager'],
        'manage_payrolls': ['admin', 'org_admin', 'manager'],
        'view_reports': ['admin', 'org_admin', 'manager', 'consultant'],
        'view_payrolls': ['admin', 'org_admin', 'manager', 'consultant', 'viewer'],
      }
      return permissionMap[permission]?.includes(userRole || '') || false
    }
  }
}