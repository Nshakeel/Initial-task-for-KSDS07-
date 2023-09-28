describe('POST Request to "https://reqres.in/api/users"', () => {
  it('should return a 201 status code for a valid POST request', () => {

    const requestBody = {
      name: 'morpheus',
      job: 'leader',
    };

    // Sending a POST request
    cy.request({
      method: 'POST',
      url: 'https://reqres.in/api/users',
      body: requestBody,
    }).then((response) => {
      // Verify the response status code is 201
      cy.expect(response.status).to.equal(201);
    });
  });
});
