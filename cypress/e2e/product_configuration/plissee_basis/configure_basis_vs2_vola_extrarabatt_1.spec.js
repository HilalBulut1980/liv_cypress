var configurator = require("../../../support/configurator_basisplissee.js");

var test =
{
    "name": "LIVConfig. - VS2 - Basis-Vola-Extrarabatt_1",
    "produkt": "Vola 4420",
    "ab_preis": "50,00", //PG0
    "ab_preis_red": "10,00",  //-65% -7,50 
    "supplier": "Anwis",
    "modell": "VS2",
    "befestigung": "Montage mit Klebeleisten direkt auf der Scheibe",  //+98 
    "system": "Basis",
    "hoehe": "1800",
    "breite": "1200",
    "schienenfarbe": "Weiß",

    "anzahl": 1,
    "grundpreis": 263,
    "befestigung_preis": 98,
    "sideProduct_1": 0,
    "sideProduct_2": 0,
    "discount": 0.35, // 65%
    "discount_vola": 0.9, //10%
    "vat": 121,
    "mwst_1": 21,
    "versandkosten": 71.18, //70/119*121 70,00, da Klebeleiste!!!

    "login": "guest",
    "password": "",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Maria",
    "last_name": "Müller",
    "email": "maria@delphinus-test.de",
    "street": "Karlsplatz 5",
    "postal_code": "265786",
    "city": "Barcelona",
    "state": "Spanien",
    "phone": "913569",
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

describe('Test: configuration of VS2 - VS2 - Basis-Vola-Extrarabatt_1', () => {

    it(test.name, function () {

        configurator.startFromConfigurator(test)
        configurator.configurePlissee(test)

    })
})