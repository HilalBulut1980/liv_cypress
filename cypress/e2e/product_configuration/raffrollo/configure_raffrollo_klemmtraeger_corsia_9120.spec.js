var configurator = require("../../../support/configurator_raffrollo.js");

var test =
{
    "name": "LIVConfig. - Raffrollo - Montage_Fensterflügel_CH",
    "produkt": "Corsia 9120",
    "ab_preis": "385,00", //PGD
    "ab_preis_red": "173,25",  //-Rabatt -55%
    "supplier": "Anwis",
    "system": "Raffrollo",
    "befestigung": "Montage am Fensterflügel mit Klemmträger",  // 6 Klemmträger bei Breite 2700 --> 54,00€
    "hoehe": "250",
    "breite": "270",
    "art_kette": "PVC",
    "farbe_kette": "grau",
    "bedienseite": "rechts",

    "anzahl": 2,
    "grundpreis": 1200,
    "ketten_preis": 0, 
    "befestigung_preis": 54, 
    "discount": 0.45,
    "vat": 100,
    "mwst_1": 0,
    "versandkosten": 58.82, // 70/119*100

    "login": "guest",
    "password": "",
    "prefix": "Herr",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Numan",
    "last_name": "Bulut",
    "email": "numan@delphinus-test.de",
    "street": "Via Ada Buffulini",
    "postal_code": "5214",
    "city": "Zürich",
    "state": "Schweiz",
    "phone": "52148",
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

describe('Test: configuration of Raffrollo - CH', () => {

    it(test.name, function () {


        configurator.startFromConfigurator(test)
        configurator.configureRaffrollo(test)

    })

})