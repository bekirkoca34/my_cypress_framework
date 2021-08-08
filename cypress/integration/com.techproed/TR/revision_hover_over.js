describe('hover over',()=>{
    it('hover over',()=>{
        cy.visit('https://www.amazon.com/')

        // 
        cy.get('.icp-nav-link-inner > .nav-line-2').trigger('mouseover')

        //
        cy
        .contains('Change country/region').click()
        .wait(2000)


        cy.get('#a-autoid-0-announce').click()
        .wait(2000)
        // Canada' yi secelim
        cy.get('#icp-selected-country_2 > .a-fixed-left-grid > .a-fixed-left-grid-inner > .a-col-right > span').click()

        // assertion
        cy.get('.a-dropdown-prompt').should('be.visible','Canada')

    })
})