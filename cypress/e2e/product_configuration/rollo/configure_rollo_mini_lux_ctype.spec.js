var configurator = require("../../../support/configurator_rollo.js");

var test = {
    "name": "LIVConfig. - Rollo Maß - MINI LUX type C",
    "produkt": "Marron 3767",  //PG B
    "ab_preis": "221,00", // Anfangspreis von Modell LUX (mit Seitenleiste) , da vorselektiert
    "ab_preis_red": "99,45", //Regel 19 -55%
    "supplier": "Anwis",
    "rollotyp": "Mini-Rollos",
    "system": "Maß_Rollo",
    "kassette": "Kassette MINI-LUX",
    "schiene": "Führungsschiene",
    "hoehe": "2000",
    "breite": "1000",  // LUX --> 795
    "befestigung": "verschraubt am Fensterflügel",
    // "bedientyp": "mit Kugelkette", //keine andere Option
    "bedienseite": "rechts",
    "kugelkette": "Kunststoff",  //kein Aufpreis
    "kassettenfarbe": "anthrazit", 

    "anzahl": 3,
    "grundpreis": 795,
    "befestigung_preis": 0,
    "bedienstab_preis": 0,
    "kassetten_preis": 0,
    "montageleiste_preis": 0,
    "ketten_preis": 0,
    "pendel_preis": 0,
    "volant_preis": 0,
    "motor_preis": 0,
    "discount": 0.45,
    "discount_extra": 1,
    "vat": 120,
    "mwst_1": 20,
    "versandkosten": 20.17,  // 20/119*120

    "login": "guest",
    // "password": "testpassw6",
    "prefix": "Herr",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Sebastian",
    "last_name": "Petersen",
    "email": "basti@delphinus-test.de",
    "street": "Ausschläger Allee 32",
    "postal_code": "25473",
    "city": "Paris",
    "state": "Frankreich",
    "phone": "852369",
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


describe('Test: configuration of Rollo Maß - Kassette MINILUX type C', () => {

    it(test.name, function () {

        configurator.startFromConfigurator(test)
        configurator.configureRollo(test)

    })

})