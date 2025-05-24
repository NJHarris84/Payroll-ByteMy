// lib/auth/token-manager.client.ts
import { TokenManagerBase } from './token-manager.base';
import type { HasuraRole } from './roles';

class TokenManagerClient extends TokenManagerBase {
  private static instance: TokenManagerClient;

  private constructor(expirationBufferMinutes?: number) {
    super(expirationBufferMinutes);
  }

  static getInstance(expirationBufferMinutes?: number): TokenManagerClient {
    if (!TokenManagerClient.instance) {
      TokenManagerClient.instance = new TokenManagerClient(expirationBufferMinutes);
    }
    return TokenManagerClient.instance;
  }

  protected getCacheKey(): string {
    return 'client';
  }

  protected async refreshTokenImpl(cacheKey: string): Promise<string | null> {
    try {
      // Client-side token refresh implementation
      // This would typically use Clerk or your auth provider's client SDK
      const token = ''; // Replace with actual implementation
      
      if (token) {
        const expiresAt = this.getExpirationFromToken(token);
        this.cache.set(cacheKey, { token, expiresAt });
      }
      
      this.refreshPromise.delete(cacheKey);
      return token;
    } catch (error) {
      console.error('Error refreshing client token:', error);
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

export const tokenManagerClient = TokenManagerClient.getInstance();
