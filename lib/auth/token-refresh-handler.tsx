'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { useToken, isTokenExpiringSoon } from "@/lib/auth/token-provider"

export function TokenRefreshHandler() {
  const pathname = usePathname()
  const { token, refreshToken, isRefreshing } = useToken()
  
  useEffect(() => {
    // Skip if already refreshing to avoid duplicate requests
    if (isRefreshing) return
    
    // This effect runs on each pathname change (page navigation)
    const refreshTokenOnNavigation = async () => {
      try {
        if (!token) {
          console.log(`No token present on navigation to ${pathname}, requesting new token`)
          await refreshToken()
          return
        }

        // Remove Bearer prefix if present for expiry check
        const tokenWithoutBearer = token.startsWith('Bearer ') ? token.slice(7) : token

        // Check if token is about to expire
        if (isTokenExpiringSoon(tokenWithoutBearer)) {
          console.log(`Token expiring soon on navigation to ${pathname}, refreshing...`)
          const newToken = await refreshToken()
          
          if (!newToken) {
            console.error('Token refresh failed - no token returned')
            return
          }

          // Log success but not the actual token
          console.log('Token successfully refreshed')
        }
      } catch (error) {
        console.error('Failed to refresh token on navigation:', error)
        // Don't throw the error - we want to continue navigation even if refresh fails
      }
    }
    
    refreshTokenOnNavigation()
  }, [pathname, token, refreshToken, isRefreshing])
  
  return null // This component doesn't render anything
}