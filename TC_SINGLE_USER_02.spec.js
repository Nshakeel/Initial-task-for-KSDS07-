describe('Get a User with an Invalid ID', () => {
    it('should return a 404 status code and an error message for an invalid user ID', () => {
      // Send a GET request to the API endpoint with an invalid user ID (e.g., "invalid")
      cy.request({ url: /api/users/invalid, failOnStatusCode: false }).then((response) => {
        // Verify the response status code is 404
        cy.expect(response.status).to.equal(404);
  
        // Verify the response contains an error message
        cy.expect(response.body).to.have.property('error').to.equal('Resource not found');
      });
    });
  });
  