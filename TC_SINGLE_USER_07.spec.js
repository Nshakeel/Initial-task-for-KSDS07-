describe('Invalid Endpoint', () => {
    it('should return a 404 status code and an error message for an invalid endpoint', () => {
      // Send a GET request to an invalid endpoint (e.g., "/api/users")
      cy.request({ url: '/api/users', failOnStatusCode: false }).then((response) => {
        // Verify the response status code is 404
        cy.expect(response.status).to.equal(404);
  
        // Verify the response contains an error message indicating an invalid endpoint
        cy.expect(response.body).to.have.property('error').to.equal('Not Found');
      });
    });
  });
  