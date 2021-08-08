
describe('PAYLINN',()=>{

     before(function(){
         // this is used to access the data that is inside creds.json
         // cy.fixture('NAME OF FILE')
         // promise .then
         cy.fixture('creds').then(
             (data) =>{
                 // this.data is used to access the global data veriable
                 // I just want to use data variable in the entire class
                 this.data=data;
             }
         )
     })


    it('Paylinn login test',function(){
        // go to website
        cy.visit('https://www.paylinn.com/')
        // cliking Sign In 
        cy.contains('Sign In').click()

        // entering username
        cy
        .get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
        .type(this.data.username)

        // asserting if username is entered in the input box
        // we will verify if the value attribute has User (this.data.username)
        cy
        .get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
        .should('have.attr','value',this.data.username)

  //   entering password
        cy
        .get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
        .type(this.data.password)
    // clicking submit botton
        cy
        .get('.MuiButton-label')
        .click()
// verifying- assertion  ==> Welcome text
        cy
        .get('.header__nav > :nth-child(1) > .header__lineOne')
        .should('have.text','Welcome')


     cy.scrollTo('bottom')

    // we can do multiple assertion using and keyword
     cy
     .get('.header__nav')
     .should('contain.text','Welcome')
     .and('contain.text','React')
     .and('contain.text','Logout')
     .and('contain.text',this.data.username) // User



    })
    
})