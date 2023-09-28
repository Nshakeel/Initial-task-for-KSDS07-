describe('Unauthorized Access', () => {
    it('should return a 401 status code and an error message for unauthorized access', () => {
      // Send a GET request to the API endpoint ("/api/users/2") with an unauthorized user
      cy.request({ url: '/api/users/2', failOnStatusCode: false }).then((response) => {
        // Verify the response status code is 401 (Unauthorized)
        cy.expect(response.status).to.equal(401);
  
        // Verify the response contains an error message indicating unauthorized access
        cy.expect(response.body).to.have.property('error').to.equal('Unauthorized');
      });
    });
  });
  