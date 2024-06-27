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

    configureSchiebegardineDifferent: function configureSchiebegardineDifferent(test, paneele) {

        //grundpreis
        cy.log(paneele)

        //grundpreis
        let paneele_red = (jsonLogic.apply({ '*': [test.discount, paneele] })).toFixed(2);
        let paneele_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [paneele, 119] }), test.vat] })).toFixed(2);
        let paneele_red_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [paneele_red, 119] }), test.vat] })).toFixed(2);

        cy.log('Paneele: ' + paneele)
        cy.log('Paneele red.: ' + paneele_red)

        //zusätze
        // Schiene wird rabattiert
        let schiene_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [test.schienen_preis, 119] }), test.vat] })).toFixed(2);
        let schiene_red = (jsonLogic.apply({ '*': [test.discount, test.schienen_preis] })).toFixed(2);
        let schiene_red_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [schiene_red, 119] }), test.vat] })).toFixed(2);

        // Endstab wird rabattiert
        let endstab_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [test.endstab_preis, 119] }), test.vat] })).toFixed(2);
        let endstab_red = (jsonLogic.apply({ '*': [test.discount, test.endstab_preis] })).toFixed(2);
        let endstab_red_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [endstab_red, 119] }), test.vat] })).toFixed(2);

        // Bediengriffe werden NICHT rabattiert (Gardinia)
        let bediengriffe_einzeln_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [test.bediengriff_einzeln, 119] }), test.vat] })).toFixed(2);
        let bediengriffe_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [test.bediengriff_preis, 119] }), test.vat] })).toFixed(2);
        let bediengriffe_mwst_total = (jsonLogic.apply({ '*': [bediengriffe_mwst, test.anzahl] })).toFixed(2)

        // Befestigung wird NICHT rabattiert
        let befestigung_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [test.befestigung_preis, 119] }), test.vat] })).toFixed(2);

        //Konfigurator & Warenkorb
        let streichPreis = (jsonLogic.apply({ '+': [paneele, test.schienen_preis, test.endstab_preis, test.bediengriff_preis, test.befestigung_preis] })).toFixed(2)
        let streichPreisTotal = (jsonLogic.apply({ '*': [streichPreis, test.anzahl] })).toFixed(2)

        let redPreis = (jsonLogic.apply({ '+': [paneele_red, schiene_red, endstab_red, test.bediengriff_preis, test.befestigung_preis] })).toFixed(2);
        let redPreisTotal = (jsonLogic.apply({ '*': [redPreis, test.anzahl] })).toFixed(2)
        let warenkorbTotal = (jsonLogic.apply({ '*': [redPreis, test.anzahl] })).toFixed(2)
        let sieSparen = (jsonLogic.apply({ '-': [streichPreisTotal, redPreisTotal] })).toFixed(2)

        // Checkout
        let streichPreis_mwst = (jsonLogic.apply({ '+': [paneele_mwst, schiene_mwst, endstab_mwst, bediengriffe_mwst, befestigung_mwst] })).toFixed(2)
        let streichPreisTotal_mwst = (jsonLogic.apply({ '*': [streichPreis_mwst, test.anzahl] })).toFixed(2);
        let redPreis_mwst = (jsonLogic.apply({ '+': [paneele_red_mwst, schiene_red_mwst, endstab_red_mwst, bediengriffe_mwst, befestigung_mwst] })).toFixed(2)
        let redPreisTotal_mwst = (jsonLogic.apply({ '*': [redPreis_mwst, test.anzahl] })).toFixed(2);
        let total_mwst = (jsonLogic.apply({ '+': [redPreisTotal_mwst, test.versandkosten] })).toFixed(2)
        let sieSparen_mwst = (jsonLogic.apply({ '-': [streichPreisTotal_mwst, redPreisTotal_mwst] })).toFixed(2)
        let versandkosten = test.versandkosten.toFixed(2);

        cy.log('Streichpreis komplett: ' + paneele_mwst +' '+ schiene_mwst +' '+ endstab_mwst +' '+ bediengriffe_mwst +' '+ befestigung_mwst)
        cy.log('Streichpreis: ' + streichPreis_mwst)
        cy.log('Streichpreis total: ' + streichPreisTotal_mwst)
        cy.log('red. Preis: ' + redPreis_mwst)
        cy.log('red. Preis total: ' + redPreisTotal_mwst)
        cy.log('Gesamt: ' + total_mwst)

        //Backend
        let preis_backend = (jsonLogic.apply({ '+': [paneele_red_mwst, schiene_red_mwst, endstab_red_mwst, befestigung_mwst] })).toFixed(2)
        let preis_backend_total = (jsonLogic.apply({ '*': [preis_backend, test.anzahl] })).toFixed(2);
        let sideProduct_1 = bediengriffe_einzeln_mwst;
        let sideProduct_1_total = (jsonLogic.apply({ '*': [bediengriffe_einzeln_mwst, test.anzahl, test.paneel_anzahl] })).toFixed(2);

        let total_backend = (jsonLogic.apply({ '+': [preis_backend_total, sideProduct_1_total, test.versandkosten] })).toFixed(2)

        let steuer_betrag = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [preis_backend_total, test.vat] }), test.mwst_1] })).toFixed(2);
        let steuer_betrag_2 = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [sideProduct_1_total, test.vat] }), test.mwst_1] })).toFixed(2);
        let steuer_betrag_3;
        let steuer_versand = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [test.versandkosten, test.vat] }), test.mwst_1] })).toFixed(2);
        let steuer_betrag_gesamt = (jsonLogic.apply({ '+': [steuer_betrag, steuer_betrag_2, steuer_versand] })).toFixed(2)


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
        steuer_betrag_2 = steuer_betrag_2.replace('.', ',')
        steuer_betrag_gesamt = steuer_betrag_gesamt.replace('.', ',')
        versandkosten = versandkosten.replace('.', ',')
        total_backend = total_backend.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        total_mwst = total_mwst.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        preis_backend = preis_backend.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        preis_backend_total = preis_backend_total.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        sideProduct_1 = sideProduct_1.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000 = preis_backend.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        sideProduct_1_total = sideProduct_1_total.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000

        //-------------------------------------------------------------------------------------------------------------------------------\\
        //****************************************************************************************************************************/

        // stoffpreis, test.schienen_preis, test.verbinder_preis, test.endstuecke_preis, test.bediengriff_preis, test.befestigung_preis
        cy.log('Stoff: ' + paneele)
        cy.log('Schiene: ' + test.schienen_preis)
        cy.log('Bediengriff: ' + test.bediengriff_preis)
        cy.log('Befestigung: ' + test.befestigung_preis)




        const emailSuffix = Date.now();
        if (test.login != "customer") {
            test.email = test.email.replace("@", "_" + emailSuffix + "@");
        }

        setSchiebegardineTyp(test.modell)

        checkOriginalPrice(test.ab_preis)
        checkSpecialPrice(test.ab_preis_red)

        setBreite(test.breite)
        setHoehe(test.hoehe)
        // setPaneelwagen(test.paneelwagen)
        // setFarbePaneelwagen(test.farbe_paneelwagen)
        setAnzahlPaneele(test.paneel_anzahl)
        paneeleAnpassen(test.pan_anpassen, test.stoff_1, test.stoff_2, test.stoff_3, test.stoff_4, test.stoff_5, test.stoff_6, test.stoff_7, test.stoff_8, test.breite_1, test.breite_2, test.breite_3, test.breite_4, test.breite_5, test.breite_6, test.breite_7, test.breite_8, test.hoehe_1, test.hoehe_2, test.hoehe_3, test.hoehe_4, test.hoehe_5, test.hoehe_6, test.hoehe_7, test.hoehe_8)
        setOverlap(test.overlap)
        setSchienenlauf(test.lauf_schiene)
        setSchienenfarbe(test.farbe_schiene)
        // setSchienenart(test.art_schiene)
        setMontage(test.montage)
        setBediengriff(test.bediengriff)
        setAnzahlBediengriff(test.anzahl_bediengriff)
        setEndstab(test.endstab)

        checkOriginalPrice(streichPreis)
        checkSpecialPrice(redPreis)
        addQuantityToCart(test.anzahl)

        cartPage.checkPricePerLine(streichPreis, redPreis, streichPreisTotal, redPreisTotal, test.system, test.price_cart)
        cartPage.checkTotals(test.system, warenkorbTotal, sieSparen, test.rabatt_code, test.rabatt_betrag, test.sieSparen_new, test.total_cart_new)
        cartPage.proceedToCheckout()

        checkOutPage.checkOut(test.system, test.missing_name, test.login, test.email, test.password, test.prefix, test.company_name, test.vatID, test.prefix_business, test.first_name, test.last_name, test.street, test.postal_code, test.city, test.state, test.phone, test.shipping, versandkosten, test.prefix2, test.company_name2, test.vatID_2, test.prefix_business2, test.first_name2, test.last_name2, test.street2, test.postal_code2, test.city2, test.state2, test.phone2, test.payment)
        checkOutPage.checkFinalPrices(test.system, test.rabatt_code, test.rabatt_betrag_checkout, sieSparen_mwst, versandkosten, streichPreis_mwst, streichPreisTotal_mwst, redPreis_mwst, redPreisTotal_mwst, total_mwst)
        checkOutPage.placeOrder(test.system, test.payment, test.failed_payment, test.canceled_payment, versandkosten, test.rabatt_code, test.rabatt_betrag_backend, test.rabatt_betrag_backend2, test.mwst_1, test.mwst_2, test.mwst_3, test.vatRateLine_4, test.vatRateLine_5, test.vatRateLine_6, steuer_betrag, steuer_betrag_2, steuer_betrag_3, test.vatAmountLine_4, test.vatAmountLine_5, test.vatAmountLine_6, steuer_betrag_gesamt, preis_backend, preis_backend_total, sideProduct_1, sideProduct_1_total, sideProduct_2, sideProduct_2_total, sideProduct_3, sideProduct_3_total, sideProduct_4, sideProduct_4_total, sideProduct_5, sideProduct_5_total, total_backend)
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
    if (typeof value !== "undefined") {
        cy.get('img[alt="mit Paneelwagen"]').click()
    }
}

function setFarbePaneelwagen(value) {
    if (typeof value !== "undefined") {
        //cy.contains(value) //--> does not find the element
        cy.get('div[options-property="paneelwagenfarbe"] ul li').contains(value).click()
    }
}

function setEndstab(value) {
    if (typeof value !== "undefined") {
        cy.contains(new RegExp("^" + value + "\\s*$")).click()
    }
}

function setAnzahlPaneele(value) {
    if (typeof value !== "undefined") {
        cy.get('#paneelnumber input').clear().type(value)
    }
}

function paneeleAnpassen(checkValue, stoff1, stoff2, stoff3, stoff4, stoff5, stoff6, stoff7, stoff8, breite1, breite2, breite3, breite4, breite5, breite6, breite7, breite8, hoehe1, hoehe2, hoehe3, hoehe4, hoehe5, hoehe6, hoehe7, hoehe8) {

    if (checkValue) {

        cy.get('#check_individual input').check()

        var stoffe = [stoff1, stoff2, stoff3, stoff4, stoff5, stoff6, stoff7, stoff8]
        var breiten = [breite1, breite2, breite3, breite4, breite5, breite6, breite7, breite8]
        var hoehen = [hoehe1, hoehe2, hoehe3, hoehe4, hoehe5, hoehe6, hoehe7, hoehe8]


        for (var j = 1, i = 0; i <= 7; i++, j++) {
            if (typeof stoffe[i] !== "undefined") {
                cy.get('.optional_paneele_wrapper > :nth-child(' + j + ') input[type="button"]').click({ force: true })
                cy.get('#material-collection > ul > li').contains(stoffe[i]).click()
                cy.contains('Auswahl übernehmen').click({ force: true })
            }
            if (typeof breiten[i] !== "undefined") {
                cy.get('.optional_paneele_wrapper > :nth-child(' + j + ') > .optional_paneele_sizes :nth-child(1) input').clear().type(breiten[i])
            }
            if (typeof hoehen[i] !== "undefined") {
                cy.get('.optional_paneele_wrapper > :nth-child(' + j + ') > .optional_paneele_sizes :nth-child(2) input').clear().type(hoehen[i])
            }
        }
    }
}

function setOverlap(value) {
    if (typeof value !== "undefined") {
        cy.get('#paneeloverlap input').clear().type(value)
    }
}

function setSchienenlauf(value) {
    if (typeof value !== "undefined") {
        cy.get('#schienenlaeufe-wahlen > :nth-child(1) > div > ul').children().contains(value).click({ force: true })
    }
}

function setSchienenfarbe(value) {
    if (typeof value !== "undefined") {
        //cy.contains(value) //--> does not find the element
        cy.get('div[options-property="schienenfarbe"] ul li').contains(value).click()

    }
}

// function setSchienenart(value) {
//     if (typeof value !== "undefined") {
//         cy.get('span').contains(value).click({ force: true })
//     }
// }

function setMontage(value) {
    if (typeof value !== "undefined") {
        cy.contains(new RegExp("^" + value + "\\s*$")).click()
    }
}

function setBediengriff(value) {
    if (typeof value !== "undefined") {
        cy.get('h4').contains(value).click({ force: true })
    }
}

function setAnzahlBediengriff(value) {
    if (typeof value !== "undefined") {
        cy.get('input[id="bediengriffe_value"]').clear({ force: true }).type(value)
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