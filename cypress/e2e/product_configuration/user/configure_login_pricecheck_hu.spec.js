var test =
{
    "name": "Preis-Check mit Testkonto HU",
    "email": "testkonto_HU@delphinus-test.de",
    "password": "Abcde_12345",

    //category pages

    "categoryPage_1": "/doppelrollo/doppelrollo-grau",
    "productname_1": "Amelio 5102",  
    "catPrice_old_1": "64,03",  // 60 / 119 * 127
    "catPrice_special_1": "25,61", // 24 / 119 * 127

    "categoryPage_2": "/rollo/rollo-grau",
    "productname_2": "Samira 3820", 
    "catPrice_old_2": "56,56", // 53 * 119 / 127
    "catPrice_special_2": "25,45", // 23,85 / 119 * 127

    "categoryPage_3": "/raffrollo/raffrollo-grau",
    "productname_3": "Umile 9039", 
    "catPrice_old_3": "362,86", // 340 / 119 * 127
    "catPrice_special_3": "163,29", // 153 / 119 * 127

    "categoryPage_4": "/plissee/wintergarten-plissee",
    "productname_4": "Baseline 1023",
    "catPrice_old_4": "58,70",  // 55 / 119 * 127
    "catPrice_special_4": "21,61",  // 20,25 * 119 * 127

    "categoryPage_5": "/schiebegardinen/schiebegardinen-beige",
    "productname_5": "Bosna 7292",
    "catPrice_old_5": "45,89",  // 43 / 119 * 127
    "catPrice_special_5": "22,95",  //  21,50 / 119 * 127

    "categoryPage_6": "/dekoschal/dekoschal-transparent",
    "productname_6": "Linna Vorhang",
    "catPrice_old_6": "59,76",  // 56,00 / 119 * 127
    "catPrice_special_6": "29,88",  // 28,00 * 119 * 127

    "categoryPage_7": "/gardinenstangen",
    "productname_7": "Gardinenstange Belamy",
    "catPrice_old_7": "34,15",  // 32 / 119 * 127
    "catPrice_special_7": "29,93",  // 28,04 * 119 * 127


    //product pages

    "productPage_1": "/doppelrollo/modessa-5101",
    "price_old_1": "64,03", // 60 / 119 * 127
    "price_special_1": "25,61", // 24 / 119 * 127

    "productPage_2": "/rollo/blackout-unicolor-3096",
    "price_old_2": "49,09", // 46 / 119 * 127
    "price_special_2": "22,09", // 20,70 / 119 * 1018

    "productPage_3": "/raffrollo/cocco-9009",
    "price_old_3": "332,97", // 312 / 119 * 127
    "price_special_3": "149,84", // 140,40 / 119 * 127

    "productPage_4": "/plissee/darken-1571",
    "price_old_4": "93,92", // c
    "price_special_4": "51,65", // 48,40 / 119 * 127

    "productPage_5": "/schiebegardinen/aris-7353",
    "price_old_5": "45,89",     //  43 / 119 * 127
    "price_special_5": "22,95", // 21,50 / 119 * 127

    //jalousie pages

    "product_jal": "/jalousien",
    "price_jal_old1": "52,29", // 49 / 119 * 127
    "price_jal_special1": "20,92", // 19,60 / 119 * 127
    "price_jal_old2": "41,62", // 39 / 119 * 127
    "price_jal_special2": "16,65", // 15,60 / 119 * 127
    "price_jal_old3": "108,86", // 102 / 119 * 127
    "price_jal_special3": "43,54", // 40,80 / 119 * 127

    "product_holzjal": "/holzjalousien",
    "price_hjal_old1": "93,92", // 88 / 119 * 127
    "price_hjal_special1": "46,96", // 44 / 119 * 127
    "price_hjal_old2": "138,74", // 130 / 119 * 127
    "price_hjal_special2": "62,43", // 58,50 / 119 * 127
    "price_hjal_old3": "235,86", // 221 / 119 * 127
    "price_hjal_special3": "117,93", // 110,50 / 119 * 127

    //zubehör categories  

    "zubehoerPage_1": "/plissee/zubehoer",
    "zubehoer1": "Wandwinkel",
    "price_zub1": "5,34", // 5,00 / 119 * 127

    "zubehoerPage_2": "/schiebegardinen/zubehoer",
    "zubehoer2": "Magnetclip aus Kunststoff für Schiebegardinen",
    "price_zub2": "4,26", // 3,99 / 119 * 127

    "zubehoerPage_3": "/rollo/zubehoer",
    "zubehoer3": "Pendelsicherung für kleine Rollos aus Metall (Modell RM18 & Doppelrollo Mini) ",
    "price_zub3": "4,27", // 4,00 / 119 * 127

    //div

    "divPage1": "/reparaturauftrag-schnur-ersetzen",
    "price_div1": "32,02", // 30 / 119 * 127

    "divPage2": "/stickfix-klebestreifen-einzeln",
    "price_div2": "8,54", // 8,00 / 119 * 127

    "divPage3": "/seitenfuehrung-b-rm18",
    "price_div3": "4,27", // 4,00 / 119 * 127

    // configurator

    "conf_1": "/insektenschutz/insektenschutz-rollo",
    "confPrice_old1": "146,21",  // 137 / 119 * 127
    "confPrice_special1": "73,11", // 68,50 / 119 * 127

    "conf_2": "/schiebegardinen/schiebegardinen-konfigurator", // Lika 7174 28,00 / 14,00
    "confPrice_old2": "29,88",  //  28 / 119 * 127
    "confPrice_special2": "14,94", //   14 / 119 * 127
}

describe('Test: login of HU customer with pricecheck of different products', () => {

    it('check testaccount testkonto_HU@delphinus-test.de', function () {
        //check/create testaccount --- testkonto_HU@delphinus-test.de ---
        cy.visit('/scripts/customers/testaccounts.php?email=testkonto_HU@delphinus-test.de&prefix=Frau&firstname=Testkonto&lastname=Ungarn&password=Abcde_12345&billing_street=Teststra%C3%9Fe%202&billing_postcode=1110&billing_city=Teststadt&billing_country=HU&shipping_street=Teststraße%203&shipping_postcode=1234&shipping_city=Budapest&shipping_country=HU')
    })

    it(test.name, function () {

        //******************* LOGIN  *******************/

        cy.visit('/customer/account/login')

        cy.get('#email').should('be.visible').type(test.email)
        cy.get('#pass').should('be.visible').type(test.password)
        cy.get('#send2').click()


        //******************* check category pages  *******************/

        cy.visit(test.categoryPage_1)
        checkPricesCategory(test.productname_1, test.catPrice_old_1, test.catPrice_special_1)

        cy.visit(test.categoryPage_2)
        checkPricesCategory(test.productname_2, test.catPrice_old_2, test.catPrice_special_2)

        cy.visit(test.categoryPage_3)
        checkPricesCategory(test.productname_3, test.catPrice_old_3, test.catPrice_special_3)

        cy.visit(test.categoryPage_4)
        checkPricesCategory(test.productname_4, test.catPrice_old_4, test.catPrice_special_4)

        cy.visit(test.categoryPage_5)
        checkPricesCategory(test.productname_5, test.catPrice_old_5, test.catPrice_special_5)

        cy.visit(test.categoryPage_6)
        checkPricesCategory(test.productname_6, test.catPrice_old_6, test.catPrice_special_6)

        /*cy.visit(test.categoryPage_7)
        checkPricesCategory(test.productname_7, test.catPrice_old_7, test.catPrice_special_7)*/



        //******************* check product pages  *******************/

        cy.visit(test.productPage_1)
        checkPricesPDP(test.price_old_1, test.price_special_1)

        cy.visit(test.productPage_2)
        checkPricesPDP(test.price_old_2, test.price_special_2)

        cy.visit(test.productPage_3)
        checkPricesPDP(test.price_old_3, test.price_special_3)

        cy.visit(test.productPage_4)
        checkPricesPDP(test.price_old_4, test.price_special_4)

        cy.visit(test.productPage_5)
        checkPricesPDP(test.price_old_5, test.price_special_5)



        //******************* check jalousie and holzjalousie pages  *******************/

        //cy.visit(test.product_jal)
        //checkFromPrices(test.price_jal_old1, test.price_jal_special1, test.price_jal_old2, test.price_jal_special2, test.price_jal_old3, test.price_jal_special3)

        //cy.visit(test.product_holzjal)
        //checkFromPrices(test.price_hjal_old1, test.price_hjal_special1, test.price_hjal_old2, test.price_hjal_special2, test.price_hjal_old3, test.price_hjal_special3)



        //******************* check zubehoer category pages  *******************/

        cy.visit(test.zubehoerPage_1)
        checkZubehoerCategory(test.zubehoer1, test.price_zub1)

        cy.visit(test.zubehoerPage_2)
        checkZubehoerCategory(test.zubehoer2, test.price_zub2)

        cy.visit(test.zubehoerPage_3)
        checkZubehoerCategory(test.zubehoer3, test.price_zub3)



        //******************* check div pages  *******************/

        cy.visit(test.divPage1)
        checkDivPage(test.price_div1)

        cy.visit(test.divPage2)
        checkDivPage(test.price_div2)

        cy.visit(test.divPage3)
        checkDivPage(test.price_div3)



        //******************* check configurator  *******************/

        cy.visit(test.conf_1)
        checkConfPrices(test.confPrice_old1, test.confPrice_special1)

        cy.visit(test.conf_2)
        checkConfPrices(test.confPrice_old2, test.confPrice_special2)



        //******************* LOGOUT  *******************/

        cy.contains('Abmelden').click()
    })
})



function checkPricesCategory(productname, oldPrice, specialPrice) {
    cy.get('.category-products > ul').children('li').contains(productname)
        .then($product => {
            cy.wrap($product).parents('p').siblings('.price-box').children('.old-price').children('.price').should("contain", oldPrice)
            cy.wrap($product).parents('p').siblings('.price-box').children('.special-price').children('.price').should("contain", specialPrice)
        })
}

function checkPricesPDP(oldPrice, specialPrice) {
    cy.get(' .old-price').should("contain", oldPrice)
    cy.get(' .special-price').should("contain", specialPrice)
}

function checkFromPrices(oldPrice1, specialPrice1, oldPrice2, specialPrice2, oldPrice3, specialPrice3) {
    cy.get('.testmenu > :nth-child(1)').should('contain', oldPrice1).and('contain', specialPrice1)
    cy.get('.testmenu > :nth-child(2)').should('contain', oldPrice2).and('contain', specialPrice2)
    cy.get('.testmenu > :nth-child(3)').should('contain', oldPrice3).and('contain', specialPrice3)
}

function checkZubehoerCategory(productname, price) {
    cy.contains(productname).parents('p').siblings('.price-box').should("contain", price)
}

function checkDivPage(price) {
   cy.get('.price.our-price').should("contain", price)
}

function checkConfPrices(oldPrice, specialPrice) {
    cy.get('.old-price').should('contain', oldPrice)
    cy.get('.special-price').should('contain', specialPrice)
}

