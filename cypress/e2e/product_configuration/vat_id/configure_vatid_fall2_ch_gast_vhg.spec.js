var configurator = require("../../../support/configurator_cosiflorplissee.js");

var test =
{
    "name": "Umsatzsteuer-Test: Fall 2 Schweiz - Gast",
    "produkt": "/plissee/lindura-1584",
    "ab_preis": "55,00", //PG0
    "ab_preis_red": "20,25",  //-45% Regel 1 + Regel 40: 10,00 bei 300x300
    "supplier": "VHG",
    "produktgruppe": "rechteckige Plissees",
    "modell": "VS2",
    "befestigung": "Montage direkt vor dem Glas",
    "system": "Cosiflor",
    "hoehe": "1400",
    "breite": "700",
    "bediengriff": "Design",  //+17
    "bedienstab": "Länge 200cm",  // +52
    "schienenfarbe": "Silber",
    
    "anzahl": 3,
    "grundpreis": 120,
    "grundpreis_2": 0,
    "bediengriff_preis": 17, 
    "bedienstab_preis": 52,  
    "zusatz_preis": 0,  
    "discount": 0.55,
    "discount_2": 0,
    "vat": 100,
    "mwst_1": 0,
    "versandkosten": 29.90,

    "login": "guest",
    "password": "",
    "prefix": "geschaeftskunde",
    "company_name": "Webility GmbH",
    "vatID": "CHE150906972",
    "prefix_business": "Herr",
    "first_name": "Rudi",
    "last_name": "Tandal",
    "email": "test@delphinus-test.de",
    "street": "Lange Reihe 3",
    "postal_code": "2563",
    "city": "Zürich",
    "state": "Schweiz",
    "state_code": "CHE",
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

describe('Test: configuration vat ID order - Fall 2 CH', () => {

    it(test.name, function () {


        configurator.startFromProductPage(test)
        configurator.configurePlissee(test)

    })

})
