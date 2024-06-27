// var configurator = require("../../../support/configurator_cosiflorplissee.js");
// var configurator = require("../../../support/configurator_cosiflorplissee.js");

var cartPage = require("../../../support/cart.js");
var successPage = require("../../../support/successpage.js");

var test = {
    "name": "LIVConfig. - F1 - direkt",
    "produkt": "/plissee/ayana-1809",
    "ab_preis": "84,00", //PG2
    "ab_preis_red": "46,20",  //-45% 
    "supplier": "VHG",
    "produktgruppe": "rechteckige Plissees",
    "modell": "F1",
    "befestigung": "Montage direkt vor dem Glas",
    "system": "Cosiflor",
    "hoehe": "1150",
    "breite": "1050",
    "bedienseite": "links",
    "pendelsicherung": "ja",  //+16
    "schienenfarbe": "Anthrazit",
    "paypalExpress": true
}


describe('Test: configuration of Vorhang Cortina mit Ösen', () => {

    it(test.name, function () {

        cy.visit(test.produkt)
        cy.get('.buttons > .buttons__configuration').click()

        cy.get('.old-price').should('contain', test.ab_preis)
        cy.get('.special-price').should('contain', test.ab_preis_red)

        cy.get('.tabs').children().contains(test.produktgruppe).click({ force: true })


        //Weitere Modelle aufklappen
        cy.get('.btn-group > :nth-child(1)').click()
        cy.get('.type-selector-left > ul').children().contains(test.modell).click({ force: true })
        cy.get('#hoehe input').type(test.hoehe)
        cy.get('#breite input').type(test.breite)
        cy.get('#pendelsicherung-normal > ul > :nth-child(2)').click()
        cy.get('#configurator-price-cart > .add-to-cart > button').click({ force: true })
        paypalExpress(test.paypalExpress)

    })

})

function paypalExpress(paypalExpress) {

    if (paypalExpress) {
        cy.capturePopupFromIFrame_express()
        cy.paypalExpress('sb-zsomv8592744@personal.example.com', 'c)79sJ!.')
        cy.paypalPrice().should('to.contain', '140,30 EUR') // --> amount of the only paypalexpress testcase we have, can be replaced with variable

        //if placeOrder=true and baseurl is unequal to production then plade the order
        if (Cypress.env('placeOrder') && Cypress.config().baseUrl != "https://www.livoneo.de/") {

            cy.paypalComplete()
            cy.confirmPaypalExpress()
            successPage.checkSuccessMessage()
        }
        else { // otherwise if placeOrder=false then cancel the payment

            cy.cancelPaypal()
            cartPage.proceedToCheckout()

        }
    }
}