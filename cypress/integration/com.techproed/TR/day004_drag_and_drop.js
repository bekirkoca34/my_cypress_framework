describe('drag and drop',()=>{
    it('drag and drop',()=>{
        cy
        .visit('https://www.testandquiz.com/selenium/testing.html')
        cy
        .get('#dblClkBtn')
        .dblclick()
        .wait(3000)



        cy.on('window:alert',(str)=>{ // alert the window
            expect(str)// getting text on the alert window
            .to.equal('hi, JavaTpoint Testing')// asserting the text equals
        })







        // en yukariya gidelim
        cy.scrollTo('top')
        // en ussteki yaziyi assert edelim
        cy.get('.col-md-offset-2')
        .should('contains.text','Sample WebPage for Automation Testing')
        .wait(200)

        cy.get('a').click() 
        cy.get('#gsc-i-id1').should('be.visible')
        .wait(2000)
        .go('back')
    
        .wait(2000)

        cy.get('#fname')
        .click()
        .type('hello world')
        .get('#idOfButton').click()




     //   npm install --save-dev "@4tw/cypress-drag-drop"





    })
    it('drag and drop',()=>{
        cy
        .visit('https://www.testandquiz.com/selenium/testing.html')

        cy.get('#sourceImage') // source
        .drag('#targetDiv');   // target


    })

})