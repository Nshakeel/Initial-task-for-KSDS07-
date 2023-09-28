describe('POST Request to Register Endpoint with Invalid Email Format', () => {
    it('should return a 400 status code and an error message for invalid email format', () => {
      cy.request({
        method: 'POST',
        url: 'https://reqres.in/api/register',
        body: {
          email: 'invalid_email_format',
          password: 'password123',
        },
        failOnStatusCode: false
      }).then((response) => {
        // responce 400
        expect(response.status).to.eq(400);
        expect(response.body).to.deep.equal({
          error: 'Invalid email format',
        });
      });
    });
  });
  