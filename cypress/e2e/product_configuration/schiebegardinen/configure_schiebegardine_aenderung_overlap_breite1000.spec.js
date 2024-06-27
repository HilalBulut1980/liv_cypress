import jsonLogic from 'json-logic-js';


var test =
{
    "name": "LIVConfig.-Schiebegardine_Aenderung_Overlap_Pika-7327",
    "produkt": "/schiebegardinen/pika-7327",  //PG 1
    "ab_preis": "33,00",// Startpreis aus Preistabelle 33,00
    "ab_preis_red": "16,50", // --> 50% 
    "supplier": "Erfal",
    "system": "Schiebegardine",
    "modell": "Schiebegardine mit Schienensystem",
    "stoff": "Pika-7327",
    "hoehe": "2000",
    "breite": "1000", // 2 Paneele --> panBreite X1= (1000-50) :2 |+50 = 525
    "pan_anpassen": true,
    "schiene": 46,
    "panAnzahl": 2, // preselected for 2000x1000

    "overlap_0": 50,  // preselected for  2000x1000
    "panBreite_0": 525, // preselected for  2000x1000
    "price_0": 86, // 2000x525 --> 86,00

    "overlap_1": 0, // 2 Paneele --> panBreite X1= (1000-0) :2 |+0 = 500
    "panBreite_1": 500,
    "price_1": 76, // 2000x500--> 76,00

    "overlap_2": -10, // 2 Paneele --> panBreite X1= (1000- - 10) :2 |-10 = 495
    "panBreite_2": 495,
    "price_2": 76, // 2000x495--> 76,00

    "overlap_3": 150, // 2 Paneele --> panBreite X1= (1000-150) :2 |+150 = 575
    "panBreite_3": 575,
    "price_3": 86, // 2000x575 --> 86,00
}

describe('Test: Änderung Überlappung Paneele 50-0-(-10)-150 mit Pika-7327', () => {

    
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

//we have 2 paneels --> check 2 paneel width fields --> all fileds should have same value
function checkPaneelBreite(checkValue, value) {

    if (checkValue) {

        cy.get('#check_individual input').check()
        for (var i = 1; i <= 2; i++) {
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