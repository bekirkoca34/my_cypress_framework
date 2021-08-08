describe('Go to the application', () =>{
    
    it('Test Case 1', () => {
        // visit () -> to go to the url
        cy.visit('https://qa-environment.crystalkeyhotels.com/');

        // clicking on Log in
        // Finding the elements
        // whose text includes 'Log in'
        // Then clicking on it
        cy.contains('Log in').click()

        // verifying if the user is on the Login page
        // I will check if the new URL contains/ Account/Logon 
        cy.url().should('include','/Account/Logon')

    }
    )


}
)