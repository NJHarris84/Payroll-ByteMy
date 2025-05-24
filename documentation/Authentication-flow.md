# Complete Authentication Flow & Component Interactions

## 🌊 **High-Level Authentication Flow**

```
User Request → Middleware → Clerk → JWT Template → Hasura → Database
     ↓            ↓         ↓         ↓            ↓         ↓
   Browser    Route Guard  Auth Check  Add Claims  Verify    Query Data
```

## 🔄 **Detailed Step-by-Step Flow**

### **1. Initial Page Load**
```
User visits /dashboard
    ↓
middleware.ts runs
    ↓
Checks if route is protected (✅ /dashboard is protected)
    ↓
Calls Clerk's auth.protect()
    ↓
If not authenticated → Redirect to /sign-in
If authenticated → Continue to step 2
```

### **2. Authentication Verification**
```
User is authenticated in Clerk
    ↓
middleware.ts calls getToken({ template: 'hasura' })
    ↓
Clerk generates JWT using your custom template
    ↓
JWT contains: {
  "https://hasura.io/jwt/claims": {
    "x-hasura-allowed-roles": ["manager", "consultant"],
    "x-hasura-default-role": "manager",
    "x-hasura-user-id": "user_123"
  }
}
    ↓
Middleware adds headers to request:
- authorization: Bearer <jwt-token>
- x-user-id: user_123
- x-user-role: manager
```

### **3. Frontend Data Fetching**
```
React component needs data
    ↓
Calls Apollo Client query/mutation
    ↓
apollo-auth-link.ts intercepts request
    ↓
token-manager.ts gets current JWT token
    ↓
Adds Authorization: Bearer <token> header
    ↓
Request sent to Hasura GraphQL endpoint
```

### **4. Hasura Authorization**
```
Hasura receives GraphQL request with JWT
    ↓
Validates JWT signature against Clerk's JWKS
    ↓
Extracts claims: role=manager, user-id=user_123
    ↓
Applies table permissions based on role
    ↓
Example: payrolls table permission for manager:
{
  "filter": {
    "_or": [
      {"manager_user_id": {"_eq": "X-Hasura-User-Id"}},
      {"primary_consultant_user_id": {"_eq": "X-Hasura-User-Id"}}
    ]
  }
}
    ↓
Executes query against Neon database
    ↓
Returns filtered results to frontend
```

## 🏗️ **Component Architecture & Interactions**

### **Layer 1: Frontend Protection**
```typescript
// Route-level protection
<HasuraRoleGate allowedRoles={['manager', 'org_admin']}>
  <PayrollManagement />
</HasuraRoleGate>

// Component-level protection  
<PermissionGate requiredPermission="manage_payrolls">
  <CreatePayrollButton />
</PermissionGate>
```
**Purpose**: Hide UI elements users shouldn't see

### **Layer 2: Route Middleware**
```typescript
// middleware.ts
export default clerkMiddleware(async (auth, request) => {
  if (isProtectedRoute(request)) {
    await auth.protect() // Clerk authentication
    
    // Role-based route access
    const requiredRoles = getRequiredRoles(pathname)
    if (!requiredRoles.includes(userRole)) {
      return redirect('/dashboard')
    }
  }
})
```
**Purpose**: Prevent unauthorized route access

### **Layer 3: API Route Protection**
```typescript
// API routes using auth-guard.ts
export const GET = withAuth(
  async (req, { auth }) => {
    // Handler has access to auth.userId and auth.userRole
    return apiSuccess(data)
  },
  { roles: ['admin', 'manager'] }
)
```
**Purpose**: Protect server-side API endpoints

### **Layer 4: Database-Level Security**
```sql
-- Hasura applies these filters automatically
SELECT * FROM payrolls 
WHERE manager_user_id = 'user_123' 
   OR primary_consultant_user_id = 'user_123'
```
**Purpose**: Ensure data isolation at database level

## 🔧 **Key Components Deep Dive**

### **Token Manager (`token-manager.ts`)**
```typescript
class TokenManager {
  async getToken(isServer = false): Promise<string | null> {
    // 1. Check cache first (avoid unnecessary API calls)
    // 2. If expired, get fresh token from Clerk
    // 3. Cache with expiration
    // 4. Return token for use
  }
}
```
**Role**: Centralized token management with caching

### **Apollo Auth Link (`apollo-auth-link.ts`)**
```typescript
const authLink = setContext(async (_, { headers }) => {
  const token = await tokenManager.getToken()
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})
```
**Role**: Automatically adds auth headers to all GraphQL requests

### **Role System (`roles.ts`)**
```typescript
export const rolePermissions: Record<HasuraRole, Permission[]> = {
  "org_admin": ["manage_users", "manage_clients", "manage_payrolls"],
  "manager": ["manage_clients", "manage_payrolls"],
  "consultant": ["view_payrolls"],
  "viewer": ["view_payrolls"]
}
```
**Role**: Defines what each role can do (used by frontend gates)

## 🔄 **Data Flow Example: Creating a Payroll**

### **1. User Interaction**
```tsx
// User clicks "Create Payroll" button
<PermissionGate requiredPermission="manage_payrolls">
  <Button onClick={createPayroll}>Create Payroll</Button>
</PermissionGate>
```

### **2. Permission Check**
```typescript
// role-gates.tsx checks if user has permission
const { hasPermission } = useUserRole()
if (!hasPermission('manage_payrolls')) {
  return <div>Access denied</div>
}
```

### **3. GraphQL Mutation**
```typescript
// Apollo mutation with auto-auth
const [createPayroll] = useMutation(CREATE_PAYROLL_MUTATION)
await createPayroll({ variables: { input: payrollData } })
```

### **4. Auth Link Adds Token**
```typescript
// apollo-auth-link.ts automatically adds:
headers: {
  authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbG...'
}
```

### **5. Hasura Validates & Executes**
```sql
-- Hasura checks JWT, applies permissions, runs:
INSERT INTO payrolls (name, client_id, manager_user_id) 
VALUES ('Q1 2025', 'client_123', 'user_123')
WHERE 'user_123' IN (allowed_users_for_this_operation)
```

## 🛡️ **Security Layers Summary**

| Layer | Component | Purpose | Failure Mode |
|-------|-----------|---------|--------------|
| **UI** | Role Gates | Hide elements | User sees error message |
| **Route** | Middleware | Block page access | Redirect to dashboard |  
| **API** | Auth Guard | Protect endpoints | 403 Forbidden response |
| **Data** | Hasura Permissions | Filter queries | Empty result set |

## 🔧 **Configuration Dependencies**

### **Required Setup Order:**
1. **Clerk App** → Configure domains, auth methods
2. **JWT Template** → Define Hasura claims structure  
3. **User Roles** → Set publicMetadata.role for each user
4. **Hasura Config** → Set JWT secret, connect to Neon
5. **Table Permissions** → Define role-based access rules
6. **Environment Variables** → Connect all services

### **Critical Environment Variables:**
```bash
# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_...
CLERK_SECRET_KEY=sk_...

# Hasura  
NEXT_PUBLIC_HASURA_GRAPHQL_URL=https://...hasura.app/v1/graphql
HASURA_GRAPHQL_JWT_SECRET='{"type":"RS256","jwks_uri":"https://api.clerk.com/v1/jwks"}'

# Database
DATABASE_URL=postgresql://...neon.tech/neondb
```

This creates a **defense-in-depth** security model where each layer provides protection, and if one fails, others still maintain security.