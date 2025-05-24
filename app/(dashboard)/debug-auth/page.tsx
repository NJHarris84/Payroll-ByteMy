"use client";

import { auth, useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui";
import { tokenManager } from "@/lib/auth";
import { parseJWT } from "@/lib/utils";

export default function DebugAuth() {
  const { user } = useUser();
  const [tokenInfo, setTokenInfo] = useState<{
    token: string | null;
    decodedToken: any;
    hasuraRole: string | null;
    userId: string | null;
    error: string | null;
  }>({
    token: null,
    decodedToken: null,
    hasuraRole: null,
    userId: null,
    error: null,
  });

  useEffect(() => {
    async function fetchToken() {
      try {
        // Get token from client-side
        const token = await tokenManager.getToken();
        
        if (!token) {
          setTokenInfo(prev => ({
            ...prev,
            error: "No token available from TokenManager"
          }));
          return;
        }
        
        // Decode token
        const decodedToken = parseJWT(token);
        const hasuraClaims = decodedToken["https://hasura.io/jwt/claims"] || {};
        
        setTokenInfo({
          token,
          decodedToken,
          hasuraRole: hasuraClaims["x-hasura-default-role"] || null,
          userId: hasuraClaims["x-hasura-user-id"] || null,
          error: null,
        });
      } catch (error) {
        console.error("Error decoding token:", error);
        setTokenInfo(prev => ({
          ...prev,
          error: error instanceof Error ? error.message : "Unknown error"
        }));
      }
    }
    
    fetchToken();
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Authentication Debugger</h1>
      
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>User Info</CardTitle>
            <CardDescription>Information from Clerk</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-2">
              <div>
                <strong>User ID:</strong> {user?.id || "Not available"}
              </div>
              <div>
                <strong>Email:</strong> {user?.primaryEmailAddress?.emailAddress || "Not available"}
              </div>
              <div>
                <strong>Role (from metadata):</strong> {user?.publicMetadata?.role as string || "Not set"}
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>JWT Token</CardTitle>
            <CardDescription>Hasura JWT token information</CardDescription>
          </CardHeader>
          <CardContent>
            {tokenInfo.error ? (
              <div className="text-red-500">{tokenInfo.error}</div>
            ) : (
              <div className="grid gap-4">
                <div>
                  <strong>Hasura Role:</strong> {tokenInfo.hasuraRole || "Not available"}
                </div>
                <div>
                  <strong>User ID from token:</strong> {tokenInfo.userId || "Not available"}
                </div>
                <div>
                  <strong>Token Expiry:</strong>{" "}
                  {tokenInfo.decodedToken?.exp 
                    ? new Date(tokenInfo.decodedToken.exp * 1000).toLocaleString() 
                    : "Not available"}
                </div>
                <div>
                  <strong>Issued At:</strong>{" "}
                  {tokenInfo.decodedToken?.iat 
                    ? new Date(tokenInfo.decodedToken.iat * 1000).toLocaleString() 
                    : "Not available"}
                </div>
                <div>
                  <strong>Token:</strong>
                  <div className="bg-muted p-2 rounded mt-1 overflow-x-auto">
                    <code className="text-xs break-all">{tokenInfo.token || "No token"}</code>
                  </div>
                </div>
                <div>
                  <strong>Decoded Token:</strong>
                  <pre className="bg-muted p-2 rounded mt-1 overflow-x-auto text-xs">
                    {tokenInfo.decodedToken 
                      ? JSON.stringify(tokenInfo.decodedToken, null, 2) 
                      : "No token data"}
                  </pre>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
