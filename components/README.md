# Component Architecture

This directory contains all React components organized by their purpose and usage.

## Directory Structure

- `ui/`: Basic UI building blocks like buttons, inputs, and cards
- `layout/`: Page layout components like headers, sidebars, and containers
- `payroll/`: Payroll-specific components
- `client/`: Client-specific components
- `common/`: Shared utility components used across features
- `dialogs/`: Modal and dialog components
- `forms/`: Form components and form-related utilities

## Best Practices

1. **Component Organization**: Place components in the appropriate category
2. **Component Naming**: Use PascalCase for component names
3. **Exports**: Export components as named exports
4. **Props**: Define prop interfaces with descriptive names
5. **Documentation**: Add JSDoc comments for component documentation
6. **Imports**: Import from the barrel file when possible (`import { Button } from "@/components"`)
