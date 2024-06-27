var configurator = require("../../../support/configurator_insektenschutzrollo.js");

var test =
{
    "name": "LIVConfig. - Insekten.Rollo - Fensterrahmen",
    "produkt": "insektenschutz/insektenschutz-rollo",
    "ab_preis": "137,00",
    "ab_preis_red": "68,50",  //-50%
    "supplier": "Anwis",
    "befestigung": "Am Fensterrahmen",
    "farbe": "Braun",
    "netzfarbe": "schwarz",
    "hoehe": "1700",
    "breite": "900",
    "vorrichtung": "Hakenleiste",

    "anzahl": 2,
    "grundpreis": 368,  // 368 
    "discount": 0.5,
    "vat": 121,
    "mwst_1": 21,
    "versandkosten": 71.17,  //  70,00 /119 *121  //70,00 da dieses Produkt mit Schienen geliefert wird --> Höhe ist ausschlaggebend eigentlich 71,18

    "login": "guest",
    "password": "",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Maria",
    "last_name": "Müller",
    "email": "maria@delphinus-test.de",
    "street": "Karlsplatz 3",
    "postal_code": "37078",
    "city": "Barcelona",
    "state": "Spanien",
    "phone": "083949",
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

describe('Test: configuration of Insektenschtzrollo an Fensterrahmen', () => {

    configurator.configureInsektenschutzrollo(test)

})