describe("Client Management", () => {
  beforeEach(() => {
    // Simulate authentication
    cy.intercept('GET', '/api/auth/token', {
      statusCode: 200,
      body: { token: 'test-token' }
    }).as('getToken');

    // Mock GraphQL responses for clients query
    cy.intercept('POST', '/api/graphql', (req) => {
      if (req.body.operationName === 'GetClients') {
        req.reply({
          body: {
            data: {
              clients: [
                {
                  id: 'client-1',
                  name: 'Test Client',
                  contact_person: 'John Doe',
                  contact_email: 'john@example.com',
                  contact_phone: '123-456-7890',
                  active: true,
                  created_at: '2023-01-01T00:00:00.000Z',
                  updated_at: '2023-01-02T00:00:00.000Z',
                  payrolls: [
                    {
                      id: 'payroll-1',
                      name: 'Weekly Payroll',
                      status: 'active'
                    }
                  ]
                },
                {
                  id: 'client-2',
                  name: 'Another Client',
                  contact_person: 'Jane Smith',
                  contact_email: 'jane@example.com',
                  contact_phone: '987-654-3210',
                  active: true,
                  created_at: '2023-01-03T00:00:00.000Z',
                  updated_at: '2023-01-04T00:00:00.000Z',
                  payrolls: []
                }
              ]
            }
          }
        });
      }
    }).as('getClients');

    // Visit the clients page
    cy.visit('/clients');
    cy.wait('@getToken');
    cy.wait('@getClients');
  });

  it("should display a list of clients", () => {
    // Check that clients are listed
    cy.contains('Test Client').should('be.visible');
    cy.contains('Another Client').should('be.visible');
    cy.contains('john@example.com').should('be.visible');
    cy.contains('jane@example.com').should('be.visible');
  });

  it("should navigate to client details page", () => {
    // Mock the client details query
    cy.intercept('POST', '/api/graphql', (req) => {
      if (req.body.operationName === 'GetClientById') {
        req.reply({
          body: {
            data: {
              clients_by_pk: {
                id: 'client-1',
                name: 'Test Client',
                contact_person: 'John Doe',
                contact_email: 'john@example.com',
                contact_phone: '123-456-7890',
                active: true,
                created_at: '2023-01-01T00:00:00.000Z',
                updated_at: '2023-01-02T00:00:00.000Z',
                payrolls: [
                  {
                    id: 'payroll-1',
                    name: 'Weekly Payroll',
                    status: 'active',
                    payroll_cycle: { name: 'Weekly' },
                    payroll_date_type: { name: 'DOW' }
                  }
                ]
              }
            }
          }
        });
      }
    }).as('getClientById');

    // Click on a client to view details
    cy.contains('Test Client').click();
    cy.wait('@getClientById');

    // Check URL and page content
    cy.url().should('include', '/clients/');
    cy.contains('h1', 'Test Client').should('be.visible');
    cy.contains('Client Details').should('be.visible');
    cy.contains('John Doe').should('be.visible');
    cy.contains('Weekly Payroll').should('be.visible');
  });

  it("should create a new client", () => {
    // Mock the create client mutation
    cy.intercept('POST', '/api/graphql', (req) => {
      if (req.body.operationName === 'CreateClient') {
        req.reply({
          body: {
            data: {
              createClient: {
                id: 'new-client-id',
                name: 'New Test Client',
                contact_person: 'New Contact',
                contact_email: 'new@example.com',
                contact_phone: '555-123-4567',
                active: true
              }
            }
          }
        });
      }
    }).as('createClient');

    // Click on add new client button
    cy.contains('Add New Client').click();

    // Fill in the form
    cy.get('input[name="name"]').type('New Test Client');
    cy.get('input[name="contactPerson"]').type('New Contact');
    cy.get('input[name="contactEmail"]').type('new@example.com');
    cy.get('input[name="contactPhone"]').type('555-123-4567');

    // Submit the form
    cy.contains('button', 'Create Client').click();
    cy.wait('@createClient');

    // Should redirect to client page after successful creation
    cy.url().should('include', '/clients/new-client-id');
  });

  it("should filter clients by name", () => {
    // Type in the search box
    cy.get('input[placeholder*="Filter"]').type('Another');

    // Check that filtered results are displayed
    cy.contains('Another Client').should('be.visible');
    cy.contains('Test Client').should('not.exist');

    // Clear the filter
    cy.get('input[placeholder*="Filter"]').clear();

    // All clients should be visible again
    cy.contains('Test Client').should('be.visible');
    cy.contains('Another Client').should('be.visible');
  });

  it("should handle errors gracefully", () => {
    // Override the intercept to return an error
    cy.intercept('POST', '/api/graphql', (req) => {
      if (req.body.operationName === 'GetClients') {
        req.reply({
          statusCode: 500,
          body: {
            errors: [{ message: 'Failed to load clients' }]
          }
        });
      }
    }).as('getClientsError');

    // Reload the page to trigger the error
    cy.reload();
    cy.wait('@getClientsError');

    // Check that error message is displayed
    cy.contains('Error: Failed to load clients').should('be.visible');
  });
});
