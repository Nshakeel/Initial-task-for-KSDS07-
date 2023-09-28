describe('PUT Request to Invalid Endpoint', () => {
    it('should return a 404 status code for a PUT request to an invalid endpoint', () => {
      // Define the request body for the PUT request
      const requestBody = {
        name: 'morpheus',
        job: 'zion resident',
      };
            cy.request({
        method: 'PUT',
        url: 'https://reqres.in/api/users/2/invalid',
        body: requestBody,
        failOnStatusCode: false, 
      }).then((response) => {
        //  code is 404 (Not Found)
        cy.expect(response.status).to.equal(404);
      });
    });
  });
  