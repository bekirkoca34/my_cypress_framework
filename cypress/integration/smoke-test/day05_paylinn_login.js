/// <reference types="Cypress" />

describe('PAYLINN',()=>{
    it('Paylinn login test',()=>{
        // go to website
        cy.visit('https://www.paylinn.com/')
        // cliking Sign In 
        cy.contains('Sign In').click()

        // entering username
        cy
        .get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
        .click()
        .type('User')
  //   entering password
        cy
        .get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
        .click()
        .type('user')
    // clicking submit botton
        cy
        .get('.MuiButton-label')
        .click()
// verifying- assertion  ==> Welcome text
        cy
        .get('.header__nav > :nth-child(1) > .header__lineOne')
        .should('have.text','Welcomee')

        

    })
    
})