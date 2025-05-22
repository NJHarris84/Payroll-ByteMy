import { NextResponse } from 'next/server'

/**
 * Standard API response structure
 */
export type ApiResponse<T> = {
  success: boolean;
  data?: T;
  error?: string;
  errors?: string[] | Record<string, string[]>;
  message?: string;
  timestamp: string;
}

/**
 * Creates a standardized API success response
 * 
 * @example
 * return apiSuccess({ user: { id: 1, name: 'John' } }, 'User created successfully');
 */
export function apiSuccess<T>(data: T, message?: string) {
  return NextResponse.json<ApiResponse<T>>({
    success: true,
    data,
    message,
    timestamp: new Date().toISOString()
  }, { status: 200 })
}

/**
 * Creates a standardized API error response
 * 
 * @example
 * return apiError('User not found', 404);
 */
export function apiError(error: string | Error | unknown, status = 400) {
  const errorMessage = error instanceof Error ? error.message : String(error)
  
  return NextResponse.json<ApiResponse<null>>({
    success: false,
    error: errorMessage,
    timestamp: new Date().toISOString()
  }, { status })
}

/**
 * Creates a standardized validation error response
 * 
 * @example
 * return apiValidationError({ name: ['Name is required'] });
 */
export function apiValidationError(errors: string[] | Record<string, string[]>) {
  return NextResponse.json<ApiResponse<null>>({
    success: false,
    error: 'Validation error',
    errors,
    timestamp: new Date().toISOString()
  }, { status: 422 })
}

/**
 * Creates a standardized 'not found' error response
 * 
 * @example
 * return apiNotFound('User not found');
 */
export function apiNotFound(message = 'Resource not found') {
  return NextResponse.json<ApiResponse<null>>({
    success: false,
    error: message,
    timestamp: new Date().toISOString()
  }, { status: 404 })
}

/**
 * Creates a standardized 'unauthorized' error response
 * 
 * @example
 * return apiUnauthorized('You must be logged in');
 */
export function apiUnauthorized(message = 'Unauthorized') {
  return NextResponse.json<ApiResponse<null>>({
    success: false,
    error: message,
    timestamp: new Date().toISOString()
  }, { status: 401 })
}

/**
 * Creates a standardized 'forbidden' error response
 * 
 * @example
 * return apiForbidden('Insufficient permissions');
 */
export function apiForbidden(message = 'Forbidden') {
  return NextResponse.json<ApiResponse<null>>({
    success: false,
    error: message,
    timestamp: new Date().toISOString()
  }, { status: 403 })
}