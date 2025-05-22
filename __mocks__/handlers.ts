import { graphql, rest } from 'msw';
import { mockPayrolls, mockClients, mockUsers, mockHolidays } from './mockData';

export const handlers = [
  // GraphQL handlers
  graphql.query('GetPayrolls', (req, res, ctx) => {
    return res(
      ctx.data({
        payrolls: mockPayrolls
      })
    );
  }),

  graphql.query('GetPayrollById', (req, res, ctx) => {
    const { id } = req.variables;
    const payroll = mockPayrolls.find(p => p.id === id);
    
    if (!payroll) {
      return res(
        ctx.errors([
          { message: 'Payroll not found' }
        ])
      );
    }
    
    return res(
      ctx.data({
        payrolls: [payroll]
      })
    );
  }),

  graphql.query('GetClients', (req, res, ctx) => {
    return res(
      ctx.data({
        clients: mockClients
      })
    );
  }),

  graphql.query('GetClientById', (req, res, ctx) => {
    const { id } = req.variables;
    const client = mockClients.find(c => c.id === id);
    
    if (!client) {
      return res(
        ctx.errors([
          { message: 'Client not found' }
        ])
      );
    }
    
    return res(
      ctx.data({
        clients_by_pk: client
      })
    );
  }),

  graphql.query('GetStaffList', (req, res, ctx) => {
    return res(
      ctx.data({
        users: mockUsers
      })
    );
  }),

  graphql.query('GetHolidays', (req, res, ctx) => {
    return res(
      ctx.data({
        holidays: mockHolidays
      })
    );
  }),

  // Mutations
  graphql.mutation('CreateClient', (req, res, ctx) => {
    const { input } = req.variables;
    return res(
      ctx.data({
        createClient: {
          id: 'new-client-id',
          name: input.name,
          contact_person: input.contact_person,
          contact_email: input.contact_email,
          contact_phone: input.contact_phone,
          active: input.active
        }
      })
    );
  }),

  graphql.mutation('CreatePayroll', (req, res, ctx) => {
    const { input } = req.variables;
    return res(
      ctx.data({
        createPayroll: {
          id: 'new-payroll-id',
          name: input.name,
          client_id: input.client_id
        }
      })
    );
  }),

  // REST API handlers
  rest.post('/api/holidays/sync', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        success: true,
        imported: 12,
        message: 'Successfully imported holidays'
      })
    );
  }),

  rest.post('/api/cron/generate-batch', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        success: true,
        processed: 5,
        total: 5,
        message: 'Successfully generated dates for 5 payrolls'
      })
    );
  }),

  rest.get('/api/auth/token', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        token: 'mock-auth-token'
      })
    );
  }),

  rest.post('/api/chat', async (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        content: 'This is a response from the AI assistant.'
      })
    );
  })
];
