describe('scroll',()=>{
    it('scrollIntoView',()=>{
        cy.visit('https://qa-environment.crystalkeyhotels.com/')

        cy.get('.col-md-7 > .mb-4').scrollIntoView()
        .wait(2000)

        cy.get(':nth-child(9) > .container > .justify-content-center > .col-md-7 > h2').scrollIntoView()

        // assertion
        cy.get(':nth-child(9) > .container > .justify-content-center > .col-md-7 > h2').should('be.visible','Recent Blog')

        // en asagiya git
        cy.scrollTo('bottom')

//     en yukariya git
        cy.scrollTo('top')




    })
})