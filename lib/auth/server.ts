// lib/auth/server.ts
import 'server-only';

// Export server-only auth modules
export { verifyHasuraRole, verifyPermission } from './auth.server'; // FIX: Updated path
export type { HasuraRole, Permission } from './roles';
export { hasPermission, ROLES, PERMISSIONS } from './roles';
export { tokenManagerServer } from './token-manager.server';
