// lib/auth/token-manager.client.ts
import { getAuth } from '@clerk/nextjs';
import { getHasuraClaims } from '@/lib/utils/jwt-utils';
import type { HasuraRole } from '@/types/interface';

class TokenManagerClient {
  private static instance: TokenManagerClient;
  private cache = new Map<string, { token: string; expiresAt: number }>();
  private refreshPromise: Map<string, Promise<string | null>> = new Map();
  private readonly expirationBuffer: number = 5 * 60 * 1000;

  private constructor(expirationBufferMinutes?: number) {
    if (expirationBufferMinutes) {
      this.expirationBuffer = expirationBufferMinutes * 60 * 1000;
    }
  }

  static getInstance(expirationBufferMinutes?: number): TokenManagerClient {
    if (!TokenManagerClient.instance) {
      TokenManagerClient.instance = new TokenManagerClient(expirationBufferMinutes);
    }
    return TokenManagerClient.instance;
  }

  async getToken(): Promise<string | null> {
    const cacheKey = 'client';
    if (this.refreshPromise.has(cacheKey)) {
      return this.refreshPromise.get(cacheKey)!;
    }
    const cached = this.cache.get(cacheKey);
    if (cached && cached.expiresAt > Date.now() + this.expirationBuffer) {
      return cached.token;
    }
    return this.refreshToken(cacheKey);
  }

  async refreshToken(cacheKey: string): Promise<string | null> {
    if (this.refreshPromise.has(cacheKey)) {
      return this.refreshPromise.get(cacheKey)!;
    }
    const refreshPromiseInstance = (async () => {
      try {
        const authObj = getAuth();
        const token = await authObj.getToken({ template: 'hasura' });
        if (token) {
          const payload = JSON.parse(atob(token.split('.')[1]));
          const expiresAt = (payload.exp || 0) * 1000;
          this.cache.set(cacheKey, { token, expiresAt });
          return token;
        }
        return null;
      } catch (error) {
        console.error('Token refresh failed (client):', error);
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
      return exp > Date.now() + 60 * 1000;
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

export const tokenManagerClient = TokenManagerClient.getInstance();
