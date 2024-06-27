var configurator = require("../../../support/configurator_zubehoer.js");

var test =
{
    "name": "LIVConfig. - Plisseezubehör - Front_Klebeplatte",
    "produkt": "/stickfix-front-einzeln",
    "supplier": "VHG",
    "art": "3 Montageträger inkl. Klebepads +8,00 €", // 10 + 8
    "system": "Zubehör",

    "anzahl": 3,
    "grundpreis": 18,
    "vat": 100,
    "mwst_1": 0,
    "versandkosten": 29.90,

    "login": "register",
    "password": "testpassw9",
    "prefix": "Herr",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Max",
    "last_name": "Mustermann",
    "email": "test5@delphinus-test.de",
    "street": "Lange Reihe 61",
    "postal_code": "22043",
    "city": "Hamburg",
    "state": "Deutschland",
    "phone": "1259244",
    "shipping": "new",
    "prefix2": "Frau",
    "first_name2": "Maria",
    "last_name2": "Müller",
    "street2": "Lange Reihe 61",
    "postal_code2": "1234",
    "city2": "Basel",
    "state2": "Schweiz",
    "phone2": "1259244",
    "payment": "bankpayment"
}

describe('Test: configuration of Plisseezubehör - Stick&Fix Front Klebeplatte', () => {

    configurator.configureZubehoer(test)

})