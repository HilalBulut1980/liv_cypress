describe('Configuration of insektenschutzrollo with edit in cart', () => {

    it('edit product in cart - insektenschutzrollo', function () {


        cy.visit('/insektenschutz/insektenschutz-rollo')

        // set Farbe
        cy.contains('Winchester').wait(3000).click()  //+45% --> +131,40

        // set Höhe
        cy.get('#options_height').type('1200')

        // set Breite
        cy.get('#options_width').type('1000') // 1200x1000 --> 292,00     

        // preis 292 + 131,40 = 423,40
        // red. Preis -50% = 211,70

        // add to cart
        cy.get('.quantity-container > input').clear().type('2')
        cy.get('.cart-container > button').click({ force: true })

        // check prices in cart
        // Streichpreis einzel 
        cy.get('span[class="cart-price"] > div > span[style="text-decoration: line-through;"]').should("contain", "423,40")
        // red. Einzelpreis
        cy.get('span[class="cart-price"] > div > .price').should("contain", "211,70")
        // Streichpreis gesamt
        cy.get('span[class="cart-price cart-zwischensumme"] > div > span[style="text-decoration: line-through;"]').should("contain", "846,80")
        // red. Gesamtpreis
        cy.get('span[class="cart-price cart-zwischensumme"] > div > .price').should("contain", "423,40")

        //************************************************************************************************************** */
        //************************************************* ARTIKEL BEARBEITEN NICHT MÖGLICH ************************** */
        //************************************************* LIV-5535 ************************************************* */

        // // click 'Artikel bearbeiten'
        // cy.contains('Artikel bearbeiten').click()

        // // back to configurator

        // // set Befestigung an der Mauer --> +5% von 292
        // cy.get('span').contains('In der Fensteröffnung an der Mauer').should('be.visible').click() // +14,60

        // // preis 292 + 131,40 + 14,60 = 438,00
        // // red. Preis -50% = 219

        // // add to cart
        // // quantity: should be the same as before
        // cy.get('.cart-container > button').click({ force: true })

        // // check prices in cart
        // // Streichpreis einzel 
        // cy.get('span[class="cart-price"] > div > span[style="text-decoration: line-through;"]').should("contain", "438,00")
        // // red. Einzelpreis
        // cy.get('span[class="cart-price"] > div > .price').should("contain", "219,00")
        // // Streichpreis gesamt
        // cy.get('span[class="cart-price cart-zwischensumme"] > div > span[style="text-decoration: line-through;"]').should("contain", "876,00")
        // // red. Gesamtpreis
        // cy.get('span[class="cart-price cart-zwischensumme"] > div > .price').should("contain", "438,00")

        // // proceed to checkout
        // cy.get('.cart-collaterals > .page-title.title-buttons > .checkout-types > li button').click({ force: true })

        // // check checkout page
        // cy.url().should('include', '/checkout/onepage')
        // // end test here without checkout test
    })
})