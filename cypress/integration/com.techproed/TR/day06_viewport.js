describe('viewports', () => {
    it('iphone 8', () => {
        cy.visit('https://www.amazon.com/')
        cy.viewport('iphone-8')
        cy.screenshot()

    })
    it('imac', () => {

cy.visit('https://www.amazon.com/')
        cy.viewport('macbook-16')
        cy.screenshot()

        
    })
    it('imac', () => {

        cy.visit('https://www.amazon.com/')
                cy.viewport(2500,1500)
                cy.screenshot()
        
                
            })
})