describe('Recipe Lab - Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('mostra el títol i subtítol correctament', () => {
    cy.contains('h1', '🍳 Recipe Lab').should('be.visible');
    cy.contains('Genera receptes delicioses amb els ingredients que tens a la nevera').should(
      'be.visible'
    );
  });

  it('permet afegir ingredients', () => {
    cy.get('input[placeholder="Afegeix un ingredient..."]').type('tomàquets');
    cy.contains('button', 'Afegir').click();

    cy.contains('Els teus ingredients:').should('be.visible');
    cy.get('.chip').should('contain', 'tomàquets');
  });

  it('permet afegir múltiples ingredients', () => {
    const ingredients = ['tomàquets', 'ceba', 'all'];

    ingredients.forEach((ingredient) => {
      cy.get('input[placeholder="Afegeix un ingredient..."]').type(ingredient);
      cy.contains('button', 'Afegir').click();
    });

    cy.get('.chip').should('have.length', 3);
    ingredients.forEach((ingredient) => {
      cy.get('.chip').should('contain', ingredient);
    });
  });

  it('permet eliminar ingredients', () => {
    cy.get('input[placeholder="Afegeix un ingredient..."]').type('patates');
    cy.contains('button', 'Afegir').click();

    cy.get('.chip').should('contain', 'patates');
    cy.get('.chip-remove').click();
    cy.get('.chip').should('not.exist');
  });

  it('no permet afegir ingredients duplicats', () => {
    cy.get('input[placeholder="Afegeix un ingredient..."]').type('arròs');
    cy.contains('button', 'Afegir').click();

    cy.get('input[placeholder="Afegeix un ingredient..."]').type('arròs');
    cy.contains('button', 'Afegir').click();

    cy.get('.chip').should('have.length', 1);
  });

  it('neteja el camp d\'input després d\'afegir un ingredient', () => {
    cy.get('input[placeholder="Afegeix un ingredient..."]').type('pebrot');
    cy.contains('button', 'Afegir').click();

    cy.get('input[placeholder="Afegeix un ingredient..."]').should('have.value', '');
  });

  it('permet afegir ingredients prement Enter', () => {
    cy.get('input[placeholder="Afegeix un ingredient..."]').type('pasta{enter}');

    cy.get('.chip').should('contain', 'pasta');
  });

  it('el botó "Genera recepta" està deshabilitat sense ingredients', () => {
    cy.contains('button', 'Genera recepta').should('be.disabled');
  });

  it('el botó "Genera recepta" s\'habilita amb ingredients', () => {
    cy.get('input[placeholder="Afegeix un ingredient..."]').type('pollastre');
    cy.contains('button', 'Afegir').click();

    cy.contains('button', 'Genera recepta').should('not.be.disabled');
  });
});
