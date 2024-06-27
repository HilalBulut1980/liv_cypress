var cartPage = require("./cart.js");
var checkOutPage = require("./checkout.js");
import jsonLogic from 'json-logic-js';




module.exports = {


    startFromConfigurator: function startFromConfigurator(test) {

        cy.visit('/schiebegardinen/schiebegardinen-konfigurator#configurator-type-heading')
        selectStoff(test.produkt)
    },

    startFromProductPage: function startFromProductPage(test) {

        cy.visit(test.produkt)
        checkFromPrices(test.ab_preis, test.ab_preis_red)
        loadConfigurator()
    },

    configureSchiebegardineEinzel: function configureSchiebegardineEinzel(test) {

        // produkt
        let grundpreis = test.grundpreis.toFixed(2);
        let grundPreis_red = (jsonLogic.apply({ '*': [test.discount, grundpreis] })).toFixed(2);
        let grundPreis_red_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [grundPreis_red, 119] }), test.vat] })).toFixed(2);
        let grundpreis_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [test.grundpreis, 119] }), test.vat] })).toFixed(2);

        // paneelwagen
        let paneelwagen = test.pw_preis.toFixed(2);
        let paneelwagen_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [paneelwagen, 119] }), test.vat] })).toFixed(2);
        let paneelwagen_red = (jsonLogic.apply({ '*': [test.discount, paneelwagen] })).toFixed(2);
        let paneelwagen_red_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [paneelwagen_red, 119] }), test.vat] })).toFixed(2);

        // endstab
        let endstab = test.endstab_preis.toFixed(2);
        let endstab_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [endstab, 119] }), test.vat] })).toFixed(2);
        let endstab_red = (jsonLogic.apply({ '*': [test.discount, endstab] })).toFixed(2);
        let endstab_red_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [endstab_red, 119] }), test.vat] })).toFixed(2);



        //Konfigurator & Warenkorb
        let streichPreis = (jsonLogic.apply({ '+': [grundpreis, paneelwagen, endstab] })).toFixed(2)
        let streichPreisTotal = (jsonLogic.apply({ '*': [streichPreis, test.anzahl] })).toFixed(2)
        let redPreis = (jsonLogic.apply({ '+': [grundPreis_red, paneelwagen_red, endstab_red] })).toFixed(2)
        let redPreisTotal = (jsonLogic.apply({ '*': [redPreis, test.anzahl] })).toFixed(2)
        let warenkorbTotal = (jsonLogic.apply({ '*': [redPreis, test.anzahl] })).toFixed(2)
        let sieSparen = (jsonLogic.apply({ '-': [streichPreisTotal, redPreisTotal] })).toFixed(2)

        // Checkout & Backend
        let streichPreis_mwst = (jsonLogic.apply({ '+': [grundpreis_mwst, paneelwagen_mwst, endstab_mwst] })).toFixed(2);
        let streichPreisTotal_mwst = (jsonLogic.apply({ '*': [streichPreis_mwst, test.anzahl] })).toFixed(2);
        let redPreis_mwst = (jsonLogic.apply({ '+': [grundPreis_red_mwst, paneelwagen_red_mwst, endstab_red_mwst] })).toFixed(2);
        let redPreisTotal_mwst = (jsonLogic.apply({ '*': [redPreis_mwst, test.anzahl] })).toFixed(2);
        let sieSparen_mwst = (jsonLogic.apply({ '-': [streichPreisTotal_mwst, redPreisTotal_mwst] })).toFixed(2)
        let versandkosten = test.versandkosten.toFixed(2);
        let total_mwst = (jsonLogic.apply({ '+': [redPreisTotal_mwst, test.versandkosten] })).toFixed(2)
        let total_backend = total_mwst
        let steuer_betrag = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [redPreisTotal_mwst, test.vat] }), test.mwst_1] })).toFixed(2);
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

        //-------------------------------------------------------------------------------------------------------------------------------\\
        //---------------------   --------- replace . with , and add separator if needed -------------------------------------------------\\

        streichPreis = streichPreis.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        redPreis = redPreis.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        streichPreisTotal = streichPreisTotal.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        redPreisTotal = redPreisTotal.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        warenkorbTotal = warenkorbTotal.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        sieSparen = sieSparen.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        sieSparen_mwst = sieSparen_mwst.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        streichPreis_mwst = streichPreis_mwst.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        streichPreisTotal_mwst = streichPreisTotal_mwst.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        redPreis_mwst = redPreis_mwst.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
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

        setSchiebegardineTyp(test.modell)

        checkOriginalPrice(test.ab_preis)
        checkSpecialPrice(test.ab_preis_red)

        setBreite(test.breite)
        setHoehe(test.hoehe)
        setPaneelwagen(test.paneelwagen)
        setEndstab(test.endstab)
        setEndstabPaneelFarbe(test.endstabfarbe)

        checkOriginalPrice(streichPreis)
        checkSpecialPrice(redPreis)
        addQuantityToCart(test.anzahl)

        cartPage.checkPricePerLine(streichPreis, redPreis, streichPreisTotal, redPreisTotal, test.system, test.price_cart)
        cartPage.checkTotals(test.system, warenkorbTotal, sieSparen, test.rabatt_code, test.rabatt_betrag, test.sieSparen_new, test.total_cart_new)
        cartPage.proceedToCheckout()

        checkOutPage.checkOut(test.system, test.missing_name, test.login, test.email, test.password, test.prefix, test.company_name, test.vatID, test.prefix_business, test.first_name, test.last_name, test.street, test.postal_code, test.city, test.state, test.phone, test.shipping, versandkosten, test.prefix2, test.company_name2, test.vatID_2, test.prefix_business2, test.first_name2, test.last_name2, test.street2, test.postal_code2, test.city2, test.state2, test.phone2, test.payment)
        checkOutPage.checkFinalPrices(test.system, test.rabatt_code, test.rabatt_betrag_checkout, sieSparen_mwst, versandkosten, streichPreis_mwst, streichPreisTotal_mwst, redPreis_mwst, redPreisTotal_mwst, total_mwst)
        checkOutPage.placeOrder(test.system, test.payment, test.failed_payment, test.canceled_payment, versandkosten, test.rabatt_code, test.rabatt_betrag_backend, test.rabatt_betrag_backend2, test.mwst_1, test.mwst_2, test.mwst_3, test.vatRateLine_4, test.vatRateLine_5, test.vatRateLine_6, steuer_betrag, steuer_betrag_2, steuer_betrag_3, test.vatAmountLine_4, test.vatAmountLine_5, test.vatAmountLine_6, steuer_betrag_gesamt, redPreis_mwst, redPreisTotal_mwst, sideProduct_1, sideProduct_1_total, sideProduct_2, sideProduct_2_total, sideProduct_3, sideProduct_3_total, sideProduct_4, sideProduct_4_total, sideProduct_5, sideProduct_5_total, total_backend)
    }
}

function checkFromPrices(value1, value2) {
    cy.get('.old-price').should('contain', value1)
    cy.get('.special-price').should('contain', value2)
}

function loadConfigurator() {
    cy.get('.buttons > .buttons__configuration').click()
}

function selectStoff(value) {
    cy.contains('Farbe & Eigenschaften ändern').click()
    cy.get('#material-collection > ul').children().contains(value).click()
    cy.contains('Auswahl übernehmen').click({ force: true })
}

function setSchiebegardineTyp(value) {
    cy.contains(value).click({ force: true })
}

function setBreite(value) {
    cy.get('#breite_in_mm input').type(value)
}

function setHoehe(value) {
    cy.get('#hoehe_in_mm input').type(value)
}

function setPaneelwagen(value) {
    if (typeof value !== "undefined" && value=="ja") {
        cy.get('img[alt="mit Paneelwagen"]').click()
    }
}

function setEndstab(value) {
    if (typeof value !== "undefined") {
        cy.contains(new RegExp("^" + value + "\\s*$")).click()
    }
}

function setEndstabPaneelFarbe(value) {  
    if (typeof value !== "undefined") {
        cy.get('div.endstab_farbe li').contains(value).click()
    }
}

function checkOriginalPrice(value) {
    cy.get('#configurator-price-cart > .add-to-cart > .old-price > .price').should('contain', value)
}

function checkSpecialPrice(value) {
    cy.get('#configurator-price-cart > .add-to-cart > .special-price').should('contain', value)
}

function addQuantityToCart(qty) {
    cy.get('#configurator-price-cart > .add-to-cart input').clear({ force: true }).type(qty, { force: true })
    cy.get('#configurator-price-cart > .add-to-cart button').click({ force: true })
}