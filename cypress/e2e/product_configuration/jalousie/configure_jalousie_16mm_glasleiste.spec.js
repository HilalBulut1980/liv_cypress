var configurator = require("../../../support/configurator_jalousie.js");

var test =
{
    "name": "LIVConfig. - Jalousie_16_Glasleiste",
    "produkt": "jalousien",
    "ab_preis": "49,00",
    "ab_preis_red": "19,60",  //-60%
    "supplier": "Anwis",
    "system": "Maß_Jalousie",
    "produktgruppe": "16mm",
    "farbe": "Lachs glänzend 6010",  //PG 0
    "hoehe": "1500",
    "breite": "1200",
    "befestigung": "In der Glasleiste",
    "bedientyp": "Schnurbedienung",
    "farbe_ketteUndBlende": "",
    "farbe_kette": "",
    "farbe_seitenblende": "",
    "bedienseite": "Wendestab undBedienung rechts",
    "pendelsicherung": "mit Pendelsicherung", //+14

    "anzahl": 1,
    "grundpreis": 247,
    "kette": 0,
    "klemm_oben": 0,
    "pendel": 14,
    "klemm_unten": 0,  //nur wenn bei Befestigung Klemmträger eine Pendels. mitbestellt wird
    "discount": 0.4,
    "vat": 121,
    "mwst_1": 21,
    "versandkosten": 20.34, 

    "login": "register",
    "password": "testpassw6",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Maria",
    "last_name": "Müller",
    "email": "maria3@delphinus-test.de",
    "street": "Karlsplatz 6",
    "postal_code": "303904",
    "city": "Wien",
    "state": "Österreich",
    "phone": "1051839",
    "shipping": "new",
    "prefix2": "Herr",
    "first_name2": "Max",
    "last_name2": "Mustermann",
    "street2": "Karlsplatz 6",
    "postal_code2": "303904",
    "city2": "Barcelona",
    "state2": "Spanien",
    "phone2": "1051839",
    "payment": "bankpayment"
}

describe('Test: configuration of Jalousie 16mm - Glasleiste', () => {

    configurator.configureJalousie(test)

})