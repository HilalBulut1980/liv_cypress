// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')




//*************************************************** */
// manuell von support/index.js kopiert:
//*************************************************** */


// runs once before all tests in the block if condition is true
before(() => {
  if (Cypress.env('applyRules')) {
    cy.visit('/scripts/catalogrules/apply_rules.php')
  }
})

// now this runs prior to every test
// across all files no matter what
beforeEach(() => {

  if (Cypress.env('ignore_JS_Error')) { // if this is true errors will be ignored
    cy.on('uncaught:exception', (err, runnable) => {
      // return false to prevent the error from
      // failing this test
      return false
    })
  }

  cy.intercept('GET', '/skin/frontend/delphinus/default/js_minify/*.min.js').as('js_files')
  cy.intercept('POST', '/checkout/onepage/getAdditional').as('newAddress')
  cy.intercept('GET', '/checkout/onepage/progress?prevStep=billing').as('newAddress2')

  cy.intercept({
    method: 'POST',
    url: Cypress.env('p2_url'),
    hostname: Cypress.env('pp_hostname'),
  }).as('p2')
})

  
