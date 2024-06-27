var configurator = require("../../../support/configurator_jalousie.js");

var test =
{
    "name": "LIVConfig. - Jalousie - sofort",
    "produkt": "jalousien",
    "ab_preis": "39,00",
    "ab_preis_red": "15,60",  //-60%
    "supplier": "Anwis",
    "system": "Maß_Jalousie",
    "produktgruppe": "25mm",
    "farbe": "Hellgrün 6067",   //PG 0
    "hoehe": "1600",
    "breite": "1100",
    "befestigung": "Auf dem Fensterflügel mit Klemmträgern", //+7 +11
    "bedientyp": "Schnurbedienung",
    "farbe_ketteUndBlende": "",
    "farbe_kette": "",
    "farbe_seitenblende": "",
    "bedienseite": "Wendestab linksBedienung rechts",
    "pendelsicherung": "mit Pendelsicherung", //+14

    "anzahl": 3,
    "grundpreis": 180,
    "kette": 0,
    "klemm_oben": 7,
    "pendel": 14,
    "klemm_unten": 11,  //nur wenn bei Befestigung Klemmträger eine Pendels. mitbestellt wird
    "discount": 0.4,
    "vat": 119,
    "mwst_1": 19,
    "versandkosten": 0, 

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
    "shipping": "same",
    "prefix2": "",
    "first_name2": "",
    "last_name2": "",
    "street2": "",
    "postal_code2": "",
    "city2": "",
    "state2": "",
    "phone2": "",
    "payment": "Sofort"  
}

describe('Test: configuration of Jalousie 25mm - payment sofort', () => {

    configurator.configureJalousie(test)

})