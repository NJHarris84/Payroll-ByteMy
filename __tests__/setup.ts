import '@testing-library/jest-dom';
import { server } from '../__mocks__/server';

// Establish API mocking before all tests
beforeAll(() => server.listen());

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests
afterEach(() => server.resetHandlers());

// Clean up after the tests are finished
afterAll(() => server.close());

// Mock Clerk authentication
jest.mock('@clerk/nextjs', () => ({
  auth: jest.fn(() => ({
    userId: 'test-user-id',
    getToken: jest.fn(() => Promise.resolve('mock-token'))
  })),
  useUser: jest.fn(() => ({
    isLoaded: true,
    isSignedIn: true,
    user: {
      id: 'test-user-id',
      firstName: 'Test',
      lastName: 'User',
      primaryEmailAddress: {
        emailAddress: 'test@example.com'
      }
    }
  })),
  useClerk: jest.fn(() => ({
    openUserProfile: jest.fn(),
    signOut: jest.fn()
  })),
  useSignIn: jest.fn(() => ({
    isLoaded: true,
    signIn: {
      create: jest.fn(),
      attemptFirstFactor: jest.fn()
    },
    setActive: jest.fn()
  }))
}));

// Mock Next.js router
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
    replace: jest.fn(),
    refresh: jest.fn(),
    back: jest.fn(),
    prefetch: jest.fn()
  })),
  useParams: jest.fn(() => ({})),
  usePathname: jest.fn(() => '/'),
  useSearchParams: jest.fn(() => ({ get: jest.fn() })),
  notFound: jest.fn()
}));

// Mock Apollo Client
jest.mock('@apollo/client', () => {
  const originalModule = jest.requireActual('@apollo/client');
  return {
    ...originalModule,
    useQuery: jest.fn(),
    useMutation: jest.fn(),
    useSubscription: jest.fn(),
    gql: originalModule.gql
  };
});
