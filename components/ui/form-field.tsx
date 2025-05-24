"use client";

import React from "react";
import { UseFormReturn } from "react-hook-form";

import { Input, Label } from "@/components/ui";
import { cn } from "@/lib/utils";

interface FormFieldProps {
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  form: UseFormReturn<any>;
  type?: string;
  className?: string;
  disabled?: boolean;
}

export function FormField({
  name,
  label,
  placeholder,
  required = false,
  form,
  type = "text",
  className,
  disabled = false,
}: FormFieldProps) {
  const { register, formState: { errors } } = form;
  const error = errors[name];

  return (
    <div className={cn("space-y-2", className)}>
      <div className="space-y-1">
        <Label htmlFor={name}>
          {label}
          {required && <span className="text-destructive ml-1">*</span>}
        </Label>
        <Input
          id={name}
          placeholder={placeholder}
          type={type}
          disabled={disabled}
          aria-invalid={!!error}
          className={cn(error && "border-destructive")}
          {...register(name)}
        />
      </div>
      {error && (
        <p className="text-sm text-destructive">
          {error.message?.toString()}
        </p>
      )}
    </div>
  );
}