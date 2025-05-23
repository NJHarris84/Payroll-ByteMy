// app/layout.tsx

import { type Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import { Inter } from 'next/font/google'  // Use Inter instead of Geist
import './globals.css'
import { AppProviders } from './providers'
import ClientThemeProvider from "@/components/providers/client-theme-provider"

// Use Inter as a fallback if you don't have Geist
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Payroll Matrix',
  description: 'Comprehensive payroll management system',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: '#3b82f6'
        }
      }}
    >
      <html lang="en">
        <body className={`${inter.variable} antialiased`}>
          <ClientThemeProvider>
            <AppProviders>{children}</AppProviders>
          </ClientThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}