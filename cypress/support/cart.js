var specialProducts = ["Zubehör", "Muster", "Muster_V", "Serviceprodukt", "Gutschein"]; //alle Produkte, wo kein Streichpreis angezeigt wird

module.exports = {

    checkPricePerLine: function checkPricePerLine(original_unit, lineUnit, original_total, lineTotal, system) {
        //check Preise: Hauptprodukte und Vorhänge_Zubehör
        if (!specialProducts.includes(system) && typeof original_unit !== "undefined" && original_unit != "0,00") {

            cy.log(system)

            // Streichpreis einzel 
            cy.get('span[class="cart-price"] > div > span[style="text-decoration: line-through;"]').should("contain", original_unit)
            // red. Einzelpreis
            cy.get('span[class="cart-price"] > div > .price').should("contain", lineUnit)
            //Streichpreis gesamt
            cy.get('span[class="cart-price cart-zwischensumme"] > div > span[style="text-decoration: line-through;"]').should("contain", original_total)
            //red. Gesamtpreis
            cy.get('span[class="cart-price cart-zwischensumme"] > div > .price').should("contain", lineTotal)

        }
    },

    checkPriceSpecialProducts: function checkPriceSpecialProducts(system, unit, total) {

        cy.log(system)

        //check Preise: Serviceprodukte, Zubehör, Muster, Gutscheine
        if (specialProducts.includes(system)) {
            //Einzelpreis
            cy.get('span[class="cart-price"] > div').should("contain", unit)
            //Gesamtpreis
            cy.get('span[class="cart-price cart-zwischensumme"] > div').should("contain", total)
        }
    },

    checkTotals: function checkTotals(system, total_cart, sieSparen, rabattcode, rabattbetrag, sieSparen_new, total_cart_new) {

        //check Preise: Hauptprodukte und Vorhänge_Zubehör
        if (!specialProducts.includes(system)) { // Produkte MIT Streichpreis

            cy.contains('Sie sparen').next().should("contain", sieSparen)

        }

        // CHECK TOTAL IN CART
        cy.contains('Gesamtsumme').parent().next().should("contain", total_cart)

        // ***************************** IN CASE OF A RABATTCODE *****************************

        if (typeof rabattcode !== "undefined") { //if Code exists
            cy.wait(2000)

            cy.get('.discount_hint').click({ force: true })
            cy.get('#coupon_code').type(rabattcode)
            cy.contains('Rabattcode einlösen').click()
            cy.contains('Rabatt (' + rabattcode + ')').children().eq(0).should("contain", rabattbetrag)
            cy.contains('Gesamtsumme').parent().next().should("contain", total_cart_new)

            /*if (!specialProducts.includes(system)) { // Produkte MIT Streichpreis
                cy.contains('Sie sparen').next().should("contain", sieSparen_new)
            }*/
            cy.contains('Sie sparen').next().should("contain", sieSparen_new)
        }


    },

    proceedToCheckout: function proceedToCheckout(paypalExpress) {
        if (typeof paypalExpress == "undefined") { //-> kein Paypalexpress
            cy.get('.cart-collaterals > .page-title.title-buttons > .checkout-types > li button').click({ force: true })
            cy.url().should('contain', '/checkout/onepage')
        }
    }
}

