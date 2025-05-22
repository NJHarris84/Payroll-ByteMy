# Hooks Directory

This directory contains reusable React hooks organized by purpose.

## Structure

- `/api`: Hooks for data fetching and API interactions
- `/ui`: Hooks for UI-related functionality
- `/utils`: Utility hooks for common patterns

## Usage

Import hooks from the barrel file for convenience:

```js
import { useUserRole, useSmartPolling, useDisclosure } from '@/lib/hooks';
