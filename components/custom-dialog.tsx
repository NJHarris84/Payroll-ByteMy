"use client"

import * as React from "react"
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface CustomDialogProps {
  title: string
  description?: string
  trigger: React.ReactNode
  children: React.ReactNode
  footerContent?: React.ReactNode
  open?: boolean
  onOpenChange?: (open: boolean) => void
  maxWidth?: string
}

export function CustomDialog({
  title,
  description,
  trigger,
  children,
  footerContent,
  open,
  onOpenChange,
  maxWidth = "sm:max-w-[425px]"
}: CustomDialogProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  
  // Use the controlled open state if provided, otherwise use internal state
  const isDialogOpen = open !== undefined ? open : isOpen
  const setIsDialogOpen = onOpenChange || setIsOpen

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className={maxWidth}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        <div className="py-4">
          {children}
        </div>
        {footerContent && (
          <DialogFooter>
            {footerContent}
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  )
}

// Helper component for common confirmation dialog pattern
interface ConfirmDialogProps {
  title: string
  description: string
  trigger: React.ReactNode
  confirmText?: string
  cancelText?: string
  onConfirm: () => void
  confirmVariant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

export function ConfirmDialog({
  title,
  description,
  trigger,
  confirmText = "Confirm",
  cancelText = "Cancel",
  onConfirm,
  confirmVariant = "default",
  open,
  onOpenChange
}: ConfirmDialogProps) {
  return (
    <CustomDialog
      title={title}
      description={description}
      trigger={trigger}
      open={open}
      onOpenChange={onOpenChange}
      footerContent={
        <>
          <DialogClose asChild>
            <Button variant="outline">{cancelText}</Button>
          </DialogClose>
          <Button 
            variant={confirmVariant} 
            onClick={() => {
              onConfirm()
              onOpenChange?.(false)
            }}
          >
            {confirmText}
          </Button>
        </>
      }
    >
      {description}
    </CustomDialog>
  )
}