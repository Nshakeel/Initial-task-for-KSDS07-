describe('GET Request to Invalid Users Endpoint', () => {
    it('should return a 404 status code', () => {
      cy.request({
        method: 'GET',
        url: 'https://reqres.in/api/users/invalid?delay=3',
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(404);
      });
    });
  });
  