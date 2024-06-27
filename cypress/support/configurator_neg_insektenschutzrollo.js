module.exports = {

    configure_neg_insektenschutzrollo: function configure_neg_insektenschutzrollo(test) {

        it(test.name, function () {

            cy.visit(test.produkt)
            setBreite(test.breite)
            setHoehe(test.hoehe)
            cy.get('.error-msg').should('be.visible').and('contain', test.message)


            setBreite(test.breite_new)
            setHoehe(test.hoehe_new)
            cy.get('.error-msg').should('not.exist')
        })
    }
}


function setBreite(value) {
    cy.get('#options_width').clear().type(value)
}

function setHoehe(value) {
    cy.get('#options_height').clear().type(value)
}