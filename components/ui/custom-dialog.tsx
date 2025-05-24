"use client"

import * as React from "react"

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui";

/**
 * Props for the CustomDialog component
 */
export interface CustomDialogProps {
  /** Dialog title displayed in the header */
  title: string;
  /** Optional description displayed below the title */
  description?: string;
  /** React node that triggers the dialog to open when clicked */
  trigger: React.ReactNode;
  /** Content to display in the dialog body */
  children: React.ReactNode;
  /** Optional content for the dialog footer */
  footerContent?: React.ReactNode;
  /** Controlled open state */
  open?: boolean;
  /** Callback for when open state changes */
  onOpenChange?: (open: boolean) => void;
  /** Maximum width of the dialog (Tailwind class) */
  maxWidth?: string;
}

/**
 * A reusable dialog component that provides consistent styling and behavior
 * 
 * @example
 * ```tsx
 * <CustomDialog
 *   title="Edit Profile"
 *   description="Update your profile information"
 *   trigger={<Button>Edit Profile</Button>}
 *   footerContent={
 *     <>
 *       <Button variant="outline">Cancel</Button>
 *       <Button>Save</Button>
 *     </>
 *   }
 * >
 *   <form className="space-y-4">
 *     <Input label="Name" />
 *     <Input label="Email" />
 *   </form>
 * </CustomDialog>
 * ```
 */
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
  // Internal state for uncontrolled dialog
  const [internalOpen, setInternalOpen] = React.useState(false);
  
  // Use controlled state if provided, otherwise use internal state
  const isOpen = open !== undefined ? open : internalOpen;
  const handleOpenChange = onOpenChange || setInternalOpen;

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
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
  );
}