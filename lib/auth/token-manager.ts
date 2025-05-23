// lib/auth/token-manager.ts
import { auth } from '@clerk/nextjs/server';
import { getHasuraClaims } from '@/lib/utils/jwt-utils';
import type { HasuraRole } from '@/types/interface';

class TokenManager {
  private static instance: TokenManager;
  private cache = new Map<string, { token: string; expiresAt: number }>();
  private refreshPromise: Map<string, Promise<string | null>> = new Map();
  private readonly expirationBuffer: number = 5 * 60 * 1000; // 5 minutes

  private constructor(expirationBufferMinutes?: number) {
    if (expirationBufferMinutes) {
      this.expirationBuffer = expirationBufferMinutes * 60 * 1000;
    }
  }

  static getInstance(expirationBufferMinutes?: number): TokenManager {
    if (!TokenManager.instance) {
      TokenManager.instance = new TokenManager(expirationBufferMinutes);
    }
    return TokenManager.instance;
  }

  async getToken(isServer: boolean = false): Promise<string | null> {
    const cacheKey = isServer ? 'server' : 'client';
    
    // Check cache
    const cached = this.cache.get(cacheKey);
    if (cached && cached.expiresAt > Date.now() + this.expirationBuffer) {
      return cached.token;
    }

    // For client-side, make an API call
    if (!isServer && typeof window !== 'undefined') {
      try {
        const response = await fetch('/api/auth/token');
        if (response.ok) {
          const { token } = await response.json();
          if (token) {
            const payload = JSON.parse(atob(token.split('.')[1]));
            const expiresAt = (payload.exp || 0) * 1000;
            this.cache.set(cacheKey, { token, expiresAt });
            return token;
          }
        }
      } catch (error) {
        console.error('Failed to fetch token from API:', error);
      }
      return null;
    }

    // For server-side, use Clerk auth directly
    return this.refreshToken(cacheKey);
  }

  private async refreshToken(cacheKey: string): Promise<string | null> {
    if (this.refreshPromise.has(cacheKey)) {
      return this.refreshPromise.get(cacheKey)!;
    }

    const refreshPromiseInstance = (async () => {
      try {
        const { getToken } = await auth();
        if (!getToken) return null;

        const token = await getToken({ template: 'hasura' });
        if (token) {
          const payload = JSON.parse(atob(token.split('.')[1]));
          const expiresAt = (payload.exp || 0) * 1000;
          this.cache.set(cacheKey, { token, expiresAt });
          return token;
        }
        return null;
      } catch (error) {
        console.error('Token refresh failed:', error);
        this.cache.delete(cacheKey);
        return null;
      } finally {
        this.refreshPromise.delete(cacheKey);
      }
    })();

    this.refreshPromise.set(cacheKey, refreshPromiseInstance);
    return refreshPromiseInstance;
  }

  clearCache(): void {
    this.cache.clear();
    this.refreshPromise.clear();
  }

  isTokenValid(token: string): boolean {
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      const exp = payload.exp * 1000;
      return exp > Date.now() + 60 * 1000; // 1-minute buffer
    } catch {
      return false;
    }
  }

  getUserRoleFromToken(token: string): HasuraRole | null {
    try {
      const claims = getHasuraClaims(token);
      return claims['x-hasura-default-role'] as HasuraRole;
    } catch {
      return null;
    }
  }
}

export const tokenManager = TokenManager.getInstance();