import jsonLogic from 'json-logic-js';


var test =
{
    "name": "LIVConfig.-Schiebegardine_Aenderung_Paneelbreite_Piara-7280",
    "produkt": "/schiebegardinen/piara-7280", //PG 1
    "ab_preis": "33,00",// Startpreis aus Preistabelle 33,00
    "ab_preis_red": "16,50", // --> 50% 
    "supplier": "Erfal",
    "system": "Schiebegardine",
    "modell": "Schiebegardine mit Schienensystem",
    "stoff": "Piara-7280",
    "hoehe": "2300",
    "breite": "5900",
    "pan_anpassen": true,
    "schiene": 185,
    "panAnzahl": 6, //preselected for 2500x5900

    //preselected values
    "overlap_0": 50,
    "paneelBreite_0": 1025, // --> panBreite X1= (5900-50) |:5 |+50 = 1025 
    "price_0": 148, // 2300x1025 --> 148,00

    "paneelBreite_1": 1000,
    "overlap_1": 20, // --> Overlap = [Breite - (panAnzahl x panBreite)] / [- (panAnzahl-1)] --> [5900 - (6 x 1000)] / - (6-1) = -100 / -5 = 20
    "price_1": 136, // 2300x1000 --> 136,00

    "paneelBreite_2": 1200,
    "overlap_2": 260, // --> Overlap = [Breite - (panAnzahl x panBreite)] / [- (panAnzahl-1)] --> [5900 - (6 x 1200)] / - (6-1) = -1300 / -5 = 260
    "price_2": 160, // 2300x1200 --> 160,00

    "paneelBreite_3": 800,
    "overlap_3": -220, // --> Overlap = [Breite - (panAnzahl x panBreite)] / [- (panAnzahl-1)] --> [5900 - (6 x 800)] / - (6-1) = 1100 / -5 = -220
    "price_3": 115, // 2300x800 --> 115,00

}

describe('Test: Änderung Breite Paneele, B 5900 mit Piara-7280', () => {

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
        checkPaneelBreite(test.pan_anpassen, test.paneelBreite_0)
        checkOverlap(test.overlap_0)
        checkOriginalpreis(test.panAnzahl, test.price_0, test.schiene)

        setBreitePaneele(test.pan_anpassen, test.paneelBreite_1)
        checkOverlap(test.overlap_1)
        checkOriginalpreis(test.panAnzahl, test.price_1, test.schiene)

        setBreitePaneele(test.pan_anpassen, test.paneelBreite_2)
        checkOverlap(test.overlap_2)
        checkOriginalpreis(test.panAnzahl, test.price_2, test.schiene)

        setBreitePaneele(test.pan_anpassen, test.paneelBreite_3)
        checkOverlap(test.overlap_3)
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

//we have 6 paneels --> check 6 paneel width fields --> all fileds should have same value
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

//we have 6 paneels --> check 6 paneel width fields --> all fileds should have same value
function setBreitePaneele(checkValue, value) {

    if (checkValue) {

        cy.get('#check_individual input').check()
        for (var i = 1; i <= 6; i++) {
            cy.get('.optional_paneele_wrapper > :nth-child(' + i + ') > .optional_paneele_sizes :nth-child(1) input').clear().type(value)
        }
    }
}

function checkOverlap(value) {
    cy.get('#paneeloverlap input').should('have.value', value)
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