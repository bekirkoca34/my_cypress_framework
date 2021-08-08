describe('dropdown', ()=>{
    it('dropdown test', ()=>{
        cy.visit("https://the-internet.herokuapp.com/dropdown");


        // cypress uses select method to select from a dropdown
        
        // 1. use locate the dropdown
        // 2. use select  method to select the option
        
       // cy
       // .get('#dropdown')
       // .select('Option 1')
       // cy.wait(2000)
        
       cy
        .get('#dropdown')// locatin the dropdown element
        .select('Option 1')// selecting Option 1
        .should('have.value',1) // selected value = 1
        .wait(2000)

        // selecting option 2
        cy.wait(2000)
        cy
        .get('#dropdown')// locatin the dropdown element
        .select('Option 2')// selecting Option 2
        .should('have.value',2)// selected value =2



    }) 
})