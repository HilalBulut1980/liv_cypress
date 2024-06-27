var configurator = require("../../../support/configurator_basisplissee.js");

var test =
{
    "name": "LIVConfig. - VS2 - Basis_Bedienstab",
    "produkt": "Timeless 4100",
    "ab_preis": "50,00", //PG0
    "ab_preis_red": "22,50",  //-55%
    "supplier": "Anwis",
    "modell": "VS2",
    "befestigung": "Montage direkt vor dem Glas",
    "system": "Basis",
    "hoehe": "1500",
    "breite": "1000",
    "bedienstab": "Länge 250cm",  //+56,50
    "kosten_bedienstab": "56,50",
    "schienenfarbe": "Silber",

    "anzahl": 3,
    "grundpreis": 213,
    "befestigung_preis": 0,
    "sideProduct_1": 56.50,
    "sideProduct_2": 0,
    "discount": 0.45,
    "vat": 100,
    "mwst_1": 0,
    "mwst_2": 0,
    "versandkosten": 29.90,

    "login": "guest",
    "password": "",
    "prefix": "Herr",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Max",
    "last_name": "Mustermann",
    "email": "test@delphinus-test.de",
    "street": "Lange Reihe 62",
    "postal_code": "475435",
    "city": "Basel",
    "state": "Schweiz",
    "phone": "1674054",
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

describe('Test: configuration of VS2 - Basis_Bedienstab', () => {

    it(test.name, function () {

        configurator.startFromConfigurator(test)
        configurator.configurePlissee(test)

    })
})