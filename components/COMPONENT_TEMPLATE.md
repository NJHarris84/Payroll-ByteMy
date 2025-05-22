# Component Documentation Template

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