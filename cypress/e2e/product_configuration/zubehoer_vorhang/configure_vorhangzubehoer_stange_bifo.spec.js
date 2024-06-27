var configurator = require("../../../support/configurator_zubehoer_vorhang.js");

var test =
{
    "name": "LIVConfig. - Vorhangzubehör - Stange_Bifo",
    "produkt": "/gardinenstangen/bifo",
    "farbe": "Weiß",
    "system": "Zubehör_V",
    "breite": "160",

    "anzahl": 3,
    "grundpreis": 14.99,
    "discount": 0.85,
    "vat": 100,
    "mwst_1": 0,
    "versandkosten": 29.90,

    "login": "guest",
    "password": "",
    "prefix": "Herr",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Max",
    "last_name": "Mustermann",
    "email": "test@delphinus-test.de",
    "street": "Lange Reihe 61",
    "postal_code": "22043",
    "city": "Hamburg",
    "state": "Deutschland",
    "phone": "982704",
    "shipping": "new",
    "prefix2": "Frau",
    "first_name2": "Maria",
    "last_name2": "Müller",
    "street2": "Lange Reihe 61",
    "postal_code2": "1234",
    "city2": "Basel",
    "state2": "Schweiz",
    "phone2": "982704",
    "payment": "bankpayment"
}

describe('Test: configuration of Vorhangzubehör - Stange Line', () => {

    configurator.configureVorhangZubehoer(test)

})