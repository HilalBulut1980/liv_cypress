import jsonLogic from 'json-logic-js';


var test =
{
    "name": "LIVConfig.-Schiebegardine_Aenderung_Overlap_Bambou-7344",
    "produkt": "/schiebegardinen/bambou-7344", //PG 3 
    "ab_preis": "43,00",// Startpreis aus Preistabelle 43,00
    "ab_preis_red": "21,50", // --> 50% =21,50
    "supplier": "Erfal",
    "system": "Schiebegardine",
    "modell": "Schiebegardine mit Schienensystem",
    "stoff": "Bambou-7344",
    "hoehe": "2600",
    "breite": "5900",  // 6 Paneele --> panBreite X1= (5900-50) :6 |+50 = 1025
    "pan_anpassen": true,

    "schiene": 185,
    "panAnzahl": 6, // preselected for 2600x5900

    "overlap_0": 50,  // preselected for 2600x5900
    "panBreite_0": 1025, // preselected for 2600x5900
    "price_0": 230, // 2600x1025 --> 230,00

    "overlap_1": 10, // 6 Paneele --> panBreite X1= (5900-10) :6 |+10 = 992
    "panBreite_1": 992,
    "price_1": 209, // 2600x992 --> 209,00

    "overlap_2": 40, // 6 Paneele --> panBreite X1= (5900-40) :6 |+40 = 1017
    "panBreite_2": 1017,
    "price_2": 230, // 2600x1017 --> 230,00

    "overlap_3": 25, // 6 Paneele --> panBreite X1= (5900-25) :6 |+25 = 1005
    "panBreite_3": 1005,
    "price_3": 230, // 2600x1005 --> 230,00
}

describe('Test: Änderung Überlappung Paneele 50-10-40-25 mit Bambou-7344', () => {

    it(test.name, function () {

        cy.visit(test.produkt)
        checkFromPrices(test.ab_preis, test.ab_preis_red)

        loadConfigurator()
        checkOriginalPrice(test.ab_preis)
        checkSpecialPrice(test.ab_preis_red)

        setSchiebegardineTyp(test.modell)
        setHoehe(test.hoehe)
        setBreite(test.breite)

        checkAnzahlPaneele(test.panAnzahl)
        checkPaneelBreite(test.pan_anpassen, test.panBreite_0)
        checkOverlap(test.overlap_0)
        checkOriginalpreis(test.panAnzahl, test.price_0, test.schiene)

        setOverlap(test.overlap_1)
        checkAnzahlPaneele(test.panAnzahl)
        checkPaneelBreite(test.pan_anpassen, test.panBreite_1)
        checkOriginalpreis(test.panAnzahl, test.price_1, test.schiene)

        setOverlap(test.overlap_2)
        checkAnzahlPaneele(test.panAnzahl)
        checkPaneelBreite(test.pan_anpassen, test.panBreite_2)
        checkOriginalpreis(test.panAnzahl, test.price_2, test.schiene)

        setOverlap(test.overlap_3)
        checkAnzahlPaneele(test.panAnzahl)
        checkPaneelBreite(test.pan_anpassen, test.panBreite_3)
        checkOriginalpreis(test.panAnzahl, test.price_3, test.schiene)
    })
})

function checkFromPrices(value1, value2) {
    cy.get('.old-price').should('contain', value1)
    cy.get('.special-price').should('contain', value2)
}

function checkOriginalPrice(value) {
    cy.get('#configurator-price-cart > .add-to-cart > .old-price > .price').should('contain', value)
}

function checkSpecialPrice(value) {
    cy.get('#configurator-price-cart > .add-to-cart > .special-price').should('contain', value)
}

function loadConfigurator() {
    cy.get('.buttons > .buttons__configuration').click()
}

function setSchiebegardineTyp(value) {
    cy.get('#type-selector > div > ul').children().contains(value).click({ force: true })
}

function setHoehe(value) {
    cy.get('#hoehe_in_mm input').type(value)
}

function setBreite(value) {
    cy.get('#breite_in_mm input').type(value)
}

//we have six paneels --> check six paneel width fields --> all fileds should have same value
function checkPaneelBreite(checkValue, value) {

    if (checkValue) {

        cy.get('#check_individual input').check()
        for (var i = 1; i <= 6; i++) {
            cy.get('.optional_paneele_wrapper > :nth-child(' + i + ') > .optional_paneele_sizes :nth-child(1) input').should('have.value', value)
        }
    }
}

function checkAnzahlPaneele(value) {
    cy.get('#paneelnumber input').should('have.value', value)
}

function checkOverlap(value) {
    cy.get('#paneeloverlap input').should('have.value', value)
}

function setOverlap(value) {
    cy.get('#check_individual input').uncheck()
    cy.get('#paneeloverlap input').clear().type(value)
}

function checkOriginalpreis(pAnzahl, preis, schiene) {

    let stoffPrice = (jsonLogic.apply({ '*': [pAnzahl, preis] }))
    let price = (jsonLogic.apply({ '+': [stoffPrice, schiene] })).toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
    cy.log(pAnzahl)
    cy.log(preis)
    cy.log(schiene)
    cy.log(price)
    cy.get('.old-price').should('contain', price)
}