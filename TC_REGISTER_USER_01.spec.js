describe('POST Request to "https://reqres.in/api/register"', () => {
  it('should return a 200 status code and a JSON response for a valid POST request', () => {

    const requestBody = {
      email: 'eve.holt@reqres.in',
      password: 'pistol',
    };

    // POST request 
    cy.request({
      method: 'POST',
      url: 'https://reqres.in/api/register',
      body: requestBody,
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      // code is 200
      cy.expect(response.status).to.equal(200);
      
      cy.expect(response.headers['content-type']).to.include('application/json');
    });
  });
});
