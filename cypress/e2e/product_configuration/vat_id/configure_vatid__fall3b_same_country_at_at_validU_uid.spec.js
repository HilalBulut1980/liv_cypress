var configurator = require("../../../support/configurator_basisplissee.js");

var test =
{
    "name": "Umsatzsteuertest Fall 3b same Address AT-->AT",
    "produkt": "/plissee/timeless-4100",
    "ab_preis": "50,00", //PG0
    "ab_preis_red": "22,50",  //-55%
    "supplier": "Anwis",
    "modell": "VS2",
    "befestigung": "Montage direkt vor dem Glas",
    "system": "Basis",
    "hoehe": "1500",
    "breite": "1000",
    "schienenfarbe": "Weiß",

    "anzahl": 3,
    "grundpreis": 213,
    "befestigung_preis": 0,
    "sideProduct_1": 0,
    "sideProduct_2": 0,
    "discount": 0.45,
    "vat": 100,
    "mwst_1": 0,
    "versandkosten": 12.52, 

    "login": "guest",
    "password": "",
    "prefix": "geschaeftskunde",
    "company_name": "Powerserv Austria GmbH",
    "vatID": "ATU56160004",
    "prefix_business": "Herr",
    "first_name": "Peter",
    "last_name": "Lisowski",
    "email": "peter@delphinus-test.de",
    "street": "Karlsplatz 10",
    "postal_code": "1010",
    "city": "Wien",
    "state": "Österreich",
    "state_code": "ATU",
    "phone": "222219",
    "shipping": "new",
    "prefix2": "geschaeftskunde",
    "company_name2": "AOC Fünf Immobilien GmbH & Co OG",
    "vatID_2": "ATU68925229 ",
    "prefix_business2": "Frau",
    "first_name2": "Michaela",
    "last_name2": "Baader",
    "street2": "Heinweg 33",
    "postal_code2": "3040",
    "city2": "Graz",
    "state2": "Österreich",
    "state_code_2": "ATU",
    "phone2": "225588",
    "payment": "bankpayment"
}

describe('Test: configuration vat ID order - Umsatzsteuertest Fall 3b same Address AT-->AT - Fall 3b AT', () => {

    it(test.name, function () {

        // configurator.startFromProductPage(test)
        // configurator.configurePlissee(test)

    })
})