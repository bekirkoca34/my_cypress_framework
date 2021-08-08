
describe('iframes',()=>{
    it('handeling iframes',()=>{
       /** Iframes : 
        step frames are pages within a page
        there are multiple html tag in a single page

        1. Install iframe plugin :
        Link :     https://www.npmjs.com/package/cypress-iframe
         run on terminal command : npm install -D cypress-iframe
        2. IMPORT PACKAGE IN THE CLASS : import 'cypress-iframe';
        // we can use import 'cypress-iframe'

        3.cy.frameLoaded (' CSS OF THE FRAME')

        4. once we are inside the frame , we need to use below syntax find element
        cy.iframe().find('CSS of element') 
        */

        cy.visit('http://the-internet.herokuapp.com/iframe')

        // Asserting the text
        cy.get('h3').should('contains.text','Editor')
        
        //switching the iframe element
        // #mce_0_ifr is the css locator
        cy.frameLoaded('#mce_0_ifr')// switching the iframe element

       cy.iframe()// we need to use iframe() when we are inside the iframe
       .find('p') // use find() to locate the element inside the frame 
       .clear() //   clearing the element 

       cy
       .iframe()
       .find('p')
       .type('inside the iframe')

       // Working Outside of the Frame
       // Cypress automatically handles element that is outside of element
       // asserting the text
      cy.wait(3000)
       cy
       .get('h3')
       .should('contains.text','Editor')

       // clicking on the Elemental Selenium
       cy
       .contains('Elemental Selenium')
       .click()
       
       
       
       
       
        //cy.get('').clear()



    })
})