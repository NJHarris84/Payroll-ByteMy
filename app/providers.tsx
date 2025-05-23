// app/providers.tsx
'use client'

import { ReactNode } from 'react'
import { ApolloProvider } from '@apollo/client'
import { getClientApolloClient } from '@/lib/api/apollo-client'

export function AppProviders({ children }: { children: ReactNode }) {
  const client = getClientApolloClient() // Remove the false parameter as it's not needed
  
  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  )
}