const { multiply } = require("cypress/types/lodash")

describe('checkbox',()=>{
    it('check single box',()=>{
        cy.visit('http://automationpractice.com/index.php')

        cy.get('.sf-with-ul').first().click()

        .wait(3000)

        cy.get('#layered_category_4').should('not.be.checked')

        .wait(2000)

        cy.get('#layered_category_4').click()

      //  cy.get('.sf-with-ul').click('multiple:true')

      //cy.get("input[type='checkbox']").click('multiple:true')






    })
})