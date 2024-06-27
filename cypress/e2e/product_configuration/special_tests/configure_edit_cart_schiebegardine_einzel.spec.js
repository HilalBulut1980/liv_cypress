describe('Configuration of schiebegardine einzel with edit in cart', () => {

    it('edit product in cart - schiebegardine einzelpaneel', function () {


        cy.visit('/schiebegardinen/schiebegardinen-konfigurator')

        // Lika 7174 is preselected --> PG 0 --> 28,00 / 14,00

        // set Höhe
        cy.get('#hoehe_in_mm input').type('2300')

        // set Breite
        cy.get('#breite_in_mm input').type('1000') // --> 2300x1000


        // 2300x1000  = 80
        // red. Preis -50% = 40

        // add to cart
        cy.get('#qty').clear().type('2')
        cy.get('#configurator-price-cart > .add-to-cart button').click({ force: true })

        // check prices in cart
        // Streichpreis einzel 
        cy.get('span[class="cart-price"] > div > span[style="text-decoration: line-through;"]').should("contain", "80,00")
        // red. Einzelpreis
        cy.get('span[class="cart-price"] > div > .price').should("contain", "40,00")
        // Streichpreis gesamt
        cy.get('span[class="cart-price cart-zwischensumme"] > div > span[style="text-decoration: line-through;"]').should("contain", "160,00")
        // red. Gesamtpreis
        cy.get('span[class="cart-price cart-zwischensumme"] > div > .price').should("contain", "80,00")

        // click 'Artikel bearbeiten'
        cy.contains('Artikel bearbeiten').click()

        // back to configurator

        // select other cloth
        cy.contains('Farbe & Eigenschaften ändern').should('be.visible').click()
        cy.get('#material-collection > ul').children().contains('Ukko 7330').click() // --> PG 3
        cy.contains('Auswahl übernehmen').click({ force: true })

        // set Höhe
        cy.get('#hoehe_in_mm input').clear().type('2500')

        // set Breite
        cy.get('#breite_in_mm input').clear().type('1200') // --> 2500x1200

        // set Paneelwagen
        cy.get('img[alt="mit Paneelwagen"]').click()  // --> 53,00

        // set Beschwerungsstab
        cy.contains(new RegExp("^" + "Beschwerungsstab" + "\\s*$")).click() // --> 8,00

        // 2500x1200  = 202,00
        // +53,00 +8,00 = 263,00
        // red. Preis -50% = 131,50

        // add to cart
        // quantity: should be the same as before
        cy.get('#configurator-price-cart > .add-to-cart button').click({ force: true })

        // check prices in cart
        // Streichpreis einzel 
        cy.get('span[class="cart-price"] > div > span[style="text-decoration: line-through;"]').should("contain", "263,00")
        // red. Einzelpreis
        cy.get('span[class="cart-price"] > div > .price').should("contain", "131,50")
        // Streichpreis gesamt
        cy.get('span[class="cart-price cart-zwischensumme"] > div > span[style="text-decoration: line-through;"]').should("contain", "526,00")
        // red. Gesamtpreis
        cy.get('span[class="cart-price cart-zwischensumme"] > div > .price').should("contain", "263,00")

        // proceed to checkout
        cy.get('.cart-collaterals > .page-title.title-buttons > .checkout-types > li button').click({ force: true })

        // check checkout page
        cy.url().should('include', '/checkout/onepage')
        // end test here without checkout test
    })
})