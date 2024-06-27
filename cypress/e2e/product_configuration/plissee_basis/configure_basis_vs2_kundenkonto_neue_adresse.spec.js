var configurator = require("../../../support/configurator_basisplissee.js");

var test =
{
    "name": "LIVConfig.VS2 mit Kundenkonto und neuer Adresse",
    "produkt": "Grinza 4130",
    "ab_preis": "60,00",  //PG2
    "ab_preis_red": "21,00",  //60 - 65%
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
    "vatID": "",
    "prefix_business": "",
    "first_name": "",
    "last_name": "",
    "email": "testkonto_2@delphinus-test.de",
    "street": "",
    "postal_code": "",
    "city": "",
    "state": "Deutschland",
    "phone": "",
    "shipping": "new",
    "prefix2": "Frau",
    "first_name2": "Elif",
    "last_name2": "Poslu",
    "street2": "Trenkstr. 11",
    "postal_code2": "1110",
    "city2": "Wien",
    "state2": "Österreich",
    "phone2": "",
    "payment": "bankpayment"
}

describe('Test: configuration VS2 with Kundenkonto and new address', () => {

    it('check testaccount testkonto_2@delphinus-test.de', function () {
        //check/create testaccount --- testkonto_2@delphinus-test.de ---
        cy.visit('/scripts/customers/testaccounts.php?email=testkonto_2@delphinus-test.de&prefix=Frau&firstname=PEX&lastname=Testkonto%202&password=Abcde_12345&billing_street=Teststraße%2099&billing_postcode=1100&billing_city=Wien&billing_country=AT&shipping_street=Teststraße%2099&shipping_postcode=1100&shipping_city=Wien&shipping_country=AT')
    })

    it(test.name, function () {

        configurator.startFromConfigurator(test)
        configurator.configurePlissee(test)
    })
})