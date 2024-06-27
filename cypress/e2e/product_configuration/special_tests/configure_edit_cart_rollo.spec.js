describe('Configuration of rollo with edit in cart', () => {

    it('edit product in cart - rollo', function () {

        // load product
        cy.visit('/rollo/rollo-konfigurator') // Basic 3011 is preselected --> PG A
        // select tab
        // tab Rollo is preselected
        // select kassette
        cy.get('div[options-property="kassette"] > ul').children().contains('mit Kassette').click({ force: true }) // --> RM32, da Kassette +122,00
        // type height
        cy.get('#hoehe_in_mm input').type('1200')
        // type width
        cy.get('#breite_in_mm input').type('1200') // --> 1200 x 1200 = 146,00
        // select befestigung
        cy.contains(new RegExp("^" + 'Montage an der Wand' + "\\s*$")).click() // +0,00
        // select metallkette
        cy.get('#art-der-kugelkette > div > ul').children().contains('Metall').click() //+21,00

        // check prices
        cy.get('.old-price').should("contain", "289,00") // 146 + 122 + 21 = 289 Regel 19 --> -55% 
        cy.get('.special-price').should("contain", "141,60") // 268-55%=120,60 + 21 = 141,60

        // add to cart
        cy.get('#configurator-price-cart > .add-to-cart > #qty').clear().type('2')
        cy.get('#configurator-price-cart > .add-to-cart > button').click({ force: true })

        // check prices in cart
        // Streichpreis einzel 
        cy.get('span[class="cart-price"] > div > span[style="text-decoration: line-through;"]').should("contain", "289,00")
        // red. Einzelpreis
        cy.get('span[class="cart-price"] > div > .price').should("contain", "141,60")
        // Streichpreis gesamt
        cy.get('span[class="cart-price cart-zwischensumme"] > div > span[style="text-decoration: line-through;"]').should("contain", "578,00")
        // red. Gesamtpreis
        cy.get('span[class="cart-price cart-zwischensumme"] > div > .price').should("contain", "283,20")

        // click 'Artikel bearbeiten'
        cy.contains('Artikel bearbeiten').click()

        // back to configurator
        // Maße ändern
        // type height
        cy.get('#hoehe_in_mm input').clear().type('1500')
        // type width
        cy.get('#breite_in_mm input').clear().type('1200') // --> 1500 x 1200 = 166,00
        // select kunststoffkette
        cy.get('#art-der-kugelkette > div > ul').children().contains('Kunststoff').click() //+0,00

        // check prices
        cy.get('.old-price').should("contain", "288,00") // 166,00 + 122=288 --> Regel 6 --> -55% = 129,60 
        cy.get('.special-price').should("contain", "129,60")

        // add to cart
        // quantity: should be the same as before
        cy.get('#configurator-price-cart > .add-to-cart > button').click({ force: true })

        // check prices in cart
        // Streichpreis einzel 
        cy.get('span[class="cart-price"] > div > span[style="text-decoration: line-through;"]').should("contain", "288,00")
        // red. Einzelpreis
        cy.get('span[class="cart-price"] > div > .price').should("contain", "129,60")
        // Streichpreis gesamt
        cy.get('span[class="cart-price cart-zwischensumme"] > div > span[style="text-decoration: line-through;"]').should("contain", "576,00")
        // red. Gesamtpreis
        cy.get('span[class="cart-price cart-zwischensumme"] > div > .price').should("contain", "259,20")

        // proceed to checkout
        cy.get('.cart-collaterals > .page-title.title-buttons > .checkout-types > li button').click({ force: true })

        // check checkout page
        cy.url().should('include', '/checkout/onepage')
        // end test here without checkout test
    })
})