// lib/api/client.ts
/**
 * IMPORTANT: This file exports modules that are safe to use in client components.
 * Do not import or re-export any server-only modules from this file.
 * 
 * Server-only modules include:
 * - Anything that imports 'server-only'
 * - Modules from @clerk/nextjs/server
 * - Direct access to database or other server resources
 */

// Only export client-safe modules
export { getClientApolloClient, apolloClient } from './apollo-client.client';
export * from './optimistic-updates.client';
export * from './api-response';
