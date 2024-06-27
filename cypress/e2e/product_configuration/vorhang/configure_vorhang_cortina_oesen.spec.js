var configurator = require("../../../support/configurator_vorhang.js");

var test =
{
    "name": "LIVConfig. - Vorhang_Cortina_Ösen",
    "produkt": "/vorhaenge/dekoschal/cortina",
    "ab_preis": "66,50",
    "ab_preis_red": "33,25",
    "supplier": "VHG",
    "system": "Vorhang",
    "modell": "vorhang",
    "befestigung": "Ösen",
    "farbe": "Lila",
    "hoehe": "180",
    "breite": "100",

    "anzahl": 2,
    "grundpreis": 72,  
    "konfektion": 0,  
    "befestigung_preis": 10.90,
    "discount": 0.50,
    "vat": 120,
    "mwst_1": 20,
    "versandkosten": 15.03,   

    "login": "guest",
    "password": "",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Maria",
    "last_name": "Müller",
    "email": "maria@delphinus-test.de",
    "street": "Karlsplatz 6",
    "postal_code": "227668",
    "city": "Wien",
    "state": "Österreich",
    "phone": "775299",
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

describe('Test: configuration of Vorhang Cortina mit Ösen', () => {

    configurator.configureVorhang(test)

})