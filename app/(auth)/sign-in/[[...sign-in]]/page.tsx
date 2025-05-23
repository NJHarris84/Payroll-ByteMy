// app/(auth)/sign-in/[[...sign-in]]/page.tsx
"use client";

import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <SignIn 
      path="/sign-in"
      routing="path"
      signUpUrl="/sign-up"
      redirectUrl="/dashboard"
      afterSignInUrl="/dashboard"
    />
  );
}