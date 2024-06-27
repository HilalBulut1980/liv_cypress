var configurator = require("../../../support/configurator_basisplissee.js");

var test =
{
    "name": "LIVConfig. - VS1 - Klemmträger_Basis",
    "produkt": "/plissee/timeless-4100",
    "ab_preis": "50,00", //PG0
    "ab_preis_red": "22,50",  //-55% 
    "supplier": "Anwis",
    "modell": "VS1",
    "befestigung": "Montage am Fensterflügel mit Klemmträgern - ohne Bohren",  //+16,50
    "system": "Basis",
    "hoehe": "1100",
    "breite": "800",
    "schienenfarbe": "Weiß",

    "anzahl": 3,
    "grundpreis": 161,
    "befestigung_preis": 16.50, // Klemmträger keine  VHG-Ware... deswegen kein sideProduct
    "sideProduct_1": 0,
    "sideProduct_2": 0,
    "vat": 119,
    "discount": 0.45,
    "mwst_1": 19,
    "versandkosten": 0,

    "login": "guest",
    "password": "",
    "prefix": "Herr",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Max",
    "last_name": "Mustermann",
    "email": "test@delphinus-test.de",
    "street": "Lange Reihe 58",
    "postal_code": "22043",
    "city": "Hamburg",
    "state": "Deutschland",
    "phone": "123457",
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

describe('Test: configuration of VS1 Basis - KLemmtraeger', () => {

    it(test.name, function () {

        configurator.startFromProductPage(test)
        configurator.configurePlissee(test)

    })
})