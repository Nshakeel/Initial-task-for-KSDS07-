describe('Verify GET Request to "https://reqres.in/api/unknown"', () => {
  it('should return a 200 status code and JSON response format', () => {
    // Send a GET request to the specified URL
    cy.request('https://reqres.in/api/unknown').then((response) => {
      // Verify the response status code is 200
      cy.expect(response.status).to.equal(200);

      // Verify the response is in JSON format
      cy.expect(response.headers['content-type']).to.include('application/json');
    });
  });
});
