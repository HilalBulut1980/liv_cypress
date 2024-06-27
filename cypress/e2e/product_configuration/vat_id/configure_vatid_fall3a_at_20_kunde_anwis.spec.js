var configurator = require("../../../support/configurator_basisplissee.js");

var test =
{
    "name": "Umsatzsteuer-Test: Fall 3a Österreich - Gast",
    "produkt": "/plissee/grinza-4130",
    "ab_preis": "60,00", //PG2
    "ab_preis_red": "21,00",  //-65% 
    "supplier": "Anwis",
    "modell": "VS2",
    "befestigung": "Montage direkt vor dem Glas",
    "system": "Basis",
    "hoehe": "950",
    "breite": "850",
    "schienenfarbe": "Silber",

    "anzahl": 3,
    "grundpreis": 204,
    "befestigung_preis": 0,
    "sideProduct_1": 0,
    "sideProduct_2": 0,
    "discount": 0.35,
    "vat": 120,
    "mwst_1": 20,
    "versandkosten": 15.02, 

    "login": "customer",
    "password": "Abcde_12345",
    "prefix": "",
    "company_name": "",
    "prefix_business": "",
    "first_name": "",
    "last_name": "",
    "email": "testkonto_6@delphinus-test.de",
    "street": "",
    "postal_code": "",
    "city": "",
    "state": "Österreich",
    "state_code": "ATU",
    "phone": "",
    "shipping": "same",
    "prefix2": "",
    "first_name2": "",
    "last_name2": "",
    "street2": "",
    "postal_code2": "",
    "city2": "",
    "state2": "",
    "phone2": "",
    "payment": "bankpayment"
}

describe('Test: configuration vat ID order - Fall 3a AT', () => {

    it('check testaccount testkonto_6@delphinus-test.de', function () {
        //check/create testaccount --- testkonto@delphinus-test.de ---
        // cy.visit('/scripts/customers/testaccounts.php?email=testkonto_6@delphinus-test.de&prefix=Frau&firstname=PEX&lastname=Testkonto%206&password=Abcde_12345&billing_street=Teststraße%2099&billing_postcode=1100&billing_city=Wien&billing_country=AT&shipping_street=Teststraße%2099&shipping_postcode=1100&shipping_city=Wien&shipping_country=AT')
    })

    it(test.name, function () {

        // configurator.startFromProductPage(test)
        // configurator.configurePlissee(test)

    })
})