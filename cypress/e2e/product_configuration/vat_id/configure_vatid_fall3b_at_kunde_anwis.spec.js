var configurator = require("../../../support/configurator_basisplissee.js");

var test =
{
    "name": "Umsatzsteuer-Test: Fall 3b Österreich - Kunde",
    "produkt": "/plissee/grinza-4130",
    "ab_preis": "60,00", //PG2
    "ab_preis_red": "21,00",  //-6% 
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
    "vat": 100,
    "mwst_1": 0,
    "versandkosten": 12.52, 

    "login": "customer",
    "password": "Abcde_12345",
    "prefix": "",
    "company_name": "",
    "vatID": "ATU15255907",
    "prefix_business": "",
    "first_name": "",
    "last_name": "",
    "email": "uid_AT_2@delphinus-test.de",
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

describe('Test: configuration vat ID order - Fall 3b AT', () => {

    it('check testaccount uid_AT_2@delphinus-test.de', function () {
        //check/create testaccount --- uid_AT_2@delphinus-test.de ---
        // cy.visit('/scripts/customers/testaccounts.php?email=uid_AT_2@delphinus-test.de&prefix=Herr&firstname=UID-test&lastname=%C3%96sterreich%202&billing_company=Test%20AG&billing_vatid=ATU33803701&password=Abcde_12345&billing_street=Teststra%C3%9Fe%202&billing_postcode=1110&billing_city=Teststadt&billing_country=AT&shipping_vatid=ATU33803701&shipping_street=Teststra%C3%9Fe%202&shipping_postcode=1110&shipping_city=Teststadt&shipping_country=AT')
    })

    it(test.name, function () {

        // configurator.startFromProductPage(test)
        // configurator.configurePlissee(test)
    })
})