# Payroll-ByteMy Component Library

This directory contains all the UI components used throughout the application. The components are organized into several categories to maintain a clear separation of concerns and improve code reusability.

## Component Categories

### UI Components (`/ui`)
Basic UI elements based on shadcn/ui patterns, serving as the building blocks for all other components.

### Layout Components (`/layout`)
Components related to the application layout and navigation structure.

### Common Components (`/common`)
Reusable utility components that can be used across different features of the application.

### Payroll Components (`/payroll`)
Domain-specific components for payroll functionality.

### Client Components (`/client`)
Domain-specific components for client management.

### Dialog Components (`/dialogs`)
Modal interfaces for user interactions.

### Provider Components (`/providers`)
Context providers and wrappers for global state management.

### Form Components (`/forms`)
Reusable form components and complex form implementations.

## Usage Guidelines

### Importing Components

Always import components using the barrel files to maintain consistency:

```tsx
// Import from main barrel file
import { Button, Card, Alert } from "@/components";

// Or import from specific category
import { Button, Card } from "@/components/ui";
import { ClientCard } from "@/components/client";
```
