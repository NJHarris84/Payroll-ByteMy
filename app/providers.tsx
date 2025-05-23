// app/providers.tsx
'use client'

import { ReactNode } from 'react'
import { ApolloProvider } from '@apollo/client'
import { getApolloClient } from '@/lib/api/apollo-client'

export function AppProviders({ children }: { children: ReactNode }) {
  const client = getApolloClient(false) // client-side Apollo client
  
  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  )
}