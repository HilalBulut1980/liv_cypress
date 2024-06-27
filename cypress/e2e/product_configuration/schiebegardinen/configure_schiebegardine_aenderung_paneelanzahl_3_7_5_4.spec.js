import jsonLogic from 'json-logic-js';


var test =
{
    "name": "LIVConfig.-Schiebegardine_Aenderung_Paneelanlanzahl_Mica-7340",
    "produkt": "/schiebegardinen/mica-7340",  //PG 3 
    "ab_preis": "43,00",// Startpreis aus Preistabelle 43,00
    "ab_preis_red": "21,50", // --> 50% =21,50
    "supplier": "Erfal",
    "system": "Schiebegardine",
    "modell": "Schiebegardine mit Schienensystem",
    "stoff": "Mica-7340",
    "hoehe": "2200",
    "breite": "3000", 
    "pan_anpassen": true,
    "schiene": 94,

    "overlap_0": 51, //configurator chooses 51 instead of 50
    "paneelAnzahl_0": 3,
    "paneelBreite_0": 1034, // --> panBreite X1= (3000-50) :3 |+50 = 1034
    "price_0": 204, // 2200x1034 --> 204,00

    "overlap_1": 51, //configurator chooses 51 instead of 50
    "paneelAnzahl_1": 7,
    "paneelBreite_1": 472, // --> panBreite X1= (3000-50) :7 |+50 = 472
    "price_1": 107, // 2200x472 --> 107,00

    "overlap_2": 50,
    "paneelAnzahl_2": 5,
    "paneelBreite_2": 640, // --> panBreite X1= (3000-50) :5 |+50 = 640
    "price_2": 138, // 2200x640 --> 138,00

    "overlap_3": 51, //configurator chooses 51 instead of 50
    "paneelAnzahl_3": 4,
    "paneelBreite_3": 788, // --> panBreite X1= (3000-50) :4 |+50 = 788
    "price_3": 157, // 2200x788 --> 157,00
}

describe('Test: Änderung Anzahl Paneele (3-7-5-4) B 3000 mit Mica-7340', () => {

    it(test.name, function () {

        cy.visit(test.produkt)
        checkFromPrices(test.ab_preis, test.ab_preis_red)

        loadConfigurator()
        checkOriginalPrice(test.ab_preis)
        checkSpecialPrice(test.ab_preis_red)

        setSchiebegardineTyp(test.modell)
        setHoehe(test.hoehe)
        setBreite(test.breite)

        checkAnzahlPaneele(test.paneelAnzahl_0)
        checkPaneelBreite_1(test.pan_anpassen, test.paneelBreite_0)
        checkOverlap(test.overlap_0)
        checkOriginalpreis(test.paneelAnzahl_0, test.price_0, test.schiene)

        setAnzahlPaneele(test.paneelAnzahl_1)
        checkPaneelBreite_2(test.pan_anpassen, test.paneelBreite_1)
        checkOverlap(test.overlap_1)
        checkOriginalpreis(test.paneelAnzahl_1, test.price_1, test.schiene)

        setAnzahlPaneele(test.paneelAnzahl_2)
        checkPaneelBreite_3(test.pan_anpassen, test.paneelBreite_2)
        checkOverlap(test.overlap_2)
        checkOriginalpreis(test.paneelAnzahl_2, test.price_2, test.schiene)

        setAnzahlPaneele(test.paneelAnzahl_3)
        checkPaneelBreite_4(test.pan_anpassen, test.paneelBreite_3)
        checkOverlap(test.overlap_3)
        checkOriginalpreis(test.paneelAnzahl_3, test.price_3, test.schiene)
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

function checkAnzahlPaneele(value) {
    cy.get('#paneelnumber input').should('have.value', value)
}

function setAnzahlPaneele(value) {
    cy.get('#paneelnumber input').clear().type(value)
}

//we have 3 paneels in first round --> check 3 paneel width fields --> all fileds should have same value
function checkPaneelBreite_1(checkValue, value) {

    if (checkValue) {

        cy.get('#check_individual input').check()
        for (var i = 1; i <= 3; i++) {
            cy.get('.optional_paneele_wrapper > :nth-child(' + i + ') > .optional_paneele_sizes :nth-child(1) input').should('have.value', value)
        }
    }
}

//we have 7 paneels in second round --> check 7 paneel width fields --> all fileds should have same value
function checkPaneelBreite_2(checkValue, value) {

    if (checkValue) {

        cy.get('#check_individual input').check()
        for (var i = 1; i <= 7; i++) {
            cy.get('.optional_paneele_wrapper > :nth-child(' + i + ') > .optional_paneele_sizes :nth-child(1) input').should('have.value', value)
        }
    }
}

//we have 5 paneels in third round --> check 5 paneel width fields --> all fileds should have same value
function checkPaneelBreite_3(checkValue, value) {

    if (checkValue) {

        cy.get('#check_individual input').check()
        for (var i = 1; i <= 5; i++) {
            cy.get('.optional_paneele_wrapper > :nth-child(' + i + ') > .optional_paneele_sizes :nth-child(1) input').should('have.value', value)
        }
    }
}

//we have 4 paneels in 4th round --> check 4 paneel width fields --> all fileds should have same value
function checkPaneelBreite_4(checkValue, value) {

    if (checkValue) {

        cy.get('#check_individual input').check()
        for (var i = 1; i <= 4; i++) {
            cy.get('.optional_paneele_wrapper > :nth-child(' + i + ') > .optional_paneele_sizes :nth-child(1) input').should('have.value', value)
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
