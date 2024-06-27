var configurator = require("../../../support/configurator_zubehoer.js");

var test =
{
    "name": "LIVConfig. - Plisseezubehör - Halteclip_klein",
    "produkt": "/halteclip-klein",
    "supplier": "VHG",
    "art": "silber",
    "system": "Zubehör",

    "anzahl": 5,
    "grundpreis": 4,
    "vat": 119,
    "mwst_1": 19,
    "versandkosten": 0,

    "login": "register",
    "password": "testpassw7",
    "prefix": "geschaeftskunde",
    "company_name": "Test5 GmbH",
    "prefix_business": "Herr",
    "first_name": "Max",
    "last_name": "Mustermann",
    "email": "test4@delphinus-test.de",
    "street": "Lange Reihe 62",
    "postal_code": "1112",
    "city": "Basel",
    "state": "Schweiz",
    "phone": "1120974",
    "shipping": "new",
    "prefix2": "Frau",
    "first_name2": "Maria",
    "last_name2": "Müller",
    "street2": "Lange Reihe 62",
    "postal_code2": "22043",
    "city2": "Hamburg",
    "state2": "Deutschland",
    "phone2": "1120974",
    "payment": "bankpayment"
}

describe('Test: configuration of Plisseezubehör - Halteclip_klein', () => {

    configurator.configureZubehoer(test)

})