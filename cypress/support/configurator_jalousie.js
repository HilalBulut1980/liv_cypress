var cartPage = require("./cart.js");
var checkOutPage = require("./checkout.js");
import jsonLogic from 'json-logic-js';


module.exports = {

    configureJalousie: function configureJalousie(test) {

        it(test.name, function () {

            let grundPreis_red = (jsonLogic.apply({ '*': [test.discount, test.grundpreis] })).toFixed(2);
            let grundPreis_red_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [grundPreis_red, 119] }), test.vat] })).toFixed(2);
            let grundpreis_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [test.grundpreis, 119] }), test.vat] })).toFixed(2);
            let pendel_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [test.pendel, 119] }), test.vat] })).toFixed(2);
            let kette_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [test.kette, 119] }), test.vat] })).toFixed(2);
            let klemm_oben_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [test.klemm_oben, 119] }), test.vat] })).toFixed(2);
            let klemm_unten_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [test.klemm_unten, 119] }), test.vat] })).toFixed(2);

            //Konfigurator & Warenkorb
            let streichPreis = (jsonLogic.apply({ '+': [test.grundpreis, test.kette, test.pendel, test.klemm_oben, test.klemm_unten] })).toFixed(2)
            let streichPreisTotal = (jsonLogic.apply({ '*': [streichPreis, test.anzahl] })).toFixed(2)
            let redPreis = (jsonLogic.apply({ '+': [grundPreis_red, test.kette, test.pendel, test.klemm_oben, test.klemm_unten] })).toFixed(2)
            let redPreisTotal = (jsonLogic.apply({ '*': [redPreis, test.anzahl] })).toFixed(2)
            let warenkorbTotal = (jsonLogic.apply({ '*': [redPreis, test.anzahl] })).toFixed(2)
            let sieSparen = (jsonLogic.apply({ '-': [streichPreisTotal, redPreisTotal] })).toFixed(2)

            //Checkout & Backend
            let versandkosten = test.versandkosten.toFixed(2)
            let streichPreis_mwst = (jsonLogic.apply({ '+': [grundpreis_mwst, pendel_mwst, kette_mwst, klemm_oben_mwst, klemm_unten_mwst] })).toFixed(2)
            let streichPreisTotal_mwst = (jsonLogic.apply({ '*': [streichPreis_mwst, test.anzahl] })).toFixed(2)
            let redPreis_mwst = (jsonLogic.apply({ '+': [grundPreis_red_mwst, pendel_mwst, kette_mwst, klemm_oben_mwst, klemm_unten_mwst] })).toFixed(2)
            let redPreisTotal_mwst = (jsonLogic.apply({ '*': [redPreis_mwst, test.anzahl] })).toFixed(2)
            let sieSparen_mwst = (jsonLogic.apply({ '-': [streichPreisTotal_mwst, redPreisTotal_mwst] })).toFixed(2)
            let total_mwst = (jsonLogic.apply({ '+': [redPreisTotal_mwst, test.versandkosten] })).toFixed(2)
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
    

            //-------------------------------------------------------------------------------------------------------------------------------\\
            //----------------------------------------------------- replace . with , ---------------------------------------------------------\\

            streichPreis = streichPreis.replace('.', ',')
            redPreis = redPreis.replace('.', ',')
            streichPreisTotal = streichPreisTotal.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
            redPreisTotal = redPreisTotal.replace('.', ',')
            warenkorbTotal = warenkorbTotal.replace('.', ',')
            sieSparen = sieSparen.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
            sieSparen_mwst = sieSparen_mwst.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
            streichPreis_mwst = streichPreis_mwst.replace('.', ',')
            streichPreisTotal_mwst = streichPreisTotal_mwst.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
            redPreis_mwst = redPreis_mwst.replace('.', ',')
            redPreisTotal_mwst = redPreisTotal_mwst.replace('.', ',')
            steuer_betrag = steuer_betrag.replace('.', ',')
            steuer_betrag_gesamt = steuer_betrag_gesamt.replace('.', ',')
            versandkosten = versandkosten.replace('.', ',')
            total_backend = total_backend.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
            total_mwst = total_mwst.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000


            //-------------------------------------------------------------------------------------------------------------------------------\\
            //****************************************************************************************************************************/

            // test.grundpreis, test.kette, test.pendel, test.klemm_oben, test.klemm_unten
            cy.log('Str.Preis: ' + streichPreis)
            cy.log(test.grundpreis)
            cy.log(test.kette)
            cy.log(test.pendel)
            cy.log(test.klemm_oben)
            cy.log(test.klemm_unten)

            const emailSuffix = Date.now();
            if (test.login != "customer") {
                test.email = test.email.replace("@", "_" + emailSuffix + "@");
            }

            cy.visit(test.produkt)
            checkFromPrices(test.produktgruppe, test.ab_preis, test.ab_preis_red)

            setProduktGruppe(test.produktgruppe)
            checkOriginalPrice(test.ab_preis)
            checkSpecialPrice(test.ab_preis_red)

            setJalousieFarbe(test.farbe)
            setHoehe(test.hoehe)
            setBreite(test.breite)
            setBefestigung(test.befestigung)
            setBedienung(test.bedientyp)
            setFarbeKetteUndBlende(test.farbe_ketteUndBlende)
            setFarbeKette(test.farbe_kette)
            setFarbeBlende(test.farbe_seitenblende)
            setBedienSeite(test.bedienseite)
            setPendelsicherung(test.pendelsicherung)

            checkOriginalPrice(streichPreis)
            checkSpecialPrice(redPreis)
            addQuantityToCart(test.anzahl)

            cartPage.checkPricePerLine(streichPreis, redPreis, streichPreisTotal, redPreisTotal, test.system)
            cartPage.checkTotals(test.system, warenkorbTotal, sieSparen, test.rabatt_code, test.rabatt_betrag, test.sieSparen_new, test.total_cart_new)
            cartPage.proceedToCheckout()

            checkOutPage.checkOut(test.system, test.missing_name, test.login, test.email, test.password, test.prefix, test.company_name, test.vatID, test.prefix_business, test.first_name, test.last_name, test.street, test.postal_code, test.city, test.state, test.phone, test.shipping, versandkosten, test.prefix2, test.company_name2, test.vatID_2, test.prefix_business2, test.first_name2, test.last_name2, test.street2, test.postal_code2, test.city2, test.state2, test.phone2, test.payment)
            checkOutPage.checkFinalPrices(test.system, test.rabatt_code, test.rabatt_betrag_checkout, sieSparen_mwst, versandkosten, streichPreis_mwst, streichPreisTotal_mwst, redPreis_mwst, redPreisTotal_mwst, total_mwst)
            checkOutPage.placeOrder(test.system, test.payment, test.failed_payment, test.canceled_payment, versandkosten, test.rabatt_code, test.rabatt_betrag_backend, test.rabatt_betrag_backend2, test.mwst_1, test.mwst_2, test.mwst_3, test.vatRateLine_4, test.vatRateLine_5, test.vatRateLine_6, steuer_betrag, steuer_betrag_2, steuer_betrag_3, test.vatAmountLine_4, test.vatAmountLine_5, test.vatAmountLine_6, steuer_betrag_gesamt, redPreis_mwst, redPreisTotal_mwst, sideProduct_1, sideProduct_1_total, sideProduct_2, sideProduct_2_total, sideProduct_3, sideProduct_3_total, sideProduct_4, sideProduct_4_total, sideProduct_5, sideProduct_5_total, total_backend)
        })
    }
}

function checkFromPrices(product, value1, value2) {
    if (product == "16mm") {
        cy.get('.testmenu > :nth-child(1)').should('contain', value1).and('contain', value2)
    }
    if (product == "25mm") {
        cy.get('.testmenu > :nth-child(2)').should('contain', value1).and('contain', value2)
    }
    if (product == "50mm") {
        cy.get('.testmenu > :nth-child(3)').should('contain', value1).and('contain', value2)
    }
}

function setProduktGruppe(gruppe) {
    cy.get('.testmenu').children().each(function ($el) {
        if ($el.text().indexOf(gruppe) >= 0) {
            cy.wrap($el).wait(1000).click();
        }
    })
}

function setJalousieFarbe(farbe) {
    cy.get('#jalousie-collection > ul').children().contains(farbe)
        .then($element => {  //click on image of color not on text
            cy.wrap($element).parent().siblings('.product-image').click()
        })
}

function setBreite(value) {
    cy.get('#breite_in_mm input').type(value)
}

function setHoehe(value) {
    cy.get('#hoehe_in_mm input').type(value)
}

function setBefestigung(value) {
    cy.get('.befestigung-type > div >  ul').children().contains(value).click({ force: true })
}

function setBedienung(value) {
    cy.get('.bedienung > ul').children().contains(value).click({ force: true })
}

function setBedienSeite(value) {
    cy.get('.bedienseite-type > div > ul').children().contains(value).click({ force: true })
}

function setFarbeKetteUndBlende(value) {
    if (value != "") {
        cy.get('.farbe > :nth-child(4) > ul').children().contains(value).click({ force: true })
    }
}

function setFarbeKette(value) {
    if (value != "") {
        cy.get('.farbe > :nth-child(5) > ul').children().contains(value).click({ force: true })
    }
}

function setFarbeBlende(value) {
    if (value != "") {
        cy.get('.farbe > :nth-child(6) > ul').children().contains(value).click({ force: true })
    }
}

function setPendelsicherung(value) {
    if (value != "") {
        cy.get('.seitenfuehrung > div > ul').children().contains(value).click()
    }
}

function checkSpecialPrice(price) {
    cy.get('#configurator-price-cart > .add-to-cart > .special-price').should("contain", price)

}

function checkOriginalPrice(original_price) {
    cy.get('#configurator-price-cart > .add-to-cart > .old-price > .price').should("contain", original_price)
}

function addQuantityToCart(qty) {
    cy.get('#configurator-price-cart > .add-to-cart input').clear().type(qty)
    cy.get('#configurator-price-cart > .add-to-cart button').click({ force: true })
}