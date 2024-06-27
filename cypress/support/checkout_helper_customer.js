module.exports = {

    setPrefix: function setPrefix(value1, value2) {
        if (value1 != "") {
            cy.get('#input_box_prefix').children().check(value1)
            //set prefix of contact person, if user is a company
            if (value1 == "geschaeftskunde") {
                cy.get('.field.billing_name-prefix.name-prefix > .input-box').children().check(value2)
            }
        }
    },

    setPrefix_2: function setPrefix_2(value1, value2) {
        if (value1 != "") {
            cy.get('label[for="shipping_prefix"] + #input_box_prefix').children().check(value1)
            //set prefix of contact person, if user is a company
            if (value1 == "geschaeftskunde") {
                cy.get('.field.shipping_name-prefix.name-prefix > .input-box').children().check(value2)
            }
        }
    },

    setCompanyName: function setCompanyName(prefix, company_name) {
        if (prefix == "geschaeftskunde") {
            cy.get('[id="billing:company"]').type(company_name)
        }
    },

    setCompanyName2: function setCompanyName2(prefix2, company_name2) {
        if (prefix2 == "geschaeftskunde") {
            cy.get('[id="shipping:company"]').type(company_name2)
        }
    },

    set_vatID: function set_vatID(prefix, vatID) {
        if (typeof vatID !== "undefined" && vatID != "" && prefix == "geschaeftskunde") {
            cy.get('[id="billing:vat_id"]').type(vatID)
        }
    },

    set_vatID2: function set_vatID2(prefix2, vatID2) {
        if (typeof vatID2 !== "undefined" && vatID2 != "" && prefix2 == "geschaeftskunde") {
            cy.get('[id="shipping:vat_id"]').type(vatID2)
        }
    },

    setFirstName: function setFirstName(value) {
        if (value != "") {
            cy.get('[id="billing:firstname"]').clear().type(value)
        }
    },

    setFirstName_2: function setFirstName_2(value) {
        if (value != "") {
            cy.get('[id="shipping:firstname"]').clear().type(value)
        }
    },

    setLastName: function setLastName(value) {
        if (value != "") {
            cy.get('[id="billing:lastname"]').clear().type(value)
        }
    },

    setLastName_2: function setLastName_2(value) {
        if (value != "") {
            cy.get('[id="shipping:lastname"]').clear().type(value)
        }
    },

    setEmail: function setEmail(login, value) {
        if (login != "customer" && value != "") {
            cy.get('[id="billing:email"]').clear().type(value)
        }
    },

    setAddress: function setAddress(value) {
        if (value != "") {
            cy.get('[id="billing:street1"]').clear().type(value)
        }
    },

    setAddress_2: function setAddress_2(value) {
        if (value != "") {
            cy.get('[id="shipping:street1"]').clear().type(value)
        }
    },

    setPostalCode: function setPostalCode(value) {
        if (value != "") {
            cy.get('[id="billing:postcode"]').clear().type(value)
        }
    },

    setPostalCode_2: function setPostalCode_2(value) {
        if (value != "") {
            cy.get('[id="shipping:postcode"]').clear().type(value)
        }
    },

    setCity: function setCity(value) {
        if (value != "") {
            cy.get('[id="billing:city"]').clear().type(value)
        }
    },

    setCity_2: function setCity_2(value) {
        if (value != "") {
            cy.get('[id="shipping:city"]').clear().type(value)
        }
    },

    setPhone: function setPhone(value) {
        if (value != "") {
            cy.get('[id="billing:telephone"]').clear().type(value)
        }
    },

    setPhone_2: function setPhone_2(value) {
        if (value != "") {
            cy.get('[id="shipping:telephone"]').clear().type(value)
        }
    },

    setState: function setState(value) {
        if (value != "") {
            cy.get('[id="billing:country_id"]').select(value)
        }
    },

    setState_2: function setState_2(value) {
        if (value != "") {
            cy.get('[id="shipping:country_id"]').select(value)
        }
    }
}