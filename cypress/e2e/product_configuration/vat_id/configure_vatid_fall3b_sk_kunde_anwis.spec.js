var configurator = require("../../../support/configurator_basisplissee.js");

var test =
{
    "name": "Umsatzsteuer-Test: Fall 3b Slowakei - Kunde",
    "produkt": "/plissee/sempe-4433",
    "ab_preis": "50,00", //PG0
    "ab_preis_red": "17,50",  //-65%
    "supplier": "Anwis",
    "modell": "VS2",
    "befestigung": "Montage direkt vor dem Glas",
    "system": "Basis",
    "hoehe": "800",
    "breite": "700",
    "schienenfarbe": "Silber",
    
    "anzahl": 2,
    "grundpreis": 128,
    "befestigung_preis": 0,
    "sideProduct_1": 0,
    "sideProduct_2": 0,
    "discount": 0.35,
    "vat": 100,
    "mwst_1": 0,
    "versandkosten": 16.81, 

    "login": "customer",
    "password": "Abcde_12345",
    "prefix": "",
    "company_name": "",
    "vatID": "SK2020279415",
    "prefix_business": "",
    "first_name": "",
    "last_name": "",
    "email": "uid_EU_2@delphinus-test.de",
    "street": "",
    "postal_code": "",
    "city": "",
    "state": "Slowakei",
    "state_code": "SK",
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

describe('Test: configuration vat ID order - Fall 3b SK', () => {

    it('check testaccount uid_EU_2@delphinus-test.de', function () {
        //check/create testaccount --- uid_EU_2@delphinus-test.de ---
        // cy.visit('/scripts/customers/testaccounts.php?email=uid_EU_2@delphinus-test.de&prefix=Herr&firstname=UID-test&lastname=EU-Staat%202&billing_company=Test%20Company&billing_vatid=SK2020279415&password=Abcde_12345&billing_street=Teststraße%2010&billing_postcode=1234&billing_city=Bratislava&billing_country=SK&shipping_vatid=SK2020279415&shipping_street=Teststraße%2010&shipping_postcode=1234&shipping_city=Bratislava&shipping_country=SK')
    })

    it(test.name, function () {

        // configurator.startFromProductPage(test)
        // configurator.configurePlissee(test)

    })
})