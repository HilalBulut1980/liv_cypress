var test =
{
    "name": "Preis-Check mit Testkonto CH",
    "email": "testkonto_CH@delphinus-test.de",
    "password": "Abcde_12345",

    //category pages

    "categoryPage_1": "/doppelrollo/doppelrollo-weiss",
    "productname_1": "Rayure 5000",  //46,00 / 18,40
    "catPrice_old_1": "38,66",  // 46 /119*100
    "catPrice_special_1": "15,46", // 18,40 /119 * 100

    "categoryPage_2": "/rollo/buero-rollo",
    "productname_2": "Greve 3711", //39,00 / 17,55
    "catPrice_old_2": "32,77", // 39 * 119 / 100
    "catPrice_special_2": "14,75", // 17,55 / 119 * 100

    "categoryPage_3": "/raffrollo/raffrollo-weiss",
    "productname_3": "Zadar 9019", //312,00 / 140,40
    "catPrice_old_3": "262,18", // 312 /119*100
    "catPrice_special_3": "117,98", // 140,40 /119*100

    "categoryPage_4": "/plissee/kueche-plissee",
    "productname_4": "Ambience 1357",
    "catPrice_old_4": "46,22",  // 55 / 119 * 100
    "catPrice_special_4": "14,71",  // 17,50 * 119 * 100

    "categoryPage_5": "/schiebegardinen/schiebegardinen-grau",
    "productname_5": "Philo 7324",
    "catPrice_old_5": "27,73",   // 33 / 119 * 100
    "catPrice_special_5": "13,87",  //  16,50 / 119 * 100

    "categoryPage_6": "/gardinenstangen",
    "productname_6": "Gardinenstange Line",
    "catPrice_old_6": "16,80",  // 19,99 / 119 * 100
    "catPrice_special_6": "14,28",  // 16,99 * 119 * 100

    "categoryPage_7": "/dekoschal",
    "productname_7": "Linna Vorhang",
    "catPrice_old_7": "47,06",  // 56 / 119 * 100
    "catPrice_special_7": "23,53",  // 28 * 119 * 100


    //product pages

    "productPage_1": "/doppelrollo/amelio-5105",
    "price_old_1": "50,42", // 60 / 119 * 100
    "price_special_1": "20,17", // 24 / 119 * 100

    "productPage_2": "/rollo/silves-3692",
    "price_old_2": "32,77", // 39 / 119 * 100
    "price_special_2": "14,75", // 17,55 / 119 * 100

    "productPage_3": "/raffrollo/gola-9013",
    "price_old_3": "262,18", // 312 / 119 * 100
    "price_special_3": "117,98", // 140,40 / 119 * 100

    "productPage_4": "/plissee/juvel-1958",
    "price_old_4": "63,03", // 75 / 119 * 100
    "price_special_4": "34,66", // 41,25 / 119 * 100

    "productPage_5": "/schiebegardinen/hilko-7315",
    "price_old_5": "36,13", // 43 / 119 * 100
    "price_special_5": "18,07",  //  21,50 / 119 * 100

    //jalousie pages
    "product_jal": "/jalousie",
    "price_jal_old1": "41,18", // 49 / 119 * 100
    "price_jal_special1": "16,47", // 19,60 / 119 * 100
    "price_jal_old2": "32,77", // 39 / 119 * 100
    "price_jal_special2": "13,11", // 15,60 / 119 * 100
    "price_jal_old3": "85,71", // 102 / 119 * 100
    "price_jal_special3": "34,29", // 40,80 / 119 * 100

    "product_holzjal": "/holzjalousie",
    "price_hjal_old1": "73,95", // 88 / 119 * 100
    "price_hjal_special1": "36,97", // 44 / 119 * 100
    "price_hjal_old2": "109,24", // 130 / 119 * 100
    "price_hjal_special2": "49,16", // 58,50 / 119 * 100
    "price_hjal_old3": "185,71", // 221 / 119 * 100
    "price_hjal_special3": "92,86", // 110,50 / 119 * 100

    //zubehör categories

    "zubehoerPage_1": "/plissee/zubehoer",
    "zubehoer1": "Abdeckkappe für Spannschuh",
    "price_zub1": "3,36", // 4,00 / 119 * 100

    "zubehoerPage_2": "/schiebegardinen/zubehoer",
    "zubehoer2": "Magnetgriff aus Aluminium für Schiebegardinen",
    "price_zub2": "5,87", // 6,99 / 119 * 100

    "zubehoerPage_3": "/rollo/zubehoer",
    "zubehoer3": "Klemmträger für Doppelrollo Mini",
    "price_zub3": "3,36", // 4,00 / 119 * 100

    //div

    "divPage1": "/aenderungsauftrag-schnurlaenge",
    "price_div1": "25,21", // 30 / 119 * 100

    "divPage2": "/stickfix",
    "price_div2": "16,81", // 20 / 119 * 100

    "divPage3": "/klemmtraeger-b-rm18",
    "price_div3": "3,36", // 4,00 / 119 * 100

    // configurator

    "conf_1": "/doppelrollo/doppelrollo-konfigurator",
    "confPrice_old1": "38,66",  // 46 /119*100
    "confPrice_special1": "15,46", // 18,40 /119*100

    "conf_2": "/jalousie/jalousie-konfigurator",
    "confPrice_old2": "41,18",  // 49 /119*100
    "confPrice_special2": "16,47", // 19,60 /119*100
}

describe('Test: login of CH customer with pricecheck of different products', () => {

    it('check testaccount testkonto_CH@delphinus-test.de', function () {
        //check/create testaccount --- testkonto_CH@delphinus-test.de ---
        cy.visit('/scripts/customers/testaccounts.php?email=testkonto_CH@delphinus-test.de&prefix=Herr&firstname=Testkonto&lastname=Schweiz&password=Abcde_12345&billing_street=Teststra%C3%9Fe%202&billing_postcode=1110&billing_city=Teststadt&billing_country=CH&shipping_street=Teststraße%203&shipping_postcode=1234&shipping_city=Basel&shipping_country=CH')
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

