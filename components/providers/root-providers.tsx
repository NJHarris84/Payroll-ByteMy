"use client";

import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "./theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { apolloClient } from "@/lib/api/apollo-client";

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