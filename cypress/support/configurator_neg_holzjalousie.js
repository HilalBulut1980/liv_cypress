module.exports = {

    configure_neg_holzjalousie: function configure_neg_holzjalousie(test) {

        it(test.name, function () {
           
            cy.visit(test.produkt)
            setProduktGruppe(test.produktgruppe)
            setJalousieStoff(test.farbe)
            setHoehe(test.hoehe)
            setBreite(test.breite)
            // max. Werte für zB 50mm mit Kettenbedienung nicht testbar, da 
            // statt einer Fehleeldung die Bedienung von Kette auf Schnur springt
            //setBedienung(test.bedientyp)
            //setBefestigung(test.befestigung)
            cy.get('.error-msg').should('be.visible').and('contain', test.message)

            setHoehe(test.hoehe_new)
            setBreite(test.breite_new)
            cy.get('.error-msg').should('not.exist')
        })
    }
}

function setProduktGruppe(gruppe) {
    cy.get('#blinds-type > .blinds-type > ul').children().each(function ($el) {
        if ($el.text().indexOf(gruppe) >= 0) {
            cy.wrap($el).click();
        }
    })
}

function setJalousieStoff(farbe) {

    if (farbe != "") {
        cy.get('#jalousie-collection > ul').children().contains(farbe)
            .then($element => {  //click on image of color not on text
                cy.wrap($element).parent().siblings('.product-image').click()
            })
    }
}

function setHoehe(value) {
    cy.get('#hoehe_in_mm input').clear().type(value)
}

function setBreite(value) {
    cy.get('#breite_in_mm input').clear().type(value)
}

function setBefestigung(value) {
    if (value != "") {
        cy.get('.befestigung-type > div >  ul').children().contains(value).click({ force: true })
    }
}

function setBedienung(value) {
    if (value != "") {
        cy.get('.bedienung > div > ul').children().contains(value).click({ force: true })
    }
}