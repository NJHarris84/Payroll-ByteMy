'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { useToken, isTokenExpiringSoon } from '@/lib/token-provider'

export function TokenRefreshHandler() {
  const pathname = usePathname()
  const { token, refreshToken, isRefreshing } = useToken()
  
  useEffect(() => {
    // Skip if already refreshing to avoid duplicate requests
    if (isRefreshing) return
    
    // This effect runs on each pathname change (page navigation)
    const refreshTokenOnNavigation = async () => {
      try {
        // Check if token is null or about to expire
        if (!token || isTokenExpiringSoon(token)) {
          console.log(`Token needs refresh on navigation to ${pathname}`)
          await refreshToken()
        }
      } catch (error) {
        console.error('Failed to refresh token on navigation:', error)
      }
    }
    
    refreshTokenOnNavigation()
  }, [pathname, token, refreshToken, isRefreshing])
  
  return null // This component doesn't render anything
}