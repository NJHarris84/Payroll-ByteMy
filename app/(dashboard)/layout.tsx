// app/(dashboard)/layout.tsx
"use client"

import type React from "react"
import { Sidebar } from "@/components/layout/sidebar"
import { Toaster } from "sonner"
import { ClientWrapper } from "@/components/layout/client-wrapper"
import { DashboardShell } from "@/components/layout/dashboard-shell"
import { ThemeToggle } from "@/components/layout/theme-toggle"
import { UserNav } from "@/components/layout/user-nav"

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <div className="border-b h-16 flex items-center px-6">
          <h1 className="text-xl font-bold">Payroll Matrix</h1>
          <div className="ml-auto flex items-center gap-4">
            <UserNav />
          </div>
        </div>
        <main className="flex-1 overflow-y-auto p-6">
          <ClientWrapper>
            {children}
          </ClientWrapper>
          <Toaster />
        </main>
      </div>
    </div>
  )
}