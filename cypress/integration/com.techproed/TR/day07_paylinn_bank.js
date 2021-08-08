/// <reference types="Cypress" />

describe('Paylinn Bank', () => {
    it('paylinn login test', () => {
        // url git
        cy.visit('https://www.paylinn.com/')
 
        // Sign In ' e click yap
       // cy.get('[href="/login"] > .header__option > .header__lineTwo').click()
        cy.contains('Sign In').click()

        // username gir
        cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
        .type('User')

        // password gir
        cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
        .type('user')

        // submit e tikla
        cy.get('.MuiButton-label').click()
        .wait(2000)
        
// verifying
        cy
        .get('.MuiButton-label')
        .should('have.text','Actions')

    })
    
})