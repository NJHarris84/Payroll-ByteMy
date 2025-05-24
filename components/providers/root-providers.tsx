"use client";

import { ApolloProvider } from "@apollo/client";
import { Toaster } from "@/components/ui";
import { apolloClient } from "@/lib/api/apollo-client.client";
import { ThemeProvider } from "@/components/providers/theme-provider";

interface RootProvidersProps {
  children: React.ReactNode;
}

export function RootProviders({ children }: RootProvidersProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider defaultTheme="system" storageKey="payroll-theme">
        {children}
        <Toaster position="top-right" />
      </ThemeProvider>
    </ApolloProvider>
  );
}