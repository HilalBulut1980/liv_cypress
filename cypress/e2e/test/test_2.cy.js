describe('test', () => {

  it('test2', async() => {

    cy.visit('/plissee/plissee-weiss')

    var myString = await getString()

    cy.log(myString)

  })

  function getString() {  // old: async function getString() {...

    const subString = new Cypress.Promise((resolve) => { //old: const subString = await new Cypress.Promise((resolve)....

      cy.get('.actions a').invoke('text').then(($orderMessage) => {

        resolve($orderMessage.slice(0, 6))
      })

    })
    return subString
  }

  // The return value of getString() is the Promise and not the resolved value. 
  // Since the 'it' block was already async, you just needed await to force the code to wait for the resolved value.
  // In function getString, you are already returning a Promise, you don't need async/await for that function.
})