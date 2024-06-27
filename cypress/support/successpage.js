module.exports = {

    checkSuccessMessage: function checkSuccessMessage() {

        cy.url().should('contain', '/checkout/onepage/success')
        cy.get('.danke_message').should('contain', 'Vielen Dank für Ihre Bestellung!')
        cy.get('.bestellnummer').should('contain', 'Ihre Bestellnummer lautet:')
    },

    getOrdernumber: function getOrdernumber() {

        //wrapping cy commands with a Promise  --> this fails when testing not locally
        /*const bestellNummer = new Cypress.Promise((resolve) => { 

             cy.get('.bestellnummer').invoke('text').then(($orderMessage) => {
                resolve($orderMessage.slice(27, 36))
            })
        })
        return bestellNummer*/

        //Cypress does it's own promise chaining --> works fine!
        return cy.get('.bestellnummer').invoke('text')
            .then(($orderMessage) => $orderMessage.slice(27, 36))

    }

}

