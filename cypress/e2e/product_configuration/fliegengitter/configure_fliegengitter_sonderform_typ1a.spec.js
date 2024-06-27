var configurator = require("../../../support/configurator_fliegengitter.js");

var test =
{
    "name": "LIVConfig. - Fliegengitter_Sonderform_1A",
    "produkt": "insektenschutz/fliegengitter",
    "ab_preis": "219,80", // Startpreis Typ1 157,00, da Winchester 157 +40%
    "ab_preis_red": "164,85",//-25%
    "supplier": "Anwis",
    "einbau": "Fliegengitter einbaufertig",
    "form": "Sonderform",
    "typ": "Typ 1A",  //Dreieck rechts
    "hoehe": "1200",
    "breite": "1200",
    "farbe": "Winchester",
    "netzfarbe": "schwarz",
    "befestigung": "Montage im Rahmen",
    "halterung": "25 mm",

    "anzahl": 2,
    "grundpreis": 693,  //495 + 40% = 693
    "discount": 0.75,
    "vat": 100,
    "mwst_1": 0,
    "versandkosten": 29.90,  

    "login": "guest",
    "password": "",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Laila",
    "last_name": "Mühlheim",
    "email": "laila2@delphinus-test.de",
    "street": "Karlsgarten 44",
    "postal_code": "5236",
    "city": "Zürich",
    "state": "Schweiz",
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

describe('Test: configuration of Fliegengitter - Sonderform 1A', () => {

    configurator.configureFliegengitter(test)

})