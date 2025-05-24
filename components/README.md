# Components Directory

This directory contains all reusable components for the Payroll-ByteMy application.

## UI Components

Basic UI components like buttons, inputs, and cards.

## Form Components

Components for building and managing forms.

## Payroll Components

Components specific to payroll functionality.

## Client Components

Components related to client management.

## Layout Components

Components for page layout and structure.

## Data Display Components

Components for displaying data (tables, charts, etc.).

## Navigation Components

Components for navigation (menus, breadcrumbs, etc.).

## Component Documentation Template

## Component Name

Brief description of the component and its purpose.

### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| prop1 | string | - | Description of prop1 |
| prop2 | boolean | false | Description of prop2 |
| children | ReactNode | - | Child elements |

### Usage Example

```tsx
import { ComponentName } from '@/components';

export function Example() {
  return (
    <ComponentName prop1="value" prop2={true}>
      Content goes here
    </ComponentName>
  );
}
# Dialog Components

This directory contains all dialog and modal components.

## Usage Guidelines

1. Use the `CustomDialog` component as the base for creating new dialogs
2. For confirmation actions, use the `ConfirmDialog` component
3. Keep dialog content focused on a single task or piece of information
4. Use consistent action button placement (Cancel on left, primary action on right)
5. Export each dialog as a named export

## Available Components

- `CustomDialog`: Base dialog component with customizable content
- `ConfirmDialog`: Dialog for confirming user actions
- `EditPayrollDialog`: Dialog for editing payroll information
- `CreateClientDialog`: Dialog for creating new clients
