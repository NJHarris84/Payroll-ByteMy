// lib/utils.ts
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(input: string | number | Date): string {
  const date = new Date(input)
  // Use Australian date format (day/month/year)
  return date.toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

export function formatCurrency(amount: number): string {
  // Use Australian Dollar (AUD) currency format
  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
  }).format(amount)
}

// Add tax calculation for Australian GST (10%)
export function calculateGST(amount: number): number {
  return amount * 0.1
}

// Format Australian phone numbers
export function formatPhoneNumber(phone: string): string {
  // Remove all non-digit characters
  const cleaned = phone.replace(/\D/g, '')
  
  // Check for mobile or landline pattern (Australia)
  if (cleaned.length === 10) {
    if (cleaned.startsWith('04')) {
      // Mobile format: 0400 123 456
      return `${cleaned.substring(0, 4)} ${cleaned.substring(4, 7)} ${cleaned.substring(7)}`
    } else {
      // Landline format: (02) 1234 5678
      return `(${cleaned.substring(0, 2)}) ${cleaned.substring(2, 6)} ${cleaned.substring(6)}`
    }
  }
  
  // If it doesn't match expected patterns, return as is
  return phone
}

// Format Australian ABN (Australian Business Number)
export function formatABN(abn: string): string {
  // Remove all non-digit characters
  const cleaned = abn.replace(/\D/g, '')
  
  // Australian ABN format: 12 345 678 901
  if (cleaned.length === 11) {
    return `${cleaned.substring(0, 2)} ${cleaned.substring(2, 5)} ${cleaned.substring(5, 8)} ${cleaned.substring(8)}`
  }
  
  // If it doesn't match expected pattern, return as is
  return abn
}

// Format Australian TFN (Tax File Number)
export function formatTFN(tfn: string): string {
  // Remove all non-digit characters
  const cleaned = tfn.replace(/\D/g, '')
  
  // TFN format: 123 456 789
  if (cleaned.length === 9) {
    return `${cleaned.substring(0, 3)} ${cleaned.substring(3, 6)} ${cleaned.substring(6)}`
  }
  
  // If it doesn't match expected pattern, return as is
  return tfn
}

// Calculate tax based on Australian tax brackets (2023-2024)
export function calculateIncomeTax(annualIncome: number): number {
  // 2023-2024 Australian Tax Brackets
  if (annualIncome <= 18200) {
    return 0
  } else if (annualIncome <= 45000) {
    return (annualIncome - 18200) * 0.19
  } else if (annualIncome <= 120000) {
    return 5092 + (annualIncome - 45000) * 0.325
  } else if (annualIncome <= 180000) {
    return 29467 + (annualIncome - 120000) * 0.37
  } else {
    return 51667 + (annualIncome - 180000) * 0.45
  }
}

// Calculate superannuation contribution (currently 11% in Australia)
export function calculateSuperannuation(salary: number): number {
  return salary * 0.11
}