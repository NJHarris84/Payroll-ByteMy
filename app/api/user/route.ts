// app/api/user/route.ts
import { NextRequest } from "next/server";
import { auth } from "@clerk/nextjs/server";

import { apiError, apiForbidden, apiSuccess, apiUnauthorized, apiValidationError } from "@/lib/api";

export async function POST(req: NextRequest) {
  try {
    // Check authentication and authorization
    const { userId, getToken } = await auth()
    
    if (!userId) {
      return apiUnauthorized()
    }

    // Get the token to check user role
    const token = await getToken({ template: 'hasura' })
    
    if (!token) {
      return apiError('Failed to verify permissions', 403)
    }

    // Decode the JWT to get the claims
    const tokenParts = token.split('.')
    const payload = JSON.parse(Buffer.from(tokenParts[1], 'base64').toString())
    const hasuraClaims = payload['https://hasura.io/jwt/claims']
    const userRole = hasuraClaims?.['x-hasura-default-role']
    
    // Only admins and managers can create users
    if (!['admin', 'org_admin', 'manager'].includes(userRole)) {
      return apiForbidden('Insufficient permissions')
    }

    // Parse request body
    const { email, password, firstName, lastName, role } = await req.json()
    
    // Validate inputs
    if (!email || !password) {
      return apiValidationError(['Email and password are required'])
    }

    // Validate role
    const validRoles = ['org_admin', 'manager', 'consultant', 'viewer']
    if (!validRoles.includes(role)) {
      return apiValidationError(['Invalid role'])
    }

    // Managers can't create admin users
    if (userRole === 'manager' && role === 'org_admin') {
      return apiForbidden('Managers cannot create admin users')
    }

    // Create user in Clerk
    const response = await fetch(`${process.env.CLERK_API_URL}/users`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.CLERK_SECRET_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email_address: [{ email_address: email }],
        password,
        first_name: firstName,
        last_name: lastName,
        public_metadata: { role }
      })
    })

    if (!response.ok) {
      const errorData = await response.text()
      throw new Error(`Failed to create user: ${errorData}`)
    }

    const userData = await response.json()
    
    return apiSuccess({
      id: userData.id,
      email,
      firstName,
      lastName,
      role
    }, 'User created successfully')
  } catch (error) {
    console.error('Error creating user:', error)
    return apiError(error)
  }
}
