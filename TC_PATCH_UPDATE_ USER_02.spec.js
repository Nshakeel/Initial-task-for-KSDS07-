describe('PATCH Request to Non-Existent User', () => {
    it('should return a 404 status code for a PATCH request to a non-existent user', () => {
      // Define the request body for the PATCH request
      const requestBody = {
        name: 'morpheus',
        job: 'zion resident',
      };
  
      // Send a PATCH request  for a non-existent user
      cy.request({
        method: 'PATCH',
        url: 'https://reqres.in/api/users/999',
        body: requestBody,
        failOnStatusCode: false, 
      }).then((response) => {
        // return 404 (Not Found)
        cy.expect(response.status).to.equal(404);
      });
    });
  });
  