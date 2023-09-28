describe('POST Request to "https://reqres.in/api/users" with Empty Request Body', () => {
  it('should return a 400 status code for a POST request with an empty request body', () => {
    // Define the empty request body
    const requestBody = {
      name: ' ',
      job: ' ',
    };

    cy.request({
      method: 'POST',
      url: 'https://reqres.in/api/users',
      body: requestBody,
      failOnStatusCode: false, s
    }).then((response) => {
      cy.expect(response.status).to.equal(400);
    });
  });
});
