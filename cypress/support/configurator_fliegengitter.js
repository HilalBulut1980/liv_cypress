var cartPage = require("./cart.js");
var checkOutPage = require("./checkout.js");
import jsonLogic from 'json-logic-js';



module.exports = {

    configureFliegengitter: function configureFliegengitter(test) {

        it(test.name, function () {

            let grundPreis_red = (jsonLogic.apply({ '*': [test.discount, test.grundpreis] })).toFixed(2);
            let grundPreis_red_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [grundPreis_red, 119] }), test.vat] })).toFixed(2);
            let grundpreis_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [test.grundpreis, 119] }), test.vat] })).toFixed(2);

            //Konfigurator & Warenkorb
            let streichPreis = test.grundpreis.toFixed(2)
            let streichPreisTotal = (jsonLogic.apply({ '*': [streichPreis, test.anzahl] })).toFixed(2)
            let redPreis = grundPreis_red
            let redPreisTotal = (jsonLogic.apply({ '*': [redPreis, test.anzahl] })).toFixed(2)
            let warenkorbTotal = (jsonLogic.apply({ '*': [redPreis, test.anzahl] })).toFixed(2)
            let sieSparen = (jsonLogic.apply({ '-': [streichPreisTotal, redPreisTotal] })).toFixed(2)

            //------------------------------------------IN CASE OF RABATT CODES--------------------------------------------------------------\\
            //-------------------------------------------------------------------------------------------------------------------------------\\

            // rabatt_betrag, sieSparen_new, total_cart_new
            let rabatt_betrag;
            let sieSparen_new;
            let total_cart_new;

            if (typeof test.rabatt_code != "undefined" && test.rabatt_code != "") {
                // cart
                rabatt_betrag = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [warenkorbTotal, 100] }), test.rabatt_faktor_a] })).toFixed(2);
                sieSparen_new = (jsonLogic.apply({ '+': [sieSparen, rabatt_betrag] })).toFixed(2)
                total_cart_new = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [warenkorbTotal, 100] }), test.rabatt_faktor_b] })).toFixed(2);

                rabatt_betrag = rabatt_betrag.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
                sieSparen_new = sieSparen_new.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
                total_cart_new = total_cart_new.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000    
            }

            //-------------------------------------------------------------------------------------------------------------------------------\\
            //-------------------------------------------------------------------------------------------------------------------------------\\

            //Checkout & Backend
            let versandkosten = test.versandkosten.toFixed(2);
            let streichPreis_mwst = grundpreis_mwst;
            let streichPreisTotal_mwst = (jsonLogic.apply({ '*': [streichPreis_mwst, test.anzahl] })).toFixed(2);
            let redPreis_mwst = grundPreis_red_mwst;
            let redPreisTotal_mwst = (jsonLogic.apply({ '*': [redPreis_mwst, test.anzahl] })).toFixed(2);
            let sieSparen_mwst = (jsonLogic.apply({ '-': [streichPreisTotal_mwst, redPreisTotal_mwst] })).toFixed(2)
            let total_mwst = (jsonLogic.apply({ '+': [redPreisTotal_mwst, versandkosten] })).toFixed(2)

            //ONLY BACKEND (Befestigungen und Zusätze werden in manchen Fällen im Backend getrennt gelistet und berechnet)
            let einzel_backend = redPreis_mwst
            let summe_backend = (jsonLogic.apply({ '*': [einzel_backend, test.anzahl] })).toFixed(2)
            let total_backend = total_mwst
            let steuer_betrag = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [redPreisTotal_mwst, test.vat] }), test.mwst_1] }))//.toFixed(3);
            steuer_betrag = (Math.round(steuer_betrag * 100) / 100).toString()  // needed for correct rounding
            let steuer_betrag_2
            let steuer_betrag_3
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
                rabatt_betrag_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [summe_backend, 100] }), test.rabatt_faktor_a] })).toFixed(2);
                sieSparen_mwst = (jsonLogic.apply({ '+': [sieSparen_mwst, rabatt_betrag_mwst] })).toFixed(2)
                total_mwst = (jsonLogic.apply({ '-': [total_mwst, rabatt_betrag_mwst] })).toFixed(2)
                total_backend = (jsonLogic.apply({ '-': [total_backend, rabatt_betrag_mwst] })).toFixed(2)
                summe_backend = (jsonLogic.apply({ '-': [summe_backend, rabatt_betrag_mwst] })).toFixed(2)
                steuer_betrag = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [summe_backend, test.vat] }), test.mwst_1] })).toFixed(2);
                steuer_betrag_gesamt = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [total_backend, test.vat] }), test.mwst_1] })).toFixed(2);

                rabatt_betrag_mwst = rabatt_betrag_mwst.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
            }

            //-------------------------------------------------------------------------------------------------------------------------------\\
            //-------------------------------------------------------------------------------------------------------------------------------\\

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
            einzel_backend = einzel_backend.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
            summe_backend = summe_backend.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
            total_backend = total_backend.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
            total_mwst = total_mwst.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000

            //-------------------------------------------------------------------------------------------------------------------------------\\
            //****************************************************************************************************************************/

            cy.log(rabatt_betrag_mwst)
            cy.log(rabatt_betrag_mwst)
            cy.log(rabatt_betrag_mwst)
            // cy.log(steuer_betrag)



            const emailSuffix = Date.now();

            if (test.login != "customer") {
                test.email = test.email.replace("@", "_" + emailSuffix + "@");
            }
            cy.visit(test.produkt)
            setEinbau(test.einbau)
            setForm(test.form)  //Rechteck oder Sonderform
            setTyp(test.form, test.typ)
            setFarbe(test.farbe)
            checkOriginalPrice(test.ab_preis)
            checkSpecialPrice(test.ab_preis_red)
            setBreite(test.breite)
            setBreiteOben(test.breite_oben)
            setBreiteUnten(test.breite_unten)
            setHoehe(test.hoehe)
            setHoeheLinks(test.hoehe_links)
            setHoeheRechts(test.hoehe_rechts)
            setHoeheTeil(test.hoehe_teil)
            setHoeheGesamt(test.hoehe_gesamt)
            setFarbeNetz(test.netzfarbe)
            setBefestigung(test.befestigung)
            setHalterung(test.halterung)

            checkOriginalPrice(streichPreis)
            checkSpecialPrice(redPreis)
            addQuantityToCart(test.anzahl)


            cartPage.checkPricePerLine(streichPreis, redPreis, streichPreisTotal, redPreisTotal, test.system)
            cartPage.checkTotals(test.system, warenkorbTotal, sieSparen, test.rabatt_code, rabatt_betrag, sieSparen_new, total_cart_new)
            cartPage.proceedToCheckout()

            checkOutPage.checkOut(test.system, test.missing_name, test.login, test.email, test.password, test.prefix, test.company_name, test.vatID, test.prefix_business, test.first_name, test.last_name, test.street, test.postal_code, test.city, test.state, test.phone, test.shipping, versandkosten, test.prefix2, test.company_name2, test.vatID_2, test.prefix_business2, test.first_name2, test.last_name2, test.street2, test.postal_code2, test.city2, test.state2, test.phone2, test.payment)
            checkOutPage.checkFinalPrices(test.system, test.rabatt_code, rabatt_betrag_mwst, sieSparen_mwst, versandkosten, streichPreis_mwst, streichPreisTotal_mwst, redPreis_mwst, redPreisTotal_mwst, total_mwst)
            checkOutPage.placeOrder(test.system, test.payment, test.failed_payment, test.canceled_payment, versandkosten, test.rabatt_code, rabatt_betrag_mwst, test.rabatt_betrag_backend2, test.mwst_1, test.mwst_2, test.mwst_3, test.vatRateLine_4, test.vatRateLine_5, test.vatRateLine_6, steuer_betrag, steuer_betrag_2, steuer_betrag_3, test.vatAmountLine_4, test.vatAmountLine_5, test.vatAmountLine_6, steuer_betrag_gesamt, einzel_backend, summe_backend, sideProduct_1, sideProduct_1_total, sideProduct_2, sideProduct_2_total, sideProduct_3, sideProduct_3_total, sideProduct_4, sideProduct_4_total, sideProduct_5, sideProduct_5_total, total_backend)
        })
    }
}

function setEinbau(value) {
    if (typeof value !== "undefined") {
        cy.get('span').contains(value).click({ force: true })
    }
}

function setForm(value) {
    cy.contains(value).click()
}

function setTyp(form, typ) {
    if (form == "Sonderform") {
        cy.contains(typ).click()
    }
}

function setBreite(value) {
    if (typeof value !== "undefined") {
        cy.get('#options_width').type(value)
    }
}

function setBreiteOben(value) {
    if (typeof value !== "undefined") {
        cy.contains('Breite oben (in mm)').next('input').type(value)
    }
}
function setBreiteUnten(value) {
    if (typeof value !== "undefined") {
        cy.contains('Breite unten (in mm)').next('input').type(value)
    }
}

function setHoehe(value) {
    if (typeof value !== "undefined") {
        cy.get('#options_height').type(value)
    }
}

function setHoeheLinks(value) {
    if (typeof value !== "undefined") {
        cy.contains('Höhe links (in mm)').next('input').type(value)
    }
}

function setHoeheRechts(value) {
    if (typeof value !== "undefined") {
        cy.contains('Höhe rechts (in mm)').next('input').type(value)
    }
}

function setHoeheTeil(value) {
    if (typeof value !== "undefined") {
        cy.contains('Teilhöhe (in mm)').next('input').type(value)
    }
}

function setHoeheGesamt(value) {
    if (typeof value !== "undefined") {
        cy.contains('Gesamthöhe (in mm)').next('input').type(value)
    }
}

function setBefestigung(value) {
    cy.get('span').contains(value).click()
}

function setFarbe(value) {
    cy.contains(value).wait(3000).click()
}

function setFarbeNetz(value) {
    cy.get('span').contains(value).click()
}

function setHalterung(value) {
    cy.get('#options-bracket select').select(value)
}

function checkSpecialPrice(price) {
    cy.get('.price.our-price').should("contain", price)
}

function checkOriginalPrice(original_price) {
    cy.get('.price.high-price').should("contain", original_price)
}

function addQuantityToCart(qty) {
    cy.get('.quantity-container > input').clear().type(qty)
    cy.get('.cart-container > button').click({ force: true })
}


