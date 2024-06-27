var cartPage = require("./cart.js");
var checkOutPage = require("./checkout.js");
import jsonLogic from 'json-logic-js';


module.exports = {

    startFromConfigurator: function startFromConfigurator(test) {

        cy.visit('/rollo/rollo-konfigurator')
        selectStoff(test.produkt)

    },

    startFromProductPage: function startFromProductPage(test) {

        cy.visit(test.produkt)
        checkFromPrices(test.ab_preis, test.ab_preis_red)
        loadConfigurator()
    },

    configureRollo: function configureRollo(test) {

        //***************************************************** PRICE CALCULATION **************************************************** */
        //*************************************************************************************************************************** */

        //grundpreis    // 
        // let grundPreis_red = (jsonLogic.apply({ '*': [test.discount, test.grundpreis] })).toFixed(2);
        let grundPreis_red = (jsonLogic.apply({ '*': [test.discount_extra, (jsonLogic.apply({ '*': [test.discount, test.grundpreis] }))] })).toFixed(2);
        let grundPreis_red_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [grundPreis_red, 119] }), test.vat] })).toFixed(2);
        let grundpreis_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [test.grundpreis, 119] }), test.vat] })).toFixed(2);

        //zusätze
        let pendel_preis_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [test.pendel_preis, 119] }), test.vat] })).toFixed(2);
        let ketten_preis_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [test.ketten_preis, 119] }), test.vat] })).toFixed(2);
        let motor_preis_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [test.motor_preis, 119] }), test.vat] })).toFixed(2);
        let bedienstab_preis_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [test.bedienstab_preis, 119] }), test.vat] })).toFixed(2);

        let befestigung_preis_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [test.befestigung_preis, 119] }), test.vat] })).toFixed(2);
        let befestigung_preis_red = (jsonLogic.apply({ '*': [test.discount, test.befestigung_preis] })).toFixed(2);
        let befestigung_preis_red_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [befestigung_preis_red, 119] }), test.vat] })).toFixed(2);

        let kassetten_preis_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [test.kassetten_preis, 119] }), test.vat] })).toFixed(2);
        let kassetten_preis_red = (jsonLogic.apply({ '*': [test.discount, test.kassetten_preis] })).toFixed(2);
        let kassetten_preis_red_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [kassetten_preis_red, 119] }), test.vat] })).toFixed(2);

        let montLeiste_preis_preis_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [test.montageleiste_preis, 119] }), test.vat] })).toFixed(2);
        let montLeiste_preis_preis_red = (jsonLogic.apply({ '*': [test.discount, test.montageleiste_preis] })).toFixed(2);
        let montLeiste_preis_preis_red_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [montLeiste_preis_preis_red, 119] }), test.vat] })).toFixed(2);

        let volant_preis_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [test.volant_preis, 119] }), test.vat] })).toFixed(2);
        let volant_preis_red = (jsonLogic.apply({ '*': [test.discount, test.volant_preis] })).toFixed(2);
        let volant_preis_red_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [volant_preis_red, 119] }), test.vat] })).toFixed(2);

        //Konfigurator & Warenkorb
        let streichPreis = (jsonLogic.apply({ '+': [test.grundpreis, test.pendel_preis, test.ketten_preis, test.motor_preis, test.bedienstab_preis, test.befestigung_preis, test.kassetten_preis, test.montageleiste_preis, test.volant_preis] })).toFixed(2)
        let streichPreisTotal = (jsonLogic.apply({ '*': [streichPreis, test.anzahl] })).toFixed(2)
        let redPreis = (jsonLogic.apply({ '+': [grundPreis_red, test.pendel_preis, test.ketten_preis, test.motor_preis, test.bedienstab_preis, befestigung_preis_red, kassetten_preis_red, montLeiste_preis_preis_red, volant_preis_red] })).toFixed(2)
        let redPreisTotal = (jsonLogic.apply({ '*': [redPreis, test.anzahl] })).toFixed(2)
        let warenkorbTotal = redPreisTotal
        let sieSparen = (jsonLogic.apply({ '-': [streichPreisTotal, redPreisTotal] })).toFixed(2)

        //Checkout & Backend
        let versandkosten = test.versandkosten.toFixed(2)
        let streichPreis_mwst = (jsonLogic.apply({ '+': [grundpreis_mwst, pendel_preis_mwst, ketten_preis_mwst, motor_preis_mwst, bedienstab_preis_mwst, befestigung_preis_mwst, kassetten_preis_mwst, montLeiste_preis_preis_mwst, volant_preis_mwst] })).toFixed(2)
        let streichPreisTotal_mwst = (jsonLogic.apply({ '*': [streichPreis_mwst, test.anzahl] })).toFixed(2)
        let redPreis_mwst = (jsonLogic.apply({ '+': [grundPreis_red_mwst, pendel_preis_mwst, ketten_preis_mwst, motor_preis_mwst, bedienstab_preis_mwst, befestigung_preis_red_mwst, kassetten_preis_red_mwst, montLeiste_preis_preis_red_mwst, volant_preis_red_mwst] })).toFixed(2)
        let redPreisTotal_mwst = (jsonLogic.apply({ '*': [redPreis_mwst, test.anzahl] })).toFixed(2)
        let sieSparen_mwst = (jsonLogic.apply({ '-': [streichPreisTotal_mwst, redPreisTotal_mwst] })).toFixed(2)
        let total_mwst = (jsonLogic.apply({ '+': [redPreisTotal_mwst, versandkosten] })).toFixed(2)

        //ONLY BACKEND (Befestigungen und Zusätze werden in manchen Fällen im Backend getrennt gelistet und berechnet)
        let einzel_backend = redPreis_mwst
        let summe_backend = (jsonLogic.apply({ '*': [einzel_backend, test.anzahl] })).toFixed(2)
        let total_backend = total_mwst
        let steuer_betrag = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [summe_backend, test.vat] }), test.mwst_1] })).toFixed(2);
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


        //-------------------------------------------------------------------------------------------------------------------------------\\
        //----------------------------------------------------- replace . with , ---------------------------------------------------------\\

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

        cy.intercept('GET', '/config/index/*').as('dfselect')

        setRolloTyp(test.rollotyp)

        checkOriginalPrice(test.ab_preis)
        checkSpecialPrice(test.ab_preis_red)

        setKassette(test.rollotyp, test.kassette)
        setSchiene(test.schiene)
        setHoehe(test.hoehe)
        setBreite(test.breite)
        setHersteller(test.df_hersteller)
        setProdukt(test.df_produkt)
        setTyp(test.df_typ)
        setFalzTyp(test.df_falzart)
        setFinnenBreite(test.df_fluegelbreite)
        setFinnenHoehe(test.df_fluegelhoehe)
        setBefestigung(test.befestigung)
        setBedienung(test.bedientyp)
        setMotortyp(test.motortyp)
        setFernbedienung(test.fernbedienung)
        setLadegeraet(test.ladegeraet)
        setBedienSeite(test.bedienseite)
        setKugelkettenArt(test.kugelkette)
        setVolant(test.volant)
        setDekorstangeFarbe(test.dekorstange)
        setFarbeKassette(test.kassettenfarbe)
        setFarbeAluleiste(test.aluleiste_farbe)
        setHalterung(test.halterung)
        setHalterungFarbe(test.halterung_farbe)
        setMontageleiste(test.montageleiste)
        setPendularClip(test.pendelsicherung)
        setBedienstab(test.bedienstab)

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

function checkFromPrices(value1, value2) {
    cy.get('.old-price').should('contain', value1)
    cy.get('.special-price').should('contain', value2)
}

function loadConfigurator() {
    cy.get('.buttons > .buttons__configuration').click()
}

function selectStoff(value) {
    cy.get('.configurator-button-subsection').click()
    cy.get('#material-collection > ul').children().contains(value).click()
    cy.get('button[type="button"]').contains('Auswahl übernehmen').click({ force: true })
}

function setRolloTyp(value) {
    cy.get('#type-selector-top > ul').children().contains(value).click({ force: true })
}

function setKassette(type, value) {
    if (typeof value != "undefined") {
        if (type == "Mini-Rollos") {
            cy.get('div[options-property="rollotyp"] > ul').children().contains(new RegExp("^" + value + "\\s*$")).click({ force: true })
        }
        else {
            cy.get('div[options-property="kassette"] > ul').children().contains(new RegExp("^" + value + "\\s*$")).click({ force: true })
        }
    }
}

function setSchiene(value) {
    if (typeof value != "undefined") {
        cy.get('div[options-property="fuehrungsschiene"] > ul').children().contains(value).click({ force: true })
    }
}

function setHoehe(value) {
    if (typeof value != "undefined") {
        cy.get('#hoehe_in_mm input').type(value)
    }
}

function setBreite(value) {
    if (typeof value != "undefined") {
        cy.get('#breite_in_mm input').type(value)
    }
}

function setHersteller(value) {
    if (typeof value != "undefined") {
        cy.contains(value).click()
    }
}

function setProdukt(value) {
    if (typeof value != "undefined") {
        cy.get('.dfselect_wrapper > :nth-child(1) select').select(value).wait('@dfselect')
    }
}

function setTyp(value) {
    if (typeof value != "undefined") {
        cy.get('.dfselect_wrapper > :nth-child(2) select').select(value).wait('@dfselect')
    }
}

function setFalzTyp(value) {
    if (typeof value != "undefined") {
        cy.get('[id="falztyp"]').children().contains(value).click()
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
        cy.wait(3000)  //less milliseconds are not enough here
        cy.get('.montage-type').children('div').children('ul').children().contains(value).click({ force: true });
    }
}

function setBedienung(value) {
    if (typeof value != "undefined") {
        cy.get('#bedienung-normal > div > ul').children().contains(value).click({ force: true })
    }
}

function setMotortyp(value) {
    if (typeof value != "undefined") {
        cy.get('#bedienung-motor > div > ul').children().contains(value).click({ force: true })
    }
}

//unselect (preselected) fernbedienung 
function setFernbedienung(value) {
    if (typeof value !== "undefined" && typeof value != "undefined") {
        cy.wait(1000)
        cy.get('div[options-property="remote"] > ul').children().contains(value).click({ force: true })
    }
}

//unselect (preselected) ladegerät 
function setLadegeraet(value) {
    if (typeof value !== "undefined" && typeof value != "undefined") {
        cy.wait(1000)
        cy.get('div[options-property="charger"] > ul').children().contains(value).click({ force: true })
    }
}

function setBedienSeite(value) {
    if (typeof value != "undefined") {
        cy.get('#bedienung-seite > div > ul').children().contains(value).click()
    }
}

function setKugelkettenArt(value) {
    if (typeof value != "undefined") {
        cy.get('#art-der-kugelkette > div > ul').children().contains(value).click()
    }
}

function setVolant(value) {
    if (typeof value != "undefined") {
        cy.get('div[options-property="volant"] > ul').children().contains(value).click({ force: true })
    }
}

function setDekorstangeFarbe(value) {
    if (typeof value != "undefined") {
        cy.get('div[options-property="farbeDekor"] > ul').children().contains(value).click({ force: true })
    }
}

function setFarbeKassette(value) {
    if (typeof value != "undefined") {
        cy.get('.kassette-farbe-container> div > ul').children().contains(value).click({ force: true })
    }
}

function setFarbeAluleiste(value) {
    if (typeof value != "undefined") {
        cy.get('div[options-property="farbeAlumin"] > ul').children().contains(value).click({ force: true })
    }
}

function setHalterung(value) {

    if (typeof value != "undefined") {
        cy.get('div[options-property="halterungMaterial"] > ul').children().contains(value).click()
        /*if (verblendung == "Metall") {
            //cy.get('.kassette-farbe-container> div > :nth-child(3) > li').not('.ng-hide').contains(value).click({ force: true })
        }
        else if (verblendung == "Kunststoff") {
            //cy.get('.kassette-farbe-container> div > :nth-child(5) > li').not('.ng-hide').contains(value).click({ force: true })
        }*/
    }
}

function setHalterungFarbe(value) {
    if (typeof value != "undefined") {
        cy.get('div[options-property="halterung"] > ul').children().contains(value).click({ force: true })
    }
}

function setMontageleiste(value) {
    if (typeof value != "undefined") {
        cy.contains(value).click()
    }
}

function setPendularClip(value) {
    if (typeof value != "undefined") {
        cy.get('#configurator-pendelsicherung > div > ul > :nth-child(2)').click()
    }
}

function setBedienstab(bedienstab) {
    if (typeof bedienstab !== "undefined") {
        cy.get('#bedienstab-normal > div > ul > :nth-child(2)').click()
        cy.get('#bedienstabLaenge-normal > div > ul').children().contains(bedienstab).click()
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