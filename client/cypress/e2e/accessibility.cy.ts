describe('Recipe Lab - Accessibility', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('té label associat als inputs', () => {
    cy.get('label[for="ingredient-input"]').should('exist');
    cy.get('input#ingredient-input').should('exist');
  });

  it('té role="alert" als missatges d\'error', () => {
    cy.intercept('POST', '**/api/recipe', {
      statusCode: 500,
      body: { error: 'Error' }
    });

    cy.get('input[placeholder="Afegeix un ingredient..."]').type('test');
    cy.contains('button', 'Afegir').click();
    cy.contains('button', 'Genera recepta').click();

    cy.get('[role="alert"]').should('exist');
  });

  it('permet afegir ingredients amb Enter', () => {
    cy.get('input[placeholder="Afegeix un ingredient..."]')
      .focus()
      .type('ingredient{enter}');

    cy.get('.chip').should('contain', 'ingredient');
  });

  it('els botons tenen type correcte', () => {
    cy.get('button[type="submit"]').should('exist');
    cy.get('button[type="button"]').should('exist');
  });

  it('té heading hierarchy correcta', () => {
    cy.get('h1').should('have.length', 1);

    // Afegir ingredients per veure el h2
    cy.get('input[placeholder="Afegeix un ingredient..."]').type('test');
    cy.contains('button', 'Afegir').click();
    cy.get('h2').should('exist');
  });
});
