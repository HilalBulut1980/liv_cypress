module.exports = {

    configure_neg_jalousie: function configure_neg_jalousie(test) {

        it(test.name, function () {
          
            cy.visit(test.produkt)
            setProduktGruppe(test.produktgruppe)
            setJalousieStoff(test.farbe)
            setHoehe(test.hoehe)
            setBreite(test.breite)
            cy.get('.error-msg').should('be.visible').and('contain', test.message)

            setHoehe(test.hoehe_new)
            setBreite(test.breite_new)
            cy.get('.error-msg').should('not.exist')
        })
    }
}

function setProduktGruppe(gruppe) {
    cy.get('.testmenu').children().each(function ($el) {
        if ($el.text().indexOf(gruppe) >= 0) {
            cy.wrap($el).wait(1000).click();
        }
    })
}

function setJalousieStoff(farbe) {
    cy.get('#jalousie-collection > ul').children().contains(farbe)
        .then($element => {  //click on image of color not on text
            cy.wrap($element).parent().siblings('.product-image').click()
        })
}

function setBreite(value) {
    cy.get('#breite_in_mm input').clear().type(value)
}

function setHoehe(value) {
    cy.get('#hoehe_in_mm input').clear().type(value)
}