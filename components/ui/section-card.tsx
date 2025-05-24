import { ReactNode } from "react";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui";
import { cn } from "@/lib/utils";

interface SectionCardProps {
  title: string
  description?: string
  children: ReactNode
  footer?: ReactNode
  className?: string
  headerClassName?: string
  contentClassName?: string
  footerClassName?: string
}

export function SectionCard({
  title,
  description,
  children,
  footer,
  className,
  headerClassName,
  contentClassName,
  footerClassName
}: SectionCardProps) {
  return (
    <Card className={cn("shadow-sm", className)}>
      <CardHeader className={headerClassName}>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent className={cn("pt-2", contentClassName)}>
        {children}
      </CardContent>
      {footer && (
        <CardFooter className={cn("border-t bg-muted/50 px-6 py-3", footerClassName)}>
          {footer}
        </CardFooter>
      )}
    </Card>
  )
}