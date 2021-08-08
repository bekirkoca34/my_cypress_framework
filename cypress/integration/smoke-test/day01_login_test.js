describe('Go to the application', () =>{
    
    it('Test Case 1', () => {
        // visit () -> to go to the url
        cy.visit('https://qa-environment.crystalkeyhotels.com/');

        // clicking on Log in
        // Finding the elements
        // whose text includes 'Log in'
        // Then clicking on it
        cy.contains('Log in').click()

        // get() is used to find element.// like that findElement in selenium
        // Find username and type 'manager'
        // type is used to type in input box
        cy.get('#UserName').type('manager')
        // find password and type'Manager2!'
        cy.get('#Password').type('Manager2!')
        //Click the submit button
        cy.get('#btnSubmit').click()
    }
    )


}
)