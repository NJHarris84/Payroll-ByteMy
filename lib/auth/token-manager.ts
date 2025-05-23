// lib/auth/token-manager.ts
import { auth } from '@clerk/nextjs/server'
import { getAuth } from '@clerk/nextjs/client'

class TokenManager {
  private static instance: TokenManager
  private tokenCache: Map<string, { token: string; expiresAt: number }> = new Map()
  private refreshPromises: Map<string, Promise<string | null>> = new Map()
  
  static getInstance(): TokenManager {
    if (!TokenManager.instance) {
      TokenManager.instance = new TokenManager()
    }
    return TokenManager.instance
  }
  
  async getToken(isServer: boolean = false): Promise<string | null> {
    const key = `token-${isServer ? 'server' : 'client'}`
    
    // Check cache first
    const cached = this.tokenCache.get(key)
    if (cached && cached.expiresAt > Date.now() + 5 * 60 * 1000) { // 5 min buffer
      return cached.token
    }
    
    // Check if refresh is already in progress
    const existingRefresh = this.refreshPromises.get(key)
    if (existingRefresh) {
      return existingRefresh
    }
    
    // Start new refresh
    const refreshPromise = this.refreshToken(isServer, key)
    this.refreshPromises.set(key, refreshPromise)
    
    try {
      const token = await refreshPromise
      return token
    } finally {
      this.refreshPromises.delete(key)
    }
  }
  
  private async refreshToken(isServer: boolean, key: string): Promise<string | null> {
    try {
      const authObj = isServer ? await auth() : getAuth()
      const token = await authObj.getToken({ template: 'hasura' })
      
      if (token) {
        // Decode to get expiry
        const payload = JSON.parse(atob(token.split('.')[1]))
        const expiresAt = payload.exp * 1000
        
        this.tokenCache.set(key, { token, expiresAt })
      }
      
      return token
    } catch (error) {
      console.error('Token refresh failed:', error)
      return null
    }
  }
  
  clearCache(): void {
    this.tokenCache.clear()
    this.refreshPromises.clear()
  }
}

export const tokenManager = TokenManager.getInstance()