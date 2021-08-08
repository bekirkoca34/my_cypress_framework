describe('custom method',()=>{


     it('log in',()=>{
         // log in is the custom method that inside the commands.js
         // when we add a function in commands.js
         // it will be accessable in the entire framework automatically
         cy.login('cdef!@gmail.com','12345')
     })

     it.only('negative log in',()=>{
        // log in is the custom method that inside the commands.js
        // when we add a function in commands.js
        // it will be accessable in the entire framework automatically
        cy.login('cdef!!@gmail.com','12345')



     // ASSERTIONS
        // assert if page contains Authentication failed.
        cy.contains('Authentication failed.').should('be.visible')

        cy.url().should('include','controller=authentication')

        //cy.screenshot()// taking screenshot


    })
})