// components/ui/alert.tsx
import React from "react"

interface AlertProps {
  children: React.ReactNode
  variant?: "default" | "destructive" | "warning"
  className?: string
}

const variantClasses = {
  default: "bg-blue-50 text-blue-800 border-blue-200",
  destructive: "bg-red-50 text-red-800 border-red-200",
  warning: "bg-yellow-50 text-yellow-800 border-yellow-200",
}

export function Alert({
  children,
  variant = "default",
  className = "",
}: AlertProps) {
  return (
    <div
      className={`border rounded-md p-4 ${variantClasses[variant]} ${className}`}
    >
      {children}
    </div>
  )
}