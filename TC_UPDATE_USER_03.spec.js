describe('PUT Request with Empty Request Body', () => {
    it('should return a 400 status code and an error message for a PUT request with an empty request body', () => {
      const emptyRequestBody = {};
        cy.request({
        method: 'PUT',
        url: 'https://reqres.in/api/users/2',
        body: emptyRequestBody,
        failOnStatusCode: false,
      }).then((response) => {
        // code is 400 (Bad Request)
        cy.expect(response.status).to.equal(400);
  
        // Verror message - missing required fields
        cy.expect(response.body).to.deep.equal({
          error: 'Missing required fields: name, job',
        });
      });
    });
  });
  