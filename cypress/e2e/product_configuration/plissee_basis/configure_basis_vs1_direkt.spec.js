var configurator = require("../../../support/configurator_basisplissee.js");

var test =
{
    "name": "LIVConfig. - VS1 - direkt_Basis",
    "produkt": "/plissee/grinza-4130",
    "ab_preis": "60,00", //PG2
    "ab_preis_red": "21,00",  //-65% 
    "supplier": "Anwis",
    "modell": "VS1",
    "befestigung": "Montage direkt vor dem Glas",
    "system": "Basis",
    "hoehe": "1300",
    "breite": "1000",
    "schienenfarbe": "Silber",

    "anzahl": 3,
    "grundpreis": 255,
    "befestigung_preis": 0,
    "sideProduct_1": 0,
    "sideProduct_2": 0,
    "discount": 0.35,
    "vat": 120,
    "mwst_1": 20,
    "versandkosten": 15.02,

    "login": "guest",
    "password": "",
    "prefix": "Herr",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Max",
    "last_name": "Mustermann",
    "email": "test@delphinus-test.de",
    "street": "Lange Reihe 60",
    "postal_code": "22043",
    "city": "Hamburg",
    "state": "Deutschland",
    "phone": "123459",
    "shipping": "new",
    "prefix2": "Frau",
    "first_name2": "Maria",
    "last_name2": "Müller",
    "street2": "Lange Reihe 60",
    "postal_code2": "1110",
    "city2": "Wien",
    "state2": "Österreich",
    "phone2": "123459",
    "payment": "bankpayment"
}

describe('Test: configuration of VS1 Basis - direkt', () => {

    it(test.name, function () {

        configurator.startFromProductPage(test)
        configurator.configurePlissee(test)

    })
})