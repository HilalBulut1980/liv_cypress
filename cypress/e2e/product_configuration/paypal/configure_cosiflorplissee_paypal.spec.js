var configurator = require("../../../support/configurator_cosiflorplissee.js");

var test =
{
    "name": "LIVConfig. - Plissee F1 - paypal",
    "produkt": "/plissee/ayana-1809",
    "ab_preis": "84,00", //PG2
    "ab_preis_red": "46,20",  //-45% 
    "supplier": "VHG",
    "produktgruppe": "rechteckige Plissees",
    "modell": "F1",
    "befestigung": "Montage direkt vor dem Glas",
    "system": "Cosiflor",
    "hoehe": "1150",
    "breite": "1050",
    "bedienseite": "links",
    "pendelsicherung": "ja",  //+16
    "schienenfarbe": "Anthrazit",

    "anzahl": 1,
    "grundpreis": 226,
    "grundpreis_2": 0,
    "bediengriff_preis": 0, 
    "bedienstab_preis": 0,  
    "zusatz_preis": 16,  
    "discount": 0.55,
    "discount_2": 0,
    "vat": 121,
    "mwst_1": 21,
    "versandkosten": 20.34,

    "login": "register",
    "password": "testpassw4",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Maria",
    "last_name": "Müller",
    "email": "maria2@delphinus-test.de",
    "street": "Karlsplatz 4",
    "postal_code": "151432",
    "city": "Barcelona",
    "state": "Spanien",
    "phone": "498759",
    "shipping": "same",
    "prefix2": "",
    "first_name2": "",
    "last_name2": "",
    "street2": "",
    "postal_code2": "",
    "city2": "",
    "state2": "",
    "phone2": "",
    "payment": "Paypal"
}

describe('Test: configuration of F1 Cosiflor - payment paypal', () => {

     it(test.name, function () {


        configurator.startFromProductPage(test)
        configurator.configurePlissee(test)

    })

})