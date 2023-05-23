/// <references types="cypress"/>

context('',()=>{

    beforeEach('Run before each test', ()=>{
        cy.visit('/')
    })

    it('Url Test', ()=>{
        cy.url().should('include', "google")
        
    })

    it('Title Test', ()=>{
        cy.title().should('include', 'Google')
        
    })

    it('Search Test', ()=>{
        cy.get('.a4bIc', {timeout:3000}).type('cypress.io{enter}')
        
    })

    it('Search Test', ()=>{
        cy.get('.a4bIc', {timeout:3000}).type('cypress.io{enter}')
        
    })
})