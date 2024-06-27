var configurator = require("../../../support/configurator_zubehoer_vorhang.js");

var test =
{
    "name": "LIVConfig. - Vorhangzubehör - Stange_Zylinder_Messing",
    "produkt": "/gardinenstangen/zylinder-messing-antik",
    "farbe": "Messing Antik",
    "system": "Zubehör_V",
    "breite": "160",

    "anzahl": 3,
    "grundpreis": 28.99,
    "discount": 0.85,
    "vat": 119,
    "mwst_1": 19,
    "versandkosten": 0,

    "login": "guest",
    "password": "",
    "prefix": "geschaeftskunde",
    "company_name": "Test6 GmbH",
    "prefix_business": "Herr",
    "first_name": "Max",
    "last_name": "Mustermann",
    "email": "test@delphinus-test.de",
    "street": "Lange Reihe 62",
    "postal_code": "1234",
    "city": "Basel",
    "state": "Schweiz",
    "phone": "1397514",
    "shipping": "new",
    "prefix2": "Frau",
    "first_name2": "Maria",
    "last_name2": "Magdalena",
    "street2": "Auenallee 65",
    "postal_code2": "22043",
    "city2": "Hamburg",
    "state2": "Deutschland",
    "phone2": "1397514",
    "payment": "bankpayment"
}

describe('Test: configuration of Vorhangzubehör - Stange Zylinder Messing Antik', () => {

    configurator.configureVorhangZubehoer(test)

})