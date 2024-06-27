describe('Configuration of jalousie with edit in cart', () => {

    it('edit product in cart - jalousie', function () {

        // load jalousie configurator
        cy.visit('/jalousie/jalousie-konfigurator')

        // 16 mm is preselected
        // Blau 6012 is preselected --> PG 0

        // set Maße
        cy.get('#hoehe_in_mm input').type('1500')
        cy.get('#breite_in_mm input').type('1000')
        // --> 1500 x 1000 bei PG0 = 292,00

        // set Kugelkette Kunststoff
        cy.get('.bedienung > ul').children().contains('Kugelkette aus Kunststoff').click({ force: true })

        // set Pendelsicherung
        cy.get('.seitenfuehrung > div > ul').children().contains('mit Pendelsicherung').click()  //+14,00

        // Preis
        // 292,00 + 14 = 306,00
        // 292-60%  +14 = 130,80

        // add to cart
        cy.get('#configurator-price-cart > .add-to-cart input').clear().type('2')
        cy.get('#configurator-price-cart > .add-to-cart button').click({ force: true })

        // check prices in cart
        // Streichpreis einzel 
        cy.get('span[class="cart-price"] > div > span[style="text-decoration: line-through;"]').should("contain", "306,00")
        // red. Einzelpreis
        cy.get('span[class="cart-price"] > div > .price').should("contain", "130,80")
        // Streichpreis gesamt
        cy.get('span[class="cart-price cart-zwischensumme"] > div > span[style="text-decoration: line-through;"]').should("contain", "612,00")
        // red. Gesamtpreis
        cy.get('span[class="cart-price cart-zwischensumme"] > div > .price').should("contain", "261,60")

        // click 'Artikel bearbeiten'
        cy.contains('Artikel bearbeiten').click()

        // Jalousie ändern auf 50mm
        cy.contains('50 mm Höhe ').should('be.visible').wait(1000).click({ force: true }) // type selection not possible without wait


        // change preselected color to Lachs perforiert 6106 --> PG 1+
        cy.get('#jalousie-collection > ul').children().contains('Lachs perforiert 6106').wait(2000).click() // colour selection not possible without wait

        // set Kugelkette Metall
        cy.get('.bedienung > ul').children().contains('Kugelkette aus Metall').click({ force: true })  // +21,00  

        // Preis 1500 x 1000 bei PG 1+ = 506
        // Metallkette: 21,00
        // Pendelsicherung: 32,00
        // 506 + 21 + 32 = 559,00
        // 506-60% +21 +32 = 202,40 + 21+32 = 255,40

        // add to cart
        // quantity: should be the same as before
        cy.get('#configurator-price-cart > .add-to-cart button').click({ force: true })

        // check prices in cart
        // Streichpreis einzel 
        cy.get('span[class="cart-price"] > div > span[style="text-decoration: line-through;"]').should("contain", "559,00")
        // red. Einzelpreis
        cy.get('span[class="cart-price"] > div > .price').should("contain", "255,40")
        // Streichpreis gesamt
        cy.get('span[class="cart-price cart-zwischensumme"] > div > span[style="text-decoration: line-through;"]').should("contain", "1.118,00")
        // red. Gesamtpreis
        cy.get('span[class="cart-price cart-zwischensumme"] > div > .price').should("contain", "510,80")

        // proceed to checkout
        cy.get('.cart-collaterals > .page-title.title-buttons > .checkout-types > li button').click({ force: true })

        // check checkout page
        cy.url().should('include', '/checkout/onepage')
        // end test here without checkout test
    })
})
