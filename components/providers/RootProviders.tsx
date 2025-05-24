"use client";

import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "./..";
import { Toaster } from "@/components/ui/sonner";
import { apolloClient } from "@/lib/api/client"; // Updated to import from client.ts instead

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