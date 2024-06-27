var test =
{
    "name": "Preis-Check mit Testkonto AT",
    "email": "testkonto_AT@delphinus-test.de",
    "password": "Abcde_12345",

    //category pages

    "categoryPage_1": "/doppelrollo/doppelrollo-beige",
    "productname_1": "Remsa 5058",  //60,00 / 24,00
    "catPrice_old_1": "60,50",  // 60 /119*120
    "catPrice_special_1": "24,20", // 24 /119*120

    "categoryPage_2": "/rollo/kinderzimmer-rollo",
    "productname_2": "BlackOut Reflex 3089", //46,00 / 20,70
    "catPrice_old_2": "46,39", // 46 * 119 / 120
    "catPrice_special_2": "20,87", // 20,70 / 119 * 120

    "categoryPage_3": "/raffrollo/raffrollo-beige",
    "productname_3": "Dillio 9071", //340,00 / 153,00
    "catPrice_old_3": "342,86", // 340 /119*120
    "catPrice_special_3": "154,29", // 153 /119*120

    "categoryPage_4": "/plissee/buero-plissee",
    "productname_4": "Vivid Blackout 1503",
    "catPrice_old_4": "84,71",  // 84 / 119 * 120
    "catPrice_special_4": "42,35",  // 42 * 119 * 120

    "categoryPage_5": "/schiebegardinen/alle-schiebegardinen",
    "productname_5": "Odetta 7219",
    "catPrice_old_5": "36,30",  // 36 / 119 * 120
    "catPrice_special_5": "18,15",  //  18 / 119 * 120

    "categoryPage_6": "/gardinenstangen",
    "productname_6": "Gardinenstange Boccia",
    "catPrice_old_6": "32,27",  // 32 / 119 * 120
    "catPrice_special_6": "28,28",  // 28,04 * 119 * 120

    "categoryPage_7": "/oesenschal/oesenschal-gelb",
    "productname_7": "Cortina Verdunkelungsvorhang",
    "catPrice_old_7": "67,06",  // 66,50 / 119 * 120
    "catPrice_special_7": "33,53",  // 33,25 * 119 * 120


    //product pages

    "productPage_1": "/doppelrollo/rayure-5000",
    "price_old_1": "46,39", // 46 / 119 * 120
    "price_special_1": "18,55", // 18,40 / 119 * 120

    "productPage_2": "/rollo/basic-3011",
    "price_old_2": "39,33", // 39 / 119 * 120
    "price_special_2": "17,70", // 17,55 / 119 * 120

    "productPage_3": "/raffrollo/zadar-9025",
    "price_old_3": "314,62", // 312 / 119 * 120
    "price_special_3": "141,58", // 140,40 / 119 * 120

    "productPage_4": "/plissee/ambience-1355",
    "price_old_4": "55,46", // 55 / 119 * 120
    "price_special_4": "17,65", // 17,50 / 119 * 120

    "productPage_5": "/schiebegardinen/shana-7334",
    "price_old_5": "43,36",    // 43 / 119 * 120
    "price_special_5": "21,68", //  21,50 / 119 * 120

    //jalousie pages

    "product_jal": "/jalousie",
    "price_jal_old1": "49,41", // 49 / 119 * 120
    "price_jal_special1": "19,76", // 19,60 / 119 * 120
    "price_jal_old2": "39,33", // 39 / 119 * 120
    "price_jal_special2": "15,73", // 15,60 / 119 * 120
    "price_jal_old3": "102,86", // 102 / 119 * 120
    "price_jal_special3": "41,14", // 40,80 / 119 * 120

    "product_holzjal": "/holzjalousie",
    "price_hjal_old1": "88,74", // 88 / 119 * 120
    "price_hjal_special1": "44,37", // 44 / 119 * 120
    "price_hjal_old2": "131,09", // 130 / 119 * 120
    "price_hjal_special2": "58,99", // 58,50 / 119 * 120
    "price_hjal_old3": "222,86", // 221 / 119 * 120
    "price_hjal_special3": "111,43", // 110,50 / 119 * 120

    //zubehör categories

    "zubehoerPage_1": "/plissee/zubehoer",
    "zubehoer1": "Bedienstab für Cosiflor-Plissees",
    "price_zub1": "44,37", // 44 / 119 * 120

    "zubehoerPage_2": "/schiebegardinen/zubehoer",
    "zubehoer2": "Magnetclip aus Kunststoff für Schiebegardinen",
    "price_zub2": "4,02", // 3,99 / 119 * 120

    "zubehoerPage_3": "/rollo/zubehoer",
    "zubehoer3": "Bedienstab Rollo Dachfenster",
    "price_zub3": "34,29", // 34 / 119 * 120

    //div

    "divPage1": "/zusatzauftrag-laengere-fuehrungsschnuere",
    "price_div1": "20,17", // 20 / 119 * 120

    "divPage2": "/bediengriff-standard-neu",
    "price_div2": "7,06", // 7,00 / 119 * 120

    "divPage3": "/seitenfuehrung-a-rm18",
    "price_div3": "4,03", // 4,00 / 119 * 120

    // configurator

    "conf_1": "/plissee/plissee-konfigurator",
    "confPrice_old1": "55,46",  // 55 /119*120
    "confPrice_special1": "17,65", // 17,50 /119*120

    "conf_2": "/rollo/rollo-konfigurator",
    "confPrice_old2": "39,33",  // 39 /119*120
    "confPrice_special2": "17,70", // 17,55 /119*120

}

describe('Test: login of AT customer with pricecheck of different products', () => {

    it('check testaccount testkonto_AT@delphinus-test.de', function () {
        //check/create testaccount --- testkonto_AT@delphinus-test.de ---
        cy.visit('/scripts/customers/testaccounts.php?email=testkonto_AT@delphinus-test.de&prefix=Herr&firstname=Testkonto&lastname=%C3%96sterreich&password=Abcde_12345&billing_street=Teststra%C3%9Fe%202&billing_postcode=1110&billing_city=Teststadt&billing_country=AT&shipping_street=Teststraße%203&shipping_postcode=1234&shipping_city=Wien&shipping_country=AT')
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

