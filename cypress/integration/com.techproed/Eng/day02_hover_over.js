describe('move over',()=>{
    it('move over', ()=>{
        cy.visit("https://www.amazon.com/")
        cy.get('.icp-nav-flag')
        .trigger('mouseover')// moving the mouse over
        .wait(20000)
        

        /*
        Test Case 
        click on Change country/region
        select canada from the dropdown
        */
       // click


       cy
       .contains('Change country/region').click()

       // select Canada from dropdown
       //cy.get('#icp-seleted-country')

       cy
       .get('#a-autoid-0-announce').click()
       .select('Canada',{ force: true})
//

    })
})