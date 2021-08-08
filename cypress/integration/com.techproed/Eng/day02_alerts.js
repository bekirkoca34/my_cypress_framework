describe('alerts', ()=>{
    it('accept alert Test', ()=>{
        /*
        Cypress automatically accepts alert when you click on alert button
        */

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get(':nth-child(1) > button').click()
        // clicking on the alert button
        // automatically accepts the alerts

        // Assert the text is matching : You successfully clicked an alert
        cy
        .get('#result')
        .should('have.text', 'You successfully clicked an alert')
    })

    it('alert Test 2', ()=>{
        /*
        Cypress automatically accepts alert when you click on alert button
        */

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
       
      // clicking the second alert button
      // by default the alert will be accept

        cy.get(':nth-child(2) > button')
        .click()


        //Assertion
        cy
        .get('#result')
        .should('have.text','You clicked: Ok')
        
      //  cy
      //  .get('#result')
      //  .should('have.text', 'You successfully clicked an alert')
    })

    
    it.only('entering text on the alert', ()=>{
        /*
        Cypress automatically accepts alert when you click on alert button
        With cypress we can control the browser evets usung on function
        on is a jquery func.
        */

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    
    // controll the prompt
    // type 'Hi'
    // click Ok
     cy
     .window()// to control the pop up window
     .then(($windowElement)=>{//$windowElement represent the window pop up element
         cy
         .stub($windowElement,'prompt')//
         .returns('Hi')// entering Hi in the prompt
         cy.wait(3000)
  
      // clicking the third alert button
    cy
     .get("button[onclick='jsPrompt()']")// after I enter Hi in the prompt , I click on  alert
     .click()

     // Asserting the result
     cy.get('#result')
     .should('have.text','You entered: Hi')


     })





        //Assertion
      //  cy
     //   .get('#result')
      //  .should('have.text','You clicked: Ok')
        
      //  cy
      //  .get('#result')
      //  .should('have.text', 'You successfully clicked an alert')
    })
})