describe('Get a Non-Existent User', () => {
    it('should return a 404 status code and an error message for a non-existent user ID', () => {
      // Send a GET request to the API endpoint with a non-existent user ID (e.g., 999nnh)
      cy.request({ url: 'https://reqres.in/api/users?page=invalid', failOnStatusCode: false }).then((response) => {
        // Verify the response status code is 404
        cy.expect(response.status).to.equal(404);
  
        // Verify the response contains an error message
        cy.expect(response.body).to.have.property('error').to.equal('Resource not found');
      });
    });
  });
  