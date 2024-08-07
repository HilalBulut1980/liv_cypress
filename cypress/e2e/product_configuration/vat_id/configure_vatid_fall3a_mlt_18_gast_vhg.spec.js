var configurator = require("../../../support/configurator_cosiflorplissee.js");

var test =
{
    "name": "Umsatzsteuer-Test: Fall 3a Malta - Gast",
    "produkt": "/plissee/color-breeze-1360",
    "ab_preis": "55,00", //PG0
    "ab_preis_red": "20,25",  //-45% Regel 1 + Regel 40: 10,00 bei 300x300
    "supplier": "VHG",
    "produktgruppe": "rechteckige Plissees",
    "modell": "VS2",
    "befestigung": "Montage direkt vor dem Glas",
    "system": "Cosiflor",
    "hoehe": "1400",
    "breite": "700",
    "schienenfarbe": "Silber",

    "anzahl": 3,
    "grundpreis": 120,
    "grundpreis_2": 0,
    "bediengriff_preis": 0, 
    "bedienstab_preis": 0,  
    "zusatz_preis": 0,  
    "discount": 0.55,
    "discount_2": 0,
    "vat": 118,
    "mwst_1": 18,
    "versandkosten": 19.84,

    "login": "guest",
    "password": "",
    "prefix": "geschaeftskunde",
    "company_name": "Lidl Hungary",
    "prefix_business": "Frau",
    "first_name": "Linda",
    "last_name": "Czerny",
    "email": "linda@delphinus-test.de",
    "street": "Main Street 124",
    "postal_code": "12345",
    "city": "Valletta",
    "state": "Malta",
    "state_code": "MLT",
    "phone": "22558877",
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

describe('Test: configuration vat ID order - Fall 3a MLT', () => {

    it(test.name, function () {


        configurator.startFromProductPage(test)
        configurator.configurePlissee(test)

    })

})