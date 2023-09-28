describe('Verify GET Request to "https://reqres.in/api/unknown/2"', () => {
  it('should return a 200 status code and expected JSON response format', () => {
    // Send a GET request to the specified URL
    cy.request('https://reqres.in/api/unknown/2').then((response) => {
      // Verify the response status code is 200
      cy.expect(response.status).to.equal(200);

      // Verify the response is in JSON format
      cy.expect(response.headers['content-type']).to.include('application/json');

      // Verify the response body matches the expected JSON format
      cy.expect(response.body).to.deep.equal({
        data: {
          id: 2,
          name: 'fuchsia rose',
          year: 2001,
          color: '#C74375',
          pantone_value: '17-2031'
        },
        support: {
          url: 'https://reqres.in/#support-heading',
          text: 'To keep ReqRes free, contributions towards server costs are appreciated!'
        }
      });
    });
  });
});
