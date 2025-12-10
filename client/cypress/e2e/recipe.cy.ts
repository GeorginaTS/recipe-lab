describe('Recipe Lab - Recipe Generation', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('navega a la pàgina de recepta després de generar-la', () => {
    // Afegir ingredients
    cy.get('input[placeholder="Afegeix un ingredient..."]').type('ous');
    cy.contains('button', 'Afegir').click();
    cy.get('input[placeholder="Afegeix un ingredient..."]').type('patates');
    cy.contains('button', 'Afegir').click();

    // Interceptar la crida a l'API
    cy.intercept('POST', '**/api/recipe', {
      statusCode: 200,
      body: {
        titol: 'Truita de patates',
        descripcio: 'Una truita tradicional espanyola',
        ingredients: [
          { nom: 'Ous', quantitat: '4', unitat: 'unitats' },
          { nom: 'Patates', quantitat: '500', unitat: 'g' }
        ],
        passos: [
          'Pela i talla les patates en rodanxes fines',
          'Fregeix les patates amb oli abundant',
          'Barreja els ous batuts amb les patates',
          'Fes la truita a foc mitjà'
        ],
        temps: '30 min',
        dificultat: 'Fàcil'
      }
    }).as('generateRecipe');

    // Generar recepta
    cy.contains('button', 'Genera recepta').click();

    // Esperar la crida a l'API
    cy.wait('@generateRecipe');

    // Verificar navegació
    cy.url().should('include', '/recipe');
  });

  it('mostra l\'estat de càrrega mentre genera la recepta', () => {
    cy.get('input[placeholder="Afegeix un ingredient..."]').type('arròs');
    cy.contains('button', 'Afegir').click();

    cy.intercept('POST', '**/api/recipe', (req) => {
      req.reply((res) => {
        res.delay = 2000;
        res.send({
          titol: 'Arròs blanc',
          descripcio: 'Arròs simple',
          ingredients: [{ nom: 'Arròs', quantitat: '200g' }],
          passos: ['Bullir l\'arròs'],
          temps: '20 min',
          dificultat: 'Fàcil'
        });
      });
    });

    cy.contains('button', 'Genera recepta').click();
    cy.contains('Generant recepta...').should('be.visible');
  });

  it('mostra un error si la generació falla', () => {
    cy.get('input[placeholder="Afegeix un ingredient..."]').type('ingredient');
    cy.contains('button', 'Afegir').click();

    cy.intercept('POST', '**/api/recipe', {
      statusCode: 500,
      body: { error: 'Internal Server Error' }
    });

    cy.contains('button', 'Genera recepta').click();

    cy.get('.error').should('be.visible');
  });
});
