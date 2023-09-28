describe('PATCH Request with Empty Request Body', () => {
    it('should return a 400 status code for a PATCH request with an empty request body', () => {
      // Define the empty request body
      const emptyRequestBody = {};
      cy.request({
        method: 'PATCH',
        url: 'https://reqres.in/api/users/2',
        body: emptyRequestBody,
        failOnStatusCode: false, 
      }).then((response) => {
        // is 400 (Bad Request)
        cy.expect(response.status).to.equal(400);
      });
    });
  });
  