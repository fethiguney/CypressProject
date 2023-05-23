/// <reference types="cypress" />

describe('First Test',function () {

    it('Url Test', function () {

        cy.visit('https://www.google.com')

        cy.url().should('include', 'google')
    })

    it('Title Test', function() {

        cy.visit('https://www.google.com')

        cy.title().should('include', 'Google')
        
        cy.title().should('equal', 'Google')
    })
})