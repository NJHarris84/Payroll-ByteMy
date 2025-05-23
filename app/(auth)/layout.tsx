'use client';

import { GoogleOneTapProvider } from "@clerk/nextjs";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GoogleOneTapProvider>
      <div className="flex min-h-screen flex-col items-center justify-center">
        <div className="relative w-full max-w-[480px] p-4">
          {children}
        </div>
      </div>
    </GoogleOneTapProvider>
  );
}
