describe('scroll', ()=>{
    it('scroll',()=>{
        cy.visit('https://qa-environment.crystalkeyhotels.com/')

        cy.wait(3000)
        cy.get('.col-md-7 > .mb-4').scrollIntoView() // locate edilen yere gider

        cy.wait(3000)
        cy.get(':nth-child(9) > .container > .justify-content-center > .col-md-7 > h2').scrollIntoView()

        cy.wait(3000)
        cy.get('.col-md-7 > h2 > span').scrollIntoView()
        
        // en asagiya
        cy.scrollTo('bottom')

        cy.wait(2000)
        // en yukari 
        cy.scrollTo('top')

        cy.scrollTo(0,1000) // 1000 px asagiya

        cy.wait(2000)
        
        cy.scrollTo(0,-500) // 500 px yukari



    })
})