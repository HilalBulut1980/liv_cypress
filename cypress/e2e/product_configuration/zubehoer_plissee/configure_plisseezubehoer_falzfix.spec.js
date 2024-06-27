var configurator = require("../../../support/configurator_zubehoer.js");

var test =
{
    "name": "LIVConfig. - Plisseezubehör - Falzfix",
    "produkt": "/falzfix",
    "supplier": "VHG",
    "art": "dunkelbraun",
    "option": "3 Falzfixträger +7,00 €",  //6,50 + 7
    "system": "Zubehör",

    "anzahl": 4,
    "grundpreis": 13.50,
    "vat": 120,
    "mwst_1": 20,
    "versandkosten": 15.03,

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
    "prefix2": "Herr",
    "first_name2": "Max",
    "last_name2": "Mustermann",
    "street2": "Karlsplatz 7",
    "postal_code2": "1110",
    "city2": "Wien",
    "state2": "Österreich",
    "phone2": "1190109",
    "payment": "bankpayment"
}

describe('Test: configuration of Plisseezubehör - FalzFix', () => {

    configurator.configureZubehoer(test)

})