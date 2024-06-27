var configurator = require("../../../support/configurator_rollo.js");

var test = {
    "name": "LIVConfig. - Rollo Maß - RM32 Metall oK Motor Elektrisch ohne Fernbedienung",
    "produkt": "Vapor 3236",  //PG B
    "ab_preis": "46,00",
    "ab_preis_red": "20,70",
    "supplier": "Anwis",
    "rollotyp": "Rollos",
    "system": "Maß_Rollo",
    "kassette": "ohne Kassette",
    "hoehe": "1500",
    "breite": "2200",  //RM 32 Metall, da Breite 2200 --> 382,00
    "befestigung": "mit Klemmträgern am Fensterflügel",  //+8
    "bedientyp": "mit Motorbedienung",
    "fernbedienung": "ohne Fernbedienung",  //keine +93
    "motortyp": "Elektrisch",  //+310
    "volant": "flache Aluminium-Unterleiste",  //W6 +66
    // "dekorstange": "silber metallic", nur möglich bei Volant D
    "halterung": "Metall",
    "halterung_farbe": "weiß",

    "anzahl": 2,
    "grundpreis": 382,
    "befestigung_preis": 8,
    "ketten_preis": 0,
    "kassetten_preis": 0,
    "pendel_preis": 0,
    "montageleiste_preis": 0,
    "bedienstab_preis": 0,
    "volant_preis": 66,
    "motor_preis": 310,
    "discount": 0.45,
    "discount_extra": 1,
    "vat": 121,
    "mwst_1": 21,
    "versandkosten": 71.17, // 70/119*121 --> eigentlich 71.18

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


describe('Test: configuration of Rollo Maß - RM32 Metall oK Motor Elektrisch ohne FB', () => {

    it(test.name, function () {

        configurator.startFromConfigurator(test)
        configurator.configureRollo(test)

    })

})