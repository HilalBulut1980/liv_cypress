var configurator = require("../../../support/configurator_fliegengitter.js");

var test =
{
    "name": "LIVConfig. - Fliegengitter_Sonderform_3C",
    "produkt": "insektenschutz/fliegengitter",
    "ab_preis": "219,80", //Startpreis für Typ3 157,00 +45% da Mahagoni
    "ab_preis_red": "164,85",//-25%
    "supplier": "Anwis",
    "form": "Sonderform",
    "einbau": "Fliegengitter einbaufertig",
    "typ": "Typ 3C", //Viereck links
    "hoehe": "1200",
    "breite_oben": "1000",
    "breite_unten": "2000",
    "farbe": "Mooreiche",
    "netzfarbe": "grau",
    "befestigung": "Montage im Rahmen",
    "halterung": "18 mm",

    "anzahl": 3,
    "grundpreis": 1033.20,  //738 + 40% = 1019,20
    "discount": 0.75,
    "vat": 124,
    "mwst_1": 24,
    "versandkosten": 72.93, //  70 /119 *124 eigentlich 72,94

    "login": "guest",
    "password": "",
    "prefix": "Herr",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Toni",
    "last_name": "Acrolopos",
    "email": "toni@delphinus-test.de",
    "street": "Greek Street 44",
    "postal_code": "1234",
    "city": "Athen",
    "state": "Griechenland",
    "phone": "1236547",
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

describe('Test: configuration of Fliegengitter - Sonderform 3C', () => {

    configurator.configureFliegengitter(test)

})