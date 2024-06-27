var configurator = require("../../../support/configurator_rollo.js");

var test = {
    "name": "LIVConfig. - Rollo Maß - MINI LUX",
    "produkt": "Estro 3799",  //PG C
    "ab_preis": "231,00", // Anfangspreis von Modell LUX (mit Seitenleiste) , da vorselektiert
    "ab_preis_red": "103,95", //Regel 19 -->  -55%
    "supplier": "Anwis",
    "rollotyp": "Mini-Rollos",
    "system": "Maß_Rollo",
    "kassette": "Kassette MINI-LUX",
    "schiene": "Seitenleiste universal",
    "hoehe": "2200",
    "breite": "1200",  // MINILUX --> 1134
    "befestigung": "mit Klebeband am Fensterflügel",
    // "bedientyp": "mit Kugelkette", //keine andere Option
    "bedienseite": "rechts",
    "kugelkette": "Metall",  // +21
    "kassettenfarbe": "mooreiche", // +186

    "anzahl": 1,
    "grundpreis": 1134,
    "befestigung_preis": 0,
    "bedienstab_preis": 0,
    "kassetten_preis": 186,
    "montageleiste_preis": 0,
    "ketten_preis": 21,
    "pendel_preis": 0,
    "volant_preis": 0,
    "motor_preis": 0,
    "discount": 0.45,
    "discount_extra": 1,
    "vat": 121,
    "mwst_1": 21,
    "versandkosten": 20.34, // 20/119*121

    "login": "guest",
    // "password": "testpassw6",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Manja",
    "last_name": "Heermann Gercia",
    "email": "manja@delphinus-test.de",
    "street": "Via Del Mundo 99",
    "postal_code": "1234",
    "city": "Barcelona", 
    "state": "Spanien",
    "phone": "741258",
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


describe('Test: configuration of Rollo Maß - Kassette MINILUX', () => {

    it(test.name, function () {

        configurator.startFromConfigurator(test)
        configurator.configureRollo(test)

    })

})