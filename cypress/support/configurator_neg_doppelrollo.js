module.exports = {

    configure_neg_doppelrollo: function configure_neg_doppelrollo(test) {

        it(test.name, function () {
          
            cy.visit(test.produkt)

            loadConfigurator()
            setRolloTyp(test.rollotyp)
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

function setRolloTyp(value) {
    cy.get('#type-selector-top > ul').children().contains(value).click({ force: true })
}

function setHoehe(value) {
    cy.get('#hoehe input').clear().type(value).blur()
}

function setBreite(value) {
    cy.get('#breite input').clear().type(value)
}