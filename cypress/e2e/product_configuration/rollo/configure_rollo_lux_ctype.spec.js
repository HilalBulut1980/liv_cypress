var configurator = require("../../../support/configurator_rollo.js");

var test = {
    "name": "LIVConfig. - Rollo Maß - Kassette LUX type C",
    "produkt": "Ruolo 3842",  //PG B
    "ab_preis": "221,00", // Anfangspreis von Modell LUX (mit Seitenleiste) , da vorselektiert
    "ab_preis_red": "99,45", //Regel 19 -55%
    "supplier": "Anwis",
    "rollotyp": "Mini-Rollos",
    "system": "Maß_Rollo",
    "kassette": "Kassette LUX",
    "schiene": "Führungsschiene",
    "hoehe": "1500",
    "breite": "1300",  // Kassette LUX --> 805
    "befestigung": "verschraubt am Fensterflügel",
    // "bedientyp": "mit Kugelkette", //keine andere Option
    "bedienseite": "rechts",
    "kugelkette": "Kunststoff",  //kein Aufpreis
    "kassettenfarbe": "winchester", // +221

    "anzahl": 2,
    "grundpreis": 805,
    "befestigung_preis": 0,
    "bedienstab_preis": 0,
    "kassetten_preis": 221,
    "montageleiste_preis": 0,
    "ketten_preis": 0,
    "pendel_preis": 0,
    "volant_preis": 0,
    "motor_preis": 0,
    "discount": 0.45,
    "discount_extra": 1,
    "vat": 119,
    "mwst_1": 19,
    "versandkosten": 0,  

    "login": "guest",
    // "password": "testpassw6",
    "prefix": "Herr",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Micha",
    "last_name": "Poslowsky",
    "email": "michi@delphinus-test.de",
    "street": "Ausschläger Allee 32",
    "postal_code": "20539",
    "city": "Hamburg",
    "state": "Deutschland",
    "phone": "963258",
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


describe('Test: configuration of Rollo Maß - Kassette LUX type C', () => {

    it(test.name, function () {

        configurator.startFromConfigurator(test)
        configurator.configureRollo(test)

    })

})