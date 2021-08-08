describe('my first test',()=>{
    it('URL Testi', ()=>{
        cy.visit('https://www.google.com/')
       cy.get('#L2AGLb > .jyfHyd').click()
       cy.url().should('include','www.google.com')
       // url() url testi icin kullanilir.
       // should('iceryor mu', 'xxxxxxxx')

    })
    // 2 test olusturma
    it('Title test',()=>{
        // title da google var mi?
        cy.visit('https://www.google.com/')
        cy.get('#L2AGLb > .jyfHyd').click()
        cy.title().should('eq','Google')
    })
})