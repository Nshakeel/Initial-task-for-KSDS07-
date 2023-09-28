describe('Verify Unauthorized Access for GET Request to "https://reqres.in/api/unknown/233358"', () => {
  it('should return a 401 status code for an unauthorized user', () => {
    // Send a GET request to the specified URL without authorization
    cy.request({ url: 'https://reqres.in/api/unknown/2', failOnStatusCode: false }).then((response) => {
      // Verify the response status code is 401 (Unauthorized)
      cy.expect(response.status).to.equal(401);
    });
  });
});
