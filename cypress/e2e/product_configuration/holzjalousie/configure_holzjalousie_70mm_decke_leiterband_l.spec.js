var configurator = require("../../../support/configurator_holzjalousie.js");

var test =
{
    "name": "LIVConfig. - Holzjal._70_Decke_Leiterband",
    "produkt": "/holzjalousien",
    "ab_preis": "221,00",
    "ab_preis_red": "110,50",
    "supplier": "Anwis",
    "system": "Maß_Holzjalousie",
    "produktgruppe": "70mm",
    "farbe": "Natural Weiß 6556",  //--> N
    "hoehe": "3600",
    "breite": "1200",  // --> 1462,00
    "befestigung": "An der Decke",
    "lamellenverbindung": "Leiterband",  //+5%
    "farbe_leiterband": "Hellgrau",
    "bedientyp": "Schnurbedienung",
    "bedienseite": "Bremse rechtsBedienung links",

    "anzahl": 3,
    "grundpreis": 1462,  
    "leiterband": 73.10,
    "kette": 0,
    "klemm_oben": 0,
    "pendel": 0,
    "klemm_unten": 0,  //nur wenn bei Befestigung Klemmträger eine Pendels. mitbestellt wird
    "discount": 0.5,
    "vat": 120,
    "mwst_1": 20,
    "versandkosten": 15.02, // --> keine 70,00, da kein Wendestab!!! Nur bei Wendestab 2/3 der Höhe berücksichtigen

    "login": "guest",
    "password": "",
    "prefix": "geschaeftskunde",
    "company_name": "Test7 GmbH",
    "prefix_business": "Frau",
    "first_name": "Maria",
    "last_name": "Müller",
    "email": "maria@delphinus-test.de",
    "street": "Karlsplatz 7",
    "postal_code": "494494",
    "city": "Barcelona",
    "state": "Spanien",
    "phone": "1743189",
    "shipping": "new",
    "prefix2": "Herr",
    "first_name2": "Max",
    "last_name2": "Mustermann",
    "street2": "Karlsplatz 7",
    "postal_code2": "494494",
    "city2": "Wien",
    "state2": "Österreich",
    "phone2": "1743189",
    "payment": "bankpayment"
}

describe('Test: configuration of Holzjalousie 70mm - Decke - Leiterband', () => {

    configurator.configureHolzjalousie(test)

})