// describe ('Name of the Function', Another Function to create test cases)
// it : used to create test cases. like @Test annotation in testNG
// it ('Name of the test case', Function to create)
describe('My First Test', () => {
    it('URL Test', () => {
      // And Verify the url contains amazon
      cy.visit('https://www.amazon.com/')
      cy.url().should('include','amazon')
    })

    // Create second test case
    it('Title Test', () =>{
        //And verify the title contains Amazon
        cy.visit('https://www.amazon.com/')
        cy.title().should('contains','Amazon')
    })
  })