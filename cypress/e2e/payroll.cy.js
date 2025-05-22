describe("Payroll Management", () => {
  beforeEach(() => {
    // Simulate authentication
    cy.intercept('GET', '/api/auth/token', {
      statusCode: 200,
      body: { token: 'test-token' }
    }).as('getToken');

    // Mock GraphQL responses
    cy.intercept('POST', '/api/graphql', (req) => {
      if (req.body.operationName === 'GetPayrolls') {
        req.reply({
          body: {
            data: {
              payrolls: [
                {
                  id: 'payroll-1',
                  name: 'New Test Payroll',
                  client: {
                    id: 'client-1',
                    name: 'Test Client'
                  },
                  status: 'active',
                  payroll_cycle: { name: 'Weekly' },
                  payroll_date_type: { name: 'DOW' }
                },
                {
                  id: 'payroll-2',
                  name: 'Another Payroll',
                  client: {
                    id: 'client-2',
                    name: 'Another Client'
                  },
                  status: 'active',
                  payroll_cycle: { name: 'Monthly' },
                  payroll_date_type: { name: 'EOM' }
                }
              ]
            }
          }
        });
      } else if (req.body.operationName === 'GetPayrollById') {
        req.reply({
          body: {
            data: {
              payrolls: [
                {
                  id: 'payroll-1',
                  name: 'New Test Payroll',
                  status: 'active',
                  client: {
                    id: 'client-1',
                    name: 'Test Client',
                    contact_person: 'John Doe',
                    contact_email: 'john@example.com'
                  },
                  payroll_cycle: { name: 'Weekly' },
                  payroll_date_type: { name: 'DOW' },
                  date_value: 5,
                  payroll_system: 'Xero',
                  processing_time: 2,
                  userByPrimaryConsultantUserId: { name: 'Primary Consultant' },
                  userByBackupConsultantUserId: { name: 'Backup Consultant' },
                  userByManagerUserId: { name: 'Manager' },
                  payroll_dates: [
                    {
                      id: 'date-1',
                      processing_date: '2023-05-15',
                      adjusted_eft_date: '2023-05-17'
                    }
                  ]
                }
              ]
            }
          }
        });
      }
    }).as('graphqlQueries');

    // Visit the payrolls page
    cy.visit('/payrolls');
    cy.wait('@getToken');
    cy.wait('@graphqlQueries');
  });

  it("creates a new payroll", () => {
    cy.visit("/payrolls/new")
    cy.get('input[name="name"]').type("New Test Payroll")
    cy.get('select[name="client_id"]').select("1")
    cy.get('select[name="cycle_id"]').select("1")
    cy.get('select[name="date_type_id"]').select("1")
    cy.get('input[name="processing_days_before_eft"]').type("2")
    cy.get('button[type="submit"]').click()

    cy.url().should("include", "/payrolls")
    cy.contains("New Test Payroll").should("be.visible")
  })

  it("lists payrolls and allows filtering", () => {
    // Check that payrolls are listed
    cy.contains('New Test Payroll').should('be.visible');
    cy.contains('Another Payroll').should('be.visible');
    
    // Filter by name
    cy.get('input[placeholder="Filter payrolls..."]').type('New');
    cy.contains('New Test Payroll').should('be.visible');
    cy.contains('Another Payroll').should('not.exist');
    
    // Clear filter
    cy.get('input[placeholder="Filter payrolls..."]').clear();
    cy.contains('Another Payroll').should('be.visible');
  });

  it("views payroll details", () => {
    // Click on a payroll to view details
    cy.contains('New Test Payroll').click();
    cy.wait('@graphqlQueries');
    
    // Check URL and page content
    cy.url().should("include", "/payrolls/")
      .then($url => {
        if (!$url.includes("/payrolls/")) {
          throw new Error("Not on the payroll details page");
        }
      });
    
    // Check if elements exist before asserting on them
    cy.get("body").then($body => {
      if ($body.find("h1:contains('New Test Payroll')").length === 0) {
        cy.log("Warning: 'New Test Payroll' header not found");
      }
    });
    
    cy.contains("Payroll Details").should("be.visible")
    cy.contains("New Test Payroll").should("be.visible")
    
    // Check client and payroll details
    cy.contains('Test Client').should('be.visible');
    cy.contains('Weekly').should('be.visible');
    cy.contains('Primary Consultant').should('be.visible');
    
    // Check payroll dates
    cy.contains('May 15, 2023').should('be.visible');
    cy.contains('May 17, 2023').should('be.visible');
  });

  it("allows exporting payroll data", () => {
    // Navigate to payroll detail
    cy.contains('New Test Payroll').click();
    cy.wait('@graphqlQueries');
    
    // Mock CSV export endpoint
    cy.intercept('GET', '/api/payrolls/*/export/csv', {
      statusCode: 200,
      headers: {
        'Content-Type': 'text/csv',
        'Content-Disposition': 'attachment; filename="payroll-export.csv"'
      },
      body: 'Date,Processing Date,EFT Date\n2023-05-15,2023-05-17'
    }).as('exportCSV');
    
    // Click export CSV button
    cy.contains('Export CSV').click();
    cy.wait('@exportCSV');
    
    // Mock PDF export endpoint
    cy.intercept('GET', '/api/payrolls/*/export/pdf', {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="payroll-export.pdf"'
      },
      body: 'PDF content'
    }).as('exportPDF');
    
    // Click export PDF button
    cy.contains('Export PDF').click();
    cy.wait('@exportPDF');
  });

  it("handles errors gracefully", () => {
    // Override the intercept to return an error
    cy.intercept('POST', '/api/graphql', (req) => {
      if (req.body.operationName === 'GetPayrollById') {
        req.reply({
          statusCode: 500,
          body: {
            errors: [{ message: 'Server error occurred' }]
          }
        });
      }
    }).as('graphqlError');
    
    // Click on a payroll to view details
    cy.contains('New Test Payroll').click();
    cy.wait('@graphqlError');
    
    // Check that error message is displayed
    cy.contains('Error Loading Payroll').should('be.visible');
    cy.contains('Server error occurred').should('be.visible');
    
    // Check that retry button works
    cy.intercept('POST', '/api/graphql', (req) => {
      if (req.body.operationName === 'GetPayrollById') {
        req.reply({
          body: {
            data: {
              payrolls: [
                {
                  id: 'payroll-1',
                  name: 'New Test Payroll',
                  status: 'active',
                  client: {
                    id: 'client-1',
                    name: 'Test Client'
                  },
                  payroll_cycle: { name: 'Weekly' },
                  payroll_date_type: { name: 'DOW' },
                  payroll_dates: []
                }
              ]
            }
          }
        });
      }
    }).as('retryQuery');
    
    cy.contains('Try Again').click();
    cy.wait('@retryQuery');
    
    // Check that content is now displayed
    cy.contains('New Test Payroll').should('be.visible');
  });
});

