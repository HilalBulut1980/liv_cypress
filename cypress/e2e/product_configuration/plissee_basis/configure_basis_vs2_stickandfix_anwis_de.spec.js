var configurator = require("../../../support/configurator_basisplissee.js");

var test =
{
    "name": "LIVConfig. - VS2 - Stick&Fix_Anwis_DE",
    "produkt": "Puro 4246",
    "ab_preis": "50,00", //PG0
    "ab_preis_red": "12,00",  //-65% -5,50
    "supplier": "Anwis",
    "modell": "VS2",
    "befestigung": "Montage vor dem Glas mit Stick & Fix - ohne Bohren",  //+20
    "system": "Basis",
    "hoehe": "1000",
    "breite": "800",
    "schienenfarbe": "Silber",

    "anzahl": 2,
    "grundpreis": 153,
    "befestigung_preis": 0, // Stick&Fix sind VHG-Ware...deswegen sideProduct
    "sideProduct_1": 20,
    "sideProduct_2": 0,
    "discount": 0.35,
    "vat": 119,
    "mwst_1": 19,
    "mwst_2": 19,
    "versandkosten": 0,

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

describe('Test: configuration of VS2 Basis - Stick&Fix_Anwis_DE', () => {

    it(test.name, function () {

        configurator.startFromConfigurator(test)
        configurator.configurePlissee(test)

    })
})