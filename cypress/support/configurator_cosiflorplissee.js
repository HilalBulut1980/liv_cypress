var cartPage = require("./cart.js");
var checkOutPage = require("./checkout.js");
import jsonLogic from 'json-logic-js';



module.exports = {

    startFromConfigurator: function startFromConfigurator(test) {

        if (test.supplier == "Anwis") {
            cy.visit('/plissee/basis-plissee-konfigurator#configurator-type-heading')
        }
        else if (test.supplier == "VHG") {
            cy.visit('/plissee/plissee-konfigurator')
        }

        selectStoff(test.supplier, test.produkt)
    },

    startFromProductPage: function startFromProductPage(test) {

        cy.visit(test.produkt)
        checkFromPrices(test.ab_preis, test.ab_preis_red)
        loadConfigurator()
    },

    configurePlissee: function configurePlissee(test) {

        //***************************************************** PRICE CALCULATION **************************************************** */
        //*************************************************************************************************************************** */
        //grundpreis
        let grundPreis_red = (jsonLogic.apply({ '*': [test.discount, test.grundpreis] })).toFixed(2);
        let grundPreis_red_2 = (jsonLogic.apply({ '*': [test.discount_2, test.grundpreis_2] })).toFixed(2);
        let grundPreis_red_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [grundPreis_red, 119] }), test.vat] })).toFixed(2);
        let grundPreis_red_mwst_2 = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [grundPreis_red_2, 119] }), test.vat] })).toFixed(2);
        let grundpreis_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [test.grundpreis, 119] }), test.vat] })).toFixed(2);
        let grundpreis_mwst_2 = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [test.grundpreis_2, 119] }), test.vat] })).toFixed(2);

        //zusätze
        let bediengriff_preis_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [test.bediengriff_preis, 119] }), test.vat] })).toFixed(2);
        let bedienstab_preis_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [test.bedienstab_preis, 119] }), test.vat] })).toFixed(2);
        let zusatz_preis_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [test.zusatz_preis, 119] }), test.vat] })).toFixed(2);

        //Konfigurator & Warenkorb
        let streichPreis = (jsonLogic.apply({ '+': [test.grundpreis, test.grundpreis_2, test.bediengriff_preis, test.bedienstab_preis, test.zusatz_preis] })).toFixed(2)
        let streichPreisTotal = (jsonLogic.apply({ '*': [streichPreis, test.anzahl] })).toFixed(2)
        let redPreis = (jsonLogic.apply({ '+': [grundPreis_red, grundPreis_red_2, test.bediengriff_preis, test.bedienstab_preis, test.zusatz_preis] })).toFixed(2)
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
        let versandkosten = test.versandkosten.toFixed(2)
        let streichPreis_mwst = (jsonLogic.apply({ '+': [grundpreis_mwst, grundpreis_mwst_2, bediengriff_preis_mwst, bedienstab_preis_mwst, zusatz_preis_mwst] })).toFixed(2)
        let streichPreisTotal_mwst = (jsonLogic.apply({ '*': [streichPreis_mwst, test.anzahl] })).toFixed(2)
        let redPreis_mwst = (jsonLogic.apply({ '+': [grundPreis_red_mwst, grundPreis_red_mwst_2, bediengriff_preis_mwst, bedienstab_preis_mwst, zusatz_preis_mwst] })).toFixed(2)
        let redPreisTotal_mwst = (jsonLogic.apply({ '*': [redPreis_mwst, test.anzahl] })).toFixed(2)
        let sieSparen_mwst = (jsonLogic.apply({ '-': [streichPreisTotal_mwst, redPreisTotal_mwst] })).toFixed(2)
        let total_mwst = (jsonLogic.apply({ '+': [redPreisTotal_mwst, test.versandkosten] })).toFixed(2)

        //ONLY BACKEND (Befestigungen und Zusätze werden in manchen Fällen im Backend getrennt gelistet und berechnet)
        let einzel_backend = redPreis_mwst
        let summe_backend = (jsonLogic.apply({ '*': [einzel_backend, test.anzahl] })).toFixed(2)
        let total_backend = total_mwst
        let steuer_betrag = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [summe_backend, test.vat] }), test.mwst_1] }))//.toFixed(3);
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
        //----------------------------------------------------- replace . with , ---------------------------------------------------------\\

        streichPreis = streichPreis.replace('.', ',').replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        redPreis = redPreis.replace('.', ',').replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        streichPreisTotal = streichPreisTotal.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        redPreisTotal = redPreisTotal.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        warenkorbTotal = warenkorbTotal.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        sieSparen = sieSparen.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        sieSparen_mwst = sieSparen_mwst.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        streichPreis_mwst = streichPreis_mwst.replace('.', ',').replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        streichPreisTotal_mwst = streichPreisTotal_mwst.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        redPreis_mwst = redPreis_mwst.replace('.', ',').replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
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


        const emailSuffix = Date.now();
        if (test.login != "customer") {
            test.email = test.email.replace("@", "_" + emailSuffix + "@");
        }

        checkOriginalPrice(test.ab_preis)
        checkSpecialPrice(test.ab_preis_red)

        setProduktgruppe(test.produktgruppe)
        setPlisseeModell(test.system, test.produktgruppe, test.modell)
        setUntererStoff(test.unterer_Stoff)
        setAusrichtung(test.ausrichtung)
        setMeasurements(test.hoehe, test.hoehe_links, test.hoehe_rechts, test.gesamthoehe, test.teilhoehe, test.breite, test.breite_oben, test.breite_unten, test.df_switcher, test.df_hersteller, test.df_produkt, test.df_typ, test.df_glasbreite, test.df_glashoehe, test.df_falztiefe, test.df_fluegelbreite, test.df_fluegelhoehe, test.df_falzart)
        setBefestigung(test.befestigung)
        setSchienenfarbe(test.schienenfarbe)
        setBedienSeite(test.bedienseite)
        setPendularClip(test.pendelsicherung)
        setBedienstab(test.bedienstab)
        setBediengriff(test.bediengriff)

        checkOriginalPrice(streichPreis)
        checkSpecialPrice(redPreis)
        addQuantityToCart(test.anzahl)

        cartPage.checkPricePerLine(streichPreis, redPreis, streichPreisTotal, redPreisTotal, test.system)
        cartPage.checkTotals(test.system, warenkorbTotal, sieSparen, test.rabatt_code, rabatt_betrag, sieSparen_new, total_cart_new)

        //******************************************************************************************************************************** */
        //******************************************************************************************************************************** */

        // IN CASE OF PAYPAL EXPRESS
        // if (typeof test.paypalExpress !== "undefined") {
            // cartPage.paypalExpress(test.paypalExpress)
            // check if successPage is loaded
            // successPage.checkSuccessMessage()
            // successPage.getOrdernumber().then((orderNumber) => {
            //     cy.log('Die Paypal-Express-Bestellung hat die Nummer: ' + orderNumber)
            //     //Go to backend
            //     cy.visit(Cypress.env('backend_url'))
            //     // BACKEND
            //     backEndPage.login()
            //     backEndPage.getOrder(orderNumber)
            //     backEndPage.checkOrder(test.system, versandkosten, test.rabatt_code, rabatt_betrag_mwst, test.rabatt_betrag_backend2, test.mwst_1, test.mwst_2, test.mwst_3, test.vatRateLine_4, test.vatRateLine_5, test.vatRateLine_6, steuer_betrag, steuer_betrag_2, steuer_betrag_3, test.vatAmountLine_4, test.vatAmountLine_5, test.vatAmountLine_6, steuer_betrag_gesamt, einzel_backend, summe_backend, sideProduct_1, sideProduct_1_total, sideProduct_2, sideProduct_2_total, sideProduct_3, sideProduct_3_total, sideProduct_4, sideProduct_4_total, sideProduct_5, sideProduct_5_total, total_backend)
            //     backEndPage.logout()
            // })
        // }
        //******************************************************************************************************************************** */
        //******************************************************************************************************************************** */

        // else {
            cartPage.proceedToCheckout()
            checkOutPage.checkOut(test.system, test.missing_name, test.login, test.email, test.password, test.prefix, test.company_name, test.vatID, test.prefix_business, test.first_name, test.last_name, test.street, test.postal_code, test.city, test.state, test.phone, test.shipping, versandkosten, test.prefix2, test.company_name2, test.vatID_2, test.prefix_business2, test.first_name2, test.last_name2, test.street2, test.postal_code2, test.city2, test.state2, test.phone2, test.payment)
            checkOutPage.checkFinalPrices(test.system, test.rabatt_code, rabatt_betrag_mwst, sieSparen_mwst, versandkosten, streichPreis_mwst, streichPreisTotal_mwst, redPreis_mwst, redPreisTotal_mwst, total_mwst)
            checkOutPage.placeOrder(test.system, test.payment, test.failed_payment, test.canceled_payment, versandkosten, test.rabatt_code, rabatt_betrag_mwst, test.rabatt_betrag_backend2, test.mwst_1, test.mwst_2, test.mwst_3, test.vatRateLine_4, test.vatRateLine_5, test.vatRateLine_6, steuer_betrag, steuer_betrag_2, steuer_betrag_3, test.vatAmountLine_4, test.vatAmountLine_5, test.vatAmountLine_6, steuer_betrag_gesamt, einzel_backend, summe_backend, sideProduct_1, sideProduct_1_total, sideProduct_2, sideProduct_2_total, sideProduct_3, sideProduct_3_total, sideProduct_4, sideProduct_4_total, sideProduct_5, sideProduct_5_total, total_backend)
        // }
    }
}

function loadConfigurator() {
    cy.get('.buttons > .buttons__configuration').click()
}

function checkFromPrices(value1, value2) {
    cy.get('.old-price').should('contain', value1)
    cy.get('.special-price').should('contain', value2)
}

function selectStoff(supplier, stoff) {

    cy.get('.configurator-button-subsection').click()
    cy.get('#material-collection > ul').children().contains(stoff).click()

    if (supplier == "Anwis") {
        cy.get('.basis_plissee_next_step.second_btn').click({ force: true })

    }
    else if (supplier == "VHG") {
        cy.get('button[type="button"]').contains('Auswahl übernehmen').click({ force: true })

    }
}

function setProduktgruppe(gruppe) {

    if (typeof gruppe !== "undefined") {
        cy.get('.tabs').children().contains(gruppe).click({ force: true })
    }
}

function setPlisseeModell(system, produkt, modell) {

    if (system == "Cosiflor") {
        if (produkt == "rechteckige Plissees") {
            //Weitere Modelle aufklappen
            cy.get('.btn-group > :nth-child(1)').click()
        }
        cy.get('.type-selector-left > ul').children().contains(modell).click({ force: true })
    }
    else { //if Basis
        cy.get('#type-selector-top > ul').children().contains(modell).click({ force: true })

    }
}

function setAusrichtung(value) {
    if (typeof value !== "undefined") {
        cy.contains(new RegExp("^" + value + "\\s*$")).click({ force: true })
    }
}

function setUntererStoff(stoff) {

    if (typeof stoff !== "undefined") {
        cy.get('button').contains('Auswahl ändern').click({ force: true })
        cy.get('#material-collection > ul').children().contains(stoff).click()
        cy.get('button[type="button"]').contains('Auswahl übernehmen').click({ force: true })
    }
}

function setMeasurements(hoehe, hoeheLinks, hoeheRechts, gesamthoehe, teilhoehe, breite, breiteOben, breiteUnten, switcher, hersteller, produkt, typ, glasbreite, glashoehe, falztiefe, fluegelbreite, fluegelhoehe, falzart) {

    setBreite(breite)
    setBreiteOben(breiteOben)
    setBreiteUnten(breiteUnten)
    setHoehe(hoehe)
    setHoeheLinks(hoeheLinks)
    setHoeheRechts(hoeheRechts)
    setGesamtHoehe(gesamthoehe)
    setTeilHoehe(teilhoehe)
    setSwitcher(switcher)
    setHersteller(hersteller)
    setProdukt(produkt)
    setTyp(typ)
    setFalzTyp(falzart)
    setGlasBreite(glasbreite)
    setGlasHoehe(glashoehe)
    setFalzTiefe(falztiefe)
    setFinnenBreite(fluegelbreite)
    setFinnenHoehe(fluegelhoehe)
}

function setHoehe(value) {

    if (typeof value != "undefined") {
        cy.get('#hoehe input').type(value)
    }
}

function setHoeheLinks(value) {

    if (typeof value != "undefined") {
        cy.get(' #hoehe_links input').type(value)
    }
}

function setHoeheRechts(value) {

    if (typeof value != "undefined") {
        cy.get('#hoehe_rechts input').type(value)
    }
}

function setGesamtHoehe(value) {

    if (typeof value !== "undefined") {
        cy.get('#total_height input').type(value)
    }
}

function setTeilHoehe(value) {

    if (typeof value !== "undefined") {
        cy.get('#partial_height input').type(value)
    }
}

function setBreite(value) {

    if (typeof value != "undefined") {
        cy.get('#breite input').type(value)
    }
}

function setBreiteOben(value) {

    if (typeof value != "undefined") {
        cy.get('#breite_oben input').type(value)
    }
}

function setBreiteUnten(value) {

    if (typeof value != "undefined") {
        cy.get('#breite_unten input').type(value)
    }

}

function setSwitcher(switcher) {

    if (switcher != "") {
        if (switcher == "Genormt") {
            cy.contains("Dachfenster auswählen").click()
        }
        else if (switcher == "Ungenormt") {
            cy.contains("Maße des Dachfenster manuell eingeben").click()
        }
    }
}

function setHersteller(value) {
    if (typeof value != "undefined") {
        cy.get('.dfselect_wrapper > :nth-child(1) select').select(value)
    }
}

function setProdukt(value) {
    if (typeof value != "undefined") {
        cy.get('.dfselect_wrapper > :nth-child(2) select').select(value)
    }
}

function setTyp(value) {
    if (typeof value != "undefined") {
        cy.get('.dfselect_wrapper > :nth-child(3) select').select(value)
    }
}

function setFalzTyp(value) {
    if (typeof value != "undefined") {
        cy.contains(value).click()
    }
}

function setGlasBreite(value) {
    if (typeof value != "undefined") {
        cy.get('#glasbreite input').type(value)
    }
}

function setGlasHoehe(value) {
    if (typeof value != "undefined") {
        cy.get('#glashoehe input').type(value)
    }
}

function setFalzTiefe(value) {
    if (typeof value != "undefined") {
        cy.get('#falztiefe input').type(value)
    }
}

function setFinnenBreite(value) {
    if (typeof value != "undefined") {
        cy.get('#finnenbreite input').type(value)
    }
}

function setFinnenHoehe(value) {
    if (typeof value != "undefined") {
        cy.get('#finnenhoehe input').type(value)
    }
}

function setBefestigung(value) {
    if (typeof value != "undefined") {
        cy.wait(3000)
        cy.contains(new RegExp("^" + value + "\\s*$")).click()
    }
}

function setSchienenfarbe(value) {
    cy.contains(new RegExp("^" + value + "\\s*$")).click({ force: true })
}

function setBedienSeite(value) {
    if (typeof value != "undefined") {
        cy.get('#bedienung-normal > ul').children().contains(value).click()
    }
}

function setPendularClip(value) {
    if (typeof value != "undefined") {
        cy.get('#pendelsicherung-normal > ul > :nth-child(2)').click()
    }
}

function setBedienstab(bedienstab) {
    if (typeof bedienstab !== "undefined") {
        cy.get('#bedienstab-normal > :nth-child(1) > ul > :nth-child(2)').click()
        cy.contains(bedienstab).click()
    }
}

function setBediengriff(value) {
    if (typeof value !== "undefined") {
        cy.contains(value).click({ force: true })
    }
}

function checkSpecialPrice(price) {
    cy.get('.special-price').should("contain", price)
}

function checkOriginalPrice(original_unitprice) {
    cy.get('.old-price').should("contain", original_unitprice)
}

function addQuantityToCart(qty) {
    cy.get('#configurator-price-cart > .add-to-cart > #qty').clear().type(qty)
    cy.get('#configurator-price-cart > .add-to-cart > button').click({ force: true })
}