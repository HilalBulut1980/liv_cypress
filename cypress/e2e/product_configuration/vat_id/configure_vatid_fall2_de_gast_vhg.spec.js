var configurator = require("../../../support/configurator_cosiflorplissee.js");

var test =
{
    "name": "Umsatzsteuer-Test: Fall 2 Deutschland - Gast",
    "produkt": "/plissee/freja-1772",
    "ab_preis": "75,00", //PG1
    "ab_preis_red": "41,25",  //-45%
    "supplier": "VHG",
    "produktgruppe": "rechteckige Plissees",
    "modell": "VS2",
    "befestigung": "Montage am Fensterflügel mit Glasleistenwinkeln",  //+16,50
    "system": "Cosiflor",
    "hoehe": "900",
    "breite": "800",
    "schienenfarbe": "Weiß",

    "anzahl": 2,
    "grundpreis": 117,
    "grundpreis_2": 0,
    "bediengriff_preis": 0, 
    "bedienstab_preis": 0,  
    "zusatz_preis": 16.50,  
    "discount": 0.55,
    "discount_2": 0,
    "vat": 119,
    "mwst_1": 19,
    "versandkosten": 0,

    "login": "guest",
    "password": "",
    "prefix": "geschaeftskunde",
    "company_name": "Aldi Nord GmbH",
    "vatID": "DE136627286",
    "prefix_business": "Herr",
    "first_name": "Henrico",
    "last_name": "Trapanta",
    "email": "henry@delphinus-test.de",
    "street": "Lange Reihe 1",
    "postal_code": "18019",
    "city": "Hamburg",
    "state": "Deutschland",
    "state_code": "DE",
    "phone": "014814",
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

describe('Test: configuration vat ID order - Fall 2 DE', () => {

    it(test.name, function () {


        configurator.startFromProductPage(test)
        configurator.configurePlissee(test)

    })

})