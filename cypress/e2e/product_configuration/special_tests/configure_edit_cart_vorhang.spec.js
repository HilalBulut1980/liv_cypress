describe('Configuration of vorhang with edit in cart', () => {

    it('edit product in cart - vorhang', function () {


        cy.visit('/vorhaenge/gardine/lorcan')

        // set Farbe
        // cy.wait(3000) //wait till colors are loaded on page otherwise test fails


        cy.get('img[alt="Türkis-Grau"]').click()
            .should('be.visible')
            .click({ force: true })

        // set Breite
        cy.get('#breite').find('input').type('300')

        // set Höhe
        cy.get('#hoehe').find('input').type('250')  // --> 250x300 = 220,50 -fester rabatt ab B 300 cm --> -3,5€ = 217,00

        // Montagevariante Bleistiftband is preselected --> kein Aufpreis

        // preis 217,00
        // red. Preis -45% = 119,35

        // add to cart
        cy.get('#qty').clear().type('2')
        cy.get('.button.btn-cart').click({ force: true })

        // check prices in cart
        // Streichpreis einzel 
        cy.get('span[class="cart-price"] > div > span[style="text-decoration: line-through;"]').should("contain", "217,00")
        // red. Einzelpreis
        cy.get('span[class="cart-price"] > div > .price').should("contain", "119,35")
        // Streichpreis gesamt
        cy.get('span[class="cart-price cart-zwischensumme"] > div > span[style="text-decoration: line-through;"]').should("contain", "434,00")
        // red. Gesamtpreis
        cy.get('span[class="cart-price cart-zwischensumme"] > div > .price').should("contain", "238,70")

        //************************************************************************************************************** */
        //************************************************* ARTIKEL BEARBEITEN NICHT MÖGLICH ************************** */
        //************************************************* LIV-5535 ************************************************* */

        // // click 'Artikel bearbeiten'
        // cy.contains('Artikel bearbeiten').click()

        // // back to configurator

        // // set Montage 'Ösen'
        // cy.get('#montage > div > ul').children().contains('Ösen').should('be.visible').click() //+21,80

        // // preis 220,50 + 21,80 = 242,30
        // // red. Preis -45% = 220,50-45% = 121,78 + 21,80 = 143,08

        // // add to cart
        // // quantity: should be the same as before
        // cy.get('.cart-container > button').click({ force: true })

        // // check prices in cart
        // // Streichpreis einzel 
        // cy.get('span[class="cart-price"] > div > span[style="text-decoration: line-through;"]').should("contain", "242,30")
        // // red. Einzelpreis
        // cy.get('span[class="cart-price"] > div > .price').should("contain", "143,08")
        // // Streichpreis gesamt
        // cy.get('span[class="cart-price cart-zwischensumme"] > div > span[style="text-decoration: line-through;"]').should("contain", "646,40")
        // // red. Gesamtpreis
        // cy.get('span[class="cart-price cart-zwischensumme"] > div > .price').should("contain", "384,96")

        // // proceed to checkout
        // cy.get('.cart-collaterals > .page-title.title-buttons > .checkout-types > li button').click({ force: true })

        // // check checkout page
        // cy.url().should('include', '/checkout/onepage')
        // // end test here without checkout test
    })
})