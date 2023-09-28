describe('PATCH Request to Invalid Endpoint', () => {
    it('should return a 404 status code for a PATCH request to an invalid endpoint', () => {
      const requestBody = {
        name: 'morpheus',
        job: 'zion resident',
      };
  
      
      cy.request({
        method: 'PATCH',
        url: 'https://reqres.in/api/users/2/invalid',
        body: requestBody,
        failOnStatusCode: false, 
      }).then((response) => {
        //code is 404 (Not Found)
        cy.expect(response.status).to.equal(404);
      });
    });
  });
  