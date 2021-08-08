

describe('hooks', () => {

before(()=>{
    console.log('before method')
})

beforeEach(()=>{
    console.log('beforeEach method')
    cy.visit('https://qa-enviroment.koalaresorthotels.com/')


})

after(()=>{
    console.log('after method')
})

afterEach(()=>{
    console.log('afterEach method')
    cy.url().should('include','/Account/Logon')
})



    it('test 1', () => {



    })
    it('test 2', () => {

        
    })
})