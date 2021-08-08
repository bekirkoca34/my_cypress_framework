

describe('drag and drop',()=>{
    it('double click',()=>{
        cy
        .visit("https://www.testandquiz.com/selenium/testing.html")

        cy.get('#dblClkBtn').dblclick()//
        //cy.get('#dblClkBtn').rightclick()

        cy.on('window:alert',(str)=>{
            expect(str) // getting text on the alert window
            .to.equal('hi, JavaTpoint Testing') // asserting the text equal
        })
    })
    it('drag and drop',()=>{
        /* Drag And Drop:
        1. Run on Terminal : npm install --save-dev @4tw/cypress-drag-drop
        2. import '@4tw/cypress-drag-drop'
        
        */
       cy
       .visit('https://www.testandquiz.com/selenium/testing.html')
       
       // dragging #sourceImage over #targetDiv
       cy
       .get('#sourceImage') // source
       .drag('#targetDiv') // target


    })
})