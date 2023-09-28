describe('POST Request to /api/login Endpoint with Invalid Email Format', () => {
    it('should return a 400 status code', () => {
      cy.request({
        method: 'POST',
        url: 'https://reqres.in/api/login',
        body: {
          email: 'invalid_email_format',
          password: 'password123',
        },
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(400);
      });
    });
  });
  