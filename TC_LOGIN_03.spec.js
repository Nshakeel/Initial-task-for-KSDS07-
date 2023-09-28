describe('POST Request to Login Endpoint with Incorrect Password', () => {
    it('should return a 400 status code', () => {
      cy.request({
        method: 'POST',
        url: 'https://reqres.in/api/login',
        body: {
          email: 'eve.holt@reqres.in',
          password: 'incorrect_password', //wrong password
        },
      }).then((response) => {
        expect(response.status).to.eq(400);
      });
    });
  });
  