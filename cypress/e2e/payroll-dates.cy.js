describe('Payroll Dates Management', () => {
  beforeEach(() => {
    // Login before each test
    cy.login('admin@example.com', 'password123');
    
    // Navigate to payrolls page
    cy.visit('/payrolls');
    cy.contains('h2', 'Payrolls').should('be.visible');
  });
  
  it('should display payroll dates for a selected payroll', () => {
    // Click on the first payroll in the list
    cy.get('table tbody tr').first().click();
    
    // Should navigate to payroll details page
    cy.url().should('include', '/payrolls/');
    
    // Payroll dates should be displayed in a table
    cy.contains('h2', 'Payroll Dates').should('be.visible');
    cy.get('table').should('exist');
    cy.get('table tbody tr').should('have.length.at.least', 1);
    
    // Date columns should be visible
    cy.contains('th', 'Processing Date').should('be.visible');
    cy.contains('th', 'EFT Date').should('be.visible');
  });
  
  it('should allow regenerating payroll dates', () => {
    // Click on the first payroll in the list
    cy.get('table tbody tr').first().click();
    
    // Should navigate to payroll details page
    cy.url().should('include', '/payrolls/');
    
    // Find and click the regenerate dates button
    cy.contains('button', 'Regenerate Dates').click();
    
    // Confirm regeneration in the modal
    cy.contains('button', 'Confirm').click();
    
    // Should show success toast
    cy.contains('Payroll dates regenerated successfully').should('be.visible');
    
    // Table should contain the regenerated dates
    cy.get('table tbody tr').should('have.length.at.least', 1);
  });
  
  it('should allow editing a payroll date', () => {
    // Click on the first payroll in the list
    cy.get('table tbody tr').first().click();
    
    // Should navigate to payroll details page
    cy.url().should('include', '/payrolls/');
    
    // Click edit button on first date row
    cy.get('table tbody tr').first().find('button[aria-label="Edit"]').click();
    
    // Modal should appear with date inputs
    cy.contains('Edit Payroll Date').should('be.visible');
    
    // Change the processing date
    const newDate = '2023-06-15';
    cy.get('input[name="processing_date"]').clear().type(newDate);
    
    // Save changes
    cy.contains('button', 'Save Changes').click();
    
    // Should show success toast
    cy.contains('Payroll date updated successfully').should('be.visible');
    
    // Table should reflect the change
    cy.get('table tbody tr').first().should('contain', '15 Jun 2023');
  });
  
  it('should display appropriate error messages when date generation fails', () => {
    // Click on the first payroll in the list
    cy.get('table tbody tr').first().click();
    
    // Should navigate to payroll details page
    cy.url().should('include', '/payrolls/');
    
    // Intercept the regenerate request and mock a failure
    cy.intercept('POST', '/api/payroll-dates/generated', {
      statusCode: 500,
      body: {
        message: 'Failed to generate payroll dates'
      }
    }).as('generateDates');
    
    // Find and click the regenerate dates button
    cy.contains('button', 'Regenerate Dates').click();
    
    // Confirm regeneration in the modal
    cy.contains('button', 'Confirm').click();
    
    // Wait for the intercepted request
    cy.wait('@generateDates');
    
    // Should show error toast
    cy.contains('Failed to generate payroll dates').should('be.visible');
  });
});
