"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  items: {
    image?: string
    fallback: string
    alt?: string
  }[]
  max?: number
  size?: "sm" | "md" | "lg"
}

export function AvatarGroup({
  items,
  max = 4,
  size = "md",
  className,
  ...props
}: AvatarGroupProps) {
  const avatarSizeClasses = {
    sm: "h-6 w-6 text-xs",
    md: "h-8 w-8 text-sm",
    lg: "h-10 w-10 text-base"
  }

  const sizeClass = avatarSizeClasses[size]
  const visibleItems = items.slice(0, max)
  const remainingCount = items.length - max

  return (
    <div
      className={cn("flex -space-x-2", className)}
      {...props}
    >
      {visibleItems.map((item, index) => (
        <Avatar 
          key={index} 
          className={cn(
            sizeClass,
            "ring-2 ring-background"
          )}
        >
          {item.image && (
            <AvatarImage src={item.image} alt={item.alt || item.fallback} />
          )}
          <AvatarFallback>{item.fallback}</AvatarFallback>
        </Avatar>
      ))}
      
      {remainingCount > 0 && (
        <Avatar 
          className={cn(
            sizeClass,
            "ring-2 ring-background bg-muted"
          )}
        >
          <AvatarFallback>+{remainingCount}</AvatarFallback>
        </Avatar>
      )}
    </div>
  )
}
