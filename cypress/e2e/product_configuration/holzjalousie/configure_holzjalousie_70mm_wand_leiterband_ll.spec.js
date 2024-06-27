var configurator = require("../../../support/configurator_holzjalousie.js");

var test =
{
    "name": "LIVConfig. - Holzjal._70_Wand_Leiterband",
    "produkt": "/holzjalousien",
    "ab_preis": "221,00",
    "ab_preis_red": "110,50",
    "supplier": "Anwis",
    "system": "Maß_Holzjalousie",
    "produktgruppe": "70mm",
    "farbe": "Natural Cremeweiß 6559",
    "hoehe": "1000",
    "breite": "850",
    "befestigung": "An der Wand",
    "lamellenverbindung": "Leiterband",  //+5% 
    "farbe_leiterband": "Altweiß",
    "bedientyp": "Schnurbedienung",
    "bedienseite": "Bremse undBedienung rechts",
    "pendelsicherung": "mit Pendelsicherung", //+52

    "anzahl": 2,
    "grundpreis": 497,  //497 + 5% 24,85
    "leiterband": 24.85,
    "kette": 0,
    "klemm_oben": 0,
    "pendel": 52,
    "klemm_unten": 0,  //nur wenn bei Befestigung Klemmträger eine Pendels. mitbestellt wird
    "discount": 0.5,
    "vat": 119,
    "mwst_1": 19,
    "versandkosten": 0, 

    "login": "register",
    "password": "testpassw11",
    "prefix": "Herr",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Max",
    "last_name": "Mustermann",
    "email": "test6@delphinus-test.de",
    "street": "Lange Reihe 63",
    "postal_code": "22043",
    "city": "Hamburg",
    "state": "Deutschland",
    "phone": "1812324",
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

describe('Test: configuration of Holzjalousie 70mm - Wand - Leiterband', () => {

    configurator.configureHolzjalousie(test)

})