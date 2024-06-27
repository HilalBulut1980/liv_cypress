describe('Configuration of plissee vertical with edit in cart', () => {

    it('edit product in cart - plissee vertical', function () {

        // load product
        cy.visit('/plissee/wabe-sincero-2187') // --> PG 3
        // go to configurator
        cy.get('.buttons > .buttons__configuration').click()
        // select tab
        cy.get('.tabs').children().contains('rechteckige Plissees').click({ force: true })
        // select type
        cy.get('.type-selector-left > ul').children().contains('F1').click({ force: true })
        // type height
        cy.get('#hoehe input').type('1500')
        // type width
        cy.get('#breite input').type('1200') // --> 1500 x 1200 = 310,00
        // select befestigung
        cy.contains(new RegExp("^" + 'Montage am Fensterflügel mit Winkeln' + "\\s*$")).click() // +0,00
        // select pendelsicherung
        cy.get('#pendelsicherung-normal > ul > :nth-child(2)').click() // +21,00
        // check prices
        cy.get('.old-price').should("contain", "331,00") // Regel 26 --> -25% 
        cy.get('.special-price').should("contain", "253,50") // 310-25%=232,50 +21,00 = 253,50

        // add to cart
        cy.get('#configurator-price-cart > .add-to-cart > #qty').clear().type('2')
        cy.get('#configurator-price-cart > .add-to-cart > button').click({ force: true })

        // check prices in cart
        // Streichpreis einzel 
        cy.get('span[class="cart-price"] > div > span[style="text-decoration: line-through;"]').should("contain", "331,00")
        // red. Einzelpreis
        cy.get('span[class="cart-price"] > div > .price').should("contain", "253,50")
        // Streichpreis gesamt
        cy.get('span[class="cart-price cart-zwischensumme"] > div > span[style="text-decoration: line-through;"]').should("contain", "662,00")
        // red. Gesamtpreis
        cy.get('span[class="cart-price cart-zwischensumme"] > div > .price').should("contain", "507,00")

        // click 'Artikel bearbeiten'
        cy.contains('Artikel bearbeiten').click()

        // Stoff ändern
        cy.contains('Plissee-Farbe & Eigenschaften ändern').should('be.visible').click()
        // select Stoff Vivid Blackout 1503
        cy.contains('Vivid Blackout 1503').click() // --> PG 2
        cy.contains('Auswahl übernehmen').click({ force: true }) // --> 1500 x 1200 = 282,00
        // select befestigung
        cy.contains(new RegExp("^" + 'Montage am Fensterflügel mit Klemmträgern - ohne Bohren' + "\\s*$")).click() // +16,50
        // de-select pendelsicherung
        cy.get('#pendelsicherung-normal > ul > :nth-child(1)').click() // +0,00
        // check prices
        cy.get('.old-price').should("contain", "298,50") // Regel 6 --> -50% 282+16,50
        cy.get('.special-price').should("contain", "157,50") // 282-50%=141 +16,50 = 157,50

        // add to cart
        // quantity: should be the same as before
        cy.get('#configurator-price-cart > .add-to-cart > button').click({ force: true })

        // check prices in cart
        // Streichpreis einzel 
        cy.get('span[class="cart-price"] > div > span[style="text-decoration: line-through;"]').should("contain", "298,50")
        // red. Einzelpreis
        cy.get('span[class="cart-price"] > div > .price').should("contain", "157,50")
        // Streichpreis gesamt
        cy.get('span[class="cart-price cart-zwischensumme"] > div > span[style="text-decoration: line-through;"]').should("contain", "597,00")
        // red. Gesamtpreis
        cy.get('span[class="cart-price cart-zwischensumme"] > div > .price').should("contain", "315,00")

        // proceed to checkout
        cy.get('.cart-collaterals > .page-title.title-buttons > .checkout-types > li button').click({ force: true })

        // check checkout page
        cy.url().should('include', '/checkout/onepage')
        // end test here without checkout test
    })
})