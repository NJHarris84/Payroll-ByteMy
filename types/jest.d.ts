import '@testing-library/jest-dom';
import type { Config } from 'jest';
import 'jest';

declare global {
  namespace jest {
    interface Matchers<R> {
      toBeInTheDocument(): R;
      toHaveStyle(style: Record<string, any>): R;
    }
  }
}
