var set_customer = require("./checkout_set_customer.js");
var check_prices = require("./checkout_check_prices.js");
var backEndPage = require("./backend.js");
var successPage = require("./successpage.js");


module.exports = {

    checkOut: function checkOut(system, missingName, customer, email, password, prefix, company_name, vatID1, prefix_business, first_name, last_name, street, postal_code, city, state, phone, shipping, shippingCost, prefix2, company_name2, vatID2, prefix_business2, first_name2, last_name2, street2, postal_code2, city2, state2, phone2, payment) {

        if (customer == "customer") {
            set_customer.continueAsCustomer(customer, email, password)
        }
        else {
            set_customer.setBillingAddress(system, customer, prefix, company_name, vatID1, prefix_business, first_name, last_name, email, street, postal_code, city, state, phone, password)
        }
        set_customer.setShippingAddress(system, customer, shipping, prefix2, company_name2, vatID2, prefix_business2, first_name2, last_name2, street2, postal_code2, city2, state2, phone2)

        checkShippingCosts(system, shippingCost)

        setPayment(system, payment, missingName, first_name, last_name)
        cy.wait(1000)
        // cy.screenshot()
    },


    checkOut_negVATID: function checkOut_negVATID(system, email, prefix, company_name, vatID1_false, vatID1_correct, prefix_business, first_name, last_name, street, postal_code, city, state, phone, shipping, shippingCost, prefix2, company_name2, vatID2_false, vatID2_correct, prefix_business2, first_name2, last_name2, street2, postal_code2, city2, state2, phone2, payment) {

        cy.get('#input_box_prefix').children().check(prefix)
        cy.get('.field.billing_name-prefix.name-prefix > .input-box').children().check(prefix_business)
        cy.get('[id="billing:company"]').type(company_name)
        cy.get('[id="billing:vat_id"]').type(vatID1_false)
        cy.get('[id="billing:firstname"]').clear().type(first_name)
        cy.get('[id="billing:lastname"]').clear().type(last_name)
        cy.get('[id="billing:email"]').clear().type(email)
        cy.get('[id="billing:street1"]').clear().type(street)
        cy.get('[id="billing:postcode"]').clear().type(postal_code)
        cy.get('[id="billing:city"]').clear().type(city)
        cy.get('[id="billing:telephone"]').clear().type(phone)
        cy.get('[id="billing:country_id"]').select(state)

        //An gleiche Adresse versenden
        if (shipping == "same") {
            cy.log('GLEICHE ADRESSE')

            cy.get('input[title="An diese Adresse verschicken"]').check()
            //click Weiter button
            cy.get('#billing-buttons-container > button[title="Weiter"]').click().wait(2000)

            // check js-alert and set correct vat id
            check_js_alert()
            cy.get('[id="billing:vat_id"]').clear().type(vatID1_correct)

            //click again Weiter button
            cy.get('#billing-buttons-container > button[title="Weiter"]').click().wait(2000)
        }

        //An abw. Anschrift versenden
        else if (shipping == "new") {
            cy.log('NEUE ADRESSE')

            cy.get('input[title="An andere Adresse verschicken"]').check()
            //click Weiter button
            cy.get('#billing-buttons-container > button[title="Weiter"]').click().wait(2000)

            // check js-alert and set correct vat id -->  IN RECHNUNGS-ADRESSE
            check_js_alert()
            cy.get('[id="billing:vat_id"]').clear().type(vatID1_correct)

            //click again Weiter button
            cy.get('#billing-buttons-container > button[title="Weiter"]').click().wait(2000)

            cy.get('label[for="shipping_prefix"] + #input_box_prefix').children().check(prefix2)
            cy.get('.field.shipping_name-prefix.name-prefix > .input-box').children().check(prefix_business2)
            cy.get('[id="shipping:company"]').type(company_name2)
            cy.get('[id="shipping:vat_id"]').type(vatID2_false)
            cy.get('[id="shipping:firstname"]').clear().type(first_name2)
            cy.get('[id="shipping:lastname"]').clear().type(last_name2)
            cy.get('[id="shipping:street1"]').clear().type(street2)
            cy.get('[id="shipping:postcode"]').clear().type(postal_code2)
            cy.get('[id="shipping:city"]').clear().type(city2)
            cy.get('[id="shipping:telephone"]').clear().type(phone2)
            cy.get('[id="shipping:country_id"]').select(state2)

            //Fortsetzen Button
            cy.get('#shipping-buttons-container button').click()

            // check js-alert and set correct vat id -->  IN VERSAND-ADRESSE
            check_js_alert()
            cy.get('[id="shipping:vat_id"]').clear().type(vatID2_correct)

            //again Fortsetzen Button
            cy.get('#shipping-buttons-container button').click()
        }


        checkShippingCosts(system, shippingCost)

        setPayment(system, payment)

        // cy.screenshot()
    },

    checkFinalPrices: function checkFinalPrices(system, rabattCode, rabattBetrag, sieSparen, shippingCost, strike_checkout, strike_checkout_total, final_checkout, final_checkout_total, total_checkout, k40_original, k40_reduced, k40_original_total, k40_reduced_total, k50_original, k50_reduced, k50_original_total, k50_reduced_total) {

        check_prices.checkPrices(system, rabattCode, rabattBetrag, sieSparen, shippingCost, strike_checkout, strike_checkout_total, final_checkout, final_checkout_total, total_checkout, k40_original, k40_reduced, k40_original_total, k40_reduced_total, k50_original, k50_reduced, k50_original_total, k50_reduced_total)
    },

    placeOrder: function placeOrder(system, payment, failed_payment, canceled_payment, shipping, rabattCode, rabattBetrag, rabattBetrag2, vatRate1, vatRate2, vatRate3, vatRate4, vatRate5, vatRate6, vatProduct, vatLine2, vatLine3, vatLine4, vatLine5, vatLine6, vatTotal, final_backend, final_backend_total, nebenProdukt1, nebenProdukt1_total, nebenProdukt2, nebenProdukt2_total, nebenProdukt3, nebenProdukt3_total, nebenProdukt4, nebenProdukt4_total, nebenProdukt5, nebenProdukt5_total, total_backend) {


        //if placeOrder=true and baseurl is unequal to production
        if (Cypress.env('placeOrder') && Cypress.config().baseUrl != "https://www.livoneo.de/") {

            cy.log(Cypress.config().baseUrl)
            confirmOrder(system, payment, failed_payment, canceled_payment)

            // check if successPage is loaded
            successPage.checkSuccessMessage()

            //grab ordernumber from successpage --> this works only when testing locally + async function placeOrder(...)
            /*var orderNumber = await successPage.getOrdernumber()
            cy.log('Die Bestellung hat die Nummer: ' + orderNumber)*/

            //GO TO BACKEND
            //cy.visit(Cypress.env('backend_url'))

            //this works fine!
            // don't assign the value to a variable (like above),  use cy promise chaining instead as follows:
            successPage.getOrdernumber().then((orderNumber) => {

                cy.log('Die Bestellung hat die Nummer: ' + orderNumber)

                //Go to backend
                cy.visit(Cypress.env('backend_url'))


                // BACKEND
                backEndPage.login()
                backEndPage.getOrder(orderNumber)
                backEndPage.checkOrder(system, shipping, rabattCode, rabattBetrag, rabattBetrag2, vatRate1, vatRate2, vatRate3, vatRate4, vatRate5, vatRate6, vatProduct, vatLine2, vatLine3, vatLine4, vatLine5, vatLine6, vatTotal, final_backend, final_backend_total, nebenProdukt1, nebenProdukt1_total, nebenProdukt2, nebenProdukt2_total, nebenProdukt3, nebenProdukt3_total, nebenProdukt4, nebenProdukt4_total, nebenProdukt5, nebenProdukt5_total, total_backend)

                backEndPage.logout()
            })
        }
        else {
            emptyCart()
        }
        cy.clearCookies()
    }
}

// **************************************** CHECK JS ALERT **************************************

function check_js_alert() {
    // checkt alert text
    cy.on('window:alert', (text) => {
        expect(text).to.equal('Die USt-IdNr. ist ungültig.')
    })
}


// ************************************ SET PAYMENT IN ZAHLART **********************************


function setPayment(type, payment, missingName, first_name, last_name) {

    if (type == "Muster" || type == "Muster_V") {
        //  DO NOTHING - NO PAYMENT SELECTION FOR MUSTER
    }
    else {

        // cy.wait(3000)
        // cy.wait('@paypalpayments').wait('@paypalpayments').wait('@paypalpayments').wait('@paypalpayments')
        // cy.wait('@paypal_sdk')
        // cy.wait('@ppp1')
        // cy.wait('@ppp2')

        // cy.wait('@p2').wait('@p2')//.wait('@p2') // --> waiting for request: c.paypal.com/v1/r/d/b/p2


        cy.get('img[alt="Vorkasse"]').should('be.visible')
        cy.get('img[class="paypal-logo paypal-logo-paypal paypal-logo-color-default"]').should('be.visible')

        if (payment == "bankpayment") {
            cy.get('dt[class="ppp bankpayment"]').click()//.wait('@p2').wait('@p2')
            cy.get('dd[class="ppp bankpayment ppp-selected"]').should('exist') //only an additional check of the right selection

        }

        else if (payment == "Paypal") {
            cy.get('dt[class="ppp paypal ppp-selected"]').click()//.wait('@p2').wait('@p2')
            cy.get('dd[class="ppp paypal ppp-selected"]').should('exist') //only an additional check of the right selection
        }

        else if (payment == "Kreditkarte") {
            cy.get('dt[class="ppp card"]').click()//.wait('@p2').wait('@p2')
            cy.get('dd[class="ppp card ppp-selected"]').should('exist') //only an additional check of the right selection

        }

        else if (payment == "Giropay") {
            cy.get('dt[class="ppp giropay"]').wait(2000).click()//.wait('@p2').wait('@p2')
            cy.get('dd[class="ppp giropay ppp-selected"]').should('exist') //only an additional check of the right selection
        }

        else if (payment == "Sepa") {
            cy.get('dt[class="ppp sepa"]').click()//.wait('@p2').wait('@p2')
            cy.get('dd[class="ppp sepa ppp-selected"]').should('exist') //only an additional check of the right selection
        }

        else if (payment == "Sofort") {
            cy.get('dt[class="ppp sofort"]').click()//.wait('@p2').wait('@p2')
            cy.get('dd[class="ppp sofort ppp-selected"]').should('exist') //only an additional check of the right selection

        }
        else if (payment == "Rechnungskauf") {
            cy.get('dt[class="ppp ratepay"]').click()//.wait('@p2').wait('@p2')
            cy.get('dd[class="ppp ratepay ppp-selected"]').should('exist') //only an additional check of the right selection

            cy.get('select[name="payment[birthdate_day]"]').select('01')
            cy.get('select[name="payment[birthdate_month]"]').select('01')
            cy.get('select[name="payment[birthdate_year]"]').select('2000')
        }

        cy.get('.button.payment-submit-button').click()
    }
}


// ****************************** CHECK VERSANDKOSTEN IN VERSANDART ******************************

function checkShippingCosts(system, shippingCost) {

    // shippingCost = shippingCost

    if (system != "Muster" && system != "Muster_V") {

        if (system == "Gutschein") {
            cy.get('label[for="s_method_freeshipping_freeshipping"]').should('contain', 'Versandkostenfrei').and('contain', '0,00')
        }
        else {
            cy.get('span.price').should(($txt) => {
                expect($txt).to.contain(shippingCost)
            })
        }
        //Button "Weiter"
        cy.get('#opc-shipping_method > .step.a-item > form > .buttons-set > button').click()
    }
}


// ****************************** CHECK AGREEMENTS IN BESTELLÜBERSICHT ******************************

function setAgreements() {
    cy.get('#agreement-1').check({ force: true })
    cy.get('#agreement-2').check({ force: true })
}


// ********************************************** EMPTY CART *****************************************

function emptyCart() {
    cy.get('.smallcartdiv').click()
    cy.contains('Artikel entfernen').click()

    // You can't use while/for loops with cypress because of the async nature of cypress. 
    // Cypress doesn't wait for everything to complete in the loop before starting the loop again. 
    // You can however do recursive functions instead and that waits for everything to complete 
    // before it hits the method/function again.

    const deleteArticle = () => {
        cy.get('body').then($body => {
            const isVisible = $body.find('.remove-item').is(':visible')
            if (isVisible) {
                cy.contains('Artikel entfernen').click()
                deleteArticle()
            }
        })
    }
    deleteArticle()

    // check if message is shown
    cy.contains('Der Warenkorb ist leer').should('be.visible')
}


// ****************************** CONFIRM ORDER IN BESTELLÜBERSICHT ******************************

function confirmOrder(system, payment, failed_payment, canceled_payment) {

    setAgreements()

    if (system == "Muster" || system == "Muster_V") {
        cy.get('button[title="Kostenfrei bestellen"]').click()
    }
    else {

        //bei VORKASSE
        if (payment == "bankpayment") {
            cy.get('button[title="Jetzt Kaufen"]').click()
        }

        //bei PAYPAL
        else if (payment == "Paypal") {

            cy.capturePopupFromIFrame()
            cy.paypalFlow('sb-zsomv8592744@personal.example.com', 'c)79sJ!.')
            cy.paypalPrice().should('to.contain', '163,00 EUR') // --> amount of the only paypal testcase we have, can be replaced with variable
            cy.paypalComplete()
        }

        //bei Kreditkarte
        else if (payment == "Kreditkarte") {

            cy.creditcardFlow()
        }

        else if (payment == "Giropay") {

            cy.giropayFlow(failed_payment, canceled_payment)
        }

        else if (payment == "Sepa") {  //Lastschrift

            cy.capturePopupFromIFrame()
            cy.sepaFlow()
        }

        else if (payment == "Sofort") {

            cy.sofortFlow(failed_payment, canceled_payment)
        }
        else if (payment == "Rechnungskauf") {

            cy.rechnungFlow()
        }
    }
}