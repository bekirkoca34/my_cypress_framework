describe('hover over', ()=>{
    it('move over',()=>{
        cy.visit('https://www.amazon.com/')
    
       cy.get('.icp-nav-link-inner > .nav-line-2 > .nav-icon').trigger('mouseover')
       // trigger() mouse hareket ettirir,

       //canada' yi sec
       cy
       .contains('Change country/region').click()
       cy.get('#icp-selected-country')
      // cy.get('#icp-selected-country_2 > .a-fixed-left-grid > .a-fixed-left-grid-inner > .a-col-right > span').click()

 /*
        <span class=“a-dropdown-prompt”>United States</span>
        yukaridaki locater bu tag icerinde geciyor.
        Ancak cy.select() kodu kullanirken locaterlarin <span></span>
        icerinde olmamasi lazim.
        */
     //  .select('Canada').click()
      
      .select('Canada',{ force: true})

    

    })
})