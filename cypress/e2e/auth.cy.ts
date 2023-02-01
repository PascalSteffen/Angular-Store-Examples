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
});
