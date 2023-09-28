describe('Attempt to Get a Non-Existent Resource', () => {
    it('should return a 404 status code and an empty JSON object for a non-existent resource', () => {
      // Send a GET request to the specified URL for a non-existent resource
      cy.request({ url: 'https://reqres.in/api/unknown/23', failOnStatusCode: false }).then((response) => {
        // Verify the response status code is 404
        cy.expect(response.status).to.equal(404);
  
        // Verify the response is in JSON format
        cy.expect(response.headers['content-type']).to.include('application/json');
  
        // Verify the response body is an empty JSON object
        cy.expect(response.body).to.deep.equal({});
      });
    });
  });
  