var configurator = require("../../../support/configurator_serviceprodukt.js");

var test =
{
    "name": "LIVConfig. -Service_Plissee_längereFührung",
    "produkt": "/zusatzauftrag-laengere-fuehrungsschnuere",
    "system": "Serviceprodukt",
    "bestellnummer": "10001000",
    "breite": "1000",
    "hoehe": "1200",
    "wunschlaenge": "1500",
    "wunschseite": "beidseitig",
    "produkt_name": "Wabe Comfort 1465",
    "schienenfarbe": "weiß",
    "anmerkung": "Bitte die Schnüre mit Länge 1500 mm fertigstellen. Danke.",

    "anzahl": 1,
    "grundpreis": 20,
    "vat": 121,
    "mwst_1": 21,
    "versandkosten": 20.34,
    
    "login": "guest",
    "password": "",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Maria",
    "last_name": "Müller",
    "email": "maria@delphinus-test.de",
    "street": "Karlsplatz 5",
    "postal_code": "265786",
    "city": "Barcelona",
    "state": "Spanien",
    "phone": "913569",
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

describe('Test: configuration of Serviceprodukt -längere Führungsschnüre-', () => {

    configurator.configureServiceProduct(test)

})