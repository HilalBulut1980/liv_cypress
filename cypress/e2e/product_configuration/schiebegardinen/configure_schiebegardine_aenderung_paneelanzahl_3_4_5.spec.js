import jsonLogic from 'json-logic-js';


var test =
{
    "name": "LIVConfig.-Schiebegardine_Aenderung_Paneelanlanzahl_Piara-7281",
    "produkt": "/schiebegardinen/piara-7281",  //PG 1
    "ab_preis": "33,00",// Startpreis aus Preistabelle 33,00
    "ab_preis_red": "16,50", // --> 50% 
    "supplier": "Erfal",
    "system": "Schiebegardine",
    "modell": "Schiebegardine mit Schienensystem",
    "stoff": "Piara-7281",
    "hoehe": "2000",
    "breite": "2500", 
    "pan_anpassen": true,
    "schiene": 85,  //bis 2600mm

    "overlap_0": 51,
    "paneelAnzahl_0": 3,
    "paneelBreite_0": 867, // --> panBreite X1= (2500-50) :3 |+50 = 867
    "price_0": 114, // 2000x867 --> 114,00

    "overlap_1": 51,  //configurator chooses 51 instead of 50
    "paneelAnzahl_1": 4,
    "paneelBreite_1": 663, // --> panBreite X1= (2500-50) :4 |+50 = 663
    "price_1": 94, // 2000x663--> 94,00
    
    "overlap_2": 50,
    "paneelAnzahl_2": 5,
    "paneelBreite_2": 540,
    "price_2": 86, // 2000x540 --> 86,00
}

describe('Test: Änderung Anzahl Paneele (3-4-5) B 2500 mit Piara-7281', () => {

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

//we have 4 paneels in second round --> check 4 paneel width fields --> all fileds should have same value
function checkPaneelBreite_2(checkValue, value) {

    if (checkValue) {

        cy.get('#check_individual input').check()
        for (var i = 1; i <= 4; i++) {
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