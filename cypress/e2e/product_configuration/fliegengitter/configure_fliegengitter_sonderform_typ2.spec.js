var configurator = require("../../../support/configurator_fliegengitter.js");

var test =
{
    "name": "LIVConfig. - Fliegengitter_Sonderform_2",
    "produkt": "insektenschutz/fliegengitter",
    "ab_preis": "168,00", //Startpreis für Typ 2
    "ab_preis_red": "126,00",//-25%
    "supplier": "Anwis",
    "einbau": "Fliegengitter einbaufertig",
    "form": "Sonderform",
    "typ": "Typ 2", //Dreieck spitz
    "hoehe": "800",
    "breite": "1300",
    "farbe": "Anthrazit",
    "netzfarbe": "schwarz",
    "befestigung": "Montage im Rahmen",
    "halterung": "18 mm",

    "anzahl": 2,
    "grundpreis": 442,  
    "discount": 0.75,
    "vat": 122,
    "mwst_1": 22,
    "versandkosten": 20.51, //20 /119 *122 

    "login": "guest",
    "password": "",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Dana",
    "last_name": "Dorsky",
    "email": "dana@delphinus-test.de",
    "street": "Testing Street 88",
    "postal_code": "1258",
    "city": "Maribor",
    "state": "Slowenien",
    "phone": "123654",
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

describe('Test: configuration of Fliegengitter - Sonderform 2', () => {

    configurator.configureFliegengitter(test)

})