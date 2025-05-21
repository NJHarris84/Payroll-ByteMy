'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { useAuth } from '@clerk/nextjs'

interface TokenContextType {
  token: string | null
  refreshToken: () => Promise<string | null>
  isRefreshing: boolean
  lastRefreshed: number | null
}

const TokenContext = createContext<TokenContextType | undefined>(undefined)

// Configure how often a token can be refreshed at minimum
const TOKEN_REFRESH_COOLDOWN = 30 * 1000 // 30 seconds

export function TokenProvider({ children }: { children: ReactNode }) {
  const { getToken, isSignedIn } = useAuth()
  const [token, setToken] = useState<string | null>(null)
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [lastRefreshed, setLastRefreshed] = useState<number | null>(null)

  const refreshToken = async () => {
    // Don't refresh too frequently
    if (isRefreshing) return token
    
    const now = Date.now()
    if (lastRefreshed && now - lastRefreshed < TOKEN_REFRESH_COOLDOWN) {
      console.log('Token refresh on cooldown')
      return token
    }
    
    try {
      setIsRefreshing(true)
      console.log('Refreshing token...')
      
      if (!isSignedIn) {
        console.warn('User is not signed in, cannot refresh token')
        setToken(null)
        return null
      }
      
      const newToken = await getToken({ template: 'hasura' })
      
      if (!newToken) {
        console.warn('Received null token from Clerk')
      } else {
        console.log('Token refreshed successfully')
      }
      
      setToken(newToken)
      setLastRefreshed(Date.now())
      return newToken
    } catch (error) {
      console.error('Failed to refresh token:', error)
      return null
    } finally {
      setIsRefreshing(false)
    }
  }

  // Initialize the token on mount and when auth state changes
  useEffect(() => {
    if (isSignedIn) {
      refreshToken()
    } else {
      setToken(null)
    }
  }, [isSignedIn]) // Depend on auth state

  return (
    <TokenContext.Provider value={{ token, refreshToken, isRefreshing, lastRefreshed }}>
      {children}
    </TokenContext.Provider>
  )
}

export function useToken() {
  const context = useContext(TokenContext)
  if (context === undefined) {
    throw new Error('useToken must be used within a TokenProvider')
  }
  return context
}

export function isTokenExpiringSoon(token: string | null): boolean {
  if (!token) return true
  
  try {
    // JWT tokens are in format: header.payload.signature
    const parts = token.split('.')
    if (parts.length !== 3) {
      console.warn('Token does not appear to be a valid JWT - wrong number of parts')
      return true
    }
    
    // Get the payload part and decode it
    const base64Url = parts[1]
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
    
    // Decode base64
    let jsonPayload
    try {
      // Browser approach
      const rawPayload = atob(base64)
      jsonPayload = JSON.parse(decodeURIComponent(
        rawPayload.split('').map(c => {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
        }).join('')
      ))
    } catch (e) {
      // Fallback for environments without atob
      try {
        // Node.js approach
        const rawPayload = Buffer.from(base64, 'base64').toString()
        jsonPayload = JSON.parse(rawPayload)
      } catch (nodeError) {
        console.error('Failed to decode token in both browser and Node environments', nodeError)
        return true // Assume token needs refresh
      }
    }
    
    // Check if token has an expiration
    if (!jsonPayload.exp) {
      console.warn('Token does not have an expiration claim')
      return false
    }
    
    const expiresAt = jsonPayload.exp * 1000 // Convert to milliseconds
    const now = Date.now()
    const timeUntilExpiry = expiresAt - now
    
    // Return true if token expires in less than 5 minutes
    const isExpiring = timeUntilExpiry < 5 * 60 * 1000
    
    if (isExpiring) {
      console.log(`Token expiring soon: ${Math.round(timeUntilExpiry / 1000)} seconds remaining`)
    }
    
    return isExpiring
  } catch (e) {
    console.error('Error checking token expiration:', e)
    return true // If we can't determine, assume it needs refresh
  }
}