describe('Home Page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://api.discogs.com/users/mixtapestretch/collection/folders/0/releases*', {
      statusCode: 200,
      fixture: 'mock-data.json'
    }).as('getReleases');
    cy.visit('http://localhost:3000');
  });

  it('handles a 400 Bad Request error', () => {
    cy.intercept('GET', 'https://api.discogs.com/users/mixtapestretch/collection/folders/0/releases*', {
      statusCode: 400,
      body: 'Bad Request'
    }).as('getBadRequest');
    cy.wait('@getBadRequest');
  });

  it('handles a 500 Internal Server error', () => {
    cy.intercept('GET', 'https://api.discogs.com/users/mixtapestretch/collection/folders/0/releases*', {
      statusCode: 500,
      body: 'Internal Server Error'
    }).as('getServerError');
    cy.wait('@getServerError');
  });

  it('should display a header with the title', () => {
    cy.get("h1.page-title.header").contains("MixTape").should("be.visible");
  });

  it('displays the Albums By Year dropdown button', () => {
    cy.get('.years-dropdown-button').should('be.visible').and('contain', 'Albums By Year');
  });

  it('displays the playlist', () => {
    cy.get('.tracklist-container').should('be.visible');
  });
  
});