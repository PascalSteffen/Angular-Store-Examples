describe('Auth', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.intercept('POST', '/api/login', { fixture: 'auth.json' });
  });

  it('login and logout', () => {
    cy.get('button').contains('Login').click();
    cy.get('mat-icon').contains('logout').click();
  });

  it('check auth-guard-reverse', () => {
    cy.get('button').contains('Login').click();
    cy.go('back');
    cy.get('h1').contains('Take your options to see the difference.');
  });

  it('check password-strength-validator if button disabled', () => {
    cy.get('button').contains('Create User').click();
    cy.get('input[id=mat-input-2]').type('test@mail.com');
    cy.get('input[id=mat-input-3]').type('abcd1234');
    cy.get('input[id=mat-input-2]').click();
    cy.get('mat-error').contains(
      'Your password must have lower case, upper case and numeric chars.'
    );
  });

  it('check password-strength-validator if button enabled', () => {
    cy.get('button').contains('Create User').click();
    cy.get('input[id=mat-input-2]').type('test@mail.com');
    cy.get('input[id=mat-input-3]').type('Abcd1234');
    cy.get('input[id=mat-input-2]').click();
    cy.get('button').contains('Create User').should('not.be.disabled');
  });
});
