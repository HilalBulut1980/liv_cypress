var configurator = require("../../../support/configurator_zubehoer.js");

var test =
{
    "name": "LIVConfig. - Plisseezubehör - Bediengriff_standard",
    "produkt": "/bediengriff-standard-neu",
    "supplier": "VHG",
    "art": "grau",
    "system": "Zubehör",

    "anzahl": 5,
    "grundpreis": 7,
    "vat": 119,
    "mwst_1": 19,
    "versandkosten": 0,

    "login": "guest",
    "password": "",
    "prefix": "geschaeftskunde",
    "company_name": "Test4 GmbH",
    "prefix_business": "Herr",
    "first_name": "Max",
    "last_name": "Mustermann",
    "email": "test@delphinus-test.de",
    "street": "Lange Reihe 60",
    "postal_code": "1234",
    "city": "Basel",
    "state": "Schweiz",
    "phone": "844434",
    "shipping": "new",
    "prefix2": "Frau",
    "first_name2": "Maria",
    "last_name2": "Müller",
    "street2": "Lange Reihe 60",
    "postal_code2": "22043",
    "city2": "Hamburg",
    "state2": "Deutschland",
    "phone2": "844434",
    "payment": "bankpayment"
}

describe('Test: configuration of Plisseezubehör - Standardgriff', () => {

    configurator.configureZubehoer(test)

})