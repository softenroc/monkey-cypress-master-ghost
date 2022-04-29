/// <reference types="cypress" />

context('Window', () => {
    beforeEach(() => {
      cy.visit('http://localhost:2368/ghost')
      cy.login('df.rojasr1@uniandes.edu.co','abcd1234567')
    })
  
    it('Test', () => {
        cy.log('Test ghost');
      })

  })
  