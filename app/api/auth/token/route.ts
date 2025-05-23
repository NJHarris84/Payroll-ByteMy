// app/api/auth/token/route.ts
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

export async function GET() {
  try {
    const { userId, getToken } = auth();
    
    if (!userId) {
      return NextResponse.json(
        { error: "Not authenticated", code: "no-user-id" }, 
        { status: 401 }
      );
    }
    
    const token = await getToken({ template: "hasura" });
    
    if (!token) {
      console.error("Failed to generate Hasura token for user:", userId);
      return NextResponse.json(
        { error: "Could not generate authentication token", code: "token-generation-failed" }, 
        { status: 401 }
      );
    }
    
    return NextResponse.json({ token });
  } catch (error) {
    console.error("Error generating token:", error);
    return NextResponse.json(
      { error: "Authentication error", code: "auth-error" }, 
      { status: 500 }
    );
  }
}