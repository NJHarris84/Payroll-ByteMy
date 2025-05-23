import { HasuraJWTPayload } from '@/types/interface';

/**
 * Safely parses a JWT token and returns the payload with proper typing
 * @param token JWT token string
 * @returns Parsed JWT payload with Hasura claims
 * @throws Error if token is invalid
 */
export function parseJWT(token: string): HasuraJWTPayload {
  try {
    const parts = token.split('.');
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
    throw new Error('Failed to parse JWT token');
  }
}

/**
 * Extracts Hasura claims from a JWT token
 * @param token JWT token string
 * @returns Hasura claims object
 */
export function getHasuraClaims(token: string) {
  const payload = parseJWT(token);
  return payload['https://hasura.io/jwt/claims'];
}
