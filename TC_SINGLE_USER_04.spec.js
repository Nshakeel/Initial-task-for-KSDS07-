describe('Accessing Endpoint with Invalid HTTP Method', () => {
    it('should return a 405 status code and an error message for an invalid HTTP method', () => {
      // Send a POST request to the API endpoint which only supports GET
      cy.request({ url: '/api/users/2', method: 'POST', failOnStatusCode: false }).then((response) => {
        // Verify the response status code is 405 (Method Not Allowed)
        cy.expect(response.status).to.equal(405);
  
        // Verify the response contains an error message indicating that the method is not allowed
        cy.expect(response.body).to.have.property('error').to.equal('Method not allowed');
      });
    });
  });
  