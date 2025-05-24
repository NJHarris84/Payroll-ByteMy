import { render, screen, fireEvent } from "@testing-library/react";
import { useQuery } from "@apollo/client";

import { PayrollListCard } from "@/components/payroll";

import { mockPayrolls } from "../../../../__mocks__/mockData";

// Mock the Apollo useQuery hook
jest.mock('@apollo/client', () => ({
  ...jest.requireActual('@apollo/client'),
  useQuery: jest.fn(),
}));

// Mock the useUserRole hook
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

describe('PayrollListCard', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    
    // Setup default mock for useQuery
    (useQuery as jest.Mock).mockReturnValue({
      loading: false,
      error: null,
      data: { payrolls: mockPayrolls },
      refetch: jest.fn(),
    });
  });

  test('renders payroll list with correct data', () => {
    render(<PayrollListCard searchQuery="" onSearchChange={jest.fn()} />);
    
    // Check if payroll names are displayed
    expect(screen.getByText('Test Payroll 1')).toBeInTheDocument();
    expect(screen.getByText('Test Payroll 2')).toBeInTheDocument();
    
    // Check if client names are displayed
    expect(screen.getByText('Test Client 1')).toBeInTheDocument();
    expect(screen.getByText('Test Client 2')).toBeInTheDocument();
  });

  test('displays loading state when data is loading', () => {
    (useQuery as jest.Mock).mockReturnValue({
      loading: true,
      error: null,
      data: null,
      refetch: jest.fn(),
    });
    
    render(<PayrollListCard searchQuery="" onSearchChange={jest.fn()} />);
    
    // Should show loading indicator
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('displays error message when query fails', () => {
    (useQuery as jest.Mock).mockReturnValue({
      loading: false,
      error: new Error('Failed to load payrolls'),
      data: null,
      refetch: jest.fn(),
    });
    
    render(<PayrollListCard searchQuery="" onSearchChange={jest.fn()} />);
    
    // Should show error message
    expect(screen.getByText(/error/i)).toBeInTheDocument();
  });

  test('filters payrolls based on search query', () => {
    const onSearchChange = jest.fn();
    
    render(<PayrollListCard searchQuery="Test Payroll 1" onSearchChange={onSearchChange} />);
    
    // Should only show payroll 1
    expect(screen.getByText('Test Payroll 1')).toBeInTheDocument();
    expect(screen.queryByText('Test Payroll 2')).not.toBeInTheDocument();
  });

  test('handles search input change', () => {
    const onSearchChange = jest.fn();
    
    render(<PayrollListCard searchQuery="" onSearchChange={onSearchChange} />);
    
    // Find the search input and change its value
    const searchInput = screen.getByPlaceholderText(/search/i);
    fireEvent.change(searchInput, { target: { value: 'Test Payroll 1' } });
    
    // Callback should be called with the new value
    expect(onSearchChange).toHaveBeenCalledWith('Test Payroll 1');
  });
});
