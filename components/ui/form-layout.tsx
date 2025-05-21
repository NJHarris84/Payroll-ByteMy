import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

interface FormSectionProps {
  title: string
  description?: string
  children: ReactNode
  actions?: ReactNode
  className?: string
}

export function FormSection({
  title,
  description,
  children,
  actions,
  className,
}: FormSectionProps) {
  return (
    <Card className={cn("shadow-sm", className)}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent className="space-y-4 pt-0">
        {children}
      </CardContent>
      {actions && (
        <CardFooter className="border-t bg-muted/50 px-6 py-3 flex justify-end space-x-2">
          {actions}
        </CardFooter>
      )}
    </Card>
  )
}

export function FormContainer({ 
  children, 
  className 
}: { 
  children: ReactNode
  className?: string
}) {
  return (
    <div className={cn("grid gap-6", className)}>
      {children}
    </div>
  )
}

export function FormLayout({
  heading,
  subheading,
  sections,
  actions,
}: {
  heading: string
  subheading?: string
  sections: ReactNode
  actions?: ReactNode
}) {
  return (
    <div className="space-y-6 pb-10">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">{heading}</h2>
        {subheading && <p className="text-muted-foreground">{subheading}</p>}
      </div>
      
      <FormContainer>
        {sections}
      </FormContainer>
      
      {actions && (
        <div className="flex justify-end space-x-2 pt-4">
          {actions}
        </div>
      )}
    </div>
  )
}