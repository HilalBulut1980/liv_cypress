var configurator = require("../../../support/configurator_jalousie.js");

var test =
{
    "name": "LIVConfig. - Jalousie_16_Mauer/Decke",
    "produkt": "jalousien",
    "ab_preis": "49,00",
    "ab_preis_red": "19,60",  //-60%
    "supplier": "Anwis",
    "system": "Maß_Jalousie",
    "produktgruppe": "16mm",
    "farbe": "Rot glänzend 6014",  //PG 0
    "hoehe": "1700",
    "breite": "1300",
    "befestigung": "An der Mauer oder Decke",
    "bedientyp": "Schnurbedienung",
    "farbe_ketteUndBlende": "",
    "farbe_kette": "",
    "farbe_seitenblende": "",
    "bedienseite": "Wendestab undBedienung links",
    "pendelsicherung": "",

    "anzahl": 2,
    "grundpreis": 282,
    "kette": 0,
    "klemm_oben": 0,
    "pendel": 0,
    "klemm_unten": 0,  //nur wenn bei Befestigung Klemmträger eine Pendels. mitbestellt wird
    "discount": 0.4,
    "vat": 120,
    "mwst_1": 20,
    "versandkosten": 15.02, 

    "login": "register",
    "password": "testpassw8",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Maria",
    "last_name": "Müller",
    "email": "maria4@delphinus-test.de",
    "street": "Karlsplatz 7",
    "postal_code": "342022",
    "city": "Basel",
    "state": "Schweiz",
    "phone": "1190109",
    "shipping": "new",
    "prefix2": "Herr",
    "first_name2": "Max",
    "last_name2": "Mustermann",
    "street2": "Karlsplatz 7",
    "postal_code2": "342022",
    "city2": "Wien",
    "state2": "Österreich",
    "phone2": "1190109",    
    "payment": "bankpayment"
}

describe('Test: configuration of Jalousie 16mm - Mauer oder Decke', () => {

    configurator.configureJalousie(test)

})