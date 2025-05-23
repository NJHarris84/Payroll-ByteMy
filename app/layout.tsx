// app/layout.tsx

import { type Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import { Inter } from 'next/font/google'
import './globals.css'
import { AppProviders } from './providers'
import ClientThemeProvider from "@/components/providers/client-theme-provider"

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
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
      signInUrl="/sign-in"
      signUpUrl="/sign-up"
      afterSignInUrl="/dashboard"
      afterSignUpUrl="/onboarding"
    >
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <ClientThemeProvider>
            <AppProviders>
              {children}
            </AppProviders>
          </ClientThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}