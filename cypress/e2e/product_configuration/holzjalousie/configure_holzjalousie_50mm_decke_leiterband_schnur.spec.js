var configurator = require("../../../support/configurator_holzjalousie.js");

var test =
{
    "name": "LIVConfig. - Holzjal._50_Decke_Leiterband",
    "produkt": "/holzjalousien",
    "ab_preis": "130,00",
    "ab_preis_red": "58,50", //da im konf. 6568 vorselektiert ist
    "supplier": "Anwis",
    "system": "Maß_Holzjalousie",
    "produktgruppe": "50mm",
    "farbe": "Unique Weiß 6549",  //PG U
    "hoehe": "3600",
    "breite": "2600",  //  --> 3974,00
    "befestigung": "An der Decke",
    "lamellenverbindung": "Leiterband", //+5% --> 198,70
    "farbe_leiterband": "Perlweiss",
    "bedientyp": "Schnurbedienung",  //schnur+wendestab
    "bedienseite": "Bremse rechtsBedienung links",

    "anzahl": 2,
    "grundpreis": 3974,  
    "leiterband": 198.70,
    "kette": 0,
    "klemm_oben": 0,
    "pendel": 0,
    "klemm_unten": 0,  //nur wenn bei Befestigung Klemmträger eine Pendels. mitbestellt wird
    "discount": 0.5,
    "vat": 119,
    "mwst_1": 19,
    "versandkosten": 0, 

    "login": "guest",
    "password": "",
    "prefix": "Herr",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Max",
    "last_name": "Mustermann",
    "email": "test@delphinus-test.de",
    "street": "Lange Reihe 63",
    "postal_code": "22043",
    "city": "Hamburg",
    "state": "Deutschland",
    "phone": "1535784",
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

describe('Test: configuration of Holzjalousie 50mm - Decke - Leiterband', () => {

    configurator.configureHolzjalousie(test)

})