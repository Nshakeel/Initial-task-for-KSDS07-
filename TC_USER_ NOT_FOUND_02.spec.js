describe('Verify 404 Response for Invalid User ID Endpoint', () => {
    it('should return a 404 status code for an invalid user ID endpoint', () => {
      // Send a GET request to the invalid user ID endpoint
      cy.request({ url: 'https://reqres.in/api/users/invalid', failOnStatusCode: false }).then((response) => {
        // Verify the response status code is 404
        cy.expect(response.status).to.equal(404);
      });
    });
  });
  