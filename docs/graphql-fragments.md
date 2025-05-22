# GraphQL Fragment Guidelines

This document outlines the standard practices for using GraphQL fragments in our project.

## Why Use Fragments?

Fragments provide several benefits:

- **Reusability**: Define field selections once, use them in multiple queries
- **Consistency**: Ensure the same fields are requested across queries
- **Maintainability**: Update field selections in one place
- **Readability**: Keep queries clean and focused

## Fragment Organization

All fragments are defined in the `/lib/graphql/fragments/` directory:

- `clientFragment.ts` - Client-related fragments
- `payrollFragment.ts` - Payroll-related fragments
- `payrollDateFragment.ts` - Payroll date-related fragments
- `staffFragment.ts` - Staff/user-related fragments

## Naming Conventions

- Fragment files: `entityFragment.ts`
- Fragment constants: `ENTITY_FRAGMENT`
- Fragment names in GraphQL: `EntityFragment`

## How to Define a Fragment

```typescript
import { gql } from '@apollo/client';

export const ENTITY_FRAGMENT = gql`
  fragment EntityFragment on entity_table {
    id
    name
    // other fields
  }
`;
