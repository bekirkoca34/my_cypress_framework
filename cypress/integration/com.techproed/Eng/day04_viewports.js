describe('Viewporst',()=>{
    it('view with iphone 6',()=>{
        cy.visit('https://www.amazon.com')
        cy.viewport('iphone-6')
      //  cy.screenshot()
    })

    it('view with macbook 16',()=>{
        cy.visit('https://www.amazon.com')
        cy.wait(3000)
        cy.viewport('macbook-16')
       // cy.screenshot()
    })

    it('view with certain pixals',()=>{
        cy.visit('https://www.amazon.com')
        cy.viewport(2000,1000)
        cy.screenshot()
    })
})