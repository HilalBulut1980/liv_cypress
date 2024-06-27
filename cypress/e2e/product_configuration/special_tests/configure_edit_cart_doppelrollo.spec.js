describe('Configuration of doppelrollo with edit in cart', () => {

    it('edit product in cart - doppelrollo', function () {

        // load product
        cy.visit('/doppelrollo/doppelrollo-konfigurator') // Rayure 5000 is preselected --> PG 1
        // select tab
        cy.get('#type-selector-top > ul').children().contains('Doppelrollo ohne Kassette').click({ force: true })
        // type height
        cy.get('#hoehe input').type('1800').blur()
        // type width
        cy.get('#breite input').type('1400') // --> 1800 x 1400 = 586,00
        // select metallkette
        cy.get('#montageoptionen > div > :nth-child(1) > div > ul').children().contains('Metall').click() //+21,00


        // check prices
        cy.get('.old-price').should("contain", "607,00") // 586 + 21 = 607 Regel 18 --> -60% 
        cy.get('.special-price').should("contain", "255,40") //586-60%+21,00=255,40

        // add to cart
        cy.get('#configurator-price-cart > .add-to-cart > #qty').clear().type('2')
        cy.get('#configurator-price-cart > .add-to-cart > button').click({ force: true })

        // check prices in cart
        // Streichpreis einzel 
        cy.get('span[class="cart-price"] > div > span[style="text-decoration: line-through;"]').should("contain", "607,00")
        // red. Einzelpreis
        cy.get('span[class="cart-price"] > div > .price').should("contain", "255,40")
        // Streichpreis gesamt
        cy.get('span[class="cart-price cart-zwischensumme"] > div > span[style="text-decoration: line-through;"]').should("contain", "1.214,00")
        // red. Gesamtpreis
        cy.get('span[class="cart-price cart-zwischensumme"] > div > .price').should("contain", "510,80")

        // click 'Artikel bearbeiten'
        cy.contains('Artikel bearbeiten').click()

        // Stoff ändern
        cy.contains('Farbe & Eigenschaften ändern').should('be.visible').click()
        cy.contains('Remsa 5063').click() // --> PG 2
        cy.contains('Auswahl übernehmen').click({ force: true })

        // Maße ändern
        // type height
        cy.get('#hoehe input').clear().type('2000').blur()
        // type width
        cy.get('#breite input').clear().type('1500') // --> 2000 x 1500 = 836,00 Regel 18 --> -60% 
        // select metallkette
        cy.get('#montageoptionen > div > :nth-child(1) > div > ul').children().contains('Kunststoff').click() //+0,00

        // check prices
        cy.get('.old-price').should("contain", "836,00") // 836,00  -60%
        cy.get('.special-price').should("contain", "334,40")

        // add to cart
        // quantity: should be the same as before
        cy.get('#configurator-price-cart > .add-to-cart > button').click({ force: true })

        // check prices in cart
        // Streichpreis einzel 
        cy.get('span[class="cart-price"] > div > span[style="text-decoration: line-through;"]').should("contain", "836,00")
        // red. Einzelpreis
        cy.get('span[class="cart-price"] > div > .price').should("contain", "334,40")
        // Streichpreis gesamt
        cy.get('span[class="cart-price cart-zwischensumme"] > div > span[style="text-decoration: line-through;"]').should("contain", "1.672,00")
        // red. Gesamtpreis
        cy.get('span[class="cart-price cart-zwischensumme"] > div > .price').should("contain", "668,80")

        // proceed to checkout
        cy.get('.cart-collaterals > .page-title.title-buttons > .checkout-types > li button').click({ force: true })

        // check checkout page
        cy.url().should('include', '/checkout/onepage')
        // end test here without checkout test
    })
})