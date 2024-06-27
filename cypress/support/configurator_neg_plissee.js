module.exports = {

    configure_neg_plissee: function configure_neg_plissee(test) {

        it(test.name, function () {

            cy.visit(test.produkt)

            loadConfigurator()
            setProduktGruppe(test.system, test.produktgruppe)
            setPlisseeModell(test.system, test.produktgruppe, test.modell)
            setUntererStoff(test.unterer_Stoff)
            setAusrichtung(test.ausrichtung)
            setMeasurements(test.hoehe, test.hoehe_links, test.hoehe_rechts,  test.gesamthoehe, test.teilhoehe, test.breite, test.breite_oben, test.breite_unten, test.df_switcher, test.df_hersteller, test.df_produkt, test.df_typ, test.df_glasbreite, test.df_glashoehe, test.df_falztiefe, test.df_fluegelbreite, test.df_fluegelhoehe, test.df_falzart)

            cy.get('.error-msg').should('be.visible').and('contain', test.message)

            setAusrichtung(test.ausrichtung_new)
            setMeasurements(test.hoehe_new, test.hoehe_links_new, test.hoehe_rechts_new,  test.gesamthoehe_new, test.teilhoehe_new, test.breite_new, test.breite_oben_new, test.breite_unten_new, test.df_switcher, test.df_hersteller, test.df_produkt, test.df_typ, test.df_glasbreite_new, test.df_glashoehe_new, test.df_falztiefe_new, test.df_fluegelbreite_new, test.df_fluegelhoehe_new, test.df_falzart)

            cy.get('.error-msg').should('not.exist')
        })
    }
}

function loadConfigurator() {
    cy.get('.buttons > .buttons__configuration').click()
}

function setProduktGruppe(system, gruppe) {
    if (system == "Cosiflor") {
        cy.get('.tabs').children().contains(gruppe).click({ force: true })
    }
}

function setPlisseeModell(system, produkt, modell) {
    if (system == "Cosiflor") {
        if (produkt == "rechteckige Plissees") {
            //Weitere Modelle aufklappen
            cy.get('.btn-group > :nth-child(1)').click()
        }
        cy.get('.type-selector-left > ul').children().contains(modell).click({ force: true })
    }
    else {
        cy.get('#type-selector-top > ul').children().contains(modell).click({ force: true })
    }
}

function setAusrichtung(value) {
    if (typeof value !== "undefined") {
        cy.contains(new RegExp("^" + value + "\\s*$")).click({ force: true })
    }
}

function setUntererStoff(value) {

    if (typeof value !== "undefined") {
        cy.get('button').contains('Auswahl ändern').click({ force: true })
        cy.get('#material-collection > ul').children().contains(value).click()
    }
}

function setMeasurements(hoehe, hoeheLinks, hoeheRechts, gesamtHoehe, teilHoehe,  breite, breiteOben, breiteUnten, switcher, hersteller, produkt, typ, glasbreite, glashoehe, falztiefe, fluegelbreite, fluegelhoehe, falzart) {

    setBreite(breite)
    setBreiteOben(breiteOben)
    setBreiteUnten(breiteUnten)
    setHoehe(hoehe)
    setHoeheLinks(hoeheLinks)
    setHoeheRechts(hoeheRechts)
    setGesamtHoehe(gesamtHoehe)
    setTeilHoehe(teilHoehe)
    setSwitcher(switcher)
    setHersteller(hersteller)
    setProdukt(produkt)
    setTyp(typ)
    setFalzTyp(falzart)
    setGlasBreite(glasbreite)
    setGlasHoehe(glashoehe)
    setFalzTiefe(falztiefe)
    setFinnenBreite(fluegelbreite)
    setFinnenHoehe(fluegelhoehe)
}

function setHoehe(value) {

    if (typeof value !== "undefined") {
        cy.get('#hoehe input').clear().type(value)
    }
}

function setHoeheLinks(value) {

    if (typeof value !== "undefined") {
        cy.get('#hoehe_links input').clear().type(value)
    }
}

function setHoeheRechts(value) {

    if (typeof value !== "undefined") {
        cy.get('#hoehe_rechts input').clear().type(value)
    }
}

function setGesamtHoehe(value) {

    if (typeof value !== "undefined") {
        cy.get('#total_height input').clear().type(value)
    }
}

function setTeilHoehe(value) {

    if (typeof value !== "undefined") {
        cy.get('#partial_height input').clear().type(value)
    }
}

function setBreite(value) {

    if (typeof value !== "undefined") {
        cy.get('#breite input').clear().type(value)
    }
}

function setBreiteOben(value) {

    if (typeof value !== "undefined") {
        cy.get('#breite_oben input').clear().type(value)
    }
}

function setBreiteUnten(value) {

    if (typeof value !== "undefined") {
        cy.get('#breite_unten input').clear().type(value)
    }

}

function setSwitcher(switcher) {

    if (typeof switcher != "undefined") {
        if (switcher == "Genormt") {
            cy.contains("Dachfenster auswählen").click()
        }
        else if (switcher == "Ungenormt") {
            cy.contains("Maße des Dachfenster manuell eingeben").click()
        }
    }
}

function setHersteller(value) {

    if (typeof value !== "undefined") {
        cy.get('.dfselect_wrapper > :nth-child(1) select').select(value)
    }
}

function setProdukt(value) {

    if (typeof value !== "undefined") {
        cy.get('.dfselect_wrapper > :nth-child(2) select').select(value)
    }
}

function setTyp(value) {

    if (typeof value !== "undefined") {
        cy.get('.dfselect_wrapper > :nth-child(3) select').select(value)
    }
}

function setFalzTyp(value) {

    if (typeof value !== "undefined") {
        cy.contains(value).click()
    }
}

function setGlasBreite(value) {

    if (typeof value !== "undefined") {
        cy.get('#glasbreite input').clear().type(value)
    }
}

function setGlasHoehe(value) {

    if (typeof value !== "undefined") {
        cy.get('#glashoehe input').clear().type(value)
    }
}

function setFalzTiefe(value) {

    if (typeof value !== "undefined") {
        cy.get('#falztiefe input').clear().type(value)
    }
}

function setFinnenBreite(value) {

    if (typeof value !== "undefined") {
        cy.get('#finnenbreite input').clear().type(value)
    }
}

function setFinnenHoehe(value) {

    if (typeof value !== "undefined") {
        cy.get('#finnenhoehe input').clear().type(value)
    }
}