// app/providers.tsx
"use client"

import { ApolloProvider } from "@apollo/client"
import { Toaster } from "@/components/ui/sonner"
import { getClientApolloClient } from "@/lib/api/client" // Import directly from client module
import { ThemeProvider } from "@/components/providers"

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