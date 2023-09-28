describe('DELETE Request to Non-Existing User', () => {
    it('should return a 204 status code for a DELETE request to a non-existing user', () => {
      // Send a DELETE request
      cy.request({
        method: 'DELETE',
        url: 'https://reqres.in/api/users/999',
        failOnStatusCode: false,
      }).then((response) => {
        //code is 204 (No Content)
        cy.expect(response.status).to.equal(204);
      });
    });
  });
  