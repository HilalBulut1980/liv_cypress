var cartPage = require("./cart.js");
var checkOutPage = require("./checkout.js");
import jsonLogic from 'json-logic-js';



module.exports = {

    configureInsektenschutzrollo: function configureInsektenschutzrollo(test) {

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
            let total_mwst = (jsonLogic.apply({ '+': [redPreisTotal_mwst, test.versandkosten] })).toFixed(2)

            //ONLY BACKEND (Befestigungen und Zusätze werden in manchen Fällen im Backend getrennt gelistet und berechnet)
            let einzel_backend = redPreis_mwst
            let summe_backend = (jsonLogic.apply({ '*': [einzel_backend, test.anzahl] })).toFixed(2)
            let total_backend = total_mwst
            let steuer_betrag = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [redPreisTotal_mwst, test.vat] }), test.mwst_1] })).toFixed(2);
            let steuer_betrag_2
            let steuer_betrag_3
            let steuer_versand = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [test.versandkosten, test.vat] }), test.mwst_1] })).toFixed(2);
            let steuer_betrag_gesamt = (jsonLogic.apply({ '+': [steuer_betrag, steuer_versand] })).toFixed(2)
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

            let rabatt_betrag_mwst;

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
            //******************************************************************************************************************************/

            const emailSuffix = Date.now();

            if (test.login != "customer") {
                test.email = test.email.replace("@", "_" + emailSuffix + "@");
            }
            cy.visit(test.produkt)
            setFarbe(test.farbe)
            checkOriginalPrice(test.ab_preis)
            checkSpecialPrice(test.ab_preis_red)
            setBreite(test.breite)
            setHoehe(test.hoehe)
            setFarbeNetz(test.netzfarbe)
            setBefestigung(test.befestigung)
            setVorrichtung(test.vorrichtung)
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



function setBreite(value) {
    cy.get('#options_width').type(value)
}

function setHoehe(value) {
    cy.get('#options_height').type(value)
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

function setVorrichtung(value) {
    cy.get('span').contains(value).click()
}

function checkSpecialPrice(price) {
    cy.get('.price.our-price').should("contain", price)
}

function checkOriginalPrice(original_price) {
    cy.get('.price.high-price').should("contain", original_price)
}

function addQuantityToCart(qty) {
    cy.get('#qty').clear().type(qty)
    cy.contains('In den Warenkorb').click({ force: true })
}


