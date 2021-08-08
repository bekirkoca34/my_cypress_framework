describe('multiplewindow',()=>{

it('removing target',()=>{
    cy
        .visit("https://the-internet.herokuapp.com/windows")
        .wait(3000)

        cy.get('.example > a')
        .invoke('removeAttr','target') // invoke('removeAttr','Atribute name') => siliyor
        .click()

    //  assertions 
        cy
        .get('h3')
        .should('have.text','New Window')


})
it.only('open url a new window ',()=>{

    cy
    .visit("https://the-internet.herokuapp.com/windows")
    .wait(3000)

    cy
    .get('.example > a')
    .then((Element) =>{
        const newUrl=Element.prop('href')
    cy
    .visit(newUrl)


    })
    // assertion
    cy
    .get('h3')
    .should('have.text','New Window')
    
})

})