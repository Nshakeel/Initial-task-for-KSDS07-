describe('DELETE Request to Invalid Endpoint', () => {
    it('should return a 404 status code for a DELETE request to an invalid endpoint', () => {
    
      cy.request({
        method: 'DELETE',
        url: 'https://reqres.in/api/users/2/invalid',
        failOnStatusCode: false, 
      }).then((response) => {
        // code is 404 (Not Found)
        cy.expect(response.status).to.equal(404);
      });
    });
  });
  