"use client";

import * as React from "react";

import { Button, DialogClose } from "@/components/ui";

import { CustomDialog } from "./..";

/**
 * Props for the ConfirmDialog component
 */
export interface ConfirmDialogProps {
  /** Dialog title */
  title: string;
  /** Dialog description/message */
  description: string;
  /** React node that triggers the dialog */
  trigger: React.ReactNode;
  /** Text for the confirm button */
  confirmText?: string;
  /** Text for the cancel button */
  cancelText?: string;
  /** Function called when the confirm button is clicked */
  onConfirm: () => void;
  /** Button styling variant for the confirm button */
  confirmVariant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  /** Controlled open state */
  open?: boolean;
  /** Callback for when open state changes */
  onOpenChange?: (open: boolean) => void;
}

/**
 * A dialog component for confirming user actions
 */
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
  // Handle confirm action and close dialog
  const handleConfirm = () => {
    onConfirm();
    onOpenChange?.(false);
  };

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
            <Button type="button">{cancelText}</Button>
          </DialogClose>
          <Button 
            type="button"
            onClick={handleConfirm}
          >
            {confirmText}
          </Button>
        </>
      }
    >
      {description}
    </CustomDialog>
  );
}