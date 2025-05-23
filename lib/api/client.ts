// lib/api/client.ts
// Only export client-safe modules
export { getClientApolloClient, default as apolloClient } from './apollo-client'
export * from './error-boundary'
export * from './optimistic-updates'
// Do NOT export auth-guard or other server-only modules