describe('POST Request to Invalid Endpoint', () => {
    it('should return a 404 status code', () => {
      cy.request({
        method: 'POST',
        url: 'https://reqres.in/api/register/invalid',
        failOnStatusCode: false 
      }).then((response) => {
        // Responce 400 
       expect(response.status).to.eq(404);
      });
    });
  });
  