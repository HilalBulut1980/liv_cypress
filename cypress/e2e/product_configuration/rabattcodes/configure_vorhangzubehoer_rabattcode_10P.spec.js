var configurator = require("../../../support/configurator_zubehoer_vorhang.js");

var test =
{
    "name": "LIVConfig. - Rabattcode_Vorhangzubehör",
    "produkt": "/gardinenstangen/kegel",
    "farbe": "Edelstahl",
    "system": "Zubehör_V",
    "breite": "160",

    "rabatt_code": "LIV-TEST-10P",  //10%
    "rabatt_faktor_a": 10,  
    "rabatt_faktor_b": 90,  

    "anzahl": 1,
    "grundpreis": 24.99,
    "discount": 0.85,
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
    "postal_code": "1236",
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

describe('Test: configuration of Vorhangzubehör Rabattcode Test', () => {

    it('create rabatt codes', function () {
        //create rabattcodes
        cy.visit('/scripts/coupons/create.php')
    })

    configurator.configureVorhangZubehoer(test)

})