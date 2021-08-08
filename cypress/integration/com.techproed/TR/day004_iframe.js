describe('iframe',()=>{
    it('iframe',()=>{
        cy.visit('http://the-internet.herokuapp.com/iframe')

        cy.get('h3').should('contains.text','Editor')

        cy
        //frameLoaded('#mce_0_ifr') ==> calisiyor
    
        .iframe()
        .find('p')
        .clear()





    })
})