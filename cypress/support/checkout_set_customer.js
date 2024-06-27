var helper_customer = require("./checkout_helper_customer.js");

module.exports = {

    continueAsCustomer: function continueAsCustomer(value, email, passw) {
        if (value == "customer") {
            cy.get('.login-button').click()
            cy.get('input[id="email"]').type(email)
            cy.get('input[id="pass"]').type(passw)
            cy.get('button').contains('Anmelden').click()
        }
    },

    setBillingAddress: function setBillingAddress(system, login, prefix, company_name, vatID, prefix_business, first_name, last_name, email, street, postal_code, city, state, phone, password) {

        // cy.wait('@shippingAddress')

        if (login == "guest" || login == "register") {
            // CHANGE/SET BILLING ADDRESS 
            helper_customer.setPrefix(prefix, prefix_business)
            helper_customer.setCompanyName(prefix, company_name)
            helper_customer.set_vatID(prefix, vatID)
            helper_customer.setFirstName(first_name)
            helper_customer.setLastName(last_name)
            helper_customer.setEmail(login, email)
            helper_customer.setAddress(street)
            helper_customer.setPostalCode(postal_code)
            helper_customer.setCity(city)
            helper_customer.setPhone(phone)
            helper_customer.setState(state)
            if (login == "register") {
                cy.get('.control.control-register > #customer_account_create').check()
                cy.get('[id="billing:customer_password"]').type(password)
                cy.get('[id="billing:confirm_password"]').type(password)
            }
        }
        //SET NEW BILLING ADDRESS FOR USER WITH ACCOUNT
        if (login == "customer" && first_name != "") {
            cy.get('#billing-address-select').select("Neue Adresse")
        }

        if (system == "Muster" || system == "Muster_V") {
            cy.get('button[title="Weiter"]').click()
        }
    },

    setShippingAddress: function setShippingAddress(system, login, shipping, prefix2, company_name2, vatID2, prefix_business2, first_name2, last_name2, street2, postal_code2, city2, state2, phone2) {


        if (system != "Muster" && system != "Muster_V") {
            
            if (shipping == "same") {
                cy.get('input[title="An diese Adresse verschicken"]').check()
                cy.get('#billing-buttons-container > button[title="Weiter"]').click()
            }
            else if (shipping == "new") {
                cy.get('input[title="An andere Adresse verschicken"]').check()
                cy.get('#billing-buttons-container > button[title="Weiter"]').click()//.wait(5000)


                if (login == "customer") {
                    cy.get('select[id="shipping-address-select"]').select("Neue Adresse")
                }

                cy.wait('@newAddress')
                cy.wait('@newAddress2')

                //cy.wait(5000)
                helper_customer.setPrefix_2(prefix2, prefix_business2)
                helper_customer.setCompanyName2(prefix2, company_name2)
                helper_customer.set_vatID2(prefix2, vatID2)
                helper_customer.setFirstName_2(first_name2)
                helper_customer.setLastName_2(last_name2)
                helper_customer.setAddress_2(street2)
                helper_customer.setPostalCode_2(postal_code2)
                helper_customer.setCity_2(city2)
                helper_customer.setPhone_2(phone2)
                helper_customer.setState_2(state2)

                //Fortsetzen Button
                cy.get('#shipping-buttons-container button').click()
            }
        }

    }
}