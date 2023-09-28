describe('POST Request to Register Endpoint with Empty Request Body', () => {
    it('should return a 400 status code', () => {
      cy.request({
        method: 'POST',
        url: 'https://reqres.in/api/register',
        body: {

        }, 
        failOnStatusCode: false
      }).then((response) => {
        //responce 400
        expect(response.status).to.eq(400);
      });
    });
  });
  