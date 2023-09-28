describe('GET Request to Users Endpoint with Page Parameter', () => {
    it('should return a 200 status code and contain a JSON object with a "data" field', () => {
      cy.request('GET', 'https://reqres.in/api/users?page=2').then((response) => {
        // Assertions
        expect(response.status).to.eq(200);
        expect(response.headers['content-type']).to.include('application/json');
        expect(response.body).to.have.property('data');
      });
    });
  });
  