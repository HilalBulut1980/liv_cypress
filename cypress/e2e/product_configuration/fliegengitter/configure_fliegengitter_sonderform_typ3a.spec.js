var configurator = require("../../../support/configurator_fliegengitter.js");

var test =
{
    "name": "LIVConfig. - Fliegengitter_Sonderform_3A",
    "produkt": "insektenschutz/fliegengitter",
    "ab_preis": "157,00", //Startpreis für Typ 3
    "ab_preis_red": "117,75",//-25%
    "supplier": "Anwis",
    "einbau": "Fliegengitter einbaufertig",
    "form": "Sonderform",
    "typ": "Typ 3A", //Viereck rechts
    "hoehe_links": "1000",
    "hoehe_rechts": "2000",
    "breite": "1200",
    "farbe": "Braun",
    "netzfarbe": "schwarz",
    "befestigung": "Montage im Rahmen",
    "halterung": "9 mm",

    "anzahl": 4,
    "grundpreis": 738,  
    "discount": 0.75,
    "vat": 125,
    "mwst_1": 25,
    "versandkosten": 73.52, //  70 /119 *125 eigentlich 73,53

    "login": "guest",
    "password": "",
    "prefix": "Herr",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Alexander",
    "last_name": "Hogh Andersen",
    "email": "dana@delphinus-test.de",
    "street": "Cypress Street 44",
    "postal_code": "2548",
    "city": "Stockholm",
    "state": "Schweden",
    "phone": "965874",
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

describe('Test: configuration of Fliegengitter - Sonderform 3A', () => {

    configurator.configureFliegengitter(test)

})