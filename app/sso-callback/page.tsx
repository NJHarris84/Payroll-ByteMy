"use client";

import { useClerk } from "@clerk/nextjs";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SSOCallback() {
  const { handleRedirectCallback } = useClerk();
  const router = useRouter();

  useEffect(() => {
    async function handleCallback() {
      try {
        await handleRedirectCallback({
          afterSignInUrl: "/dashboard",
          afterSignUpUrl: "/onboarding",
        });
      } catch (err) {
        console.error("Error handling SSO callback:", err);
        // Redirect to sign-in if there's an error
        router.push("/sign-in");
      }
    }
    handleCallback();
  }, [handleRedirectCallback, router]);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-2">Completing sign in...</h2>
        <p className="text-muted-foreground">You will be redirected shortly.</p>
      </div>
    </div>
  );
}
