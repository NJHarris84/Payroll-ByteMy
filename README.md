# Payroll-ByteMy

A comprehensive payroll management system with advanced date calculation and role-based access control.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Overview

Payroll-ByteMy is a full-featured payroll management system built with:

- Next.js (App Router) for frontend and API
- Clerk for authentication
- Hasura GraphQL for database operations
- Tailwind CSS and shadcn/ui for styling
- TypeScript for type safety

## Project Structure

Payroll Cycles and Processing Rules
This system handles various payroll cycle types with specific date calculation rules:

### 1. Weekly Payroll

- Frequency: Weekly
- Date Type: Day of Week (DOW)
- Date Value: 1 = Sunday, 2 = Monday, ..., 7 = Saturday
- Business Day Rule: Previous Business Day

### 2. Fortnightly Payroll

- Frequency: Every two weeks
- Timing: Specific day of the week
- Week Assignment: Week A (first week of January) or Week B (second week of January)
- Date Value: 1-7 (Sunday-Saturday)
- Business Day Rule: Previous Business Day

### 3. Bi-Monthly Payroll

- Frequency: Twice per month
- Date Types:
  - Start of Month (SOM): 1st and 15th with Next Business Day rule
  - End of Month (EOM): 30th and 15th with Previous Business Day rule
- February Exception: Use 14th instead of 15th for both SOM and EOM

### 4. Monthly Payroll

- Frequency: Monthly
- Date Types:
  - Start of Month (SOM): Uses Next Business Day rule
  - End of Month (EOM): Uses Previous Business Day rule
  - Fixed Date: Uses Previous Business Day rule
- Fixed Date uses a day of month as Date Value, EOM and SOM don't use it

### 5. Quarterly Payroll

- Frequency: Quarterly (March, June, September, December)
- Same rules as Monthly Payroll

## EFT Processing Rules

### 1. Processing Lead Time

- `processing_days_before_eft` determines how many days before the EFT date processing occurs
- If the processing date falls on a weekend/holiday, adjust to the Previous Business Day

### 2. EFT Date Adjustment

- If the EFT date is changed, the payroll processing date must be recalculated

## Key Terms

- **DOW (Day of Week)**: Specific day of the week
- **SOM (Start of Month)**: First day of the month
- **EOM (End of Month)**: Last day of the month
- **Fixed Date**: Predetermined date in the month
- **Previous Business Day**: The business day before the scheduled date
- **Next Business Day**: The business day after the scheduled date
- **EFT**: Electronic Funds Transfer for employee wages
- **processing_days_before_eft**: Time between payroll processing and EFT date

## Formatting and Coding Standards

### TypeScript/JavaScript

- Use single quotes for strings
- Use consistent type imports with `import type { Type } from 'module'`
- Follow import order: builtin > external > internal > parent/sibling > index
- Use interface for type definitions
- Use arrow functions for components and handlers

### GraphQL Standards

- All fragments are defined in fragments directory
- Fragment files follow naming convention: `entityFragment.ts`
- Fragment constants use pattern: `ENTITY_FRAGMENT`
- Fragment names in GraphQL follow: `EntityFragment`
- Always use fragments in queries instead of inline field selection
- Import fragments from the correct relative path: `../../fragments/fileName`

### Component Standards

- Component files follow naming convention: `component-name.tsx`
- Export components as named exports
- Use shadcn/ui patterns for UI components
- Use consistent props naming and ordering
- Document components with JSDoc or separate markdown files

### CSS/Styling

- Use Tailwind CSS utility classes
- Follow the project's color scheme defined in globals.css
- Use cn() utility for conditional class names
- Support both light and dark themes

### File Structure

- Keep related code in the same directory
- Follow established naming conventions
- Use index files for exporting multiple components
- Add relative path comments to the top of files

## Project File Structure

payroll-bytemy/
├── app/                      # Next.js App Router
│   ├── api/                  # API routes
│   │   ├── auth/             # Authentication endpoints
│   │   ├── holidays/         # Holiday management endpoints
│   │   └── payroll/          # Payroll processing endpoints
│   ├── (auth)/               # Authentication pages
│   ├── (dashboard)/          # Dashboard and main app pages
│   └── layout.tsx            # Root layout component
├── components/               # Reusable components
│   ├── ui/                   # UI components (buttons, inputs, etc.)
│   ├── forms/                # Form components
│   ├── payroll/              # Payroll-specific components
│   ├── client/               # Client-related components
│   └── index.ts              # Barrel file for component exports
├── fragments/                # GraphQL fragments
│   ├── payrollFragment.ts    # Payroll fragments
│   ├── userFragment.ts       # User fragments
│   └── clientFragment.ts     # Client fragments
├── lib/                      # Shared utility functions
│   ├── utils.ts              # General utilities
│   ├── date-utils.ts         # Date manipulation utilities
│   └── graphql/              # GraphQL related utilities
├── types/                    # TypeScript type definitions
│   ├── payroll.ts            # Payroll-related types
│   ├── client.ts             # Client-related types
│   └── index.ts              # Type export barrel file
├── styles/                   # Global styles
│   └── globals.css           # Global CSS with Tailwind directives
├── hasura/                   # Hasura configuration
│   ├── metadata/             # Hasura metadata
│   └── migrations/           # Database migrations
├── public/                   # Static assets
├── next.config.js            # Next.js configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Dependencies and scripts

## Utility Scripts

- `npm run check-fragments` - Validates correct GraphQL fragment usage
- `npm run standardize-imports` - Updates import paths to match conventions
- `npm run add-relative-paths` - Adds file path comments to source files

## API Endpoints

### Holiday Sync Endpoint

```http
POST /api/holidays/sync
```

Synchronizes holiday data from external sources. Requires authentication and admin privileges.

## Database Operations

To create a schema dump:

```bash
hasura metadata export --project hasura/
```

To dump specific tables:

```bash
pg_dump -h localhost -p 5432 -U postgres -d payroll -t "public.holidays" > holidays_dump.sql
```

## Authentication

The system uses Clerk for authentication, which is integrated with Hasura for permissions:

```typescript
// Example of authentication middleware
export const middleware = (request: NextRequest) => {
  const { userId } = getAuth(request);
  if (!userId && !request.nextUrl.pathname.startsWith('/api/public')) {
    return redirectToSignIn({ returnBackUrl: request.url });
  }
  return NextResponse.next();
};
```

## Component Import Patterns

There are multiple ways to import components in this project:

```typescript
// Import from main barrel file
import { Button, Card, Alert } from "@/components";

// Or import from specific category
import { Button, Card } from "@/components/ui";
import { ClientCard } from "@/components/client";
```

psql "postgres://neondb_owner:npg_WavFRZ1lEx4U@ep-black-sunset-a7wbc0zq-pooler.ap-southeast-2.aws.neon.tech/neondb?sslmode=require" -f list_tables.sql > schema_reference.txt

## Contributing

Please follow the established patterns and code style when contributing to this project. Use the utility scripts to ensure your code matches the project's standards


🔍 Detailed Project Analysis

Testing Infrastructure

Located in __tests__ directory with multiple test categories
Uses Jest and Testing Library
Configuration in jest.config.js looks standard
Basic setup in jest.setup.js
Observations/Recommendations:

Add more comprehensive test coverage
Consider adding integration and end-to-end test coverage
Implement snapshot testing for UI components
GraphQL Integration

Multiple GraphQL-related utility scripts
Codegen configuration present
GraphQL schema at schema.graphql
Observations/Recommendations:

Consolidate GraphQL utility scripts
Implement stricter GraphQL type generation rules
Add GraphQL schema validation in CI/CD pipeline
Database Management

Using Drizzle ORM
Database schema in schema.ts
Neon PostgreSQL integration
Observations/Recommendations:

Implement database migration strategies
Add more comprehensive database validation
Consider adding database seeding scripts for testing
Authentication

Clerk authentication
Middleware for authentication in middleware.ts
SSO callback handling
Observations/Recommendations:

Implement more granular role-based access control
Add additional authentication logging
Consider implementing multi-factor authentication
Frontend Architecture

Next.js with App Router
Tailwind CSS for styling
Component-driven design
Providers and context management
Observations/Recommendations:

Standardize component creation process
Implement design system tokens
Add more reusable component patterns
Error Handling

Global error page (error.tsx)
Utility functions for error handling
Observations/Recommendations:

Implement more comprehensive error logging
Add global error tracking (e.g., Sentry)
Create more detailed error boundaries
Build and Development

Uses pnpm for package management
Multiple utility scripts for development
Observations/Recommendations:

Optimize build scripts
Add performance profiling
Implement pre-commit hooks for code quality
Security Considerations

JWT-based authentication
Row-level security in database
Environment-specific configurations
Observations/Recommendations:

Regular dependency security audits
Implement runtime environment validation
Add more comprehensive security headers
Type Safety

TypeScript throughout the project
Custom type definitions
GraphQL type generation
Observations/Recommendations:

Increase strictness of TypeScript configuration
Implement stricter type checking
Add more comprehensive type guards