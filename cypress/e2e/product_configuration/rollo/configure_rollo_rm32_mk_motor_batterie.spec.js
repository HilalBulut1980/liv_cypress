var configurator = require("../../../support/configurator_rollo.js");

var test = {
    "name": "LIVConfig. - Rollo Maß - RM32 Metall mK Motor Batterie",
    "produkt": "BlackOut Reflex 3061",  //PG B
    "ab_preis": "46,00",
    "ab_preis_red": "20,70",
    "supplier": "Anwis",
    "rollotyp": "Rollos",
    "system": "Maß_Rollo",
    "kassette": "mit Kassette", // +187 //-->RM32 Metall, da bei RM32 Kunststoff keine Kassette möglich!
    "hoehe": "1500",
    "breite": "2100",  //RM 32
    "befestigung": "Montage an der Decke",
    "bedientyp": "mit Motorbedienung",
    "motortyp": "Batterie",  //+356 +93 + 58
    "volant": "runde Aluminium-Unterleiste",  //W4 --> +33,00
    "aluleiste_farbe": "grau",

    "anzahl": 3,
    "grundpreis": 373,
    "befestigung_preis": 0,
    "ketten_preis": 0,
    "kassetten_preis": 187,
    "pendel_preis": 0,
    "montageleiste_preis": 0,
    "bedienstab_preis": 0,
    "volant_preis": 33,
    "motor_preis": 507,
    "discount": 0.45,
    "discount_extra": 1,
    "vat": 100,
    "mwst_1": 0,
    "versandkosten": 58.82, // 70/119*100

    "login": "guest",
    "password": "",
    "prefix": "Herr",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Hans",
    "last_name": "Meiser",
    "email": "hans@delphinus-test.de",
    "street": "Lange Reihe 61",
    "postal_code": "284845",
    "city": "Zürich",
    "state": "Schweiz",
    "phone": "982704",
    "shipping": "same",
    "prefix2": "",
    "first_name2": "",
    "last_name2": "",
    "street2": "",
    "postal_code2": "",
    "city2": "Basel",
    "state2": "",
    "phone2": "",
    "payment": "bankpayment"
}


describe('Test: configuration of Rollo Maß - RM32 Metall mK Motor Batterie', () => {

    it(test.name, function () {

        configurator.startFromConfigurator(test)
        configurator.configureRollo(test)

    })

})