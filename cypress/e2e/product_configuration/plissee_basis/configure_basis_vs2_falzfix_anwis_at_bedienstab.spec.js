var configurator = require("../../../support/configurator_basisplissee.js");

var test =
{
    "name": "LIVConfig. - VS2 - FalzFix_Anwis_AT",
    "produkt": "Timeless 4101",
    "ab_preis": "50,00", //PG0
    "ab_preis_red": "22,50",  //-55%
    "supplier": "Anwis",
    "modell": "VS2",
    "befestigung": "Montage vor dem Glas mit Falzfix",  //+16,50
    "system": "Basis",
    "hoehe": "750",
    "breite": "650",
    "bedienstab": "Länge 200cm",  //+52
    "kosten_bedienstab": "52,00",
    "schienenfarbe": "Weiß",

    "anzahl": 2,
    "grundpreis": 128,
    "befestigung_preis": 0, // Falzfix sind VHG-Ware... deswegen sideProduct
    "sideProduct_1": 16.50,  //im backend wird erst die befestigung, dann die bedienug aufgelistet
    "sideProduct_2": 52,
    "discount": 0.45,
    "vat": 120,
    "mwst_1": 20,
    "mwst_2": 20,
    "mwst_3": 20,
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

describe('Test: configuration of VS2 Basis - FalzFix_Anwis_AT', () => {

    it(test.name, function () {

        configurator.startFromConfigurator(test)
        configurator.configurePlissee(test)

    })
})