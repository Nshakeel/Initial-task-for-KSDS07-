describe('Verify POST Request to "https://reqres.in/api/unknown/2"', () => {
  it('should return a 405 status code for a POST request', () => {
    // Send a POST request to the specified URL
    cy.request({ url: 'https://reqres.in/api/unknown/2', method: 'POST', failOnStatusCode: false }).then((response) => {
      // Verify the response status code is 405 (Method Not Allowed)
      cy.expect(response.status).to.equal(405);
    });
  });
});
