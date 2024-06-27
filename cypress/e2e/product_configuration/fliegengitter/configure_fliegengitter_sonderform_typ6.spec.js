var configurator = require("../../../support/configurator_fliegengitter.js");

var test =
{
    "name": "LIVConfig. - Fliegengitter_Sonderform_6",
    "produkt": "insektenschutz/fliegengitter",
    "ab_preis": "182,00", //Startpreis für Typ6 182
    "ab_preis_red": "136,50",//-25%
    "supplier": "Anwis",
    "einbau": "Fliegengitter einbaufertig",
    "form": "Sonderform",
    "typ": "Typ 6", //Trapez
    "hoehe": "1300",
    "breite_oben": "600",
    "breite_unten": "1500",
    "farbe": "Braun",
    "netzfarbe": "schwarz",
    "befestigung": "Montage vor dem Rahmen",
    "halterung": "25 mm",

    "anzahl": 2,
    "grundpreis": 640, 
    "discount": 0.75,
    "vat": 120,
    "mwst_1": 20,
    "versandkosten": 15.03, //  14.90 / 119*120

    "login": "guest",
    "password": "",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Michaela",
    "last_name": "Bauer",
    "email": "michaela@delphinus-test.de",
    "street": "Stubentor 88",
    "postal_code": "1254",
    "city": "Graz",
    "state": "Österreich",
    "phone": "852147",
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

describe('Test: configuration of Fliegengitter - Sonderform 6', () => {

    configurator.configureFliegengitter(test)

})