// This import is to handle iframes
//
import 'cypress-iframe';


// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


// This import gives us handle to drag and drop
import '@4tw/cypress-drag-drop'

// for file upload
import 'cypress-file-upload';

/*
-create a custom method
  -name : login
  -parameters : (email, password)
  -functionallty
    - go tothe link
    - click on the Sign in link
    type email and password
    - click on the sign in button

*/
Cypress.Commands.add('login',(email,password)=>{
    cy.visit("http://automationpractice.com/index.php")
    cy.get('.login').click()
    cy.get('#email').type(email)
    cy.get('#passwd').type(password)
    cy.get('#SubmitLogin > span').click()
})

/*
Amazon Search custom method :  amazonSearch
This method will accept one argument as a product name
Then search for that product 
Then click on serach button

*/
Cypress.Commands.add('amazonSearch',(productName)=>{
    cy.visit("https://www.amazon.com/")
    cy.get('#twotabsearchtextbox').type(productName)
    cy.get('#nav-search-submit-button').click()


})

