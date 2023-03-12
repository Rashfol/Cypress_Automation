import * as Locators from '../pageobjects/Locators.js'
import {faker} from '@faker-js/faker';
const firstname = faker.name.firstName()
const lastname = faker.name.lastName()
const email = faker.internet.email()


describe('Validate all required fields for creating new account', () => {
    beforeEach(() => {
      cy.visit(Locators.URL)
      cy.wait(10000)
      cy.get(Locators.homepageSignInLink).click()
      cy.get(Locators.CreateNewAccountButton).click()
    })
  
    it('verify that new account cannot be created without firstname', () => {
        cy.get(Locators.lastNameField).type('Tester')
        cy.get(Locators.emailField).type('testing@gmail.com')
        cy.get(Locators.passwordField).type('tester123')
        cy.get(Locators.passwordConfirmation).type('tester123')
        cy.get(Locators.createAccountButton).click()
        cy.get('#firstname-error').should('have.text', 'This is a required field.')
    }) 

    it('verify that new account cannot be created without lasttname', () => {
        cy.get('#firstname').type('Cyril')
        //cy.get('#lastname').type('Tester')
        cy.get('#email_address').type('testing@gmail.com')
        cy.get('#password').type('tester123')
        cy.get('#password-confirmation').type('tester123')
        cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
        cy.get('#lastname-error').should('have.text', 'This is a required field.')
    })
    
    it('verify that new account cannot be created without email', () => {
        cy.get('#firstname').type('Cyril')
        cy.get('#lastname').type('Tester')
        //cy.get('#email_address').type('testing@gmail.com')
        cy.get('#password').type('tester123')
        cy.get('#password-confirmation').type('tester123')
        cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
        cy.wait(5000)
        cy.get('#email_address-error').should('have.text', 'This is a required field.')
    })
    
    it('verify that new account cannot be created without password', () => {
        cy.get('#firstname').type('Cyril')
        cy.get('#lastname').type('Tester')
        cy.get('#email_address').type('testing@gmail.com')
        //cy.get('#password').type('tester123')
        cy.get('#password-confirmation').type('tester123')
        cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
        cy.get('#password-error').should('have.text', 'This is a required field.')
    })  
    
    it('verify that new account cannot be created without password confirmation', () => {
        cy.get('#firstname').type('Cyril')
        cy.get('#lastname').type('Tester')
        cy.get('#email_address').type('testing@gmail.com')
        cy.get('#password').type('tester123')
        //cy.get('#password-confirmation').type('tester123')
        cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
        cy.get('#password-confirmation-error').should('have.text', 'This is a required field.')
    })  

    it('verify that user can create new account', () => {
        cy.get('#firstname').type(firstname)
        cy.get('#lastname').type(lastname)
        cy.get('#email_address').type(email)
        cy.get('#password').type('tester123!')
        cy.get('#password-confirmation').type('tester123!')
        cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
        cy.wait(5000)
        cy.get('#maincontent > div.page.messages > div:nth-child(2) > div > div > div').should('have.text', 'Thank you for registering with Main Website Store.')
    })  

})