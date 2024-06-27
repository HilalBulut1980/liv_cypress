var configurator = require("../../../support/configurator_basisplissee.js");

var test =
{
    "name": "LIVConfig. - VS2 - Stick&Fix-FRONT_Anwis_CH",
    "produkt": "Puro 4245",
    "ab_preis": "50,00", //PG0
    "ab_preis_red": "12,00",  //-65% -5,50 
    "supplier": "Anwis",
    "modell": "VS2",
    "befestigung": "Montage vor dem Glas mit Stick & Fix Front - ohne Bohren",  //+20
    "system": "Basis",
    "hoehe": "850",
    "breite": "750",
    "schienenfarbe": "Weiß",

    "anzahl": 1,
    "grundpreis": 144,
    "befestigung_preis": 0, // Stick&Fix sind VHG-Ware...deswegen sideProduct
    "sideProduct_1": 20,
    "sideProduct_2": 0,
    "vat": 100,
    "discount": 0.35,
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
    "postal_code2": "20102",
    "city2": "Basel",
    "state2": "Schweiz",
    "phone2": "123459",
    "payment": "bankpayment"
}

describe('Test: configuration of VS2 Basis - Stick&Fix-FRONT_Anwis_CH', () => {

    it(test.name, function () {

        configurator.startFromConfigurator(test)
        configurator.configurePlissee(test)

    })
})