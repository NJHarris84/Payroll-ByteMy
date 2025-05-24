// lib/api/client.ts
/**
 * IMPORTANT: This file exports modules that are safe to use in client components.
 * Do not import or re-export any server-only modules from this file.
 * 
 * Server-only modules include:
 * - Anything that imports 'server-only'
 * - Modules from @clerk/nextjs/server
 * - Direct access to database or other server resources
 * 
 * For server-side authentication, use the /lib/auth/server.ts module instead.
 */

// Only export client-safe modules
export { getClientApolloClient, apolloClient } from './apollo-client.client'; // FIX: Updated path
export * from './error-boundary.client'; // FIX: Updated path
export * from './optimistic-updates.client'; // FIX: Updated path
