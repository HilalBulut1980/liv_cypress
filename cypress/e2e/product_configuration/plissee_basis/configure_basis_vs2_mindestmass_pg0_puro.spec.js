var configurator = require("../../../support/configurator_basisplissee.js");

var test =
{
    "name": "LIVConfig. - VS2 - Basis-Mindestmaß_PG0_Puro",
    "produkt": "Puro 4252",
    "ab_preis": "50,00", //PG0
    "ab_preis_red": "12,00",  //-65% -5,50 
    "supplier": "Anwis",
    "modell": "VS2",
    "befestigung": "Montage direkt vor dem Glas",
    "system": "Basis",
    "hoehe": "300",
    "breite": "300",
    "schienenfarbe": "Silber",

    "anzahl": 2,
    "grundpreis": 50, //extra rabatt --> PG 0 und den Maßen 300x300 wird ein zusätzlicher Rabatt (7,50 Euro für VOLA / 5,50 Euro für PURO) gewährt
    "puro_rabatt": 5.50,
    "befestigung_preis": 0,
    "sideProduct_1": 0,
    "sideProduct_2": 0,
    "discount": 0.35,
    "vat": 120,
    "mwst_1": 20,
    "versandkosten": 15.03,

    "login": "guest",
    "password": "",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Luna",
    "last_name": "Esmeralda",
    "email": "maria@delphinus-test.de",
    "street": "Karlsplatz 8",
    "postal_code": "456376",
    "city": "Wien",
    "state": "Österreich",
    "phone": "1604919",
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

describe('Test: configuration of VS2 - Basis-Mindestmaß_PG0_Puro', () => {

    it(test.name, function () {

        configurator.startFromConfigurator(test)
        configurator.configurePlissee(test)

    })
})