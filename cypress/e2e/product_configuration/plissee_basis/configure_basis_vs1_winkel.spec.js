var configurator = require("../../../support/configurator_basisplissee.js");

var test =
{
    "name": "LIVConfig. - VS1 - Winkel_Basis",
    "produkt": "/plissee/puro-4245",
    "ab_preis": "50,00", //PG0
    "ab_preis_red": "12,00",  //-65% - 5,50
    "supplier": "Anwis",
    "modell": "VS1",
    "befestigung": "Montage am Fensterflügel mit Winkeln",
    "system": "Basis",
    "hoehe": "1200",
    "breite": "900",
    "schienenfarbe": "Schwarz-Braun",

    "anzahl": 2,
    "grundpreis": 179,
    "befestigung_preis": 0,
    "sideProduct_1": 0,
    "sideProduct_2": 0,
    "discount": 0.35,
    "vat": 119,
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
    "street": "Lange Reihe 59",
    "postal_code": "22043",
    "city": "Hamburg",
    "state": "Deutschland",
    "phone": "123458",
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

describe('Test: configuration of VS1 Basis - Winkel', () => {

    it(test.name, function () {

        configurator.startFromProductPage(test)
        configurator.configurePlissee(test)

    })
})