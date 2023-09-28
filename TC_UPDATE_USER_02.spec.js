describe('PUT Request to Non-Existent User', () => {
    it('should return a 404 status code and an error message for a PUT request to a non-existent user', () => {
      // Define the request body for the PUT request
      const requestBody = {
        name: 'morpheus',
        job: 'zion resident',
      };
  
      // Send a PUT request to a non-existent user endpoint
      cy.request({
        method: 'PUT',
        url: 'https://reqres.in/api/users/999',
        body: requestBody,
        failOnStatusCode: false, 
      }).then((response) => {
        //code is 404 (Not Found)
        cy.expect(response.status).to.equal(404);
        cy.expect(response.body).to.deep.equal({
          error: 'Not Found',
        });
      });
    });
  });
  