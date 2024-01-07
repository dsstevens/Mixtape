describe('Album Detail Page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://api.discogs.com/releases/*', {
      statusCode: 200,
      fixture: 'mock-single-album-details.json'
    }).as('getSingleAlbum');
    cy.visit('http://localhost:3000/1982/587059');
  });

  it('displays the album title and artist', () => {
    cy.get('.album-title').should('be.visible');
    cy.get('.artist-name').should('be.visible');
  });

  it('renders the tracklist', () => {
    cy.get('.tracks').should('have.length', 10);
  });

  it('displays each track title', () => {
    cy.get('.tracks').each((el) => {
      cy.get(el).find('p').first().should('contain', 'Song:');
    });
  });

  it('shows Add button for each track', () => {
    cy.get('.add-button').should('have.length', 10);
  });
});
