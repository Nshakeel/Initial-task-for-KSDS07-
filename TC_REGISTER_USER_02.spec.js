describe('POST Request to Register Endpoint', () => {
    it('should return a 400 status code and an error message for existing email', () => {
      cy.request({
        method: 'POST',
        url: 'https://reqres.in/api/register',
        body: {
          email: 'eve.holt@reqres.in',
          password: 'pistol'
        },
        failOnStatusCode: false 
      }).then((response) => {

        expect(response.status).to.eq(400);
        expect(response.body).to.have.property('error').and.to.contain('already taken');
      });
    });
  });
  