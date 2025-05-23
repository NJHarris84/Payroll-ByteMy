# Library Directory

This directory contains reusable code organized by purpose.

## Structure

- `/admin`: Admin functions
- `/api`: API clients and utilities
- `/auth`: Authentication and authorization
- `/generated`: Codegen generated graphQL queries, mutations, and fragments
- `/graphql`: GraphQL queries, mutations, and fragments
- `/hooks`: React hooks
- `/services`: Business logic services
- `/utils`: Utility functions
- `/webhooks`: Webhook functions

## Usage

Import modules from these directories to reuse functionality across the application.

Example:

```js

import { formatDate } from '@/lib/utils';
import { useUserRole } from '@/lib/hooks';
