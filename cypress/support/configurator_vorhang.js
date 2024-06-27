var cartPage = require("./cart.js");
var checkOutPage = require("./checkout.js");
import jsonLogic from 'json-logic-js';


module.exports = {

    configureVorhang: function configureVorhang(test) {

        it(test.name, function () {

            let grundpreis = test.grundpreis.toFixed(2);
            let grundPreis_red = (jsonLogic.apply({ '*': [test.discount, grundpreis] })).toFixed(2);
            let grundPreis_red_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [grundPreis_red, 119] }), test.vat] })).toFixed(2);
            let grundpreis_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [test.grundpreis, 119] }), test.vat] })).toFixed(2);

            //zusatz
            let konfektion = test.konfektion.toFixed(2);
            let konfektion_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [konfektion, 119] }), test.vat] })).toFixed(2);
            let konfektion_red = (jsonLogic.apply({ '*': [test.discount, konfektion] })).toFixed(2);
            let konfektion_red_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [konfektion_red, 119] }), test.vat] })).toFixed(2);

            let befestigung_preis = test.befestigung_preis.toFixed(2);
            let befestigung_preis_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [befestigung_preis, 119] }), test.vat] })).toFixed(2);


            //Konfigurator & Warenkorb
            let streichPreis = (jsonLogic.apply({ '+': [grundpreis, konfektion, befestigung_preis] })).toFixed(2)
            let streichPreisTotal = (jsonLogic.apply({ '*': [streichPreis, test.anzahl] })).toFixed(2)
            let redPreis = (jsonLogic.apply({ '+': [grundPreis_red, konfektion_red, befestigung_preis] })).toFixed(2)
            let redPreisTotal = (jsonLogic.apply({ '*': [redPreis, test.anzahl] })).toFixed(2)
            let warenkorbTotal = (jsonLogic.apply({ '*': [redPreis, test.anzahl] })).toFixed(2)
            let sieSparen = (jsonLogic.apply({ '-': [streichPreisTotal, redPreisTotal] })).toFixed(2)

            //Checkout & Backend
            let versandkosten = test.versandkosten.toFixed(2);
            let streichPreis_mwst = (jsonLogic.apply({ '+': [grundpreis_mwst, konfektion_mwst, befestigung_preis_mwst] })).toFixed(2)
            let streichPreisTotal_mwst = (jsonLogic.apply({ '*': [streichPreis_mwst, test.anzahl] })).toFixed(2);
            let redPreis_mwst = (jsonLogic.apply({ '+': [grundPreis_red_mwst, konfektion_red_mwst, befestigung_preis_mwst] })).toFixed(2)
            let redPreisTotal_mwst = (jsonLogic.apply({ '*': [redPreis_mwst, test.anzahl] })).toFixed(2);
            let sieSparen_mwst = (jsonLogic.apply({ '-': [streichPreisTotal_mwst, redPreisTotal_mwst] })).toFixed(2)
            let total_mwst = (jsonLogic.apply({ '+': [redPreisTotal_mwst, versandkosten] })).toFixed(2)
            let total_backend = total_mwst
            let steuer_betrag = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [redPreisTotal_mwst, test.vat] }), test.mwst_1] }))//.toFixed(3);
            steuer_betrag = (Math.round(steuer_betrag * 100) / 100).toString()  // needed for correct rounding

            let steuer_betrag_2
            let steuer_betrag_3
            // let steuer_versand = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [versandkosten, test.vat] }), test.mwst_1] })).toFixed(2);
            // let steuer_betrag_gesamt = (jsonLogic.apply({ '+': [steuer_betrag, steuer_versand] })).toFixed(2)
            let steuer_betrag_gesamt = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [total_backend, test.vat] }), test.mwst_1] })).toFixed(2);
            let sideProduct_1
            let sideProduct_1_total
            let sideProduct_2
            let sideProduct_2_total
            let sideProduct_3
            let sideProduct_3_total
            let sideProduct_4
            let sideProduct_4_total
            let sideProduct_5
            let sideProduct_5_total
            //-------------------------------------------------------------------------------------------------------------------------------\\
            //---------------------   --------- replace . with , and add separator if needed -------------------------------------------------\\

            streichPreis = streichPreis.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
            redPreis = redPreis.replace('.', ',')
            streichPreisTotal = streichPreisTotal.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
            redPreisTotal = redPreisTotal.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
            warenkorbTotal = warenkorbTotal.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
            sieSparen = sieSparen.replace('.', ',')
            sieSparen_mwst = sieSparen_mwst.replace('.', ',')
            streichPreis_mwst = streichPreis_mwst.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
            streichPreisTotal_mwst = streichPreisTotal_mwst.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
            redPreis_mwst = redPreis_mwst.replace('.', ',')
            redPreisTotal_mwst = redPreisTotal_mwst.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
            steuer_betrag = steuer_betrag.replace('.', ',')
            steuer_betrag_gesamt = steuer_betrag_gesamt.replace('.', ',')
            versandkosten = versandkosten.replace('.', ',')
            total_backend = total_backend.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
            total_mwst = total_mwst.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000


            //-------------------------------------------------------------------------------------------------------------------------------\\
            //****************************************************************************************************************************/



            const emailSuffix = Date.now();
            if (test.login != "customer") {
                test.email = test.email.replace("@", "_" + emailSuffix + "@");
            }

            cy.visit(test.produkt)
            checkOriginalPrice(test.modell, test.ab_preis)
            checkSpecialPrice(test.modell, test.ab_preis_red)
            setFarbe(test.modell, test.farbe)
            setBreite(test.modell, test.breite)
            setHoehe(test.modell, test.hoehe)
            setBefestigung(test.befestigung)

            checkOriginalPrice(test.modell, streichPreis)
            checkSpecialPrice(test.modell, redPreis)
            addQuantityToCart(test.modell, test.anzahl)

            cartPage.checkPricePerLine(streichPreis, redPreis, streichPreisTotal, redPreisTotal, test.system)
            cartPage.checkTotals(test.system, warenkorbTotal, sieSparen, test.rabatt_code, test.rabatt_betrag, test.sieSparen_new, test.total_cart_new)
            cartPage.proceedToCheckout(test.paypalExpress)

            checkOutPage.checkOut(test.system, test.missing_name, test.login, test.email, test.password, test.prefix, test.company_name, test.vatID, test.prefix_business, test.first_name, test.last_name, test.street, test.postal_code, test.city, test.state, test.phone, test.shipping, versandkosten, test.prefix2, test.company_name2, test.vatID_2, test.prefix_business2, test.first_name2, test.last_name2, test.street2, test.postal_code2, test.city2, test.state2, test.phone2, test.payment)
            checkOutPage.checkFinalPrices(test.system, test.rabatt_code, test.rabatt_betrag_checkout, sieSparen_mwst, versandkosten, streichPreis_mwst, streichPreisTotal_mwst, redPreis_mwst, redPreisTotal_mwst, total_mwst)
            checkOutPage.placeOrder(test.system, test.payment, test.failed_payment, test.canceled_payment, versandkosten, test.rabatt_code, test.rabatt_betrag_backend, test.rabatt_betrag_backend2, test.mwst_1, test.mwst_2, test.mwst_3, test.vatRateLine_4, test.vatRateLine_5, test.vatRateLine_6, steuer_betrag, steuer_betrag_2, steuer_betrag_3, test.vatAmountLine_4, test.vatAmountLine_5, test.vatAmountLine_6, steuer_betrag_gesamt, redPreis_mwst, redPreisTotal_mwst, sideProduct_1, sideProduct_1_total, sideProduct_2, sideProduct_2_total, sideProduct_3, sideProduct_3_total, sideProduct_4, sideProduct_4_total, sideProduct_5, sideProduct_5_total, total_backend)
        })
    }
}

function setFarbe(modell, value) {
    if (modell == "meterware") {
        cy.wait(3000) //wait till colors are loaded on page otherwise test fails
        cy.get('#options-config_gardinenstangen_farbe > ol').children().contains(value).click({ force: true })
    }
    else {
        cy.get('img[alt=' + value + ']').click()
    }
}

function setBreite(modell, value) {
    if (modell == "meterware") {
        cy.get('#options-config_gardinenstangen_breite > ol').children().contains(value).click()
    }
    else {
        cy.get('body').then((body) => {
            if (body.find('#breite > div > input').length > 0) { //if inputfield breite exists
                cy.get('#breite > div > input')
                    .then($element => {
                        if ($element.is(':hidden')) {
                            cy.wrap($element).siblings('ul').children().contains(value).click()
                        }
                        else {
                            cy.wrap($element).type(value)
                        }
                    })
            }
            else { // only needed for Vorhang Cortinella --> inputfield breite does not exist
                cy.get('#breite > .content > ul > li').contains(value).click()
            }
        })
    }
}

function setHoehe(modell, value) {
    if (modell == "meterware") {
        cy.get('#options-config_gardinenstangen_laenge input').type(value)
    }
    else {
        cy.get('body').then((body) => {
            if (body.find('#hoehe > .content > input').length > 0) {
                cy.get('#hoehe > .content > input').type(value)
            }
            else {
                cy.get('#hoehe > .content').children('ul').children('li').contains(value).click()
            }
        })
    }
}

function setBefestigung(value) {
    if (value != "") {
        cy.get('#montage > div > ul').children().contains(value).click()
    }
}

function checkSpecialPrice(modell, price) {
    if (modell == "meterware") {
        cy.get('#price-and-cart > .price-container > .special-price').click().should("contain", price)

    }
    else {
        cy.get('#configurator-price-cart > .add-to-cart > :nth-child(1) > .special-price').should("contain", price)
    }
}

function checkOriginalPrice(modell, original_price) {
    if (modell == "meterware") {
        cy.get('#price-and-cart > .price-container > .old-price').click().should("contain", original_price)
    }
    else {
        cy.get('#configurator-price-cart > .add-to-cart > :nth-child(1) > .old-price > .price').should("contain", original_price)
    }
}

function addQuantityToCart(modell, qty) {
    if (modell != "meterware") {
        cy.get('#configurator-price-cart > .add-to-cart > :nth-child(2) input').clear().type(qty)
        cy.get('#configurator-price-cart > .add-to-cart > :nth-child(2) button').click({ force: true })
    }
    else {
        cy.get('.quantity-container > input').clear().type(qty)
        cy.get('.cart-container > button').click({ force: true })
    }
}