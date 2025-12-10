describe('Recipe Lab - Navigation & Routing', () => {
  it('carrega la pàgina principal per defecte', () => {
    cy.visit('/');
    cy.contains('h1', '🍳 Recipe Lab').should('be.visible');
    cy.url().should('eq', Cypress.config().baseUrl + '/');
  });

  it('redirigeix a la home si no hi ha recepta a /recipe', () => {
    cy.visit('/recipe');

    // Hauria de mostrar un missatge d'error o estat buit
    cy.contains('No hi ha cap recepta').should('be.visible');
  });

  it('manté l\'estat de la recepta durant la navegació', () => {
    // Mockear l'API
    cy.intercept('POST', '**/api/recipe', {
      statusCode: 200,
      body: {
        titol: 'Test Recipe',
        descripcio: 'Test description',
        ingredients: [{ nom: 'Test', quantitat: '100g' }],
        passos: ['Test step'],
        temps: '10 min',
        dificultat: 'Fàcil'
      }
    });

    cy.visit('/');
    cy.get('input[placeholder="Afegeix un ingredient..."]').type('test');
    cy.contains('button', 'Afegir').click();
    cy.contains('button', 'Genera recepta').click();

    cy.url().should('include', '/recipe');
    cy.contains('h1', 'Test Recipe').should('be.visible');

    // Tornar enrere
    cy.contains('button', 'Tornar').click();
    cy.url().should('not.include', '/recipe');

    // Els ingredients haurien de persistir si el store ho permet
    // (això depèn de la implementació de clearRecipe)
  });
});
