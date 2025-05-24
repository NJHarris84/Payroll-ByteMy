# Payroll-ByteMy

## 🌟 Project Overview

Payroll-ByteMy is a comprehensive, modern payroll management system built with cutting-edge web technologies. Designed for businesses looking for a robust, secure, and flexible payroll solution.

## 🚀 Tech Stack

- **Frontend**: Next.js 14 (App Router)
- **Authentication**: Clerk
- **Database**: Neon PostgreSQL
- **GraphQL**: Hasura
- **Styling**: Tailwind CSS, shadcn/ui
- **Type Safety**: TypeScript
- **State Management**: Apollo Client
- **Testing**: Jest, Cypress

## ✨ Features

### 🔐 Authentication & Authorization

- Multi-tier role-based access control
- Integrated with Clerk for secure authentication
- Role-based permissions across UI, routes, and API

#### Roles

- **Developer (Admin)**: Full system access
- **Administrator (Org Admin)**: Comprehensive organizational management
- **Manager**: Client and payroll management
- **Consultant**: View and basic interaction
- **Viewer**: Limited read-only access

### 💰 Payroll Management

- Dynamic payroll cycle generation
- Client-specific payroll configurations
- Automated date calculations
- Export capabilities (CSV, PDF)

### 🗓️ Key Modules

- Payroll Scheduling
- Holiday Synchronization
- Tax Calculations (Australian tax system support)
- User and Staff Management
- Client Management

## 🔧 Authentication Flow

### Frontend Protection

```typescript
<HasuraRoleGate allowedRoles={['manager', 'org_admin']}>
  <PayrollManagement />
</HasuraRoleGate>
```

### Middleware Protection

```typescript
export default clerkMiddleware(async (auth, request) => {
  if (isProtectedRoute(request)) {
    await auth.protect()
    
    // Role-based route access
    if (!requiredRoles.includes(userRole)) {
      return redirect('/dashboard')
    }
  }
})
```

### API Route Protection

```typescript
export const GET = withAuth(
  async (req, { auth }) => {
    return apiSuccess(data)
  },
  { roles: ['admin', 'manager'] }
)
```

## 📦 Project Structure

```
payroll-bytemy/
├── app/                      # Next.js App Router
│   ├── api/                  # API routes
│   ├── (auth)/               # Authentication pages
│   └── (dashboard)/          # Main application pages
├── components/               # Reusable components
│   ├── ui/                   # Base UI components
│   ├── payroll/              # Payroll-specific components
│   └── common/               # Shared utility components
├── lib/                      # Core application logic
│   ├── auth/                 # Authentication utilities
│   ├── graphql/              # GraphQL definitions
│   └── hooks/                # React hooks
└── types/                    # TypeScript type definitions
```

## 🛠️ Local Development

### Prerequisites

- Node.js 18+
- pnpm
- Clerk Account
- Neon PostgreSQL Database
- Hasura Cloud Account

### Setup

1. Clone the repository
2. Copy `.env.example` to `.env`
3. Fill in required environment variables
4. Run `pnpm install`
5. Run `pnpm dev`

## 🧪 Testing

- **Unit Tests**: `pnpm test`
- **Integration Tests**: `pnpm test:integration`
- **E2E Tests**: `pnpm test:e2e`

## 🔒 Security Layers

1. **Frontend**: Role-based UI protection
2. **Routing**: Middleware authentication
3. **API Routes**: Server-side permission checks
4. **Database**: Hasura role-based query filtering

## 📄 License

[Your License Here - e.g., MIT]

## 🤝 Contributing

Please read `CONTRIBUTING.md` for details on our code of conduct and the process for submitting pull requests.

## 📞 Support

For support, please open an issue in the GitHub repository or contact [your support email].

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
