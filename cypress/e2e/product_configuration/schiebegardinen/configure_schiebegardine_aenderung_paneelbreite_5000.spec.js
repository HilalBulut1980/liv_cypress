import jsonLogic from 'json-logic-js';


var test =
{
    "name": "LIVConfig.-Schiebegardine_Aenderung_Paneelbreite_Ginella-7300",
    "produkt": "/schiebegardinen/Ginella-7300", //PG 2
    "ab_preis": "36,00",// Startpreis aus Preistabelle 36,00
    "ab_preis_red": "18,00", // --> 50% 
    "supplier": "Erfal",
    "system": "Schiebegardine",
    "modell": "Schiebegardine mit Schienensystem",
    "stoff": "Ginella-7300",
    "hoehe": "2500",
    "breite": "5400",
    "pan_anpassen": true,
    "schiene": 167,
    "panAnzahl": 5, //preselected for 2500x5400

    //preselected values
    "overlap_0": 50,
    "paneelBreite_0": 1120, // --> panBreite X1= (5400-50) |:5 |+50 = 1120 
    "price_0": 202, // 2500x1120 --> 202,00

    //1st change
    "paneelBreite_1": 1000,
    "overlap_1": -100, // --> Overlap = [Breite - (panAnzahl x panBreite)] / [- (panAnzahl-1)] --> [5400 - (5 x 1000)] / - (5-1) = 400 / -4 = -100
    "price_1": 171, // 2500x1000 --> 171,00

    //2nd change
    "paneelBreite_2": 950,
    "overlap_2": -162, // --> Overlap = [Breite - (panAnzahl x panBreite)] / [- (panAnzahl-1)] --> [5400 - (5 x 950)] / - (5-1) = 650 / -4 = -162,50
    "price_2": 171, // 2500x950 --> 171,00

    //3rd change
    "paneelBreite_3": 1050,
    "overlap_3": -37, // --> Overlap = [Breite - (panAnzahl x panBreite)] / [- (panAnzahl-1)] --> [5400 - (5 x 1050)] / - (5-1) = 150 / -4 = -37,50
    "price_3": 188, // 2500x1050 --> 188,00
}

describe('Test: Änderung Breite Paneele, B 5400 mit Ginella-7300', () => {

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

//we have 5 paneels --> check 5 paneel width fields --> all fileds should have same value
function checkPaneelBreite(checkValue, value) {

    if (checkValue) {

        cy.get('#check_individual input').check()
        for (var i = 1; i <= 5; i++) {
            cy.get('.optional_paneele_wrapper > :nth-child(' + i + ') > .optional_paneele_sizes :nth-child(1) input').should('have.value', value)
        }
    }
}

function checkAnzahlPaneele(value) {
    cy.get('#paneelnumber input').should('have.value', value)
}

//we have 5 paneels --> check 5 paneel width fields --> all fileds should have same value
function setBreitePaneele(checkValue, value) {

    if (checkValue) {

        cy.get('#check_individual input').check()
        for (var i = 1; i <= 5; i++) {
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