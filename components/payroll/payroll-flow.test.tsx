import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { GET_PAYROLL_BY_ID } from "@/lib/graphql/queries/payrolls/getPayrollById";
import { UPDATE_PAYROLL_DATE } from "@/lib/graphql/mutations/payroll_dates/updatePayrollDate";
import PayrollPage from '@/app/(dashboard)/payrolls/[id]/page';
import { useParams } from 'next/navigation';

// Mock next/navigation hooks
jest.mock('next/navigation', () => ({
  useParams: jest.fn(),
  useRouter: jest.fn(() => ({
    push: jest.fn(),
    back: jest.fn(),
    refresh: jest.fn()
  })),
  notFound: jest.fn()
}));

// Mock sonner toast
jest.mock('sonner', () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
    info: jest.fn()
  }
}));

// Sample data
const mockPayroll = {
  id: 'payroll-1',
  name: 'Test Payroll',
  status: 'active',
  payroll_system: 'Xero',
  processing_time: 2,
  client: {
    id: 'client-1',
    name: 'Test Client',
    contact_person: 'John Doe',
    contact_email: 'john@example.com'
  },
  payroll_cycle: {
    id: 'cycle-1',
    name: 'Weekly'
  },
  payroll_date_type: {
    id: 'type-1',
    name: 'DOW'
  },
  date_value: 5,
  day_value: null,
  userByPrimaryConsultantUserId: {
    id: 'user-1',
    name: 'Primary Consultant'
  },
  userByBackupConsultantUserId: {
    id: 'user-2',
    name: 'Backup Consultant'
  },
  userByManagerUserId: {
    id: 'user-3',
    name: 'Manager'
  },
  payroll_dates: [
    {
      id: 'date-1',
      processing_date: '2023-05-15',
      adjusted_eft_date: '2023-05-17',
      eft_date: '2023-05-17',
      payroll_id: 'payroll-1'
    }
  ]
};

// GraphQL mocks
const mocks = [
  {
    request: {
      query: GET_PAYROLL_BY_ID,
      variables: { id: 'payroll-1' }
    },
    result: {
      data: {
        payrolls: [mockPayroll]
      }
    }
  },
  {
    request: {
      query: UPDATE_PAYROLL_DATE,
      variables: {
        id: 'date-1',
        adjusted_eft_date: '2023-05-18'
      }
    },
    result: {
      data: {
        update_payroll_dates_by_pk: {
          id: 'date-1',
          processing_date: '2023-05-15',
          adjusted_eft_date: '2023-05-18',
          eft_date: '2023-05-17',
          payroll_id: 'payroll-1'
        }
      }
    }
  }
];

describe('Payroll Page Integration Flow', () => {
  beforeEach(() => {
    // Mock useParams to return payroll ID
    (useParams as jest.Mock).mockReturnValue({ id: 'payroll-1' });
  });
  
  test('renders payroll details and allows interaction', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <PayrollPage />
      </MockedProvider>
    );
    
    // Wait for data to load
    await waitFor(() => {
      expect(screen.getByText('Test Payroll')).toBeInTheDocument();
    });
    
    // Check that client info is displayed
    expect(screen.getByText('Test Client')).toBeInTheDocument();
    
    // Check that payroll dates are displayed
    expect(screen.getByText('May 15, 2023')).toBeInTheDocument();
    expect(screen.getByText('May 17, 2023')).toBeInTheDocument();
    
    // Check that export buttons are present
    expect(screen.getByText('Export CSV')).toBeInTheDocument();
    expect(screen.getByText('Export PDF')).toBeInTheDocument();
    
    // Check that edit button is present
    expect(screen.getByText('Edit Payroll')).toBeInTheDocument();
  });
  
  test('handles errors gracefully', async () => {
    // Create an error mock
    const errorMock = [
      {
        request: {
          query: GET_PAYROLL_BY_ID,
          variables: { id: 'payroll-1' }
        },
        error: new Error('An error occurred')
      }
    ];
    
    render(
      <MockedProvider mocks={errorMock} addTypename={false}>
        <PayrollPage />
      </MockedProvider>
    );
    
    // Wait for error to be displayed
    await waitFor(() => {
      expect(screen.getByText('Error Loading Payroll')).toBeInTheDocument();
    });
    
    // Check that error message is displayed
    expect(screen.getByText('An error occurred')).toBeInTheDocument();
    
    // Check that retry button is present
    expect(screen.getByText('Try Again')).toBeInTheDocument();
  });
  
  test('handles missing data gracefully', async () => {
    // Create a mock with empty payrolls array
    const emptyMock = [
      {
        request: {
          query: GET_PAYROLL_BY_ID,
          variables: { id: 'payroll-1' }
        },
        result: {
          data: {
            payrolls: []
          }
        }
      }
    ];
    
    // Mock notFound function to check it was called
    const notFoundMock = jest.fn();
    (require('next/navigation').notFound as jest.Mock).mockImplementation(notFoundMock);
    
    render(
      <MockedProvider mocks={emptyMock} addTypename={false}>
        <PayrollPage />
      </MockedProvider>
    );
    
    // Wait for not found to be called
    await waitFor(() => {
      expect(notFoundMock).toHaveBeenCalled();
    });
  });
});
