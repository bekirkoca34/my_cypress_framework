describe('multiple windows',()=>{
    it('handeling multiple windows by removing target',()=>{
        cy
        .visit("https://the-internet.herokuapp.com/windows")

// Remove target attribute to open on the same window
// .invoke('removeAttr','ATTRIBUTE NAME')  : removes the attr. from the elements

        cy
        .get('.example > a') // click here element,
        .invoke('removeAttr','target') // remove target attributes
        .click()

        // ASSERTING the new window is opned
        // and cypress can work in that window
        cy
        .get('h3')
        .should('have.text','New Window')


      //  cy
      //  .get('.example > a')
     //   .click()



    })

    it.only('opening in the new url', ()=>{
        /*
        we will get the value of href and store in a varible
        Then open the value in the same window
       * prop() to get value of the attribute.
        prop() is a jquery method
        since prop is a jquery we use then() to use prop function
         */

        cy
        .visit("https://the-internet.herokuapp.com/windows")

        cy
        .get('.example > a')// click the here  element
        .then((element)=>{
           const newUrl= element.prop('href')// getting the value of href attribute
           cy
           .visit(newUrl)

        })

        // Assertion
        cy.wait(5000)
        cy
        .get('h3')
        .should('have.text','New Window')

    })
})