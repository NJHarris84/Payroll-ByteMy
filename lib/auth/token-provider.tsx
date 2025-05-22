'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { useAuth } from '@clerk/nextjs'

interface TokenContextType {
  token: string | null | undefined // undefined means "still loading"
  refreshToken: () => Promise<string | null>
  isRefreshing: boolean
  lastRefreshed: number | null
  error: string | null
}

const TokenContext = createContext<TokenContextType | undefined>(undefined)

// Configure how often a token can be refreshed at minimum
const TOKEN_REFRESH_COOLDOWN = 30 * 1000 // 30 seconds
// Maximum attempts to get a token
const MAX_TOKEN_ATTEMPTS = 3

export function TokenProvider({ children }: { children: ReactNode }) {
  const { getToken, isSignedIn, isLoaded } = useAuth()
  // Initially undefined (loading state)
  const [token, setToken] = useState<string | null | undefined>(undefined)
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [lastRefreshed, setLastRefreshed] = useState<number | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [tokenAttempts, setTokenAttempts] = useState(0)

  const refreshToken = async () => {
    // Don't refresh too frequently or if max attempts reached
    if (isRefreshing) return token
    if (tokenAttempts >= MAX_TOKEN_ATTEMPTS) {
      console.warn('Maximum token refresh attempts reached, proceeding without token')
      setToken(null) // Set to null explicitly to indicate "no token, but not loading"
      return null
    }
    
    const now = Date.now()
    if (lastRefreshed && now - lastRefreshed < TOKEN_REFRESH_COOLDOWN) {
      console.log('Token refresh on cooldown')
      return token || null
    }
    
    try {
      setIsRefreshing(true)
      setError(null)
      console.log('Refreshing token, attempt:', tokenAttempts + 1)
      
      if (!isLoaded) {
        console.log('Auth not loaded yet, waiting before token refresh')
        // Don't increment attempts for auth not loaded
        return token || null
      }
      
      if (!isSignedIn) {
        console.warn('User is not signed in, cannot refresh token')
        setToken(null)
        return null
      }
      
      // Set a timeout for token fetch
      const tokenPromise = getToken({ template: 'hasura' })
      const timeoutPromise = new Promise<null>((resolve) => {
        setTimeout(() => resolve(null), 5000) // 5 second timeout
      })
      
      // Race between token fetch and timeout
      const newToken = await Promise.race([tokenPromise, timeoutPromise])
      
      if (!newToken) {
        console.warn('Failed to get token (timeout or null returned)')
        setTokenAttempts(prev => prev + 1)
      } else {
        console.log('Token refreshed successfully')
        setTokenAttempts(0) // Reset attempts on success
      }
      
      setToken(newToken)
      setLastRefreshed(Date.now())
      return newToken
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error refreshing token'
      console.error('Failed to refresh token:', errorMessage)
      setError(errorMessage)
      setTokenAttempts(prev => prev + 1)
      return null
    } finally {
      setIsRefreshing(false)
    }
  }

  // Initialize the token on mount and when auth state changes
  useEffect(() => {
    if (!isLoaded) return // Wait for auth to load
    
    // Set a timeout to prevent infinite loading
    const timeoutId = setTimeout(() => {
      if (token === undefined) {
        console.warn('Token initialization timed out, proceeding without token')
        setToken(null)
      }
    }, 5000) // 5 second timeout
    
    if (isSignedIn) {
      refreshToken()
    } else {
      setToken(null) // Not signed in, so no token
    }
    
    return () => clearTimeout(timeoutId)
  }, [isSignedIn, isLoaded]) // Depend on auth state and loading

  return (
    <TokenContext.Provider value={{ token, refreshToken, isRefreshing, lastRefreshed, error }}>
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