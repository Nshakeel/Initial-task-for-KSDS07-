describe('POST Request to Register Endpoint with Missing Password', () => {
    it('should return a 400 status code and an error message for missing password', () => {
      cy.request({
        method: 'POST',
        url: 'https://reqres.in/api/register',
        body: {
          email: 'sydney@fife',
        },
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(400);
        expect(response.body).to.deep.equal({
          error: 'Missing password',
        });
      });
    });
  });
  