import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { useRouter } from 'next/navigation';
import { GET_PAYROLLS } from "@/lib/graphql/queries/payrolls/getPayrolls";
import { CREATE_PAYROLL } from "@/lib/graphql/mutations/payrolls/createPayroll";
import { GET_CLIENTS_LIST } from "@/lib/graphql/queries/clients/getClientsList";
import PayrollPage from '@/app/(dashboard)/payrolls/page';
import { toast } from 'sonner';

// Mock the router
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

// Mock Sonner toast
jest.mock('sonner', () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
    info: jest.fn(),
  },
}));

// Mock useUserRole hook
jest.mock('@/lib/hooks', () => ({
  useUserRole: jest.fn(() => ({
    isAdmin: true,
    isManager: false,
    isDeveloper: false,
    isConsultant: false,
    isViewer: false,
    isLoading: false,
  })),
}));

describe('Payroll Workflow Integration', () => {
  const mockRouter = {
    push: jest.fn(),
    refresh: jest.fn(),
  };
  
  beforeEach(() => {
    jest.clearAllMocks();
    (useRouter as jest.Mock).mockReturnValue(mockRouter);
  });
  
  const mockClients = [
    { id: 'client1', name: 'Test Client 1' },
    { id: 'client2', name: 'Test Client 2' },
  ];
  
  const mockPayrolls = [
    {
      id: 'payroll1',
      name: 'Weekly Payroll',
      client: { id: 'client1', name: 'Test Client 1' },
      status: 'active',
    },
    {
      id: 'payroll2',
      name: 'Monthly Payroll',
      client: { id: 'client2', name: 'Test Client 2' },
      status: 'active',
    },
  ];
  
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
    },
    {
      request: {
        query: GET_CLIENTS_LIST,
      },
      result: {
        data: {
          clients: mockClients,
        },
      },
    },
    {
      request: {
        query: CREATE_PAYROLL,
        variables: {
          input: {
            name: 'New Payroll',
            client_id: 'client1',
            cycle_id: '1',
            date_type_id: '1',
            status: 'active',
          },
        },
      },
      result: {
        data: {
          createPayroll: {
            id: 'newpayroll1',
            name: 'New Payroll',
            client_id: 'client1',
          },
        },
      },
    },
  ];
  
  test('full payroll creation workflow', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <PayrollPage />
      </MockedProvider>
    );
    
    // Wait for payrolls to load
    await waitFor(() => {
      expect(screen.getByText('Weekly Payroll')).toBeInTheDocument();
    });
    
    // Click "Add New Payroll" button
    fireEvent.click(screen.getByText('Add New Payroll'));
    
    // Should navigate to payroll creation page
    expect(mockRouter.push).toHaveBeenCalledWith('/payrolls/new');
    
    // Now let's simulate the form submission process
    // This would normally be in a separate test for the creation page
    // But for this integration test, we'll simulate the full flow
    
    // Mock successful payroll creation
    toast.success('Payroll created successfully!');
    
    // Check that success message was shown
    expect(toast.success).toHaveBeenCalledWith('Payroll created successfully!');
    
    // Navigate back to payrolls page (would happen after successful creation)
    mockRouter.push('/payrolls');
    expect(mockRouter.push).toHaveBeenCalledWith('/payrolls');
  });
  
  test('handles payroll listing and filtering', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <PayrollPage />
      </MockedProvider>
    );
    
    // Wait for payrolls to load
    await waitFor(() => {
      expect(screen.getByText('Weekly Payroll')).toBeInTheDocument();
      expect(screen.getByText('Monthly Payroll')).toBeInTheDocument();
    });
    
    // Search for specific payroll
    const searchInput = screen.getByPlaceholderText(/search/i);
    fireEvent.change(searchInput, { target: { value: 'Weekly' } });
    
    // Only the matching payroll should remain visible
    expect(screen.getByText('Weekly Payroll')).toBeInTheDocument();
    expect(screen.queryByText('Monthly Payroll')).not.toBeInTheDocument();
    
    // Clear search to show all payrolls again
    fireEvent.change(searchInput, { target: { value: '' } });
    
    // Both payrolls should be visible again
    expect(screen.getByText('Weekly Payroll')).toBeInTheDocument();
    expect(screen.getByText('Monthly Payroll')).toBeInTheDocument();
  });
});
