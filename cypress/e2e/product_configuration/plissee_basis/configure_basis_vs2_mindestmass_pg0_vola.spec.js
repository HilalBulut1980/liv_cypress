var configurator = require("../../../support/configurator_basisplissee.js");

var test =
{
    "name": "LIVConfig. - VS2 - Basis-Mindestmaß_PG0_Vola",
    "produkt": "Vola 4419",
    "ab_preis": "50,00", //PG0
    "ab_preis_red": "10,00",  //-65% -7,50 
    "supplier": "Anwis",
    "modell": "VS2",
    "befestigung": "Montage direkt vor dem Glas",
    "system": "Basis",
    "hoehe": "300",
    "breite": "300",
    "schienenfarbe": "Schwarz-Braun",

    "anzahl": 1,
    "grundpreis": 50, //extra rabatt --> PG 0 und den Maßen 300x300 wird ein zusätzlicher Rabatt (7,50 Euro für VOLA / 5,50 Euro für PURO) gewährt
    "vola_rabatt": 7.50,
    "befestigung_preis": 0,
    "sideProduct_1": 0,
    "sideProduct_2": 0,
    "discount": 0.35,
    "vat": 127,
    "mwst_1": 27,
    "versandkosten": 21.35,

    "login": "guest",
    "password": "",
    "prefix": "Herr",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Mauricio",
    "last_name": "Garcia",
    "email": "test@delphinus-test.de",
    "street": "Lange Reihe 63",
    "postal_code": "437317",
    "city": "Budapest",
    "state": "Ungarn",
    "phone": "1535784",
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

describe('Test: configuration of VS2 - Basis-Mindestmaß_PG0_Vola', () => {

    it(test.name, function () {

        configurator.startFromConfigurator(test)
        configurator.configurePlissee(test)

    })
})