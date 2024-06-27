describe('Configuration of holzjalousie with edit in cart', () => {

    it('edit product in cart - holzjalousie', function () {

        // load jalousie configurator
        cy.visit('/jalousie/holz-jalousie-konfigurator')

        // 25 mm is preselected
        // Natural Weiß 6500 is preselected --> PG M

        // set Maße
        cy.get('#hoehe_in_mm input').type('1500')
        cy.get('#breite_in_mm input').type('1000')
        // --> 1500 x 1000 bei PG M = 446,00

        // set Kugelkette Kunststoff
        cy.get('div[options-property="bedienung"] > ul').children().contains('Kugelkette aus Kunststoff').click({ force: true })

        // set Pendelsicherung
        cy.get('.seitenfuehrung > div > ul').children().contains('mit Pendelsicherung').click()  //+14,00

        // Preis
        // 446,00 + 14 = 460,00
        // 446-50%  +14 = 223 + 14

        // add to cart
        cy.get('#configurator-price-cart > .add-to-cart input').clear().type('2')
        cy.get('#configurator-price-cart > .add-to-cart button').click({ force: true })

        // check prices in cart
        // Streichpreis einzel 
        cy.get('span[class="cart-price"] > div > span[style="text-decoration: line-through;"]').should("contain", "460,00")
        // red. Einzelpreis
        cy.get('span[class="cart-price"] > div > .price').should("contain", "237,00")
        // Streichpreis gesamt
        cy.get('span[class="cart-price cart-zwischensumme"] > div > span[style="text-decoration: line-through;"]').should("contain", "920,00")
        // red. Gesamtpreis
        cy.get('span[class="cart-price cart-zwischensumme"] > div > .price').should("contain", "474,00")

        // click 'Artikel bearbeiten'
        cy.contains('Artikel bearbeiten').click()

        // Jalousie ändern auf 50mm
        cy.contains('50 mm Höhe ').should('be.visible').wait(1000).click({ force: true }) // type selection not possible without wait
        // cy.contains('50 mm Höhe ').should('be.visible').click({ force: true }) // type selection not possible without wait


        // change preselected color to Natural Milchkaffee 6528 --> PG N
        // cy.intercept('GET', '/config/index/getmaterialdetails/producttype/Jalousie%20Holz/productid/5258').as('6528') // --> product id of Natural Milchkaffee 6528
        
        cy.get('#jalousie-collection > ul').children().contains('Natural Milchkaffee 6528').should('be.visible').click().wait(1000) // colour selection not possible without wait

        // set Kugelkette Metall
        cy.get('div[options-property="bedienung"] > ul').children().contains('Kugelkette aus Metall').click({ force: true })

        // set Leiterband
        cy.get('.lamellenverbindung > div > ul').children().contains('Leiterband').click()


        // Preis 1500 x 1000 bei PG N = 609
        // Metallkette: 21
        // Pendelsicherung: 32,00
        // Leiterband (+5%) = 30,45
        // 609 + 21 + 32 + 30,45 = 692,45
        // 609+30,45-50% +21 +32  = 319,73 + 21+32 = 372,73

        // add to cart
        // quantity: should be the same as before
        cy.get('#configurator-price-cart > .add-to-cart button').click({ force: true })

        // check prices in cart
        // Streichpreis einzel 
        cy.get('span[class="cart-price"] > div > span[style="text-decoration: line-through;"]').should("contain", "692,45")
        // red. Einzelpreis
        cy.get('span[class="cart-price"] > div > .price').should("contain", "372,73")
        // Streichpreis gesamt
        cy.get('span[class="cart-price cart-zwischensumme"] > div > span[style="text-decoration: line-through;"]').should("contain", "1.384,90")
        // red. Gesamtpreis
        cy.get('span[class="cart-price cart-zwischensumme"] > div > .price').should("contain", "745,46")

        // proceed to checkout
        cy.get('.cart-collaterals > .page-title.title-buttons > .checkout-types > li button').click({ force: true })

        // check checkout page
        cy.url().should('include', '/checkout/onepage')
        // end test here without checkout test
    })
})
