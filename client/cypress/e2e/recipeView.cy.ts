describe('Recipe Lab - Recipe View', () => {
  beforeEach(() => {
    // Mockear la recepta
    cy.intercept('POST', '**/api/recipe', {
      statusCode: 200,
      body: {
        titol: 'Paella Valenciana',
        descripcio: 'La paella tradicional valenciana amb pollastre i conill',
        ingredients: [
          { nom: 'Arròs', quantitat: '400', unitat: 'g' },
          { nom: 'Pollastre', quantitat: '300', unitat: 'g' },
          { nom: 'Conill', quantitat: '300', unitat: 'g' },
          { nom: 'Garrofó', quantitat: '200', unitat: 'g' },
          { nom: 'Ferradura', quantitat: '150', unitat: 'g' }
        ],
        passos: [
          'Sofregir la carn amb oli d\'oliva',
          'Afegir les verdures i sofregir',
          'Afegir l\'arròs i remenar',
          'Afegir el brou calent',
          'Deixar coure a foc mitjà durant 18-20 minuts'
        ],
        temps: '60 min',
        dificultat: 'Mitjana',
        variants: [
          { nom: 'Paella de marisc', descripcio: 'Substituir la carn per gambes i cloïsses' },
          { nom: 'Paella mixta', descripcio: 'Combinar carn i marisc' }
        ]
      }
    }).as('getRecipe');

    // Navegar i generar recepta
    cy.visit('/');
    cy.get('input[placeholder="Afegeix un ingredient..."]').type('arròs');
    cy.contains('button', 'Afegir').click();
    cy.contains('button', 'Genera recepta').click();
    cy.wait('@getRecipe');
  });

  it('mostra el títol i descripció de la recepta', () => {
    cy.contains('h1', 'Paella Valenciana').should('be.visible');
    cy.contains('La paella tradicional valenciana amb pollastre i conill').should('be.visible');
  });

  it('mostra els badges de temps i dificultat', () => {
    cy.contains('60 min').should('be.visible');
    cy.contains('Mitjana').should('be.visible');
  });

  it('mostra la llista d\'ingredients amb quantitats', () => {
    cy.contains('Ingredients').should('be.visible');

    cy.get('.ingredients-list li').should('have.length', 5);
    cy.contains('.ingredient-name', 'Arròs').should('be.visible');
    cy.contains('.ingredient-quantity', '400 g').should('be.visible');
  });

  it('mostra els passos numerats', () => {
    cy.contains('Passos').should('be.visible');

    cy.get('.steps-list li').should('have.length', 5);
    cy.get('.steps-list li')
      .first()
      .should('contain', 'Sofregir la carn amb oli d\'oliva');
  });

  it('mostra les variants de la recepta', () => {
    cy.contains('Variants').should('be.visible');

    cy.get('.variant-card').should('have.length', 2);
    cy.contains('h3', 'Paella de marisc').should('be.visible');
    cy.contains('Substituir la carn per gambes i cloïsses').should('be.visible');
  });

  it('el botó "Tornar" navega a la pàgina principal', () => {
    cy.contains('button', 'Tornar').click();

    cy.url().should('eq', Cypress.config().baseUrl + '/');
    cy.contains('h1', '🍳 Recipe Lab').should('be.visible');
  });
});
