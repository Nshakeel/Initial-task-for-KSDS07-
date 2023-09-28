describe('GET Request to Users Endpoint with Negative Delay Parameter', () => {
    it('should return a 400 status code and an error message', () => {
      cy.request({
        method: 'GET',
        url: 'https://reqres.in/api/users?delay=-1',
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(400);
        expect(response.body).to.have.property('error').and.to.eq('Invalid delay parameter');
      });
    });
  });
  