describe('checkboxes', ()=>{
    /*checkbox

   
    */
    it('checking single box', ()=>{
        // go to http://automationpractice.com/index.php
        //click on women
        // check the first checkbox
        cy.visit('http://automationpractice.com/index.php')

        cy.get("a[class='sf-with-ul']")
        .first()// clicking on the first element
        .click()// clicking on the first element


       //verify the checkbox is not checked by default
       cy.get('#layered_category_4')
       .should('not.be.checked')// assert the element is not checked

       //checking the checked
       cy
       .get('#layered_category_4') // getting the checkbox
       .check()// checking-(clicking)
       .should('be.checked')// asserting if checked


  cy.wait(3000)
       // asserting if the checkbox is checked
      // cy
      // .get('#layered_category_4')
     //  .should('be.checked')// returns true if the element is checked, similiar the selenium is visibile tex

    

       // UNCHECK THE CHECKBOX
       cy
       .get('#layered_category_4')// getting the checkbox
       .uncheck()// unchecking the checkbox
       .should('not.be.checked') //  asseerting if uncheck

      
      cy.wait(3000)



//#layered_id_attribute_group_2
    })

    // it.only  means RUN ONLY THIS TEST
    it('check all checkboxes', ()=>{
// go to http://automationpractice.com/index.php
        //click on women
        // check the first checkbox
        cy.visit('http://automationpractice.com/index.php')

        cy.get("a[class='sf-with-ul']")
        .first()// clicking on the first element
        .click()// clicking on the first element

        //input[type='checkbox'] returns all af the checkbox on the page
        cy.get("input[type='checkbox']")
        .check()

        cy.wait(3000)
        cy.get("input[type='checkbox']").uncheck()




    })
    it.only('check checkboxes with click()', ()=>{
        // go to http://automationpractice.com/index.php
                //click on women
                // check the first checkbox
                cy.visit('http://automationpractice.com/index.php')
        
                cy.get("a[class='sf-with-ul']")
                .first()// clicking on the first element
                .click()// clicking on the first element
        
                //input[type='checkbox'] returns all af the checkbox on the page
        //        cy.get("input[type='checkbox']")
            //    .first()
        //        .click({multiple: true})
        
          /// NOTE click works for only sisgle elements
          //if you want to click multiple checkbox, use click({multiple: true})
          
          // Assertion
           // how do you understand if checkbox is checked or not?
           cy.get("input[type='checkbox']")// getting the checkbox
             .first()
             .click({multiple: true})

            cy
            .get("input[type='checkbox']") 
            .first()
            .should('be.checked')


            // The change is in the span element
            // when a check box is checked the parent span has value of checked
            // assert if the parent span class value is checked

            cy
            .get("input[type='checkbox']")
            .first() // getting the first check box
            .parent()// getting the parent element which is span
            .should('have.class', 'checked')// asserting if the span class='ckecked'
          //
          // with cypress assertion, we can assert if any attribute has any value
            // should('have.id','username')// asserting if id='username'
          // should('have.type','text)     // asserting if type='text'
        
})
})