// Mock data for tests

export const mockPayrolls = [
  {
    id: 'payroll-1',
    name: 'Test Payroll 1',
    client_id: 'client-1',
    client: {
      id: 'client-1',
      name: 'Test Client 1',
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
    status: 'active',
    payroll_system: 'Xero',
    processing_time: 2,
    payroll_dates: [
      {
        id: 'date-1',
        processing_date: '2023-05-15',
        adjusted_eft_date: '2023-05-17'
      }
    ],
    userByPrimaryConsultantUserId: {
      id: 'user-1',
      name: 'Primary Consultant',
      leaves: []
    },
    userByBackupConsultantUserId: {
      id: 'user-2',
      name: 'Backup Consultant',
      leaves: []
    },
    userByManagerUserId: {
      id: 'user-3',
      name: 'Manager',
      leaves: []
    }
  },
  {
    id: 'payroll-2',
    name: 'Test Payroll 2',
    client_id: 'client-2',
    client: {
      id: 'client-2',
      name: 'Test Client 2',
      contact_person: 'Jane Smith',
      contact_email: 'jane@example.com'
    },
    payroll_cycle: {
      id: 'cycle-2',
      name: 'Monthly'
    },
    payroll_date_type: {
      id: 'type-2',
      name: 'EOM'
    },
    status: 'active',
    payroll_system: 'MYOB',
    processing_time: 3,
    payroll_dates: [
      {
        id: 'date-2',
        processing_date: '2023-05-30',
        adjusted_eft_date: '2023-06-01'
      }
    ],
    userByPrimaryConsultantUserId: {
      id: 'user-1',
      name: 'Primary Consultant',
      leaves: []
    },
    userByBackupConsultantUserId: {
      id: 'user-2',
      name: 'Backup Consultant',
      leaves: []
    },
    userByManagerUserId: {
      id: 'user-3',
      name: 'Manager',
      leaves: []
    }
  }
];

export const mockClients = [
  {
    id: 'client-1',
    name: 'Test Client 1',
    contact_person: 'John Doe',
    contact_email: 'john@example.com',
    contact_phone: '123-456-7890',
    active: true,
    created_at: '2023-01-01T00:00:00.000Z',
    updated_at: '2023-01-01T00:00:00.000Z',
    payrolls: [mockPayrolls[0]]
  },
  {
    id: 'client-2',
    name: 'Test Client 2',
    contact_person: 'Jane Smith',
    contact_email: 'jane@example.com',
    contact_phone: '987-654-3210',
    active: true,
    created_at: '2023-01-02T00:00:00.000Z',
    updated_at: '2023-01-02T00:00:00.000Z',
    payrolls: [mockPayrolls[1]]
  }
];

export const mockUsers = [
  {
    id: 'user-1',
    name: 'John Admin',
    email: 'john@example.com',
    role: 'admin',
    manager_id: null,
    leaves: []
  },
  {
    id: 'user-2',
    name: 'Jane Manager',
    email: 'jane@example.com',
    role: 'manager',
    manager_id: 'user-1',
    leaves: []
  },
  {
    id: 'user-3',
    name: 'Bob Consultant',
    email: 'bob@example.com',
    role: 'consultant',
    manager_id: 'user-2',
    leaves: [
      {
        id: 'leave-1',
        start_date: '2023-06-01',
        end_date: '2023-06-07',
        leave_type: 'Annual Leave',
        reason: 'Vacation',
        status: 'Approved'
      }
    ]
  }
];

export const mockHolidays = [
  {
    id: 'holiday-1',
    date: '2023-01-01',
    local_name: 'New Year\'s Day',
    country_code: 'AU',
    region: 'National',
    types: ['Public']
  },
  {
    id: 'holiday-2',
    date: '2023-01-26',
    local_name: 'Australia Day',
    country_code: 'AU',
    region: 'National',
    types: ['Public']
  },
  {
    id: 'holiday-3',
    date: '2023-04-07',
    local_name: 'Good Friday',
    country_code: 'AU',
    region: 'National',
    types: ['Public']
  }
];
