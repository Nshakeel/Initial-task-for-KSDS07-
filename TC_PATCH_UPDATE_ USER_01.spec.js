describe('PATCH Request to "https://reqres.in/api/users/2"', () => {
  it('should return a 200 status code for a valid PATCH request', () => {
    // Define the request body for the PATCH request
    const requestBody = {
      name: 'morpheus',
      job: 'zion resident',
    };

    // Send a PATCH request
    cy.request({
      method: 'PATCH',
      url: 'https://reqres.in/api/users/2',
      body: requestBody,
    }).then((response) => {
      // status code is 200
      cy.expect(response.status).to.equal(200);
    });
  });
});
