// app/api/payrolls/route.ts
import { NextRequest } from "next/server";
import { auth } from "@clerk/nextjs/server";

import { apiError, apiSuccess, apiUnauthorized, getServerApolloClient } from "@/lib/api";
import { GET_PAYROLLS } from "@/lib/graphql";

export async function GET(_req: NextRequest) {
  try {
    // Get Clerk authentication
    const { userId, getToken } = await auth();
    
    // Check if user is authenticated
    if (!userId) {
      return apiUnauthorized();
    }

    // Get Hasura token
    const token = await getToken({ template: "hasura" });

    // Ensure we have a token
    if (!token) {
      return apiError("Failed to obtain authentication token", 401);
    }

    // Create server-side Apollo client
    const client = await getServerApolloClient();

    // Execute GraphQL query
    const { data } = await client.query({
      query: GET_PAYROLLS,
      context: { 
        headers: { 
          authorization: `Bearer ${token}` 
        } 
      },
    });

    return apiSuccess({ payrolls: data.payrolls });
  } catch (error) {
    console.error("Payroll Fetch Error:", error);
    return apiError(error);
  }
}