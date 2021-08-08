describe('check boxes',()=>{
    it('check single box test', ()=>{
        cy.visit('http://automationpractice.com/index.php')
        cy.get("a[class='sf-with-ul']")
        .first()
        .click()

        cy.get('#layered_category_4').click() // ilk kutucugu tiklar


    })
})