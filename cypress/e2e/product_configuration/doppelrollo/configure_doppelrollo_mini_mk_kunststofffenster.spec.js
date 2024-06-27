var configurator = require("../../../support/configurator_doppelrollo.js");

var test = {
    "name": "LIVConfig. - doppelMini_Maß - m.K. - Kunstst.", //mit Kassette -->zum Kleben
    "produkt": "/doppelrollo/cosma-5088",
    "ab_preis": "60,00",  //Doppelrollo Mini zum Klemmen Startpreis PG3
    "ab_preis_red": "24,00",  // Regel 18 -60%
    "supplier": "Anwis",
    "rollotyp": "Doppelrollo Minimit Kassette",
    "system": "Maß_DoppelRollo",
    "hoehe": "1300",
    "breite": "800",
    "befestigung": "Kunststofffenster",
    "bedienseite": "rechts",
    "kugelkette": "Metall",  //+21
    "kassettenfarbe": "nussbaum",  //"Preis Kassettenfarbe" = ( ("Preis D" + "Aufpreis D") - ("Preis S" + "Aufpreis S") )
    
    "anzahl": 2,
    "grundpreis": 345, //D3
    "kettenpreis": 21, 
    "kassFarbenpreis": 33,  //D3 ==> = (345 + 16) - (318 + 10)  = 361 - 328 = 33  wird rabattiert
    "discount": 0.4,
    "vat": 100,
    "mwst_1": 0,
    "versandkosten": 29.90, 

    "login": "register",
    "password": "testpassw3",
    "prefix": "geschaeftskunde",
    "company_name": "Test3 GmbH",
    "prefix_business": "Herr",
    "first_name": "Max",
    "last_name": "Mustermann",
    "email": "test2@delphinus-test.de",
    "street": "Lange Reihe 59",
    "postal_code": "22043",
    "city": "Hamburg",
    "state": "Deutschland",
    "phone": "429624",
    "shipping": "new",
    "prefix2": "Frau",
    "first_name2": "Maria",
    "last_name2": "Müller",
    "street2": "Lange Reihe 59",
    "postal_code2": "1234",
    "city2": "Basel",
    "state2": "Schweiz",
    "phone2": "429624",
    "payment": "bankpayment"
}

describe('Test: configuration of Doppelrollo Mini_Maß - m.K. Kunststofffenster', () => {

    it(test.name, function () {

        configurator.startFromProductPage(test)
        configurator.configureDoppelrollo(test)

    })

})