import React from 'react';
import { render, screen } from '@testing-library/react';
import { PayrollDetailsCard } from '@/components/payroll/payroll-details-card';

// Mock payroll data
const mockPayroll = {
  id: 'payroll-1',
  name: 'Test Payroll',
  status: 'active',
  payroll_system: 'Xero',
  processing_time: 2,
  payroll_cycle: {
    name: 'Weekly'
  },
  payroll_date_type: {
    name: 'DOW'
  },
  date_value: 5,
  day_value: null,
  userByPrimaryConsultantUserId: {
    name: 'Primary Consultant'
  },
  userByBackupConsultantUserId: {
    name: 'Backup Consultant'
  },
  userByManagerUserId: {
    name: 'Manager'
  },
  payroll_dates: [
    {
      processing_date: '2023-05-15',
      adjusted_eft_date: '2023-05-17'
    }
  ]
};

describe('PayrollDetailsCard', () => {
  test('renders payroll details correctly', () => {
    render(<PayrollDetailsCard payroll={mockPayroll} />);
    
    // Check that payroll details are displayed
    expect(screen.getByText('Payroll Details')).toBeInTheDocument();
    expect(screen.getByText('Test Payroll')).toBeInTheDocument();
    expect(screen.getByText('Weekly')).toBeInTheDocument();
    expect(screen.getByText('DOW')).toBeInTheDocument();
    expect(screen.getByText('Primary Consultant')).toBeInTheDocument();
    expect(screen.getByText('Backup Consultant')).toBeInTheDocument();
    expect(screen.getByText('Manager')).toBeInTheDocument();
    expect(screen.getByText('Xero')).toBeInTheDocument();
    expect(screen.getByText('2 days')).toBeInTheDocument();
  });
  
  test('handles missing data gracefully', () => {
    const incompletePayroll = {
      ...mockPayroll,
      payroll_cycle: null,
      payroll_date_type: null,
      userByPrimaryConsultantUserId: null,
      userByBackupConsultantUserId: null,
      userByManagerUserId: null
    };
    
    render(<PayrollDetailsCard payroll={incompletePayroll} />);
    
    // Check that N/A is displayed for missing data
    expect(screen.getByText('N/A')).toBeInTheDocument();
  });
  
  test('formats date value correctly for DOW type', () => {
    const dowPayroll = {
      ...mockPayroll,
      payroll_date_type: {
        name: 'DOW'
      },
      date_value: 5
    };
    
    render(<PayrollDetailsCard payroll={dowPayroll} />);
    
    // Day of week 5 should display as Friday
    expect(screen.getByText('Friday')).toBeInTheDocument();
  });
  
  test('formats date value correctly for SOM type', () => {
    const somPayroll = {
      ...mockPayroll,
      payroll_date_type: {
        name: 'SOM'
      }
    };
    
    render(<PayrollDetailsCard payroll={somPayroll} />);
    
    // SOM should display as 'Start of Month'
    expect(screen.getByText('Start of Month')).toBeInTheDocument();
  });
  
  test('formats date value correctly for EOM type', () => {
    const eomPayroll = {
      ...mockPayroll,
      payroll_date_type: {
        name: 'EOM'
      }
    };
    
    render(<PayrollDetailsCard payroll={eomPayroll} />);
    
    // EOM should display as 'End of Month'
    expect(screen.getByText('End of Month')).toBeInTheDocument();
  });
  
  test('formats date value correctly for fixed date', () => {
    const fixedDatePayroll = {
      ...mockPayroll,
      payroll_date_type: {
        name: 'Fixed'
      },
      date_value: 15
    };
    
    render(<PayrollDetailsCard payroll={fixedDatePayroll} />);
    
    // Fixed date 15 should display as '15th'
    expect(screen.getByText('15th')).toBeInTheDocument();
  });
  
  test('displays status badge correctly', () => {
    render(<PayrollDetailsCard payroll={mockPayroll} />);
    
    // Status should be displayed as a badge
    const statusBadge = screen.getByText('active');
    expect(statusBadge).toBeInTheDocument();
  });
});
