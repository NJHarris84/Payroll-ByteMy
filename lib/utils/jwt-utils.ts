import { HasuraJWTPayload } from '@/types/interface';

/**
 * Safely parses a JWT token and returns the payload with proper typing
 * @param token JWT token string
 * @returns Parsed JWT payload with Hasura claims
 * @throws Error if token is invalid
 */
export function parseJWT(token: string): HasuraJWTPayload {
  try {
    // Handle tokens with 'Bearer ' prefix
    const tokenValue = token.startsWith('Bearer ') ? token.slice(7) : token;
    
    const parts = tokenValue.split('.');
    if (parts.length !== 3) {
      throw new Error('Invalid JWT format');
    }

    // In browser environments
    if (typeof window !== 'undefined') {
      return JSON.parse(atob(parts[1])) as HasuraJWTPayload;
    }
    
    // In Node.js environments
    return JSON.parse(Buffer.from(parts[1], 'base64').toString()) as HasuraJWTPayload;
  } catch (error) {
    console.error('Failed to parse JWT token:', error);
    throw new Error('Failed to parse JWT token');
  }
}

/**
 * Extracts Hasura claims from a JWT token
 * @param token JWT token string
 * @returns Hasura claims object or empty object if claims not found
 */
export function getHasuraClaims(token: string) {
  try {
    const payload = parseJWT(token);
    return payload['https://hasura.io/jwt/claims'] || {};
  } catch (error) {
    console.error('Failed to extract Hasura claims:', error);
    return {};
  }
}

/**
 * Checks if a token is expired
 * @param token JWT token string
 * @returns true if token is expired, false otherwise
 */
export function isTokenExpired(token: string): boolean {
  try {
    const payload = parseJWT(token);
    const exp = payload.exp * 1000; // Convert to milliseconds
    return Date.now() > exp;
  } catch {
    return true; // If we can't parse the token, assume it's expired
  }
}
