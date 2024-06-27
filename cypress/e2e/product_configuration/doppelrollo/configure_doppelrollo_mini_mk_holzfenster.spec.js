var configurator = require("../../../support/configurator_doppelrollo.js");

var test = {
    "name": "LIVConfig. - doppelMini_Maß - m.K. - Holz",  //mit Kassette -->zum Kleben
    "produkt": "/doppelrollo/acorda-5091",
    "ab_preis": "46,00",  //Doppelrollo Mini zum Klemmen Startpreis PG1
    "ab_preis_red": "18,40",  // Regel 18 -60%
    "supplier": "Anwis",
    "rollotyp": "Doppelrollo Minimit Kassette",
    "system": "Maß_DoppelRollo",
    "hoehe": "1200",
    "breite": "1000",
    "befestigung": "Holzfenster",
    "bedienseite": "rechts",
    "kugelkette": "Metall", //+21
    "kassettenfarbe": "goldeiche",  // "Preis Kassettenfarbe" = ( ("Preis D" + "Aufpreis D") - ("Preis S" + "Aufpreis S") )

    "anzahl": 2,
    "grundpreis": 262,
    "kettenpreis": 21, 
    "kassFarbenpreis": 34,  //D1 ==> = (262 + 16) - (234 + 10)  = 278 - 244 = 34  wird rabattiert
    "discount": 0.4,
    "vat": 121,
    "mwst_1": 21,
    "versandkosten": 20.34, //20,00 /119 *121

    "login": "guest",
    "prefix": "Frau",
    "first_name": "Maria",
    "last_name": "Müller",
    "email": "maria1@delphinus-test.de",
    "street": "Karlsplatz 5",
    "postal_code": "113314",
    "city": "Barcelona",
    "state": "Spanien",  //ES --> 21%
    "phone": "360489",
    "shipping": "same",
    "payment": "bankpayment"
}


describe('Test: configuration of Doppelrollo Mini_Maß - m.K. Holzfenster', () => {

    it(test.name, function () {

        configurator.startFromProductPage(test)
        configurator.configureDoppelrollo(test)

    })

})