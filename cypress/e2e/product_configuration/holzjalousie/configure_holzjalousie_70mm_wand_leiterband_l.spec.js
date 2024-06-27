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
    "farbe": "Natural Rehbraun 6557",
    "hoehe": "600",
    "breite": "1500",
    "befestigung": "An der Wand",
    "lamellenverbindung": "Leiterband", // + 5% vom Listenpreis (27,80) 
    "farbe_leiterband": "Beige",
    "bedientyp": "Schnurbedienung",
    "bedienseite": "Bremse linksBedienung rechts",
    "pendelsicherung": "mit Pendelsicherung",  //+49

    "anzahl": 2,
    "grundpreis": 595,  //595 + 5% 29,75
    "leiterband": 29.75,
    "kette": 0,
    "klemm_oben": 0,
    "pendel": 52,
    "klemm_unten": 0,  //nur wenn bei Befestigung Klemmträger eine Pendels. mitbestellt wird
    "discount": 0.5,
    "vat": 100,
    "mwst_1": 0,
    "versandkosten": 29.90, 

    "login": "guest",
    "password": "",
    "prefix": "Herr",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Max",
    "last_name": "Mustermann",
    "email": "test@delphinus-test.de",
    "street": "Lange Reihe 62",
    "postal_code": "475435",
    "city": "Basel",
    "state": "Schweiz",
    "phone": "1674054",
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