var configurator = require("../../../support/configurator_holzjalousie.js");

var test =
{
    "name": "LIVConfig. - Rabattcode_Holzjalousie",
    "produkt": "/holzjalousien",
    "ab_preis": "88,00",
    "ab_preis_red": "44,00",
    "supplier": "Anwis",
    "system": "Maß_Holzjalousie",
    "produktgruppe": "25mm",
    "farbe": "Modern Weiß 6511",   // --> NEU: PG N statt M
    "hoehe": "1600",
    "breite": "2000",
    "befestigung": "In der Glasleiste",
    "bedientyp": "Kugelkette aus Kunststoff",  //Monocommando
    "farbe_ketteUndBlende": "Grau",
    "bedienseite": "Bedienung links",
    "pendelsicherung": "mit Pendelsicherung",

    "rabatt_code": "LIV-TEST-10P",  //10%
    "rabatt_faktor_a": 10,  
    "rabatt_faktor_b": 90,  

    "anzahl": 2,
    "grundpreis": 901,
    "leiterband": 0,
    "kette": 0,
    "klemm_oben": 0,
    "pendel": 14,
    "klemm_unten": 0,  //nur wenn bei Befestigung Klemmträger eine Pendels. mitbestellt wird
    "discount": 0.5,
    "vat": 121,
    "mwst_1": 21,
    "versandkosten": 71.17, // 70,00 /119 *121 --> eigentlich 71.18

    "login": "register",
    "password": "testpassw10",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Maria",
    "last_name": "Müller",
    "email": "maria5@delphinus-test.de",
    "street": "Karlsplatz 6",
    "postal_code": "380140",
    "city": "Wien",
    "state": "Österreich",
    "phone": "1328379",
    "shipping": "new",
    "prefix2": "Herr",
    "first_name2": "Max",
    "last_name2": "Mustermann",
    "street2": "Karlsplatz 6",
    "postal_code2": "380140",
    "city2": "Barcelona",
    "state2": "Spanien",  // ES --> 21%
    "phone2": "1328379",
    "payment": "bankpayment"
}

describe('Test: configuration of Holzjalousie Rabattcode Test', () => {

    it('create rabatt codes', function () {
        //create rabattcodes
        cy.visit('/scripts/coupons/create.php')
    })

    configurator.configureHolzjalousie(test)

})