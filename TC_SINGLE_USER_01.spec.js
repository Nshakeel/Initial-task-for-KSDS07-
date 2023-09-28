describe('Get a Single User', () => {
    it('should retrieve a single user successfully', () => {
      // Send a GET request to the API endpoint with a valid user ID (e.g., 2)
      cy.request(/api/users/2).then((response) => {
        // Verify the response status code is 200
        cy.expect(response.status).to.equal(200);
  
        // Verify the response contains a valid user object
        cy.expect(response.body).to.have.property('data').to.be.an('object');
  
        // Verify the user's ID matches the requested user ID (2)
        cy.expect(response.body.data).to.have.property('id').to.equal(2);
  
        // Verify the user object structure
        cy.expect(response.body.data).to.have.property('email').to.be.a('string');
        cy.expect(response.body.data).to.have.property('first_name').to.be.a('string');
        cy.expect(response.body.data).to.have.property('last_name').to.be.a('string');
        cy.expect(response.body.data).to.have.property('avatar').to.be.a('string');
      });
    });
  });
  