// lib/api/server.ts
// This file contains server-only code and should never be imported in client components
import 'server-only';

// Export server-only modules
export * from './auth-guard.server'; // FIX: Updated path
export { getServerApolloClient, adminApolloClient } from './apollo-client.server';
