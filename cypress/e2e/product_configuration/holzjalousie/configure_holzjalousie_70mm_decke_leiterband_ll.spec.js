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
    "farbe": "Natural Beigebraun 6560",
    "hoehe": "1500",
    "breite": "2900",
    "befestigung": "An der Decke",
    "lamellenverbindung": "Leiterband",  //+5%
    "farbe_leiterband": "Schwarz",
    "bedientyp": "Schnurbedienung",
    "bedienseite": "Bremse undBedienung links",

    "anzahl": 2,
    "grundpreis": 1842,  //1842 + 5% 92,10
    "leiterband": 92.10,
    "kette": 0,
    "klemm_oben": 0,
    "pendel": 0,
    "klemm_unten": 0,  //nur wenn bei Befestigung Klemmträger eine Pendels. mitbestellt wird
    "discount": 0.5,
    "vat": 121,
    "mwst_1": 21,
    "versandkosten": 71.17,  //  70,00 /119 *121 --> eigentlich 71.18

    "login": "register",
    "password": "testpassw12",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Maria",
    "last_name": "Müller",
    "email": "maria6@delphinus-test.de",
    "street": "Karlsplatz 8",
    "postal_code": "532612",
    "city": "Wien",
    "state": "Österreich",
    "phone": "1881459",
    "shipping": "new",
    "prefix2": "Frau",
    "first_name2": "Maria",
    "last_name2": "Müller",
    "street2": "Karlsplatz 8",
    "postal_code2": "532612",
    "city2": "Barcelona",
    "state2": "Spanien",
    "phone2": "1881459",
    "payment": "bankpayment"
}

describe('Test: configuration of Holzjalousie 70mm - Decke - Leiterband', () => {

    configurator.configureHolzjalousie(test)

})