module.exports = {

    configure_neg_raffrollo: function configure_neg_raffrollo(test) {

        it(test.name, function () {

            cy.visit(test.produkt)

            loadConfigurator()

            setHoehe(test.hoehe)
            setBreite(test.breite)

            cy.get('.error-msg').should('be.visible').and('contain', test.message)

            setHoehe(test.hoehe_new)
            setBreite(test.breite_new)

            cy.get('.error-msg').should('not.exist')
        })
    }
}

function loadConfigurator() {
    cy.get('.buttons > .buttons__configuration').click()
}

function setHoehe(value) {
    if (typeof value != "undefined") {
        cy.get('#hoehe_in_mm input').clear().type(value)
    }
}

function setBreite(value) {
    if (typeof value != "undefined") {
        cy.get('#breite_in_mm input').clear().type(value)
    }
}

