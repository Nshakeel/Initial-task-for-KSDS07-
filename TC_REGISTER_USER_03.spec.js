describe('POST Request to Register Endpoint with Empty Request Body', () => {
    it('should return a 400 status code and error messages for missing email and password', () => {
      cy.request({
        method: 'POST',
        url: 'https://reqres.in/api/register',
        body: {},
        failOnStatusCode: false 
      }).then((response) => {
        // Assertions
        expect(response.status).to.eq(400);
        expect(response.body).to.deep.equal({
          error: 'Missing email or password',
        });
      });
    });
  });
  