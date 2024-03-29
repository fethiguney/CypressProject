/// <reference types="cypress" />

describe('First Test',()=>{

    it('Url Test', ()=>{

        cy.visit('https://www.google.com')

        cy.url().should('include', 'google')
    })

    it('Title Test', ()=>{

        cy.visit('https://www.google.com')

        cy.title().should('include', 'Google')
        
        cy.title().should('equal', 'Google')
    })
})