var configurator = require("../../../support/configurator_jalousie.js");

var test =
{
    "name": "LIVConfig. - Jalousie_50_Wand_Metall",
    "produkt": "jalousien",
    "ab_preis": "102,00",
    "ab_preis_red": "40,80",
    "supplier": "Anwis",
    "system": "Maß_Jalousie",
    "produktgruppe": "50mm",
    "farbe": "Eiche 6100",  //PG 2
    "hoehe": "2400",
    "breite": "1000",
    "befestigung": "An der Wand",
    "bedientyp": "Kugelkette aus Metall",  //+21
    "farbe_ketteUndBlende": "",
    "farbe_kette": "Silber",
    "farbe_seitenblende": "Elfenbein",
    "bedienseite": "Bedienung links",
    "pendelsicherung": "mit Pendelsicherung",  //+32

    "anzahl": 2,
    "grundpreis": 684,
    "kette": 21,
    "klemm_oben": 0,
    "pendel": 32,
    "klemm_unten": 0,  //nur wenn bei Befestigung Klemmträger eine Pendels. mitbestellt wird
    "discount": 0.4,
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
    "street": "Karlsplatz 7",
    "postal_code": "418258",
    "city": "Barcelona",
    "state": "Spanien",
    "phone": "1466649",
    "shipping": "new",
    "prefix2": "Herr",
    "first_name2": "Max",
    "last_name2": "Mustermann",
    "street2": "Karlsplatz 7",
    "postal_code2": "418258",
    "city2": "Wien",
    "state2": "Österreich",
    "phone2": "1466649",
    "payment": "bankpayment"
}

describe('Test: configuration of Jalousie 50mm - Wand - Metallkette', () => {

    configurator.configureJalousie(test)

})