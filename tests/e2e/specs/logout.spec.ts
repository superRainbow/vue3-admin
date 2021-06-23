import { LOGIN_DATA } from '@/utils/constants';

describe('home page', () => {
  // runs once before all tests in the block
  before(() => {
    cy.visit('/');
    cy.get('input[type=email]')
      .clear()
      .type(LOGIN_DATA.EMAIL);
    cy.get('input[type=password]')
      .clear()
      .type(LOGIN_DATA.PASSWORD);
    cy.get('.loginBtn').click();
    cy.url().should('include', '/home');
  });

  it('logout and redirect to login page', () => {
    cy.get('.avatar-container')
      .click()
      .then(() => {
        cy.contains('登出').click();
      });
    cy.url().should('include', '/login');
  });
});
