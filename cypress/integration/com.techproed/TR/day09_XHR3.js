/// <reference types="Cypress" />

describe('XHR - XML, HTTP, REQUEST', () => {

    
        it('XHR Example 3', () => {
            cy.visit('https://example.cypress.io/commands/waiting')

            cy.intercept('GET', '**/comments/*').as('getComment')
            // networku dinle
            // as -> degisken atiyor. daha sonra @ ile kullanilir

            cy.get('.network-btn').click()

            cy.wait('@getComment').its('response').then((response)=>{
                console.log(response)

                assert.equal(response.statusCode, 200,'Status code control')
            })
           
           })
    
    
        })
    