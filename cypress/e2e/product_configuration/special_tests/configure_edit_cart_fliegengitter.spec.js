describe('Configuration of fliegengitter with edit in cart', () => {

    it('edit product in cart - fliegengitter', function () {


        cy.visit('/insektenschutz/fliegengitter')

        // Fliegengitter SB is preselected

        // Typ Rechteck is preselected

        // set Höhe
        cy.get('#options_height').type('1200')

        // set Breite
        cy.get('#options_width').type('1000') // 1200x1000 --> 94,00

        // set Farbe
        cy.contains('Goldeiche').wait(3000).click()  //+40% --> +37,60

        // preis 94 + 37,60 = 131,60
        // red. Preis -25% = 98,70

        // add to cart
        cy.get('.quantity-container > input').clear().type('2')
        cy.get('.cart-container > button').click({ force: true })

        // check prices in cart
        // Streichpreis einzel 
        cy.get('span[class="cart-price"] > div > span[style="text-decoration: line-through;"]').should("contain", "131,60")
        // red. Einzelpreis
        cy.get('span[class="cart-price"] > div > .price').should("contain", "98,70")
        // Streichpreis gesamt
        cy.get('span[class="cart-price cart-zwischensumme"] > div > span[style="text-decoration: line-through;"]').should("contain", "263,20")
        // red. Gesamtpreis
        cy.get('span[class="cart-price cart-zwischensumme"] > div > .price').should("contain", "197,40")


        //************************************************************************************************************** */
        //************************************************* ARTIKEL BEARBEITEN NICHT MÖGLICH ************************** */
        //************************************************* LIV-5535 ************************************************* */

        // // click 'Artikel bearbeiten'
        // cy.contains('Artikel bearbeiten').click()  // edit cart fehlend --> LIV-5535 erstellt

        // // back to configurator

        // // set FG einbaufertig
        // cy.contains('Fliegengitter einbaufertig').should('be.visible').click()

        // // set Sonderform
        // cy.contains('Sonderform').click()

        // // set Typ 2
        // cy.contains('Typ 2').click()  // --> 1200x1000 --> 493,00

        // // set Farbe Silber
        // cy.contains('Silber').wait(3000).click()  // kein Aufpreis

        // // preis = 493
        // // red. Preis -25% = 369,75

        // // add to cart
        // // quantity: should be the same as before
        // cy.get('.cart-container > button').click({ force: true })

        // // check prices in cart
        // // Streichpreis einzel 
        // cy.get('span[class="cart-price"] > div > span[style="text-decoration: line-through;"]').should("contain", "493,00")
        // // red. Einzelpreis
        // cy.get('span[class="cart-price"] > div > .price').should("contain", "369,75")
        // // Streichpreis gesamt
        // cy.get('span[class="cart-price cart-zwischensumme"] > div > span[style="text-decoration: line-through;"]').should("contain", "986,00")
        // // red. Gesamtpreis
        // cy.get('span[class="cart-price cart-zwischensumme"] > div > .price').should("contain", "739,50")

        // // proceed to checkout
        // cy.get('.cart-collaterals > .page-title.title-buttons > .checkout-types > li button').click({ force: true })

        // // check checkout page
        // cy.url().should('include', '/checkout/onepage')
        // // end test here without checkout test
    })
})