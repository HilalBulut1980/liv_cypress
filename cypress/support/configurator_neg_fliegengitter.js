module.exports = {

    configure_neg_fliegengitter: function configure_neg_fliegengitter(test) {

        it(test.name, function () {

            cy.visit(test.produkt)
            setEinbau(test.einbau)
            setForm(test.form)  //Rechteck oder Sonderform
            setTyp(test.form, test.typ)
            setBreite(test.breite)
            setBreiteOben(test.breite_oben)
            setBreiteUnten(test.breite_unten)
            setHoehe(test.hoehe)
            setHoeheLinks(test.hoehe_links)
            setHoeheRechts(test.hoehe_rechts)
            setHoeheTeil(test.hoehe_teil)
            setHoeheGesamt(test.hoehe_gesamt)
            cy.get('.error-msg').should('be.visible').and('contain', test.message)

            setBreite(test.breite_new)
            setBreiteOben(test.breite_oben_new)
            setBreiteUnten(test.breite_unten_new)
            setHoehe(test.hoehe_new)
            setHoeheLinks(test.hoehe_links_new)
            setHoeheRechts(test.hoehe_rechts_new)
            setHoeheTeil(test.hoehe_teil_new)
            setHoeheGesamt(test.hoehe_gesamt_new)
            cy.get('.error-msg').should('not.exist')
        })
    }
}

function setForm(value) {
    cy.contains(value).click()
}

function setTyp(form, typ) {
    if (form == "Sonderform") {
        cy.contains(typ).click()  
    }
}

function setBreite(value) {
    if (typeof value !== "undefined") {
        cy.contains('Breite (in mm)').next('input').clear().type(value)
    }
}

function setBreiteOben(value) {
    if (typeof value !== "undefined") {
        cy.contains('Breite oben (in mm)').next('input').clear().type(value)
    }
}
function setBreiteUnten(value) {
    if (typeof value !== "undefined") {
        cy.contains('Breite unten (in mm)').next('input').clear().type(value)
    }
}

function setHoehe(value) {
    if (typeof value !== "undefined") {
        cy.get('#options_height').clear().type(value)
    }
}

function setHoeheLinks(value) {
    if (typeof value !== "undefined") {
        cy.contains('Höhe links (in mm)').next('input').clear().type(value)
    }
}

function setHoeheRechts(value) {
    if (typeof value !== "undefined") {
        cy.contains('Höhe rechts (in mm)').next('input').clear().type(value)
    }
}

function setHoeheTeil(value) {
    if (typeof value !== "undefined") {
        cy.contains('Teilhöhe (in mm)').next('input').clear().type(value)
    }
}

function setHoeheGesamt(value) {
    if (typeof value !== "undefined") {
        cy.contains('Gesamthöhe (in mm)').next('input').clear().type(value)
    }
}

function setEinbau(value) {
    if (typeof value !== "undefined") {
        cy.get('span').contains(value).click({ force: true })
    }
}
