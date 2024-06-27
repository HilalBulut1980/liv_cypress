var configurator = require("../../../support/configurator_vorhang.js");

var test =
{
    "name": "LIVConfig. - Gardine_Fano_Ösen",
    "produkt": "/vorhaenge/gardine/wella",
    "ab_preis": "70,00",
    "ab_preis_red": "38,50",  //R 25
    "supplier": "VHG",
    "system": "Vorhang",
    "modell": "gardine",
    "befestigung": "Ösen",
    "farbe": "Natur",
    "hoehe": "250",
    "breite": "200",

    "anzahl": 2,
    "grundpreis": 166,  
    "konfektion": 0,  
    "befestigung_preis": 10.90,  
    "discount": 0.55,
    "vat": 100,
    "mwst_1": 0,
    "versandkosten": 29.90,  

    "login": "register",
    "password": "testpassw9",
    "prefix": "Herr",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Max",
    "last_name": "Mustermann",
    "email": "test5@delphinus-test.de",
    "street": "Lange Reihe 61",
    "postal_code": "22043",
    "city": "Hamburg",
    "state": "Deutschland",
    "phone": "1259244",
    "shipping": "new",
    "prefix2": "Frau",
    "first_name2": "Maria",
    "last_name2": "Müller",
    "street2": "Lange Reihe 61",
    "postal_code2": "1234",
    "city2": "Basel",
    "state2": "Schweiz",
    "phone2": "1259244",
    "payment": "bankpayment"
}

describe('Test: configuration of Vorhang Fano mit Ösen', () => {

    configurator.configureVorhang(test)

})