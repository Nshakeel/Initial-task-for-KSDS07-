describe('POST Request to Login Endpoint with Invalid Email Format', () => {
  it('should return a 400 status code', () => {
    cy.request({
      method: 'POST',
      url: 'https://reqres.in/api/login',
      body: 
      {
        email: 'peter@klaven',
      },
      failOnStatusCode: false, 
    
    }).then((response) => {
      expect(response.status).to.eq(400);
    });
  });
});
