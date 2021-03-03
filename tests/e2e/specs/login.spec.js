// https://docs.cypress.io/api/introduction/api.html

describe('Login page', () => {
  it('go Login page', () => {
    cy.visit('/');
    cy.contains('h2', '後台系統');
  });

  it('name validate fail show error message', () => {
    cy.get('input[type=text]')
      .clear()
      .type('11');
    cy.get('.el-form-item__error').should('have.text', '長度在3-15之間');
  });

  it('loginBtn disabled when form validate failed', () => {
    cy.get('input[type=text]').clear();
    cy.get('input[type=password]').clear();
    cy.get('.loginBtn').should('be.disabled');
  });
});
