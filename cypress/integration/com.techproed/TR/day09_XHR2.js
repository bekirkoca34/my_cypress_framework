/// <reference types="Cypress" />

describe('XHR - XML, HTTP, REQUEST', () => {


    const requestUrl="https://jsonplaceholder.cypress.io/comments"
    
        it('XHR Example 2', () => {
            cy.request('POST', requestUrl, {
                userId:501,
                title:"Cypress cok kolay",
                body:"JS daha da kolay"
            }).then((response)=>{
                console.log(response)
                expect(response.status).to.eq(201)
                expect(response).property('body').to.contain({title: "Cypress cok kolay"})
                expect(response.body).property('userId').to.be.a('number')
            })
           
           })
    
    
        })
    