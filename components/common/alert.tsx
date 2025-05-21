import React from 'react';
import { AlertCircle, CheckCircle, Info } from "lucide-react";

interface AlertProps {
  children: React.ReactNode;
  variant?: 'default' | 'destructive' | 'success';
  className?: string;
}

export function Alert({
  children,
  variant = 'default',
  className = '',
}: AlertProps) {
  const variantClasses = {
    default: 'bg-blue-50 text-blue-800 border-blue-200',
    destructive: 'bg-red-50 text-red-800 border-red-200',
    success: 'bg-green-50 text-green-800 border-green-200',
  };

  const icons = {
    default: <Info className="h-4 w-4" />,
    destructive: <AlertCircle className="h-4 w-4" />,
    success: <CheckCircle className="h-4 w-4" />
  };

  return (
    <div className={`border rounded-md p-4 flex items-start gap-2 ${variantClasses[variant]} ${className}`}>
      <div className="mt-0.5">{icons[variant]}</div>
      <div>{children}</div>
    </div>
  );
}