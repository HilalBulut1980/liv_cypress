var configurator = require("../../../support/configurator_basisplissee.js");

var test =
{
    "name": "Umsatzsteuer-Test: Fall 3b Schweiz - Gast",
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

    "login": "guest",
    "password": "",
    "prefix": "geschaeftskunde",
    "company_name": "Webility GmbH",
    "vatID": "CHE150906972",
    "prefix_business": "Frau",
    "first_name": "Maria",
    "last_name": "Müller",
    "email": "maria@delphinus-test.de",
    "street": "Karlsplatz 4",
    "postal_code": "75196",
    "city": "Zürich",
    "state": "Schweiz",
    "state_code": "CHE",
    "phone": "222219",
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

    it(test.name, function () {

        // configurator.startFromProductPage(test)
        // configurator.configurePlissee(test)

    })
})