describe('DELETE Request to "https://reqres.in/api/users/2"', () => {
  it('should return a 204 status code with no content for a DELETE request', () => {
    // DELETE 
    cy.request({
      method: 'DELETE',
      url: 'https://reqres.in/api/users/2',
      failOnStatusCode: false, 
    }).then((response) => {
      // code is 204 
      cy.expect(response.status).to.equal(204);

      // (empty body)
      cy.expect(response.body).to.be.empty;
    });
  });
});
