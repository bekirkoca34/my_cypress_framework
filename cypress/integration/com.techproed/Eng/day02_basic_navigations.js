describe('navigations',()=>{
    it.skip('back, forward, refresh',()=>{//it.skip() ignored the test case
        cy.visit('https://qa-environment.crystalkeyhotels.com/');
        

        // hard wait in cypress
        cy.wait(3000)
        //clicking on the login link
        cy.contains('Log in').click();
        cy.wait(3000)

        // going back to the previous page
        //cy.go('back')
        // or
        cy.go(-1)// same the cy.go('back')
        cy.wait(3000)

        // going to next page
       // cy.go('forward')
       //or
       cy.go(1)
       cy.wait(3000)
  
       // refresh the page
       cy.reload()

       //WE CAN CHAIN THE FUNCTION

    })

    it('chaining the navigations', ()=>{
        // we can  chain the function
       cy.visit('https://qa-environment.crystalkeyhotels.com/');
       cy
       .contains('Log in')
       .click()
       .go('back').
       go('forward')
       .go('back');
        // forcing to reload, note: we dont need to force here
        // and verfy the log in link is visible
        cy
        .reload(true)// true means force
        .contains('Log in') // getting the Log in element
        .should('be.visible')// asserting if the element is visible
    })
})