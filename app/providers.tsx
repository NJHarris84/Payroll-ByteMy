// app/providers.tsx
"use client"

import { ApolloProvider } from "@apollo/client"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { getClientApolloClient } from "@/lib/api/apollo-client" // Import directly

export function AppProviders({ children }: { children: React.ReactNode }) {
  const client = getClientApolloClient()

  return (
    <ApolloProvider client={client}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
        <Toaster />
      </ThemeProvider>
    </ApolloProvider>
  )
}