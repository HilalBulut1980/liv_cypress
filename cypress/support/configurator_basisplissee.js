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

        // The toFixed() method is unreliable in its rounding, therefore we use the following method for reliable results --> this is also unreliable
        function RoundNum(num, length) { 
            var number = Math.round(num * Math.pow(10, length)) / Math.pow(10, length);
            return number;
        }

        let grundPreis_red;

        if (typeof test.puro_rabatt !== "undefined") { //if puro rabatt exists 5,50 eur
            grundPreis_red = RoundNum((jsonLogic.apply({ '-': [(jsonLogic.apply({ '*': [test.discount, test.grundpreis] }).toFixed(2)), test.puro_rabatt] })), 2)//.toFixed(2);
        }

        else if (typeof test.vola_rabatt !== "undefined") { //if vola rabatt exists 7,50 eur
            grundPreis_red = RoundNum((jsonLogic.apply({ '-': [(jsonLogic.apply({ '*': [test.discount, test.grundpreis] }).toFixed(2)), test.vola_rabatt] })), 2)//.toFixed(2);
        }

        else if (typeof test.discount_vola !== "undefined") { //if vola extra-rabatt exists 10%
            grundPreis_red = RoundNum((jsonLogic.apply({ '*': [(jsonLogic.apply({ '*': [test.discount, test.grundpreis] })), test.discount_vola] })), 2)//.toFixed(2);
        }
        else {
            grundPreis_red = RoundNum((jsonLogic.apply({ '*': [test.discount, test.grundpreis] })), 2)//.toFixed(2);
        }


        let grundPreis_red_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [grundPreis_red, 119] }), test.vat] })).toFixed(2);
        let grundpreis_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [test.grundpreis, 119] }), test.vat] })).toFixed(2);

        //zusätze
        let befestigung_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [test.befestigung_preis, 119] }), test.vat] })).toFixed(2);
        let sideProduct_1_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [test.sideProduct_1, 119] }), test.vat] })).toFixed(2);
        let sideProduct_2_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [test.sideProduct_2, 119] }), test.vat] })).toFixed(2);

        //Konfigurator & Warenkorb
        let streichPreis = (jsonLogic.apply({ '+': [test.grundpreis, test.befestigung_preis, test.sideProduct_1, test.sideProduct_2] })).toFixed(2)
        let streichPreisTotal = (jsonLogic.apply({ '*': [streichPreis, test.anzahl] })).toFixed(2)
        let redPreis = (jsonLogic.apply({ '+': [grundPreis_red, test.befestigung_preis, test.sideProduct_1, test.sideProduct_2] })).toFixed(2)
        let redPreisTotal = (jsonLogic.apply({ '*': [redPreis, test.anzahl] })).toFixed(2)
        let warenkorbTotal = (jsonLogic.apply({ '*': [redPreis, test.anzahl] })).toFixed(2)
        let sieSparen = (jsonLogic.apply({ '-': [streichPreisTotal, redPreisTotal] })).toFixed(2)


        //Checkout & Backend
        let versandkosten = test.versandkosten.toFixed(2)
        let streichPreis_mwst = (jsonLogic.apply({ '+': [grundpreis_mwst, befestigung_mwst, sideProduct_1_mwst, sideProduct_2_mwst] })).toFixed(2)
        let streichPreisTotal_mwst = (jsonLogic.apply({ '*': [streichPreis_mwst, test.anzahl] })).toFixed(2)
        let redPreis_mwst = (jsonLogic.apply({ '+': [grundPreis_red_mwst, befestigung_mwst, sideProduct_1_mwst, sideProduct_2_mwst] })).toFixed(2)
        let redPreisTotal_mwst = (jsonLogic.apply({ '*': [redPreis_mwst, test.anzahl] })).toFixed(2)
        let sieSparen_mwst = (jsonLogic.apply({ '-': [streichPreisTotal_mwst, redPreisTotal_mwst] })).toFixed(2)
        let total_mwst = (jsonLogic.apply({ '+': [redPreisTotal_mwst, test.versandkosten] })).toFixed(2)

        // ONLY BACKEND 
        // (Befestigungen und Zusätze werden in manchen Fällen im Backend getrennt gelistet und berechnet 
        // --> wenn Zusatzprod. von VHG !)
        let einzel_backend = (jsonLogic.apply({ '+': [grundPreis_red_mwst, befestigung_mwst] })).toFixed(2)
        let summe_backend = (jsonLogic.apply({ '*': [einzel_backend, test.anzahl] })).toFixed(2)
        let sideProduct_1 = sideProduct_1_mwst
        let sideProduct_1_total = (jsonLogic.apply({ '*': [sideProduct_1, test.anzahl] })).toFixed(2)
        let sideProduct_2 = sideProduct_2_mwst
        let sideProduct_2_total = (jsonLogic.apply({ '*': [sideProduct_2, test.anzahl] })).toFixed(2)
        // let sideProduct_1
        // let sideProduct_1_total
        // let sideProduct_2
        // let sideProduct_2_total
        let sideProduct_3
        let sideProduct_3_total
        let sideProduct_4
        let sideProduct_4_total
        let sideProduct_5
        let sideProduct_5_total
        let total_backend = total_mwst
        let steuer_betrag = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [summe_backend, test.vat] }), test.mwst_1] })).toFixed(2);
        let steuer_betrag_2 = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [sideProduct_1_total, test.vat] }), test.mwst_1] })).toFixed(2);
        let steuer_betrag_3 = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [sideProduct_2_total, test.vat] }), test.mwst_1] })).toFixed(2);
        let steuer_versand = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [test.versandkosten, test.vat] }), test.mwst_1] })).toFixed(2);
        // let steuer_betrag_gesamt = (jsonLogic.apply({ '+': [steuer_betrag, steuer_betrag_2, steuer_betrag_3, steuer_versand] })).toFixed(2)
        let steuer_betrag_gesamt = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [total_backend, test.vat] }), test.mwst_1] })).toFixed(2);


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
        steuer_betrag = steuer_betrag.replace('.', ',').replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        steuer_betrag_2 = steuer_betrag_2.replace('.', ',')
        steuer_betrag_3 = steuer_betrag_3.replace('.', ',')
        steuer_betrag_gesamt = steuer_betrag_gesamt.replace('.', ',')
        versandkosten = versandkosten.replace('.', ',')
        einzel_backend = einzel_backend.replace('.', ',')
        summe_backend = summe_backend.replace('.', ',')
        sideProduct_1 = sideProduct_1.replace('.', ',')
        sideProduct_1_total = sideProduct_1_total.replace('.', ',')
        sideProduct_2 = sideProduct_2.replace('.', ',')
        sideProduct_2_total = sideProduct_2_total.replace('.', ',')
        total_backend = total_backend.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        total_mwst = total_mwst.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000


        //-------------------------------------------------------------------------------------------------------------------------------\\
        //****************************************************************************************************************************/

        /*if (sideProduct_2 != "0,00") {
            cy.log('ungleich null')
            cy.log(sideProduct_2)
        }
        if (sideProduct_2 == "0,00") {
            cy.log('gleich null')
            cy.log(sideProduct_2)
        }*/

        // grundpreis_mwst, befestigung_mwst, sideProduct_1_mwst, sideProduct_2_mwst
        cy.log('A ' + grundPreis_red)
        // cy.log('B ' + befestigung_mwst)
        // cy.log('C ' + sideProduct_1_mwst)
        // cy.log('D ' + sideProduct_2_mwst)
        // cy.log('E ' + steuer_betrag_3)


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
        cartPage.checkTotals(test.system, warenkorbTotal, sieSparen, test.rabatt_code, test.rabatt_betrag, test.sieSparen_new, test.total_cart_new)
        cartPage.proceedToCheckout()

        checkOutPage.checkOut(test.system, test.missing_name, test.login, test.email, test.password, test.prefix, test.company_name, test.vatID, test.prefix_business, test.first_name, test.last_name, test.street, test.postal_code, test.city, test.state, test.phone, test.shipping, versandkosten, test.prefix2, test.company_name2, test.vatID_2, test.prefix_business2, test.first_name2, test.last_name2, test.street2, test.postal_code2, test.city2, test.state2, test.phone2, test.payment)
        checkOutPage.checkFinalPrices(test.system, test.rabatt_code, test.rabatt_betrag_checkout, sieSparen_mwst, versandkosten, streichPreis_mwst, streichPreisTotal_mwst, redPreis_mwst, redPreisTotal_mwst, total_mwst)
        checkOutPage.placeOrder(test.system, test.payment, test.failed_payment, test.canceled_payment, versandkosten, test.rabatt_code, test.rabatt_betrag_backend, test.rabatt_betrag_backend2, test.mwst_1, test.mwst_2, test.mwst_3, test.vatRateLine_4, test.vatRateLine_5, test.vatRateLine_6, steuer_betrag, steuer_betrag_2, steuer_betrag_3, test.vatAmountLine_4, test.vatAmountLine_5, test.vatAmountLine_6, steuer_betrag_gesamt, einzel_backend, summe_backend, sideProduct_1, sideProduct_1_total, sideProduct_2, sideProduct_2_total, sideProduct_3, sideProduct_3_total, sideProduct_4, sideProduct_4_total, sideProduct_5, sideProduct_5_total, total_backend)
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