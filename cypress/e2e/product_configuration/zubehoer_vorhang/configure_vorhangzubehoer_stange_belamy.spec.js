var configurator = require("../../../support/configurator_zubehoer_vorhang.js");

var test =
{
    "name": "LIVConfig. - Vorhangzubehör - Stange_Belamy",
    "produkt": "/gardinenstangen/belamy",
    "farbe": "Edelstahl",
    "system": "Zubehör_V",
    "breite": "160",
    
    "anzahl": 4,
    "grundpreis": 32.99,
    "discount": 0.85,
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
    "postal_code": "1110",
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

describe('Test: configuration of Vorhangzubehör - Stange Belamy', () => {

    configurator.configureVorhangZubehoer(test)

})