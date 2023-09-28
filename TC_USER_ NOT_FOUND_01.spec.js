describe('Verify 404 Response for URL', () => {
    it('should return a 404 status code for a specific URL', () => {
      // Send a GET request to the specific URL
      cy.request({ url: 'https://reqres.in/api/users/23', failOnStatusCode: false }).then((response) => {
        // Verify the response status code is 404
        cy.expect(response.status).to.equal(404);
      });
    });
  });
  