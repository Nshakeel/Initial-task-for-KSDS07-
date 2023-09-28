describe('PUT Request to "https://reqres.in/api/users/2"', () => {
  it('should return a 200 status code and the expected JSON response format', () => {
    // Define the request body for the PUT request
    const requestBody = {
      name: 'morpheus',
      job: 'zion resident',
    };

    // Send a PUT request 
    cy.request({
      method: 'PUT',
      url: 'https://reqres.in/api/users/2',
      body: requestBody,
    }).then((response) => {
      // code is 200
      cy.expect(response.status).to.equal(200);
      cy.expect(response.headers['content-type']).to.include('application/json');   
      cy.expect(response.body).to.deep.equal({
        name: 'morpheus',
        job: 'zion resident',
        updatedAt: Cypress.moment().format('YYYY-MM-DDTHH:mm:ss.SSS[Z]'),
      });
    });
  });
});
