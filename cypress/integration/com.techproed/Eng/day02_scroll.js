describe('scroll', ()=>{
    // scrollIntoView()
    // 1. locate the element you want to scroll
    // 2. use scrollIntoView()
    it('scroll',()=>{
    cy.visit('https://qa-environment.crystalkeyhotels.com/')
    cy.wait(2000)

  // scrolling down to 'Our Rooms' element
  cy.get('.col-md-7 > .mb-4')
  .scrollIntoView();

  cy.wait(4000)
// scrolling down to 'Blog'
cy
.get(':nth-child(9) > .container > .justify-content-center > .col-md-7 > h2')
.scrollIntoView();

// scrolling down to 'usefullinks'
cy
.wait(3000)
.get(':nth-child(2) > .ftco-footer-widget > .ftco-heading-2')
.scrollIntoView();


// scrolTo(x,y)
cy.scrollTo(0,500)//scrolling 500 px up
/*scrollTo()
1. we dont scrollon an element
we scroll a certain amount (pixel or percentage)

*/

    })
})