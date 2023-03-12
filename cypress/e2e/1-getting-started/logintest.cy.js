describe('login', () => {
    beforeEach(() => {
      cy.visit('https://magento.softwaretestingboard.com/')
      cy.get('.panel > .header > .authorization-link > a').click()
    })
  
    it('verify that user can login with valid credentials', () => {
        cy.get('#email').type('alextin@gmail.com')
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type('Testing123Alex')
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click()
        cy.get('.todo-list li').should('have.length', 2)
    })


it.only('verify that user can recover password', () => {
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > .secondary > .action > span').click()
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type('Testing123Alex')
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click()
    cy.get('.todo-list li').should('have.length', 2)
    
    })

})