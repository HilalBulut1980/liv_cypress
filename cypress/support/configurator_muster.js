var cartPage = require("./cart.js");
var checkOutPage = require("./checkout.js");


module.exports = {

    configureMuster: function configureMuster(test) {

        it(test.name, function () {

            const emailSuffix = Date.now();
            if (test.login != "customer") {
                test.email = test.email.replace("@", "_" + emailSuffix + "@");
            }

            cy.visit(test.produkt)
            checkFromPrices(test.ab_preis, test.ab_preis_red)
            loadConfigurator(test.system)

            cartPage.checkPriceSpecialProducts(test.system, test.unit, test.total)
            cartPage.proceedToCheckout()

            checkOutPage.checkOut(test.system, test.missing_name, test.login, test.email, test.password, test.prefix, test.company_name, test.vatID, test.prefix_business, test.first_name, test.last_name, test.street, test.postal_code, test.city, test.state, test.phone, test.shipping, test.versandkosten, test.prefix2, test.company_name2, test.vatID_2, test.prefix_business2, test.first_name2, test.last_name2, test.street2, test.postal_code2, test.city2, test.state2, test.phone2, test.payment, test.reduced_unitprice, test.subTotal_cart, test.supplier)
            checkOutPage.checkFinalPrices(test.system, test.shipping, test.versandkosten, test.state, test.state2, test.reduced_unitprice, test.subTotal_cart, test.kissenSet40, test.kissenSet40_original, test.kissenSet40_reduced, test.kissenSet40_original_total, test.kissenSet40_reduced_total, test.kissenSet50, test.kissenSet50_original, test.kissenSet50_reduced, test.kissenSet50_original_total, test.kissenSet50_reduced_total, test.supplier, test.anzahl, test.vatID, test.vatID_2, test.state_code, test.state_code_2)
            // checkOutPage.placeOrder(test.system, test.payment, test.failed_payment, test.canceled_payment, test.versandkosten, test.rabatt_code, test.rabatt_betrag_backend, test.rabatt_betrag_backend2, test.mwst_1, test.mwst_2, test.mwst_3, test.vatRateLine_4, test.vatRateLine_5, test.vatRateLine_6, steuer_betrag, steuer_betrag_2, steuer_betrag_3, test.vatAmountLine_4, test.vatAmountLine_5, test.vatAmountLine_6, steuer_betrag_gesamt, einzel_backend, summe_backend, sideProduct_1, sideProduct_1_total, sideProduct_2, sideProduct_2_total, sideProduct_3, sideProduct_3_total, sideProduct_4, sideProduct_4_total, sideProduct_5, sideProduct_5_total, total_backend)
            checkOutPage.placeOrder(test.system, test.payment, test.failed_payment, test.canceled_payment, test.versandkosten, test.rabatt_code, test.rabatt_betrag_backend, test.rabatt_betrag_backend2, test.vatRateLine_1, test.vatRateLine_2, test.vatRateLine_3, test.vatRateLine_4, test.vatRateLine_5, test.vatRateLine_6, test.vatProduct, test.vatAmountLine_2, test.vatAmountLine_3, test.vatAmountLine_4, test.vatAmountLine_5, test.vatAmountLine_6, test.vatAmountTotal)
        })
    }
}

function checkFromPrices(value1, value2) {
    cy.get('.old-price').should('contain', value1)
    cy.get('.special-price').should('contain', value2)
}

function loadConfigurator(system) {

    if (system == "Muster") {
        cy.get('.buttons > .buttons__samples').click()
    }
    else if (system == "Muster_V") {
        cy.get('#free-samples-addtocart').click()
    }
}