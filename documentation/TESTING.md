# Testing Documentation

This document provides comprehensive guidance on testing the Payroll ByteMy application. It covers the testing strategy, test execution, and expected outcomes for each type of test.

## Table of Contents

1. [Testing Levels](#testing-levels)
2. [Test Environment Setup](#test-environment-setup)
3. [Running Tests](#running-tests)
4. [Unit Tests](#unit-tests)
5. [Integration Tests](#integration-tests)
6. [E2E Tests](#e2e-tests)
7. [Mocking](#mocking)
8. [Test Coverage](#test-coverage)
9. [Continuous Integration](#continuous-integration)
10. [Test Data](#test-data)
11. [Troubleshooting](#troubleshooting)

## Testing Levels

The application uses multiple levels of testing to ensure quality:

1. **Unit Tests**: Testing individual components, functions, and modules in isolation
2. **Integration Tests**: Testing interactions between modules and services
3. **E2E Tests**: Testing the full application flow using Cypress

## Test Environment Setup

Before running tests, you need to set up your environment:

1. **Install Dependencies**

   ```bash
   pnpm install
   ```

2. **Set Up Environment Variables**

   Create a `.env.test` file in the project root with the following:

   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/payroll_test"
   CLERK_SECRET_KEY="your_test_clerk_key"
   HASURA_ADMIN_SECRET="your_test_hasura_secret"
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your_test_clerk_publishable_key"
   NEXT_PUBLIC_HASURA_GRAPHQL_URL="http://localhost:8080/v1/graphql"
   ```

3. **Initialize Test Database**

   ```bash
   pnpm db:init:test
   ```

4. **Seed Test Data**

   ```bash
   pnpm db:seed:test
   ```

## Running Tests

### Unit and Integration Tests

To run unit and integration tests:

```bash
# Run all tests
pnpm test

# Run tests with coverage
pnpm test:coverage

# Run specific test file
pnpm test __tests__/unit/lib/services/payroll-service.test.ts

# Run tests in watch mode
pnpm test:watch

# Run specific test pattern
pnpm test -t "payroll service"
```

### E2E Tests

To run Cypress E2E tests:

```bash
# Start the application in test mode
pnpm dev:test

# In a separate terminal, open Cypress test runner
pnpm cypress:open

# Run Cypress tests in headless mode
pnpm cypress:run
```

## Unit Tests

### Running a Specific Unit Test

Let's walk through running a unit test for the payroll service:

1. Open your terminal
2. Navigate to the project root
3. Run the following command:

   ```bash
   pnpm test __tests__/unit/lib/services/payroll-service.test.ts
   ```

4. **Expected Outcome**:
   - The test should execute without errors
   - You should see test results in the terminal showing:
     - Tests for `calculateTax`: Verifying tax calculations for different income levels
     - Tests for `calculateNetPay`: Verifying net pay calculations with various deductions
     - Tests for `generatePayrollDates`: Verifying date generation for different cycles

### Writing a New Unit Test

1. Create a new test file in the appropriate directory:

   ```bash
   touch __tests__/unit/lib/utils/new-utility.test.ts
   ```

2. Add the basic test structure:

   ```typescript
   import { myUtilityFunction } from '@/lib/utils/new-utility';

   describe('My Utility Function', () => {
     test('should handle normal case', () => {
       const result = myUtilityFunction('input');
       expect(result).toBe('expected output');
     });

     test('should handle edge cases', () => {
       expect(myUtilityFunction('')).toBe('default value');
       expect(myUtilityFunction(null)).toBe('default value');
     });
   });
   ```

3. Run the test to verify it works:

   ```bash
   pnpm test __tests__/unit/lib/utils/new-utility.test.ts
   ```

4. **Expected Outcome**:
   - Test fails initially if the utility hasn't been implemented
   - After implementing the utility, tests should pass

### Testing React Components

1. Run a component test:

   ```bash
   pnpm test __tests__/unit/components/payroll/payroll-list-card.test.tsx
   ```

2. **Expected Outcome**:
   - Tests verify component rendering, data fetching, and user interactions
   - Console should show successful test results for rendering, loading states, error handling, and search functionality

## Integration Tests

### Running a Payroll Workflow Test

1. Run the integration test for the payroll workflow:

   ```bash
   pnpm test __tests__/integration/payroll-workflow.test.tsx
   ```

2. **Expected Outcome**:
   - Test verifies the end-to-end payroll creation flow
   - You should see passing tests for:
     - Listing payrolls
     - Filtering payrolls
     - Creating a new payroll
     - Showing success message after creation

### Debugging Integration Tests

If an integration test fails:

1. Check the test output for specific failure messages
2. Add debugging console logs to the test:

   ```typescript
   console.log('Test data:', data);
   ```

3. Run the test with increased verbosity:

   ```bash
   pnpm test __tests__/integration/payroll-workflow.test.tsx --verbose
   ```

4. Use the debugger by adding a `debugger` statement in the test and running:

   ```bash
   node --inspect-brk node_modules/.bin/jest __tests__/integration/payroll-workflow.test.tsx
   ```

5. Open Chrome and navigate to `chrome://inspect` to access the debugging interface

## End-to-End (E2E) Tests

### Running Payroll Dates E2E Test

1. Start the application in test mode:

   ```bash
   pnpm dev:test
   ```

2. In a separate terminal, run the specific Cypress test:

   ```bash
   pnpm cypress:run --spec "cypress/e2e/payroll-dates.cy.js"
   ```

3. **Expected Outcome**:
   - Cypress launches a browser and runs through the following scenarios:
     - Logging in as an admin
     - Navigating to the payrolls page
     - Clicking on a payroll to view its dates
     - Regenerating payroll dates
     - Editing a payroll date
     - Testing error handling

### Writing a New E2E Test

1. Create a new test file in the Cypress e2e directory:

   ```bash
   touch cypress/e2e/new-feature.cy.js
   ```

2. Add the basic test structure:

   ```javascript
   describe('New Feature', () => {
     beforeEach(() => {
       cy.login('admin@example.com', 'password123');
       cy.visit('/feature-page');
     });

     it('should perform the main workflow', () => {
       cy.contains('Feature Title').should('be.visible');
       cy.get('button').contains('Perform Action').click();
       cy.contains('Success Message').should('be.visible');
     });
   });
   ```

3. Run the test:

   ```bash
   pnpm cypress:run --spec "cypress/e2e/new-feature.cy.js"
   ```

4. **Expected Outcome**:
   - Cypress executes the test and shows the results
   - Screenshots and videos of the test run are saved in the `cypress/screenshots` and `cypress/videos` directories

## Mocking

### Setting Up Test Mocks

The application uses several mocking approaches:

1. **Jest Mocks**: For functions, modules, and dependencies

   ```typescript
   // Example: Mocking the Apollo useQuery hook
   jest.mock('@apollo/client', () => ({
     ...jest.requireActual('@apollo/client'),
     useQuery: jest.fn(() => ({
       loading: false,
       error: null,
       data: { payrolls: mockPayrolls }
     }))
   }));
   ```

2. **MSW (Mock Service Worker)**: For mocking API requests in tests

   The mock handlers are defined in `__mocks__/handlers.ts`:

   ```typescript
   // To use MSW in a test:
   import { server } from '../__mocks__/server';

   beforeAll(() => server.listen());
   afterEach(() => server.resetHandlers());
   afterAll(() => server.close());
   ```

3. **Apollo MockedProvider**: For mocking GraphQL queries and mutations

   ```tsx
   const mocks = [
     {
       request: {
         query: GET_PAYROLLS,
       },
       result: {
         data: {
           payrolls: mockPayrolls,
         },
       },
     }
   ];

   render(
     <MockedProvider mocks={mocks} addTypename={false}>
       <ComponentUnderTest />
     </MockedProvider>
   );
   ```

### Testing With Custom Mocks

1. Create a custom mock for a specific test:

   ```typescript
   // Custom error mock
   const errorMock = {
     request: {
       query: GET_PAYROLLS,
     },
     error: new Error('Network error'),
   };
   ```

2. Use the mock in your test:

   ```tsx
   render(
     <MockedProvider mocks={[errorMock]} addTypename={false}>
       <PayrollListCard />
     </MockedProvider>
   );

   await waitFor(() => {
     expect(screen.getByText(/error/i)).toBeInTheDocument();
   });
   ```

3. **Expected Outcome**:
   - The component should handle the error case as defined in your mock
   - Error handling UI should be displayed

## Test Coverage

We aim to maintain test coverage of at least 80% across the codebase.

### Running Coverage Report

```bash
pnpm test:coverage
```

### Coverage Report Outcome

The coverage report should show:

- Overall coverage percentage for statements, branches, functions, and lines
- Detailed breakdown by file
- HTML report in the `coverage` directory that you can open in a browser

### Interpreting Coverage Report

1. Look for files with low coverage (below 80%)
2. Focus on critical paths like:
   - Core business logic (payroll calculations, date generation)
   - API endpoints
   - Error handling code

3. Add tests to improve coverage for these areas

## Continuous Integration

Tests are automatically run in our CI/CD pipeline on GitHub Actions:

1. Every pull request triggers a test run
2. Tests must pass before merging is allowed
3. Coverage reports are generated and can be reviewed

### CI Test Flow

1. Code is pushed to a branch
2. GitHub Actions workflow runs:
   - Sets up Node.js environment
   - Installs dependencies
   - Sets up test database
   - Runs unit and integration tests
   - Runs E2E tests
   - Generates coverage report
3. Results are reported on the PR

### Expected Outcome

- Tests should pass in CI environment
- Coverage should meet minimum thresholds
- Failing tests block PR merging

## Test Data

Test data is defined in the `__mocks__/mockData.ts` file, which provides consistent mock objects for:

- Payrolls
- Clients
- Users
- Holidays

### Using Test Data

```typescript
import { mockPayrolls, mockClients } from '../../__mocks__/mockData';

test('should filter payrolls by client', () => {
  const filteredPayrolls = filterPayrollsByClient(mockPayrolls, mockClients[0].id);
  expect(filteredPayrolls).toHaveLength(1);
  expect(filteredPayrolls[0].client_id).toBe(mockClients[0].id);
});
```

### Extending Test Data

To add new mock data:

1. Edit `__mocks__/mockData.ts`
2. Add your new mock objects
3. Export them from the file
4. Import them in your tests

## Troubleshooting

### Common Test Issues

1. **Tests not finding components**
   - Check import paths
   - Verify component is correctly exported
   - Check case sensitivity in component names

2. **Async test failures**
   - Use `waitFor` or `findBy` queries for async operations
   - Add appropriate timeouts for longer operations
   - Check for proper error handling in tested components

3. **Mock data not being used**
   - Verify mock is correctly set up
   - Check that the mock matches the exact query/request being made
   - Ensure mock is registered before the test runs

### Debugging Tests

1. **Add console logs**

   ```typescript
   console.log('Current state:', result.current);
   ```

2. **Use test.only to run a single test**

   ```typescript
   test.only('should calculate tax correctly', () => {
     // Only this test will run
   });
   ```

3. **Use debugging tools**
   - Add `debugger` statements in your tests
   - Run Jest with the `--inspect-brk` flag
   - Connect Chrome DevTools for debugging

4. **Check test environment**
   - Verify environment variables are set correctly
   - Ensure dependencies are installed
   - Check for conflicting versions of testing libraries

## Advanced Testing Scenarios

### Testing Authentication Flows

1. Run authentication tests:

   ```bash
   pnpm test __tests__/unit/lib/auth
   ```

2. **Expected Outcome**:
   - Tests verify token generation, validation, and refresh
   - Role-based access control is correctly applied
   - Auth errors are properly handled

### Testing Error Boundaries

1. Run error boundary tests:

   ```bash
   pnpm test __tests__/components/common/error-boundary.test.tsx
   ```

2. **Expected Outcome**:
   - Tests verify error capture and display
   - Fallback UI is rendered when errors occur
   - Error reporting functions are called

### Testing Performance

1. Run performance tests:

   ```bash
   pnpm test:perf
   ```

2. **Expected Outcome**:
   - Tests measure render times and memory usage
   - Performance metrics are within acceptable thresholds
   - No memory leaks are detected

## Test Documentation

### Documenting Test Cases

When adding new tests, include detailed comments explaining:

- What's being tested
- Why it's important
- Any edge cases being covered

Example:

```typescript
/**
 * Tests the tax calculation function for various income scenarios
 * 
 * This is critical functionality as incorrect tax calculations 
 * would result in incorrect payroll processing.
 * 
 * Edge cases covered:
 * - Zero income (should return 0 tax)
 * - Negative income (should handle gracefully)
 * - Income at tax bracket boundaries
 * - Very high income values
 */
test('calculates tax correctly for various income levels', () => {
  // Test implementation
});
```

### Test Plan Template

For major features, create a test plan document that includes:

1. **Feature Description**: Brief overview of what's being tested
2. **Test Objectives**: What the tests aim to verify
3. **Test Scenarios**: Specific scenarios to test
4. **Test Data**: Required test data
5. **Expected Results**: What should happen in each scenario
6. **Actual Results**: Filled in after testing
7. **Pass/Fail Status**: Final status of each test case

This comprehensive approach ensures thorough testing and makes it easier to maintain and extend tests as the application evolves.
