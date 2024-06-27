var test =
{
    "name": "Preis-Check mit Testkonto MT",
    "email": "testkonto_MT@delphinus-test.de",
    "password": "Abcde_12345",

    //category pages

    "categoryPage_1": "/doppelrollo/doppelrollo-schwarz",
    "productname_1": "Rayure 5014",  //46,00 / 18,40
    "catPrice_old_1": "45,61",  // 46 /119*118
    "catPrice_special_1": "18,25", // 18,40 /119*118

    "categoryPage_2": "/rollo/kueche-rollo",
    "productname_2": "Basic 3017", //39,00 / 17,55
    "catPrice_old_2": "38,67", // 39 * 119 / 118
    "catPrice_special_2": "17,40", // 17,55 / 119 * 118

    "categoryPage_3": "/raffrollo/raffrollo-wohnzimmer",
    "productname_3": "Parole 9000", //312,00 / 140,40
    "catPrice_old_3": "309,38", // 312 /119*118
    "catPrice_special_3": "139,22", // 140,40 /119*118

    "categoryPage_4": "/plissee/plissee-gelb",
    "productname_4": "Lindura 1584",
    "catPrice_old_4": "54,54",  // 55 / 119 * 118
    "catPrice_special_4": "20,08",  // 20,25 * 119 * 118

    "categoryPage_5": "/schiebegardinen/schiebegardinen-blickdicht",
    "productname_5": "Bambou 7345",
    "catPrice_old_5": "42,64",    // 43 / 119 * 118
    "catPrice_special_5": "21,32",  //  21,50 / 119 * 118

    "categoryPage_6": "/gardinenstangen",
    "productname_6": "Gardinenstange Bifo",
    "catPrice_old_6": "10,91",  // 11,00 / 119 * 118
    "catPrice_special_6": "10,10",  // 10,19 * 119 * 118

    "categoryPage_7": "/gardinen",
    "productname_7": "Golfo Gardine",
    "catPrice_old_7": "29,25",  // 29,50 / 119 * 118
    "catPrice_special_7": "16,09",  // 16,23 * 119 * 118


    //product pages

    "productPage_1": "/doppelrollo/lacinia-5052",
    "price_old_1": "90,24", // 91 / 119 * 118
    "price_special_1": "36,09", // 36,40 / 119 * 118

    "productPage_2": "/rollo/clarissa-3625",
    "price_old_2": "52,55", // 53 / 119 * 118
    "price_special_2": "23,65", // 23,85 / 119 * 1018

    "productPage_3": "/raffrollo/dillio-9069",
    "price_old_3": "337,14", // 340 / 119 * 118
    "price_special_3": "151,71", // 153 / 119 * 118

    "productPage_4": "/plissee/elegant-1209",
    "price_old_4": "87,26", // 88 / 119 * 118
    "price_special_4": "47,99", // 48,40 / 119 * 118

    "productPage_5": "/schiebegardinen/siva-7313",
    "price_old_5": "35,70", // 36 / 119 * 118
    "price_special_5": "17,85", //  18 / 119 * 118

    //jalousie pages

    "product_jal": "/jalousie",
    "price_jal_old1": "48,59", // 49 / 119 * 118
    "price_jal_special1": "19,44", // 19,60 / 119 * 118
    "price_jal_old2": "38,67", // 39 / 119 * 118
    "price_jal_special2": "15,47", // 15,60 / 119 * 118
    "price_jal_old3": "101,14", // 102 / 119 * 118
    "price_jal_special3": "40,46", // 40,80 / 119 * 118

    "product_holzjal": "/holzjalousie",
    "price_hjal_old1": "87,26", // 88 / 119 * 118
    "price_hjal_special1": "43,63", // 44 / 119 * 118
    "price_hjal_old2": "128,91", // 130 / 119 * 118
    "price_hjal_special2": "58,01", // 58,50 / 119 * 118
    "price_hjal_old3": "219,14", // 221 / 119 * 118
    "price_hjal_special3": "109,57", // 110,50 / 119 * 118

    //zubehör categories  

    "zubehoerPage_1": "/plissee/zubehoer",
    "zubehoer1": "Halteclip (klein)",
    "price_zub1": "3,97", // 4,00 / 119 * 118

    "zubehoerPage_2": "/schiebegardinen/zubehoer",
    "zubehoer2": "Magnetclip aus Kunststoff für Schiebegardinen",
    "price_zub2": "3,96", // 3,99 / 119 * 118

    "zubehoerPage_3": "/rollo/zubehoer",
    "zubehoer3": "Klemmträger für kleine Rollos (Modell RM18)",
    "price_zub3": "3,97", // 4,00 / 119 * 118

    //div

    "divPage1": "/aenderungsauftrag-breite",
    "price_div1": "49,58", // 50 / 119 * 118

    "divPage2": "/sockelplatten",
    "price_div2": "7,64", // 7,70 / 119 * 118

    "divPage3": "/seitenfuehrung-b-rm18",
    "price_div3": "3,97", // 4,00 / 119 * 118

    // configurator

    "conf_1": "/jalousie/holz-jalousie-konfigurator",
    "confPrice_old1": "87,26",  // 88 / 119 * 118
    "confPrice_special1": "43,63", // 44 / 119 * 118

    "conf_2": "/insektenschutz/fliegengitter",
    "confPrice_old2": "34,71",  // 35 / 119 * 118
    "confPrice_special2": "26,03", // 26,25 / 119 * 118
}

describe('Test: login of MLT customer with pricecheck of different products', () => {

    it('check testaccount testkonto_MT@delphinus-test.de', function () {
        //check/create testaccount --- testkonto_MT@delphinus-test.de ---
        cy.visit('/scripts/customers/testaccounts.php?email=testkonto_MT@delphinus-test.de&prefix=Frau&firstname=Testkonto&lastname=Malta&password=Abcde_12345&billing_street=Teststra%C3%9Fe%202&billing_postcode=1110&billing_city=Teststadt&billing_country=MT&shipping_street=Teststraße%203&shipping_postcode=1234&shipping_city=Valletta&shipping_country=MT')
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

        /*cy.visit(test.categoryPage_6)
        checkPricesCategory(test.productname_6, test.catPrice_old_6, test.catPrice_special_6)*/

        cy.visit(test.categoryPage_7)
        checkPricesCategory(test.productname_7, test.catPrice_old_7, test.catPrice_special_7)



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

