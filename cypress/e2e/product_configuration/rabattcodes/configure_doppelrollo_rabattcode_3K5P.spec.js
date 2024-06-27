var configurator = require("../../../support/configurator_doppelrollo.js");

var test = {
    "name": "LIVConfig. - Rabattcode_Doppelrollo",
    "produkt": "Remsa 5076",
    "ab_preis":"60,00",  //Doppelrollo Mini zum Klemmen Startpreis PG2
    "ab_preis_red":"24,00",  // Regel 18 -60%
    "supplier": "Anwis",
    "rollotyp": "Doppelrollo ohne Kassette",
    "system": "Maß_DoppelRollo",
    "hoehe": "1500",
    "breite": "1100",
    "befestigung": "Montage an der Decke",
    "bedienseite": "rechts",
    "kugelkette": "Metall",  //+20
    "verblendung_farbe": "grau",

    "rabatt_code": "LIV-TEST-3K5P",  //3,5%
    "rabatt_faktor_a": 3.5,  
    "rabatt_faktor_b": 96.5,  

    "anzahl": 1,
    "grundpreis": 523,
    "kettenpreis": 21, 
    "kassFarbenpreis": 0,  //ohne Kassette
    "discount": 0.4,
    "vat": 120,
    "mwst_1": 20,
    "versandkosten": 15.02, //14,90/119 *120

    "login": "guest",
    "password": "",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Maria",
    "last_name": "Lehnhardt",
    "email": "maria2@delphinus-test.de",
    "street": "Karlsplatz 4",
    "postal_code": "151432",
    "city": "Wien",
    "state": "Österreich",
    "phone": "498759",
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

describe('Test: configuration of Doppelrollo Rabattcode Test', () => {

    it('create rabatt codes', function () {
        //create rabattcodes
        cy.visit('/scripts/coupons/create.php')
    })

    it(test.name, function () {

        configurator.startFromConfigurator(test)
        configurator.configureDoppelrollo(test)

    })
})