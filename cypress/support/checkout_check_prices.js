var helper_prices = require("./checkout_helper_prices.js");

module.exports = {

    //CALCULATION AND CHECKING OF PRICES FOR DIFFERENT COUNTRIES 
    checkPrices: function checkPrices(system, rabattCode, rabattBetrag, sieSparen, shippingCost, strike_checkout, strike_checkout_total, final_checkout, final_checkout_total, total_checkout, k40_original, k40_reduced, k40_original_total, k40_reduced_total, k50_original, k50_reduced, k50_original_total, k50_reduced_total) {

        cy.log('System: ' + system)

        // ****************************** CHECK MUSTER PRICES BESTELLÜBERSICHT ******************************

        if ((system == 'Muster') || (system == 'Muster_V')) {
            final_checkout = "kostenlos";
            final_checkout_total = "kostenlos";
            shippingCost = "0,00";
            total_checkout = "0,00";

            helper_prices.check_unitSpecial(final_checkout)
            helper_prices.check_totalSpecial(final_checkout_total)
            cy.log(system)

        }

        // ****************************** CHECK GUTSCHEIN PRICES BESTELLÜBERSICHT ******************************

        else if (system == "Gutschein") {

            helper_prices.check_unitPrice(final_checkout)
            helper_prices.check_totalPrice(final_checkout_total)
            cy.log(system)

            if (typeof rabattCode !== "undefined") {
                cy.contains('Sie sparen').next().should("contain", sieSparen)
            }

        }

        // ****************************** CHECK SERVIC & ZUBEHÖR PRICES BESTELLÜBERSICHT ******************************

        else if (system == "Serviceprodukt" || system == "Zubehör") {

            helper_prices.check_unitPrice(final_checkout)
            helper_prices.check_totalPrice(final_checkout_total)
            cy.log(system)

            if (typeof rabattCode !== "undefined") {
                cy.contains('Sie sparen').next().should("contain", sieSparen)
            }

        }

        //PRODUCT IS NONE OF THIS: GUTSCHEIN / MUSTER / SERVICEPRODUKT / ZUBEHÖR
        // ****************************** CHECK PRODUCT PRICES BESTELLÜBERSICHT ******************************

        else {

            helper_prices.check_originUnitPrice(strike_checkout)
            helper_prices.check_originTotalPrice(strike_checkout_total)
            helper_prices.check_unitPrice(final_checkout)
            helper_prices.check_totalPrice(final_checkout_total)
            cy.log(system)

            if (system == "Kissenhuelle_set") {

                // ----------------------- KISSEN 40er -----------------------
                if (typeof k40_original !== "undefined" && k40_original != "0,00") {

                    helper_prices.check_originUnitPrice(k40_original)
                    helper_prices.check_originTotalPrice(k40_original_total)
                    helper_prices.check_unitPrice(k40_reduced)
                    helper_prices.check_totalPrice(k40_reduced_total)
                }
                // ----------------------- KISSEN 50er -----------------------
                if (typeof k50_original !== "undefined" && k50_original != "0,00") {

                    helper_prices.check_originUnitPrice(k50_original)
                    helper_prices.check_originTotalPrice(k50_original_total)
                    helper_prices.check_unitPrice(k50_reduced)
                    helper_prices.check_totalPrice(k50_reduced_total)
                }
                cy.log(system)

            }

            cy.contains('Sie sparen').next().should("contain", sieSparen)

        }



        // ****************************** CHECK SHIPPING COST IN BESTELLÜBERSICHT ******************************

        helper_prices.checkVersandkosten(shippingCost)
        cy.log('Versand: ' + shippingCost)



        // ****************************** CHECK FINAL TOTALS IN BESTELLÜBERSICHT ******************************

        if (typeof rabattCode !== "undefined") { //if Code exists

            cy.get('.checkout_totals').should("contain", rabattCode)
            cy.get('.checkout_totals').children().eq(0).should("contain", rabattBetrag)
        }

        helper_prices.checkTotal(total_checkout)
        cy.log('Total: ' + total_checkout)

    }

}