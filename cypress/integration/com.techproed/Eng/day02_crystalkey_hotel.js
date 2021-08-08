describe('Crystal Key Hotel', ()=>{
    it('Test 1', ()=> {
    cy.visit('https://qa-environment.koalaresorthotels.com/')
    //seleniumdaki get()
    //login
    //1.yol
    //cy.get(‘#navLogon > .nav-link’).click()
    //2.yol
    cy.contains('Log in').click()
    //contains() metni text olarak buluyor
    //userername: ‘manager’
    cy.get('#UserName').type('Manager')
    //driver.findElement(BycssLocator(‘#UserNam’)).sendKeys(‘Manager’)
    //password: ‘Manager2!’
    cy.get('#Password').type('Manager1!')
    cy.get('#btnSubmit').click()



    
})
})



// ./node_modules/.bin/cypress run --record --key 64ea8491-088d-44dc-bc06-bf0679cc1595