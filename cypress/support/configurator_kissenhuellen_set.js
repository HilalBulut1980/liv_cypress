var cartPage = require("./cart.js");
var checkOutPage = require("./checkout.js");
import jsonLogic from 'json-logic-js';



module.exports = {

    configureKissen_set: function configureKissen_set(test) {

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

            //Kissen
            let kissen40_anzahl = test.kissen40
            let kissen50_anzahl = test.kissen50
            let kissen40 = test.kissen40_preis.toFixed(2);
            let kissen50 = test.kissen50_preis.toFixed(2);
            let kissen40_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [kissen40, 119] }), test.vat] })).toFixed(2);
            let kissen50_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [kissen50, 119] }), test.vat] })).toFixed(2);
            let kissen40_total = (jsonLogic.apply({ '*': [kissen40, kissen40_anzahl] })).toFixed(2)
            let kissen50_total = (jsonLogic.apply({ '*': [kissen50, kissen50_anzahl] })).toFixed(2)
            let kissen40_mwst_total = (jsonLogic.apply({ '*': [kissen40_mwst, kissen40_anzahl] })).toFixed(2)
            let kissen50_mwst_total = (jsonLogic.apply({ '*': [kissen50_mwst, kissen50_anzahl] })).toFixed(2)
            let kissen40_red = (jsonLogic.apply({ '*': [test.discount, kissen40] })).toFixed(2);
            let kissen50_red = (jsonLogic.apply({ '*': [test.discount, kissen50] })).toFixed(2);
            let kissen40_red_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [kissen40_red, 119] }), test.vat] })).toFixed(2);
            let kissen50_red_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [kissen50_red, 119] }), test.vat] })).toFixed(2);
            let kissen40_red_total = (jsonLogic.apply({ '*': [kissen40_red, kissen40_anzahl] })).toFixed(2)
            let kissen50_red_total = (jsonLogic.apply({ '*': [kissen50_red, kissen50_anzahl] })).toFixed(2)
            let kissen40_red_mwst_total = (jsonLogic.apply({ '*': [kissen40_red_mwst, kissen40_anzahl] })).toFixed(2)
            let kissen50_red_mwst_total = (jsonLogic.apply({ '*': [kissen50_red_mwst, kissen50_anzahl] })).toFixed(2)


            //Konfigurator & Warenkorb
            let streichPreis = (jsonLogic.apply({ '+': [grundpreis, konfektion, befestigung_preis] })).toFixed(2)
            let streichPreisTotal = (jsonLogic.apply({ '*': [streichPreis, test.anzahl] })).toFixed(2)
            let redPreis = (jsonLogic.apply({ '+': [grundPreis_red, konfektion_red, befestigung_preis] })).toFixed(2)
            let redPreisTotal = (jsonLogic.apply({ '*': [redPreis, test.anzahl] })).toFixed(2)
            let warenkorbTotal = (jsonLogic.apply({ '+': [redPreisTotal, kissen40_red_total, kissen50_red_total] })).toFixed(2)
            let sieSparen1 = (jsonLogic.apply({ '-': [streichPreisTotal, redPreisTotal] })).toFixed(2)
            let sieSparen2 = (jsonLogic.apply({ '-': [kissen40_total, kissen40_red_total] })).toFixed(2)
            let sieSparen3 = (jsonLogic.apply({ '-': [kissen50_total, kissen50_red_total] })).toFixed(2)
            let sieSparen = (jsonLogic.apply({ '+': [sieSparen1, sieSparen2, sieSparen3] })).toFixed(2)


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

                sieSparen_new = sieSparen_new.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
                total_cart_new = total_cart_new.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
                rabatt_betrag = rabatt_betrag.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
            }

            //-------------------------------------------------------------------------------------------------------------------------------\\
            //-------------------------------------------------------------------------------------------------------------------------------\\



            //Checkout & Backend
            let versandkosten = test.versandkosten.toFixed(2);
            let streichPreis_mwst = (jsonLogic.apply({ '+': [grundpreis_mwst, konfektion_mwst, befestigung_preis_mwst] })).toFixed(2)
            let streichPreisTotal_mwst = (jsonLogic.apply({ '*': [streichPreis_mwst, test.anzahl] })).toFixed(2);
            let redPreis_mwst = (jsonLogic.apply({ '+': [grundPreis_red_mwst, konfektion_red_mwst, befestigung_preis_mwst] })).toFixed(2)
            let redPreisTotal_mwst = (jsonLogic.apply({ '*': [redPreis_mwst, test.anzahl] })).toFixed(2);
            let sieSparen1_mwst = (jsonLogic.apply({ '-': [streichPreisTotal_mwst, redPreisTotal_mwst] })).toFixed(2)
            let sieSparen2_mwst = (jsonLogic.apply({ '-': [kissen40_mwst_total, kissen40_red_mwst_total] })).toFixed(2)
            let sieSparen3_mwst = (jsonLogic.apply({ '-': [kissen50_mwst_total, kissen50_red_mwst_total] })).toFixed(2)
            let sieSparen_mwst = (jsonLogic.apply({ '+': [sieSparen1_mwst, sieSparen2_mwst, sieSparen3_mwst] })).toFixed(2)
            let total_mwst = (jsonLogic.apply({ '+': [redPreisTotal_mwst, kissen40_red_mwst_total, kissen50_red_mwst_total, versandkosten] })).toFixed(2)

            //ONLY BACKEND (Befestigungen und Zusätze werden in manchen Fällen im Backend getrennt gelistet und berechnet)
            let einzel_backend = redPreis_mwst
            let summe_backend = (jsonLogic.apply({ '*': [einzel_backend, test.anzahl] })).toFixed(2)
            let total_backend = total_mwst
            let steuer_betrag = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [redPreisTotal_mwst, test.vat] }), test.mwst_1] }))//.toFixed(3);
            steuer_betrag = (Math.round(steuer_betrag * 100) / 100).toString()  // needed for correct rounding
            let steuer_betrag_gesamt = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [total_backend, test.vat] }), test.mwst_1] })).toFixed(2);

            let sideProduct_1 = 0;
            let sideProduct_1_total = 0;
            let sideProduct_2// = 0;
            let sideProduct_2_total// = 0;
            let sideProduct_3
            let sideProduct_3_total
            let sideProduct_4
            let sideProduct_4_total
            let sideProduct_5
            let sideProduct_5_total
            let steuer_betrag_2
            let steuer_betrag_3

            //  if only Kissen 40cm exists
            if (kissen40_anzahl != 0 && kissen50_anzahl == 0) {
                cy.log('Kissen40 exists')
                sideProduct_1 = kissen40_red_mwst
                sideProduct_1_total = kissen40_red_mwst_total
                steuer_betrag_2 = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [sideProduct_1_total, test.vat] }), test.mwst_2] }))//.toFixed(3);
                steuer_betrag_2 = (Math.round(steuer_betrag_2 * 100) / 100).toFixed(2).toString()   // needed for correct rounding
                cy.log(sideProduct_1)
                cy.log(sideProduct_1_total)
                cy.log(steuer_betrag_2)
            }
            //  if only Kissen 50cm exists
            else if (kissen40_anzahl == 0 && kissen50_anzahl != 0) {
                cy.log('Kissen50 exists')
                sideProduct_1 = kissen50_red_mwst
                sideProduct_1_total = kissen50_red_mwst_total
                steuer_betrag_2 = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [sideProduct_1_total, test.vat] }), test.mwst_2] }))//.toFixed(3);
                steuer_betrag_2 = (Math.round(steuer_betrag_2 * 100) / 100).toFixed(2).toString()   // needed for correct rounding
            }
            //  if both Kissen exist
            else if (kissen40_anzahl != 0 && kissen50_anzahl != 0) {
                cy.log('both Kissen exist')
                sideProduct_1 = kissen40_red_mwst
                sideProduct_1_total = kissen40_red_mwst_total
                steuer_betrag_2 = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [sideProduct_1_total, test.vat] }), test.mwst_2] }))//.toFixed(3);
                steuer_betrag_2 = (Math.round(steuer_betrag_2 * 100) / 100).toFixed(2).toString()  // needed for correct rounding

                sideProduct_2 = kissen50_red_mwst
                sideProduct_2_total = kissen50_red_mwst_total
                steuer_betrag_3 = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [sideProduct_2_total, test.vat] }), test.mwst_3] }))//.toFixed(3);
                steuer_betrag_3 = (Math.round(steuer_betrag_3 * 100) / 100).toFixed(2).toString()  // needed for correct rounding

                steuer_betrag_3 = steuer_betrag_3.replace('.', ',')
                sideProduct_2 = sideProduct_2.replace('.', ',')
                sideProduct_2_total = sideProduct_2_total.replace('.', ',')
            }

            //------------------------------------------IN CASE OF RABATT CODES--------------------------------------------------------------\\
            //-------------------------------------------------------------------------------------------------------------------------------\\

            let rabatt_betrag_mwst = 0;
            let rabatt_betrag_mwst_1 = 0;
            let rabatt_betrag_mwst_2 = 0;

            if (typeof test.rabatt_code != "undefined" && test.rabatt_code != "") {
                // checkout
                total_backend =  (jsonLogic.apply({ '+': [summe_backend, sideProduct_1_total] })).toFixed(2)  //we test kissenhüllenrabattcodes with 1 vorhang and 1 kissen only
                rabatt_betrag_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [total_backend, 100] }), test.rabatt_faktor_a] })).toFixed(2);
                rabatt_betrag_mwst_1 = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [summe_backend, 100] }), test.rabatt_faktor_a] })).toFixed(2);
                rabatt_betrag_mwst_2 = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [sideProduct_1_total, 100] }), test.rabatt_faktor_a] })).toFixed(2);

                sieSparen_mwst = (jsonLogic.apply({ '+': [sieSparen_mwst, rabatt_betrag_mwst] })).toFixed(2)

                // total_mwst = (jsonLogic.apply({ '-': [total_mwst, rabatt_betrag_mwst] })).toFixed(2)

                //deduct rabattbetrag from total and add versadnkosten
                total_backend = (jsonLogic.apply({ '-': [total_backend, rabatt_betrag_mwst] })).toFixed(2)
                total_backend = (jsonLogic.apply({ '+': [total_backend, versandkosten] })).toFixed(2)
                //Vorhang
                summe_backend = (jsonLogic.apply({ '-': [summe_backend, rabatt_betrag_mwst_1] })).toFixed(2)
                steuer_betrag = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [summe_backend, test.vat] }), test.mwst_1] })).toFixed(2);
                steuer_betrag = (Math.round(steuer_betrag * 100) / 100).toFixed(2).toString()  // needed for correct rounding
                //Kissen
                sideProduct_1_total  = (jsonLogic.apply({ '-': [sideProduct_1_total, rabatt_betrag_mwst_2] })).toFixed(2)
                steuer_betrag_2 = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [sideProduct_1_total, test.vat] }), test.mwst_2] })).toFixed(2);
                steuer_betrag_2 = (Math.round(steuer_betrag_2 * 100) / 100).toFixed(2).toString()  // needed for correct rounding
                //Vorhang+Kissen
                steuer_betrag_gesamt = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [total_backend, test.vat] }), test.mwst_1] })).toFixed(2);
                steuer_betrag_gesamt = (Math.round(steuer_betrag_gesamt * 100) / 100).toFixed(2).toString()  // needed for correct rounding

                rabatt_betrag_mwst = rabatt_betrag_mwst.replace('.', ',')
                rabatt_betrag_mwst_1 = rabatt_betrag_mwst_1.replace('.', ',')
                rabatt_betrag_mwst_2 = rabatt_betrag_mwst_2.replace('.', ',')
            }

            //-------------------------------------------------------------------------------------------------------------------------------\\
            //-------------------------------------------------------------------------------------------------------------------------------\\



            //-------------------------------------------------------------------------------------------------------------------------------\\
            //---------------------   --------- replace . with , and add separator if needed -------------------------------------------------\\

            einzel_backend = einzel_backend.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
            summe_backend = summe_backend.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
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
            steuer_betrag_2 = steuer_betrag_2.replace('.', ',')
            steuer_betrag_gesamt = steuer_betrag_gesamt.replace('.', ',')
            versandkosten = versandkosten.replace('.', ',')
            total_backend = total_backend.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
            // total_mwst = total_mwst.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
            sideProduct_1 = sideProduct_1.replace('.', ',')
            sideProduct_1_total = sideProduct_1_total.replace('.', ',')
            kissen40 = kissen40.replace('.', ',')
            kissen50 = kissen50.replace('.', ',')
            kissen40_red = kissen40_red.replace('.', ',')
            kissen50_red = kissen50_red.replace('.', ',')
            kissen40_total = kissen40_total.replace('.', ',')
            kissen50_total = kissen50_total.replace('.', ',')
            kissen40_red_total = kissen40_red_total.replace('.', ',')
            kissen50_red_total = kissen50_red_total.replace('.', ',')
            kissen40_mwst = kissen40_mwst.replace('.', ',')
            kissen40_red_mwst = kissen40_red_mwst.replace('.', ',')
            kissen40_mwst_total = kissen40_mwst_total.replace('.', ',')
            kissen40_red_mwst_total = kissen40_red_mwst_total.replace('.', ',')
            kissen50_mwst = kissen50_mwst.replace('.', ',')
            kissen50_red_mwst = kissen50_red_mwst.replace('.', ',')
            kissen50_mwst_total = kissen50_mwst_total.replace('.', ',')
            kissen50_red_mwst_total = kissen50_red_mwst_total.replace('.', ',')


            //-------------------------------------------------------------------------------------------------------------------------------\\
            //****************************************************************************************************************************/

            cy.log('total mwst ' + total_mwst)
            cy.log('SB1 ' + steuer_betrag)
            cy.log('SB2 ' + steuer_betrag_2)
            cy.log('SB3 ' + steuer_betrag_3)
            cy.log('SBG ' + steuer_betrag_gesamt)

            const emailSuffix = Date.now();
            if (test.login != "customer") {
                test.email = test.email.replace("@", "_" + emailSuffix + "@");
            }

            cy.visit(test.produkt)
            checkOriginalPrice(test.ab_preis)
            checkSpecialPrice(test.ab_preis_red)
            setFarbe(test.farbe)
            setBreite(test.breite)
            setHoehe(test.hoehe)
            setBefestigung(test.befestigung)
            setKissen(kissen40_anzahl, kissen50_anzahl)
            checkPricesKissen(kissen40, kissen40_red, kissen50, kissen50_red)
            checkOriginalPrice(streichPreis)
            checkSpecialPrice(redPreis)
            addQuantityToCart(test.anzahl)

            cartPage.checkPricePerLine(streichPreis, redPreis, streichPreisTotal, redPreisTotal, test.system)
            cartPage.checkPricePerLine(kissen40, kissen40_red, kissen40_total, kissen40_red_total, test.system)
            cartPage.checkPricePerLine(kissen50, kissen50_red, kissen50_total, kissen50_red_total, test.system)
            cartPage.checkTotals(test.system, warenkorbTotal, sieSparen, test.rabatt_code, rabatt_betrag, sieSparen_new, total_cart_new)
            cartPage.proceedToCheckout()

            checkOutPage.checkOut(test.system, test.missing_name, test.login, test.email, test.password, test.prefix, test.company_name, test.vatID, test.prefix_business, test.first_name, test.last_name, test.street, test.postal_code, test.city, test.state, test.phone, test.shipping, versandkosten, test.prefix2, test.company_name2, test.vatID_2, test.prefix_business2, test.first_name2, test.last_name2, test.street2, test.postal_code2, test.city2, test.state2, test.phone2, test.payment)
            checkOutPage.checkFinalPrices(test.system, test.rabatt_code, rabatt_betrag_mwst, sieSparen_mwst, versandkosten, streichPreis_mwst, streichPreisTotal_mwst, redPreis_mwst, redPreisTotal_mwst, total_backend, kissen40_mwst, kissen40_red_mwst, kissen40_mwst_total, kissen40_red_mwst_total, kissen50_mwst, kissen50_red_mwst, kissen50_mwst_total, kissen50_red_mwst_total)
            checkOutPage.placeOrder(test.system, test.payment, test.failed_payment, test.canceled_payment, versandkosten, test.rabatt_code, rabatt_betrag_mwst_1, rabatt_betrag_mwst_2, test.mwst_1, test.mwst_2, test.mwst_3, test.vatRateLine_4, test.vatRateLine_5, test.vatRateLine_6, steuer_betrag, steuer_betrag_2, steuer_betrag_3, test.vatAmountLine_4, test.vatAmountLine_5, test.vatAmountLine_6, steuer_betrag_gesamt, einzel_backend, summe_backend, sideProduct_1, sideProduct_1_total, sideProduct_2, sideProduct_2_total, sideProduct_3, sideProduct_3_total, sideProduct_4, sideProduct_4_total, sideProduct_5, sideProduct_5_total, total_backend)

        })
    }
}

function setFarbe(value) {
    cy.get('img[alt=' + value + ']').click()
}

function setBreite(value) {
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

function setHoehe(value) {
    cy.get('body').then((body) => {
        if (body.find('#hoehe > .content > input').length > 0) { //if inputfield breite exists
            cy.get('#hoehe > .content > input').type(value)
        }
        else {
            cy.get('#hoehe > .content').children('ul').children('li').contains(value).click()
        }
    })
}

function setBefestigung(value) {
    if (value != "") {
        cy.get('#montage > div > ul').children().contains(value).click()
    }
}

function setKissen(kissen40, kissen50) {
    if (kissen40 !== 0) {
        cy.contains('40x40cm').click()
        cy.contains('40x40cm').parents('.selected').find('input[type="number"]').clear().type(kissen40)
    }
    if (kissen50 !== 0) {
        cy.contains('50x50cm').click()
        cy.contains('50x50cm').parents('.selected').find('input[type="number"]').clear().type(kissen50)

    }
}

function checkPricesKissen(k40_origin, k40_reduced, k50_origin, k50_reduced,) {
    if (k40_origin !== "0,00") {
        cy.contains('40x40cm').parents('.selected').find('div[class="old-price"]').should("contain", k40_origin)
        cy.contains('40x40cm').parents('.selected').find('div[class="special-price"]').should("contain", k40_reduced)
    }
    if (k50_origin !== "0,00") {
        cy.contains('50x50cm').parents('.selected').find('div[class="old-price"]').should("contain", k50_origin)
        cy.contains('50x50cm').parents('.selected').find('div[class="special-price"]').should("contain", k50_reduced)
    }
}

function checkSpecialPrice(price) {
    cy.get('#configurator-price-cart > .add-to-cart > :nth-child(1) > .special-price').should("contain", price)
}

function checkOriginalPrice(original_price) {
    cy.get('#configurator-price-cart > .add-to-cart > :nth-child(1) > .old-price > .price').should("contain", original_price)
}

function addQuantityToCart(qty) {
    cy.get('#configurator-price-cart > .add-to-cart > :nth-child(2) input').clear().type(qty)
    cy.get('#configurator-price-cart > .add-to-cart > :nth-child(2) button').click({ force: true })
}