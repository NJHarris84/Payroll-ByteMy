// lib/auth/token-manager.base.ts
import type { HasuraRole } from './roles';

export abstract class TokenManagerBase {
  protected cache = new Map<string, { token: string; expiresAt: number }>();
  protected refreshPromise: Map<string, Promise<string | null>> = new Map();
  protected readonly expirationBuffer: number = 5 * 60 * 1000;

  constructor(expirationBufferMinutes?: number) {
    if (expirationBufferMinutes) {
      this.expirationBuffer = expirationBufferMinutes * 60 * 1000;
    }
  }

  async getToken(): Promise<string | null> {
    const cacheKey = this.getCacheKey();
    if (this.refreshPromise.has(cacheKey)) {
      return this.refreshPromise.get(cacheKey)!;
    }
    const cached = this.cache.get(cacheKey);
    if (cached && cached.expiresAt > Date.now() + this.expirationBuffer) {
      return cached.token;
    }
    return this.refreshToken(cacheKey);
  }

  protected abstract getCacheKey(): string;
  protected abstract refreshTokenImpl(cacheKey: string): Promise<string | null>;

  async refreshToken(cacheKey: string): Promise<string | null> {
    if (this.refreshPromise.has(cacheKey)) {
      return this.refreshPromise.get(cacheKey)!;
    }
    
    const refreshPromiseInstance = this.refreshTokenImpl(cacheKey);
    this.refreshPromise.set(cacheKey, refreshPromiseInstance);
    return refreshPromiseInstance;
  }

  clearCache(): void {
    this.cache.clear();
    this.refreshPromise.clear();
  }

  isTokenValid(token: string): boolean {
    try {
      if (!token) return false;
      const parts = token.split('.');
      if (parts.length !== 3) return false;
      
      const payload = JSON.parse(atob(parts[1]));
      const expirationTime = payload.exp * 1000;
      
      return Date.now() < expirationTime - this.expirationBuffer;
    } catch {
      return false;
    }
  }

  getUserRoleFromToken(token: string): HasuraRole | null {
    try {
      if (!token) return null;
      const parts = token.split('.');
      if (parts.length !== 3) return null;
      
      const payload = JSON.parse(atob(parts[1]));
      return payload['https://hasura.io/jwt/claims']['x-hasura-default-role'] as HasuraRole || null;
    } catch {
      return null;
    }
  }
}
