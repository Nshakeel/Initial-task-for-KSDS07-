describe('GET Request to Users Endpoint with Delay', () => {
    it('should return a 200 status code', () => {
      cy.request('GET', 'https://reqres.in/api/users?delay=3').then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  });
  