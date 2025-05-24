// app/api/payrolls/[id]/route.ts
import { NextRequest } from "next/server";
import { auth } from "@clerk/nextjs/server";

import { apiError, apiNotFound, apiSuccess, apiUnauthorized, getServerApolloClient } from "@/lib/api";
import { GET_PAYROLL_BY_ID } from "@/lib/graphql";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    if (!params.id) return apiError("Missing ID", 400)

    // Get Clerk authentication token
    const authInstance = await auth()
    
    if (!authInstance.userId) {
      return apiUnauthorized("Authentication required")
    }
    
    const token = await authInstance.getToken({ template: "hasura" })

    // Get Apollo Client
    const client = await getServerApolloClient()

    const { data } = await client.query({
      query: GET_PAYROLL_BY_ID,
      variables: { id: params.id },
      context: { headers: { authorization: `Bearer ${token}` } },
    })

    if (!data.payrolls.length) return apiNotFound("Payroll not found")

    return apiSuccess(data.payrolls[0])
  } catch (error) {
    console.error("Payroll fetch error:", error)
    return apiError(error)
  }
}