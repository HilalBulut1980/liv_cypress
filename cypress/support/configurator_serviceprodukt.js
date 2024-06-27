var cartPage = require("./cart.js");
var checkOutPage = require("./checkout.js");
import jsonLogic from 'json-logic-js';


module.exports = {

    configureServiceProduct: function configureServiceProduct(test) {

        it(test.name, function () {

            let preis = test.grundpreis.toFixed(2)
            let preis_total = (jsonLogic.apply({ '*': [preis, test.anzahl] })).toFixed(2)

            let warenkorbTotal = preis_total
            let sieSparen

            //------------------------------------------IN CASE OF RABATT CODES--------------------------------------------------------------\\
            //-------------------------------------------------------------------------------------------------------------------------------\\

            // rabatt_betrag, sieSparen_new, total_cart_new
            let rabatt_betrag;
            let sieSparen_new;
            let total_cart_new;

            if (typeof test.rabatt_code != "undefined" && test.rabatt_code != "") {
                // cart
                rabatt_betrag = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [warenkorbTotal, 100] }), test.rabatt_faktor_a] })).toFixed(2);
                sieSparen_new = rabatt_betrag
                total_cart_new = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [warenkorbTotal, 100] }), test.rabatt_faktor_b] })).toFixed(2);

                rabatt_betrag = rabatt_betrag.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
                sieSparen_new = sieSparen_new.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
                total_cart_new = total_cart_new.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000

            }

            //-------------------------------------------------------------------------------------------------------------------------------\\
            //-------------------------------------------------------------------------------------------------------------------------------\\


            //Checkout & Backend
            let versandkosten = test.versandkosten.toFixed(2);
            let preis_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [preis, 119] }), test.vat] })).toFixed(2);
            let preis_mwst_total = (jsonLogic.apply({ '*': [preis_mwst, test.anzahl] })).toFixed(2)

            // let sieSparen_mwst = (jsonLogic.apply({ '-': [streichPreisTotal_mwst, preis_mwst_total] })).toFixed(2)
            let sieSparen_mwst //= (jsonLogic.apply({ '-': [streichPreisTotal_mwst, redPreisTotal_mwst] })).toFixed(2)
            let total_mwst = (jsonLogic.apply({ '+': [preis_mwst_total, versandkosten] })).toFixed(2)

            //ONLY BACKEND (Befestigungen und Zusätze werden in manchen Fällen im Backend getrennt gelistet und berechnet)
            let einzel_backend = preis_mwst
            let summe_backend = (jsonLogic.apply({ '*': [einzel_backend, test.anzahl] })).toFixed(2)
            let total_backend = total_mwst
            let steuer_betrag = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [preis_mwst_total, test.vat] }), test.mwst_1] }))//.toFixed(3);
            steuer_betrag = (Math.round(steuer_betrag * 100) / 100).toString()  // needed for correct rounding
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

            //------------------------------------------IN CASE OF RABATT CODES--------------------------------------------------------------\\
            //-------------------------------------------------------------------------------------------------------------------------------\\

            let rabatt_betrag_mwst = 0;

            if (typeof test.rabatt_code != "undefined" && test.rabatt_code != "") {
                // checkout
                rabatt_betrag_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [preis_mwst_total, 100] }), test.rabatt_faktor_a] })).toFixed(2);
                sieSparen_mwst = rabatt_betrag_mwst
                total_mwst = (jsonLogic.apply({ '-': [total_mwst, rabatt_betrag_mwst] })).toFixed(2)
                total_backend = (jsonLogic.apply({ '-': [total_backend, rabatt_betrag_mwst] })).toFixed(2)
                summe_backend = (jsonLogic.apply({ '-': [summe_backend, rabatt_betrag_mwst] })).toFixed(2)
                steuer_betrag = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [summe_backend, test.vat] }), test.mwst_1] })).toFixed(2);
                steuer_betrag_gesamt = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [total_backend, test.vat] }), test.mwst_1] })).toFixed(2);

                rabatt_betrag_mwst = rabatt_betrag_mwst.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
                sieSparen_mwst = sieSparen_mwst.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000

            }

            //-------------------------------------------------------------------------------------------------------------------------------\\
            //-------------------------------------------------------------------------------------------------------------------------------\\


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
            einzel_backend = einzel_backend.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
            summe_backend = summe_backend.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
            total_backend = total_backend.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
            total_mwst = total_mwst.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000

            //-------------------------------------------------------------------------------------------------------------------------------\\
            //-------------------------------------------------------------------------------------------------------------------------------\\


            const emailSuffix = Date.now();
            if (test.login != "customer") {
                test.email = test.email.replace("@", "_" + emailSuffix + "@");
            }

            cy.visit(test.produkt)
            // As we lazy-load most of our JS-files we need to wait until the JS was loaded successfully
            // If the JS method lazyLoadObserver exists we can at least be sure that we can add a product to the cart
            // (and also be more or less sure that all other JS files were loaded)
            // If we do not wait for the JS files to be loaded, we might run into errors
            cy.window().its('lazyLoadObserver')

            if (test.produkt == "/zusatzauftrag-laengere-fuehrungsschnuere") {
                LaengereSchnuere(test.produkt_name, test.schienenfarbe, test.breite, test.hoehe, test.wunschlaenge, test.wunschseite, test.anmerkung)
            }
            if (test.produkt == "/aenderungsauftrag-schnurlaenge") {
                AenderungSchnurlaenge(test.bestellnummer, test.breite, test.hoehe, test.wunschlaenge, test.produkt_name)
            }
            if (test.produkt == "/aenderungsauftrag-breite") {
                BreitenKuerzung(test.bestellnummer, test.breite, test.hoehe, test.kuerzung, test.produkt_name)
            }
            if (test.produkt == "/reparaturauftrag-schnur-ersetzen") {
                SchnurErsetzen(test.bestellnummer, test.breite, test.hoehe, test.wunschlaenge, test.produkt_name)
            }

            checkPrice(preis)
            setQuantity(test.anzahl)
            addtoCart()

            cartPage.checkPriceSpecialProducts(test.system, preis, preis_total)
            cartPage.checkTotals(test.system, warenkorbTotal, sieSparen, test.rabatt_code, rabatt_betrag, sieSparen_new, total_cart_new)
            cartPage.proceedToCheckout()

            checkOutPage.checkOut(test.system, test.missing_name, test.login, test.email, test.password, test.prefix, test.company_name, test.vatID, test.prefix_business, test.first_name, test.last_name, test.street, test.postal_code, test.city, test.state, test.phone, test.shipping, versandkosten, test.prefix2, test.company_name2, test.vatID_2, test.prefix_business2, test.first_name2, test.last_name2, test.street2, test.postal_code2, test.city2, test.state2, test.phone2, test.payment)
            checkOutPage.checkFinalPrices(test.system, test.rabatt_code, rabatt_betrag_mwst, sieSparen_mwst, versandkosten, preis_mwst, preis_mwst_total, preis_mwst, preis_mwst_total, total_mwst)
            checkOutPage.placeOrder(test.system, test.payment, test.failed_payment, test.canceled_payment, versandkosten, test.rabatt_code, rabatt_betrag_mwst, test.rabatt_betrag_backend2, test.mwst_1, test.mwst_2, test.mwst_3, test.vatRateLine_4, test.vatRateLine_5, test.vatRateLine_6, steuer_betrag, steuer_betrag_2, steuer_betrag_3, test.vatAmountLine_4, test.vatAmountLine_5, test.vatAmountLine_6, steuer_betrag_gesamt, einzel_backend, summe_backend, sideProduct_1, sideProduct_1_total, sideProduct_2, sideProduct_2_total, sideProduct_3, sideProduct_3_total, sideProduct_4, sideProduct_4_total, sideProduct_5, sideProduct_5_total, total_backend)
        })
    }
}

// OHNE  .wait(500) Fehler auf staging: eingetippte Werte verschwinden??!!

function LaengereSchnuere(produkt_name, schienen_farbe, breite, hoehe, wunschlaenge, wunschseite, anmerkung) {
    cy.get("#configurator-options > dl > :nth-child(2) > .input-box > input").wait(500).type(produkt_name)
    cy.get("#configurator-options > dl > :nth-child(5) > .input-box > input").wait(500).type(schienen_farbe)
    cy.get("#configurator-options > dl > :nth-child(8) > .input-box > input").wait(500).type(breite)
    cy.get("#configurator-options > dl > :nth-child(11) > .input-box > input").wait(500).type(hoehe)
    cy.get("#configurator-options > dl > :nth-child(14) > .input-box > input").wait(500).type(wunschlaenge)
    cy.get("#configurator-options > dl > :nth-child(16) > .input-box > select").wait(500).select(wunschseite)
    cy.get("#configurator-options > dl > .last > .input-box > textarea").wait(500).type(anmerkung)
}

function AenderungSchnurlaenge(bestellnummer, breite, hoehe, wunschlaenge, produkt_name) {
    cy.get("#configurator-options > dl > :nth-child(2) > .input-box > input").wait(500).type(bestellnummer)
    cy.get("#configurator-options > dl > :nth-child(5) > .input-box > input").wait(500).type(produkt_name)
    cy.get("#configurator-options > dl > :nth-child(8) > .input-box > input").wait(500).type(breite)
    cy.get("#configurator-options > dl > :nth-child(11) > .input-box > input").wait(500).type(hoehe)
    cy.get("#configurator-options > dl > :nth-child(14) > .input-box > input").wait(500).type(wunschlaenge)
}

function SchnurErsetzen(bestellnummer, breite, hoehe, wunschlaenge, produkt_name) {
    cy.get("#configurator-options > dl > :nth-child(2) > .input-box > input").wait(500).type(bestellnummer)
    cy.get("#configurator-options > dl > :nth-child(5) > .input-box > input").wait(500).type(produkt_name)
    cy.get("#configurator-options > dl > :nth-child(8) > .input-box > input").wait(500).type(breite)
    cy.get("#configurator-options > dl > :nth-child(11) > .input-box > input").wait(500).type(hoehe)
    cy.get("#configurator-options > dl > :nth-child(14) > .input-box > input").wait(500).type(wunschlaenge)
}

function BreitenKuerzung(bestellnummer, breite, hoehe, kuerzung, produkt_name) {
    cy.get("#configurator-options > dl > :nth-child(2) > .input-box > input").wait(500).type(bestellnummer)
    cy.get("#configurator-options > dl > :nth-child(5) > .input-box > input").wait(500).type(produkt_name)
    cy.get("#configurator-options > dl > :nth-child(8) > .input-box > input").wait(500).type(breite)
    cy.get("#configurator-options > dl > :nth-child(11) > .input-box > input").wait(500).type(hoehe)
    cy.get("#configurator-options > dl > :nth-child(14) > .input-box > input").wait(500).type(kuerzung)

}

function checkPrice(price) {
    cy.get(".price-container > .special-price > .price.our-price").should("contain", price)
}

function setQuantity(anzahl) {
    cy.get(".cart-container > input").clear().type(anzahl)
}

function addtoCart() {
    cy.get(".cart-container > button > span > span").click()
}