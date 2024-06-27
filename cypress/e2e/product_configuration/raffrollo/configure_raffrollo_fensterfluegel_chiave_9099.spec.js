var configurator = require("../../../support/configurator_raffrollo.js");

var test =
{
    "name": "LIVConfig. - Raffrollo - Montage_Fensterflügel_EU",
    "produkt": "Chiave 9099",
    "ab_preis": "354,00", //PG C
    "ab_preis_red": "159,30",  //-Rabatt 55%
    "supplier": "Anwis",
    "system": "Raffrollo",
    "befestigung": "Montage am Fensterflügel",
    "hoehe": "280",
    "breite": "250",
    "art_kette": "PVC",
    "farbe_kette": "transparent",
    "bedienseite": "rechts",

    "anzahl": 3,
    "grundpreis": 1093,
    "ketten_preis": 0, 
    "befestigung_preis": 0, 
    "discount": 0.45,
    "vat": 122,
    "mwst_1": 22,
    "versandkosten": 71.76,  //70/119*122

    "login": "guest",
    "password": "",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Nadja",
    "last_name": "Farreque",
    "email": "naddel@delphinus-test.de",
    "street": "Via Donatori del Sangue 55",
    "postal_code": "1258",
    "city": "Firenze",
    "state": "Italien",
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

describe('Test: configuration of Raffrollo - IT', () => {

    it(test.name, function () {


        configurator.startFromConfigurator(test)
        configurator.configureRaffrollo(test)

    })

})