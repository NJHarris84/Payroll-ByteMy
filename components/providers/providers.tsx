// app/providers.tsx
"use client"

import { ApolloProvider } from "@apollo/client";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Toaster } from "sonner";

import { getClientApolloClient } from "@/lib/api";

export function AppProviders({ children }: { children: React.ReactNode }) {
  const client = getClientApolloClient()

  return (
    <ClerkProvider>
      <ApolloProvider client={client}>
        <NextThemesProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </NextThemesProvider>
      </ApolloProvider>
    </ClerkProvider>
  )
}