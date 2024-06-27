var cartPage = require("./cart.js");
var checkOutPage = require("./checkout.js");
import jsonLogic from 'json-logic-js';


module.exports = {

    configureZubehoer: function configureZubehoer(test) {

        it(test.name, function () {

            let preis = test.grundpreis.toFixed(2)
            let preis_total = (jsonLogic.apply({ '*': [preis, test.anzahl] })).toFixed(2)

            let warenkorbTotal = preis_total
            let sieSparen

            //Checkout & Backend
            let versandkosten = test.versandkosten.toFixed(2);
            let preis_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [preis, 119] }), test.vat] })).toFixed(2);
            let preis_mwst_total = (jsonLogic.apply({ '*': [preis_mwst, test.anzahl] })).toFixed(2)

            // let sieSparen_mwst = (jsonLogic.apply({ '-': [streichPreisTotal_mwst, preis_mwst_total] })).toFixed(2)
            let total_mwst = (jsonLogic.apply({ '+': [preis_mwst_total, versandkosten] })).toFixed(2)
            let total_backend = total_mwst
            let steuer_betrag = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [preis_mwst_total, test.vat] }), test.mwst_1] })).toFixed(2);
            let steuer_betrag_2
            let steuer_betrag_3
            // let steuer_versand = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [test.versandkosten, test.vat] }), test.mwst_1] })).toFixed(2);
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

            preis = preis.replace('.', ',')
            preis_total = preis_total.replace('.', ',')
            preis_mwst = preis_mwst.replace('.', ',')
            preis_mwst_total = preis_mwst_total.replace('.', ',')
            versandkosten = versandkosten.replace('.', ',')
            warenkorbTotal = warenkorbTotal.replace('.', ',')
            total_mwst = total_mwst.replace('.', ',')
            total_backend = total_backend.replace('.', ',')
            steuer_betrag = steuer_betrag.replace('.', ',')
            steuer_betrag_gesamt = steuer_betrag_gesamt.replace('.', ',')

            //-------------------------------------------------------------------------------------------------------------------------------\\
            //-------------------------------------------------------------------------------------------------------------------------------\\


            const emailSuffix = Date.now();
            if (test.login != "customer") {
                test.email = test.email.replace("@", "_" + emailSuffix + "@");
            }

            cy.visit(test.produkt)
            // because of the lazy-load there is a js-error at the zubehör-pages "opConfig not defined"
            // which is the reason that the forwarding to the cart page fails
            // this can be workarounded with the following wait()
            // cy.wait(1000)
            cy.wait('@js_files')
            setOptions(test.art, test.option, test.option_2)

            checkOriginalPrice(preis)
            addQuantityToCart(test.anzahl)

            cartPage.checkPriceSpecialProducts(test.system, preis, preis_total)
            cartPage.checkTotals(test.system, warenkorbTotal, sieSparen, test.rabatt_code, test.rabatt_betrag, test.sieSparen_new, test.total_cart_new)
            cartPage.proceedToCheckout()

            checkOutPage.checkOut(test.system, test.missing_name, test.login, test.email, test.password, test.prefix, test.company_name, test.vatID, test.prefix_business, test.first_name, test.last_name, test.street, test.postal_code, test.city, test.state, test.phone, test.shipping, versandkosten, test.prefix2, test.company_name2, test.vatID_2, test.prefix_business2, test.first_name2, test.last_name2, test.street2, test.postal_code2, test.city2, test.state2, test.phone2, test.payment)
            checkOutPage.checkFinalPrices(test.system, test.rabatt_code, test.rabatt_betrag_checkout, test.sieSparen_checkout, versandkosten, preis_mwst, preis_mwst_total, preis_mwst, preis_mwst_total, total_mwst)
            checkOutPage.placeOrder(test.system, test.payment, test.failed_payment, test.canceled_payment, versandkosten, test.rabatt_code, test.rabatt_betrag_backend, test.rabatt_betrag_backend2, test.mwst_1, test.mwst_2, test.mwst_3, test.vatRateLine_4, test.vatRateLine_5, test.vatRateLine_6, steuer_betrag, steuer_betrag_2, steuer_betrag_3, test.vatAmountLine_4, test.vatAmountLine_5, test.vatAmountLine_6, steuer_betrag_gesamt, preis_mwst, preis_mwst_total, sideProduct_1, sideProduct_1_total, sideProduct_2, sideProduct_2_total, sideProduct_3, sideProduct_3_total, sideProduct_4, sideProduct_4_total, sideProduct_5, sideProduct_5_total, total_backend)
        })
    }
}

function setOptions(art, option1, option2) {

    // only needed @ KLEMMTRÄGER
    if (typeof option2 !== "undefined") {
        cy.get('#configurator-options > dl > :nth-child(2) > .input-box > select').select(option2)
    }

    if (typeof art !== "undefined" && typeof option1 !== "undefined") {  //if art AND option exist
        cy.get('#configurator-options > dl > :nth-child(1) > .input-box > select').select(art)
        cy.get('#configurator-options > dl > .last > .input-box > select').select(option1)
    }
    else if (typeof art !== "undefined" && typeof option1 == "undefined") { //if only art exists and option is empty
        cy.get('#configurator-options > dl > .last > .input-box > select').select(art)
    }
}

function checkOriginalPrice(original_price) {
    cy.get('.price-container > .special-price').should("contain", original_price)
}

function addQuantityToCart(qty) {
    // because of the lazy-load there is a js-error at the zubehör-pages "opConfig not defined"
    // which is the reason that the forwarding to the cart page fails
    // this can be workarounded with the following wait()
    cy.get('.cart-container > input').wait(1000).type(qty)
    cy.get('.cart-container > button').click()
}
