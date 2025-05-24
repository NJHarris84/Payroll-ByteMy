// lib/auth/token-manager.server.ts
import 'server-only'; // Explicitly mark this module as server-only
import { TokenManagerBase } from './token-manager.base';
import type { HasuraRole } from './roles';

class TokenManagerServer extends TokenManagerBase {
  private static instance: TokenManagerServer;

  private constructor(expirationBufferMinutes?: number) {
    super(expirationBufferMinutes);
  }

  static getInstance(expirationBufferMinutes?: number): TokenManagerServer {
    if (!TokenManagerServer.instance) {
      TokenManagerServer.instance = new TokenManagerServer(expirationBufferMinutes);
    }
    return TokenManagerServer.instance;
  }

  protected getCacheKey(): string {
    return 'server';
  }

  protected async refreshTokenImpl(cacheKey: string): Promise<string | null> {
    try {
      // Server-side token refresh implementation
      // This would typically use Clerk or your auth provider's server SDK
      const token = ''; // Replace with actual implementation
      
      if (token) {
        const expiresAt = this.getExpirationFromToken(token);
        this.cache.set(cacheKey, { token, expiresAt });
      }
      
      this.refreshPromise.delete(cacheKey);
      return token;
    } catch (error) {
      console.error('Error refreshing server token:', error);
      this.refreshPromise.delete(cacheKey);
      return null;
    }
  }

  private getExpirationFromToken(token: string): number {
    try {
      const parts = token.split('.');
      if (parts.length !== 3) return 0;
      
      const payload = JSON.parse(atob(parts[1]));
      return payload.exp * 1000;
    } catch {
      return 0;
    }
  }
}

export const tokenManagerServer = TokenManagerServer.getInstance();
