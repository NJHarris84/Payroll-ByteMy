describe("Authentication", () => {
  beforeEach(() => {
    // Mock Clerk authentication - needed because Cypress can't directly interact with Clerk
    cy.intercept('POST', 'https://clerk.*.com/**', {
      statusCode: 200,
      body: { status: "complete", createdSessionId: "test-session-id" }
    }).as('clerkAuth');
    
    // Mock token endpoint
    cy.intercept('GET', '/api/auth/token', {
      statusCode: 200,
      body: { token: 'test-token' }
    }).as('getToken');
  });

  it("should allow users to sign in", () => {
    // Visit sign-in page
    cy.visit('/sign-in');
    
    // Fill in the sign-in form
    cy.get('input[type="email"]').type('test@example.com');
    cy.get('input[type="password"]').type('password123');
    
    // Submit the form
    cy.contains('button', 'Sign In').click();
    
    // Wait for Clerk authentication request
    cy.wait('@clerkAuth');
    
    // Should redirect to dashboard after successful sign-in
    cy.url().should('include', '/dashboard');
  });

  it("should show error message on invalid credentials", () => {
    // Override the Clerk intercept to return an error
    cy.intercept('POST', 'https://clerk.*.com/**', {
      statusCode: 401,
      body: { 
        errors: [{ message: "Invalid email or password" }]
      }
    }).as('clerkAuthError');
    
    // Visit sign-in page
    cy.visit('/sign-in');
    
    // Fill in the sign-in form with invalid credentials
    cy.get('input[type="email"]').type('wrong@example.com');
    cy.get('input[type="password"]').type('wrongpassword');
    
    // Submit the form
    cy.contains('button', 'Sign In').click();
    
    // Wait for Clerk authentication request
    cy.wait('@clerkAuthError');
    
    // Should show error message
    cy.contains('Invalid email or password').should('be.visible');
  });

  it("should handle password reset flow", () => {
    // Visit sign-in page
    cy.visit('/sign-in');
    
    // Click forgot password link
    cy.contains('Forgot password?').click();
    
    // Verify we're on the reset password page
    cy.contains('Reset Password').should('be.visible');
    
    // Enter email for password reset
    cy.get('input[type="email"]').type('test@example.com');
    
    // Mock the password reset API call
    cy.intercept('POST', 'https://clerk.*.com/**', {
      statusCode: 200,
      body: { status: "complete" }
    }).as('resetPassword');
    
    // Submit reset password form
    cy.contains('button', 'Send Reset Code').click();
    
    // Wait for reset password request
    cy.wait('@resetPassword');
    
    // Should now show the form to enter code and new password
    cy.contains('Create New Password').should('be.visible');
    
    // Enter reset code and new password
    cy.get('input#reset-code').type('123456');
    cy.get('input#new-password').type('newpassword123');
    
    // Submit new password form
    cy.contains('button', 'Reset Password').click();
    
    // Should redirect to dashboard after successful password reset
    cy.url().should('include', '/dashboard');
  });

  it("should redirect unauthenticated users to sign-in", () => {
    // Override the auth intercept to return unauthorized
    cy.intercept('GET', '/api/auth/token', {
      statusCode: 401,
      body: { error: "Not authenticated" }
    }).as('authError');
    
    // Try to visit protected page
    cy.visit('/dashboard');
    
    // Should redirect to sign-in page
    cy.url().should('include', '/sign-in');
  });
});
