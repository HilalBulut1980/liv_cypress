var configurator = require("../../../support/configurator_basisplissee.js");

var test =
{
    "name": "Umsatzsteuer-Test: Fall 3a Schweiz - Gast",
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
    "vat": 100,
    "mwst_1": 0,
    "versandkosten": 29.90, 

    "login": "guest",
    "password": "",
    "prefix": "geschaeftskunde",
    "company_name": "DELI CH",
    "vatID": "",
    "prefix_business": "Frau",
    "first_name": "Martha",
    "last_name": "Ludwig",
    "email": "martha@delphinus-test.de",
    "street": "Karlsplatz 4",
    "postal_code": "75196",
    "city": "Basel",
    "state": "Schweiz",
    "state_code": "CH",
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

describe('Test: configuration vat ID order - Fall 3a CH', () => {

    it(test.name, function () {

        // configurator.startFromProductPage(test)
        // configurator.configurePlissee(test)

    })
})