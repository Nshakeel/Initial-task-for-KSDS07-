describe('Rate Limit Exceeded', () => {
    it('should return a 429 status code and an error message for rate limit exceeded', () => {
      // Send a GET request to the API endpoint ("/api/users/2") to simulate rate limit exceeded
      cy.request({ url: 'https://reqres.in/api/users/2', headers: { 'X-RateLimit-Limit': '1', 'X-RateLimit-Remaining': '0' }, failOnStatusCode: false }).then((response) => {
        // Verify the response status code is 429 (Too Many Requests)
        cy.expect(response.status).to.equal(429);
  
        // Verify the response contains an error message indicating rate limit exceeded
        cy.expect(response.body).to.have.property('error').to.equal('Rate limit exceeded. Try again later.');
      });
    });
  });
  