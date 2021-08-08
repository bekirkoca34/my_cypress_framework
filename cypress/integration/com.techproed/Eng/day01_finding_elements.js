describe('Finding Elements', () =>{
    
    it('get method', () =>{
        cy.visit('https://qa-environment.crystalkeyhotels.com/');
        cy.contains('Log in').click()

        // Assertions
        //1. Asserting Url include Logon
        cy.url().should('include','Logon')

        // 2. Assert if log in is visible

        // CSS LOCATORS FOR LOG IN
        //.row>.mb-4
        //h2.mb4
        //h2[class='mb-4']

//1. get() is used to locate the elements
        //should('be.visible') : checking if the element is visible
        cy.get('.row>.mb-4').should('be.visible')


        // Finding total number of links that is child of li
        // assert the total is 29

        // li a => means give me all link(a) that is child number

        // xpath=li//a, css= li a
        cy.get('li a').should('have.length',29)

        // 2. find() is used to find any elemnt after get()
        // get the Single room and assert there is one match 
        cy.get("a[href='/Rooms/6']").should('have.length',1)

        //we can also say specifically
        //find a[href='/Rooms/6']
        cy.get('li').find("a[href='/Rooms/6']").should('have.length',1)

        //3 within()



        /*
       - we should always try get() to find the elements first.
       if this fails to locate the element (not visible) not enique ,
        Then try find,
        - if that also doesnt locate the element 
        then use use within() 
        
        */


    })
})