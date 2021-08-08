/// <reference types="Cypress" />

describe('XHR - XML, HTTP, REQUEST', () => {


const requestUrl="https://jsonplaceholder.cypress.io/comments"

    it('XHR Example 1', () => {
       cy.request(requestUrl).should((response)=>{
           console.log(response)

           assert.equal(response.status, 200)
           expect(response.statusText).to.eq('OK')// 2. yol olarak expect 'i kullandik
       })


    })
})