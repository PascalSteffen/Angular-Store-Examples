describe('Lightweight', () => {
  beforeEach(() => {
    cy.intercept('POST', '/api/login', { fixture: 'auth.json' });
    cy.intercept('GET', '/api/todos', { fixture: 'todos.json' });
    cy.intercept('POST', '/api/todos', { fixture: 'newTodo.json' });
    cy.intercept('PATCH', '/api/todos/53', {
      fixture: 'updateTodo-lightweight.json',
    });
    cy.intercept('DELETE', '/api/todos/53', { fixture: 'todos.json' });

    cy.visit('/');
    cy.get('button').contains('Login').click();
  });

  it('go the Lightweight-Showcase and display the data', () => {
    cy.get('button').contains('Lightweight-Showcase').click();
    cy.get('h1').contains('Todo-List');
    cy.get('h3').contains('Buy clothes');
  });

  it('add new Data to behavior-Store', () => {
    cy.get('button').contains('Lightweight-Showcase').click();
    cy.get('mat-icon').contains('add').click();
    cy.get('input').type('Cypress Test Data');
    cy.get('button').contains('Add Todo').click();
  });

  it('update current data from the behavior-Store', () => {
    cy.get('button').contains('Lightweight-Showcase').click();

    cy.get('mat-icon').contains('edit').click();
    cy.get('input:first').clear();
    cy.get('input:first').type('Cypress test data updated');
    cy.get('button').contains('Update Todo').click();
  });

  it('delete current data from the behavior-Store', () => {
    cy.get('button').contains('Lightweight-Showcase').click();

    cy.get('mat-icon').contains('delete').click();
    cy.get('button').contains('Delete Todo').click();
  });
});
