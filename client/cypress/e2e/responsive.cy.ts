describe('Recipe Lab - Responsive Design', () => {
  const viewports = [
    { name: 'mobile', width: 375, height: 667 },
    { name: 'tablet', width: 768, height: 1024 },
    { name: 'desktop', width: 1280, height: 720 }
  ];

  viewports.forEach(({ name, width, height }) => {
    describe(`${name} (${width}x${height})`, () => {
      beforeEach(() => {
        cy.viewport(width, height);
        cy.visit('/');
      });

      it('renderitza correctament la pàgina principal', () => {
        cy.contains('h1', '🍳 Recipe Lab').should('be.visible');
        cy.get('input[placeholder="Afegeix un ingredient..."]').should('be.visible');
        cy.contains('button', 'Afegir').should('be.visible');
      });

      it('els ingredients s\'afegeixen i es mostren correctament', () => {
        cy.get('input[placeholder="Afegeix un ingredient..."]').type('test');
        cy.contains('button', 'Afegir').click();

        cy.get('.chip').should('be.visible').and('contain', 'test');
      });

      it('el botó de generar recepta és accessible', () => {
        cy.get('input[placeholder="Afegeix un ingredient..."]').type('ingredient');
        cy.contains('button', 'Afegir').click();

        cy.contains('button', 'Genera recepta')
          .should('be.visible')
          .and('not.be.disabled');
      });
    });
  });

  it('adapta el layout en mòbil (input en columna)', () => {
    cy.viewport(375, 667);
    cy.visit('/');

    cy.get('.input-group').should('have.css', 'flex-direction', 'column');
  });

  it('adapta el layout en desktop (input en fila)', () => {
    cy.viewport(1280, 720);
    cy.visit('/');

    cy.get('.input-group').should('have.css', 'flex-direction', 'row');
  });
});
