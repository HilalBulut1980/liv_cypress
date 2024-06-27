var configurator = require("../../../support/configurator_rollo.js");

var test = {
    "name": "LIVConfig. - Rollo Maß - RM45 Metall ohne Kassette Motor Elektrisch",  //RM45 Metall Motor
    "produkt": "Texture 3437",  //PG B
    "ab_preis": "46,00",
    "ab_preis_red": "20,70",
    "supplier": "Anwis",
    "rollotyp": "Rollos",
    "system": "Maß_Rollo",
    "kassette": "ohne Kassette",
    "hoehe": "2000",
    "breite": "2500",  // 717,00 
    "befestigung": "verschraubt am Fensterflügel",
    "bedientyp": "mit Motorbedienung",  // +310 + 93 = 403
    "bedienseite": "rechts",
    "volant": "runde Aluminium-Unterleiste",  //W4 --> 38,00
    "aluleiste_farbe": "grau",
    "halterung": "Metall",
    "halterung_farbe": "schwarz",

    "anzahl": 1,
    "grundpreis": 717,
    "befestigung_preis": 0,
    "ketten_preis": 0,
    "kassetten_preis": 0,
    "pendel_preis": 0,
    "montageleiste_preis": 0,
    "bedienstab_preis": 0,
    "volant_preis": 38,
    "motor_preis": 403,
    "discount": 0.45,
    "discount_extra": 1,
    "vat": 119,
    "mwst_1": 19,
    "versandkosten": 0,

    "login": "guest",
    "password": "",
    "prefix": "Herr",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Johnny",
    "last_name": "Depp",
    "email": "johnny@delphinus-test.de",
    "street": "Lange Reihe 57",
    "postal_code": "20099",
    "city": "Hamburg",
    "state": "Deutschland",
    "phone": "123456",
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


describe('Test: configuration of Rollo Maß - RM45 Metall ohne Kassette mit Motor elektr.', () => {

    it(test.name, function () {

        configurator.startFromConfigurator(test)
        configurator.configureRollo(test)

    })

})