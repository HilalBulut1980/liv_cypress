var cartPage = require("./cart.js");
var checkOutPage = require("./checkout.js");
import jsonLogic from 'json-logic-js';


module.exports = {

    configureGutschein: function configureGutschein(test) {

        it(test.name, function () {

            let grundPreis_red = test.grundpreis.toFixed(2);

            //Konfigurator & Warenkorb
            let redPreis = grundPreis_red
            let redPreisTotal = (jsonLogic.apply({ '*': [grundPreis_red, test.anzahl] })).toFixed(2)
            let warenkorbTotal = redPreisTotal
            let sieSparen //= (jsonLogic.apply({ '-': [streichPreisTotal, redPreisTotal] })).toFixed(2)


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
            let streichPreis_mwst// = grundpreis_mwst;
            let streichPreisTotal_mwst //= (jsonLogic.apply({ '*': [streichPreis_mwst, test.anzahl] })).toFixed(2);
            let redPreis_mwst = grundPreis_red
            let redPreisTotal_mwst = redPreisTotal
            let sieSparen_mwst //= (jsonLogic.apply({ '-': [streichPreisTotal_mwst, redPreisTotal_mwst] })).toFixed(2)
            let total_mwst = redPreisTotal //50/120*20=8,33

            //ONLY BACKEND (Befestigungen und Zusätze werden in manchen Fällen im Backend getrennt gelistet und berechnet)
            let einzel_backend = redPreis_mwst
            let summe_backend = (jsonLogic.apply({ '*': [einzel_backend, test.anzahl] })).toFixed(2)
            let total_backend = total_mwst
            let steuer_betrag = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [redPreisTotal, test.vat] }), test.mwst_1] })).toFixed(2);
            let steuer_betrag_2
            let steuer_betrag_3
            let steuer_betrag_gesamt = steuer_betrag
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
                rabatt_betrag_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [redPreisTotal_mwst, 100] }), test.rabatt_faktor_a] })).toFixed(2);
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

            redPreis = redPreis.replace('.', ',')
            redPreisTotal = redPreisTotal.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
            warenkorbTotal = warenkorbTotal.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
            redPreis_mwst = redPreis_mwst.replace('.', ',')
            redPreisTotal_mwst = redPreisTotal_mwst.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
            total_mwst = total_mwst.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
            steuer_betrag = steuer_betrag.replace('.', ',')
            steuer_betrag_gesamt = steuer_betrag_gesamt.replace('.', ',')
            versandkosten = versandkosten.replace('.', ',')
            einzel_backend = einzel_backend.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
            summe_backend = summe_backend.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
            total_backend = total_backend.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
            // total_mwst = total_mwst.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000

            //-------------------------------------------------------------------------------------------------------------------------------\\
            //****************************************************************************************************************************/


            cy.log(rabatt_betrag_mwst)

            const emailSuffix = Date.now();
            if (test.login != "customer") {
                test.email = test.email.replace("@", "_" + emailSuffix + "@");
            }
            cy.visit(test.produkt)
            cy.wait(1000) //this wait is needed because of the lazy load (price remains 0,00 otherwise)

            if (test.modell == "Email") {
                setEmailGutschein(test.beschenkter, test.betrag, test.nachricht, redPreis, test.anzahl)
            }
            else if (test.modell == "Post") {
                setPostGutschein(test.beschenkter, test.betrag, test.nachricht, test.strasse, test.plz, test.stadt, redPreis, test.anzahl)
            }


            //-------------------------------------------------------------------------------------------------------------------------------\\
            //****************************************************************************************************************************/

            cartPage.checkPriceSpecialProducts(test.system, redPreis, redPreisTotal)
            cartPage.checkTotals(test.system, warenkorbTotal, sieSparen, test.rabatt_code, rabatt_betrag, sieSparen_new, total_cart_new)
            cartPage.proceedToCheckout()

            checkOutPage.checkOut(test.system, test.missing_name, test.login, test.email, test.password, test.prefix, test.company_name, test.vatID, test.prefix_business, test.first_name, test.last_name, test.street, test.postal_code, test.city, test.state, test.phone, test.shipping, versandkosten, test.prefix2, test.company_name2, test.vatID_2, test.prefix_business2, test.first_name2, test.last_name2, test.street2, test.postal_code2, test.city2, test.state2, test.phone2, test.payment)
            checkOutPage.checkFinalPrices(test.system, test.rabatt_code, rabatt_betrag_mwst, sieSparen_mwst, versandkosten, streichPreis_mwst, streichPreisTotal_mwst, redPreis_mwst, redPreisTotal_mwst, total_mwst)
            checkOutPage.placeOrder(test.system, test.payment, test.failed_payment, test.canceled_payment, versandkosten, test.rabatt_code, rabatt_betrag_mwst, test.rabatt_betrag_backend2, test.mwst_1, test.mwst_2, test.mwst_3, test.vatRateLine_4, test.vatRateLine_5, test.vatRateLine_6, steuer_betrag, steuer_betrag_2, steuer_betrag_3, test.vatAmountLine_4, test.vatAmountLine_5, test.vatAmountLine_6, steuer_betrag_gesamt, einzel_backend, summe_backend, sideProduct_1, sideProduct_1_total, sideProduct_2, sideProduct_2_total, sideProduct_3, sideProduct_3_total, sideProduct_4, sideProduct_4_total, sideProduct_5, sideProduct_5_total, total_backend)
        })
    }
}

function setEmailGutschein(name, betrag, nachricht, redPreis, anzahl) {

    cy.get('#product_addtocart_form_4908  > :nth-child(1) > :nth-child(1) input').type(name)
    cy.get('#product_addtocart_form_4908  > :nth-child(1) > :nth-child(2) input').type(betrag)
    cy.get('#product_addtocart_form_4908  > :nth-child(1) > :nth-child(3) input').type(nachricht)
    cy.wait(1000)
    cy.get('#product-price-4908').should("contain", redPreis)
    cy.get('#product_addtocart_form_4908 > .add_to_cart input').clear().type(anzahl)
    cy.get('#product_addtocart_form_4908 > .add_to_cart button').click()
}

function setPostGutschein(name, betrag, nachricht, strasse, plz, stadt, redPreis, anzahl) {
    cy.get('#product_addtocart_form_4909  > :nth-child(1) > :nth-child(1) input').type(name)
    cy.get('#product_addtocart_form_4909  > :nth-child(1) > :nth-child(2) input').type(strasse)
    cy.get('#product_addtocart_form_4909  > :nth-child(1) > :nth-child(3) input').type(betrag)
    cy.get('#product_addtocart_form_4909  > :nth-child(1) > :nth-child(4) input').type(plz)
    cy.get('#product_addtocart_form_4909  > :nth-child(1) > :nth-child(5) input').type(nachricht)
    cy.get('#product_addtocart_form_4909  > :nth-child(1) > :nth-child(6) input').type(stadt)
    cy.wait(1000)
    cy.get('#product-price-4909').should("contain", redPreis)
    cy.get('#product_addtocart_form_4909 > .add_to_cart input').clear().type(anzahl)
    cy.get('#product_addtocart_form_4909 > .add_to_cart button').click()
}