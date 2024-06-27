var configurator = require("../../../support/configurator_basisplissee.js");

var test =
{
    "name": "LIVConfig. - VS2 - Basis-Vola-Extrarabatt_2",
    "produkt": "Vola 4421",
    "ab_preis": "50,00", //PG0 R10 + R 30 
    "ab_preis_red": "10,00",  //-65% -7,50 
    "supplier": "Anwis",
    "modell": "VS2",
    "befestigung": "Montage direkt vor dem Glas",
    "system": "Basis",
    "hoehe": "1000",
    "breite": "600",
    "bedienstab": "Länge 150cm",
    "kosten_bedienstab": "45,00",
    "schienenfarbe": "Weiß",

    "anzahl": 2,
    "grundpreis": 124,
    "befestigung_preis": 0,
    "sideProduct_1": 45,  //Bedienstab ist von VHG
    "sideProduct_2": 0,
    "discount": 0.35,
    "discount_vola": 0.9, //10%
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

describe('Test: configuration of VS2 - VS2 - Basis-Vola-Extrarabatt_2', () => {

    it(test.name, function () {

        configurator.startFromConfigurator(test)
        configurator.configurePlissee(test)

    })
})