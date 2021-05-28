import { LOGIN_DATA } from '@/utils/constants';

describe('Login page', () => {
  it('not login to home page', () => {
    cy.visit('/home');
    cy.url().should('match', /login/);
  });

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

  it('login redirect to home page', () => {
    cy.get('input[type=text]')
      .clear()
      .type(LOGIN_DATA.NAME);
    cy.get('input[type=password]')
      .clear()
      .type(LOGIN_DATA.PASSWORD);
    cy.get('.loginBtn').click();
    cy.url().should('include', '/home');
  });
});
