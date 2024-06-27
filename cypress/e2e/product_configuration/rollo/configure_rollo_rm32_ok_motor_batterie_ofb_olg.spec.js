var configurator = require("../../../support/configurator_rollo.js");

var test = {
    "name": "LIVConfig. - Rollo Maß - RM32 Metall oK Motor Batterie ohne Ladegerät ohne Fernbedienung",
    "produkt": "BlackOut Reflex 3061",  //PG B
    "ab_preis": "46,00",
    "ab_preis_red": "20,70",
    "supplier": "Anwis",
    "rollotyp": "Rollos",
    "system": "Maß_Rollo",
    "kassette": "ohne Kassette",
    "hoehe": "1500",
    "breite": "2100",  //RM 32
    "befestigung": "Montage an der Decke",
    "bedientyp": "mit Motorbedienung",
    "fernbedienung": "ohne Fernbedienung", // keine +93
    "ladegeraet": "ohne Ladegerät",  // keine +58
    "motortyp": "Batterie",  // 356,00
    "volant": "runde Aluminium-Unterleiste",  //W4 +33
    "aluleiste_farbe": "grau",
    "halterung": "Metall",
    "halterung_farbe": "weiß",

    "anzahl": 3,
    "grundpreis": 373,
    "befestigung_preis": 0,
    "ketten_preis": 0,
    "kassetten_preis": 0,
    "pendel_preis": 0,
    "montageleiste_preis": 0,
    "bedienstab_preis": 0,
    "volant_preis": 33,
    "motor_preis": 356,
    "discount": 0.45,
    "discount_extra": 1,
    "vat": 100,
    "mwst_1": 0,
    "versandkosten": 58.82, // 70/119*100

    "login": "guest",
    "password": "",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Helin",
    "last_name": "Sabanci",
    "email": "helin@delphinus-test.de",
    "street": "Lange Reihe 61",
    "postal_code": "284845",
    "city": "Basel",
    "state": "Schweiz",
    "phone": "982704",
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


describe('Test: configuration of Rollo Maß - RM32 Metall oK Motor Batterie ohne Ladegerät ohne FB', () => {

    it(test.name, function () {

        configurator.startFromConfigurator(test)
        configurator.configureRollo(test)

    })

})