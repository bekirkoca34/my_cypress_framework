describe('suggested elements',()=>{
    it.skip('suggested elements',()=>{
       cy.visit("https://www.google.com/") 
       cy.get('#L2AGLb > .jyfHyd').click()
       cy.get('.gLFyf').type('UK')
       cy.wait(3000)
       cy
       .get('li span b')// getting the list of bold items 
       .contains('covid')// chossing the one that contains map
       .click()

       /*li span b
       map
       a login
       jobs
       today
       a customer service

       */

    })
    it('suggeted elements',()=>{
           cy.visit("http://automationpractice.com/index.php")
           cy.get("input[id='search_query_top']").type('dress')
           cy.wait(5000)

          // cy.get('.ac_over')
           //.wait(2000)
           //.click()

           // Method 2 is to use contains
           // and click() on it
           cy.get("li[class='ac_even ac_over']").contains('Blouse').click()

    })
})