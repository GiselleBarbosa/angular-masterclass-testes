describe('My First Test', () => {
  it('Envia formulario e checa o card da postagem', () => {
    cy.visit('/');

    // Envia formulario
    cy.get('input[name="title"]').type('Título do post');
    cy.get('textarea[name="body"]').type('Corpo do post');
    cy.get('button[type="submit"]').click();

    //checa o card da postagem
    cy.get('.post').should('be.visible');
    cy.get('.post-title').should('contain', 'Título do post');
    cy.get('.post-body').should('contain', 'Corpo do post');
  });
});
