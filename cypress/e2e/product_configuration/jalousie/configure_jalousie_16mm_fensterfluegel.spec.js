var configurator = require("../../../support/configurator_jalousie.js");

var test =
{
    "name": "LIVConfig. - Jalousie_16_Fensterflügel",
    "produkt": "jalousien",
    "ab_preis": "49,00",
    "ab_preis_red": "19,60", //-60%
    "supplier": "Anwis",
    "system": "Maß_Jalousie",
    "produktgruppe": "16mm",
    "farbe": "Gelb 6021",  //Farbgruppe 0
    "hoehe": "1800",
    "breite": "1400",
    "befestigung": "Auf dem Fensterflügel",
    "bedientyp": "Schnurbedienung",
    "farbe_ketteUndBlende": "",
    "farbe_kette": "",
    "farbe_seitenblende": "",
    "bedienseite": "Wendestab undBedienung links",
    "pendelsicherung": "mit Pendelsicherung",  //+14

    "anzahl": 2,
    "grundpreis": 313,
    "kette": 0,
    "klemm_oben": 0,
    "pendel": 14,
    "klemm_unten": 0,  //nur wenn bei Befestigung Klemmträger eine Pendels. mitbestellt wird
    "discount": 0.4,
    "vat": 120,
    "mwst_1": 20,
    "versandkosten": 15.02,

    "login": "register",
    "password": "testpassw7",
    "prefix": "geschaeftskunde",
    "company_name": "Test5 GmbH",
    "prefix_business": "Herr",
    "first_name": "Max",
    "last_name": "Mustermann",
    "email": "test4@delphinus-test.de",
    "street": "Lange Reihe 62",
    "postal_code": "322963",
    "city": "Wien",
    "state": "Österreich",
    "phone": "1120974",
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

describe('Test: configuration of Jalousie 16mm - Fensterflügel', () => {

    configurator.configureJalousie(test)

})