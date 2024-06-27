var configurator = require("../../../support/configurator_basisplissee.js");

var test =
{
    "name": "LIVConfig. - VS2 - FalzFix_Anwis_EU",
    "produkt": "Grinza 4130",
    "ab_preis": "60,00",  //PG2
    "ab_preis_red": "21,00",  //60 - 65%
    "supplier": "Anwis",
    "modell": "VS2",
    "befestigung": "Montage vor dem Glas mit Falzfix",  //+16,50
    "system": "Basis",
    "hoehe": "855",
    "breite": "755",
    "bedienstab": "Länge 150cm", //+45
    "schienenfarbe": "Weiß",

    "anzahl": 3,
    "grundpreis": 183,
    "befestigung_preis": 0, // Falzfix sind VHG-Ware... deswegen sideProduct
    "sideProduct_1": 16.50,
    "sideProduct_2": 45,
    "discount": 0.35,
    "vat": 121,
    "mwst_1": 21,
    "mwst_2": 21,
    "mwst_3": 21,
    "versandkosten": 20.34,

    "login": "guest",
    "password": "",
    "prefix": "Herr",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Max",
    "last_name": "Mustermann",
    "email": "test@delphinus-test.de",
    "street": "Lange Reihe 60",
    "postal_code": "20102",
    "city": "Barcelona",
    "state": "Spanien",
    "phone": "123459",
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

describe('Test: configuration of VS2 Basis - FalzFix_Anwis_EU', () => {

    it(test.name, function () {

        configurator.startFromConfigurator(test)
        configurator.configurePlissee(test)

    })
})