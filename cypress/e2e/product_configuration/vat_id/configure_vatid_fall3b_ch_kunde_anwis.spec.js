var configurator = require("../../../support/configurator_basisplissee.js");

var test =
{
    "name": "Umsatzsteuer-Test: Fall 3b Schweiz - Kunde",
    "produkt": "/plissee/puro-4246",
    "ab_preis": "50,00", //PG0
    "ab_preis_red": "12,00",  //-65% -5,50
    "supplier": "Anwis",
    "modell": "VS2",
    "befestigung": "Montage direkt vor dem Glas",
    "system": "Basis",
    "hoehe": "1000",
    "breite": "800",
    "schienenfarbe": "Silber",

    "anzahl": 3,
    "grundpreis": 153,
    "befestigung_preis": 0,
    "sideProduct_1": 0,
    "sideProduct_2": 0,
    "discount": 0.35,
    "vat": 100,
    "mwst_1": 0,
    "versandkosten": 29.90, 

    "login": "customer",
    "password": "Abcde_12345",
    "prefix": "",
    "company_name": "",
    "vatID": "CHE150906972",
    "prefix_business": "",
    "first_name": "",
    "last_name": "",
    "email": "uid_CH_2@delphinus-test.de",
    "street": "",
    "postal_code": "",
    "city": "",
    "state": "Schweiz",
    "state_code": "CHE",
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

describe('Test: configuration vat ID order - Fall 3b CH', () => {

    it('check testaccount uid_CH_2@delphinus-test.de', function () {
        //check/create testaccount --- uid_CH_2@delphinus-test.de ---
        // cy.visit('/scripts/customers/testaccounts.php?email=uid_CH_2@delphinus-test.de&prefix=Herr&firstname=UID-test&lastname=Schweiz%202&billing_company=Test%20UG&billing_vatid=CHE150906972&password=Abcde_12345&billing_street=Teststraße%203&billing_postcode=1234&billing_city=Basel&billing_country=CH&shipping_vatid=CHE150906972&shipping_street=Teststraße%203&shipping_postcode=1234&shipping_city=Basel&shipping_country=CH')
    })

    it(test.name, function () {

        // configurator.startFromProductPage(test)
        // configurator.configurePlissee(test)
    })
})