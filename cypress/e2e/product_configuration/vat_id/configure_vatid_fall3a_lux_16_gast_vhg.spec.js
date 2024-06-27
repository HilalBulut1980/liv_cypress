var configurator = require("../../../support/configurator_cosiflorplissee.js");

var test =
{
    "name": "Umsatzsteuer-Test: Fall 3a Luxemburg - Gast",
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
    "vat": 116,
    "mwst_1": 16,
    "versandkosten": 19.50,

    "login": "guest",
    "password": "",
    "prefix": "geschaeftskunde",
    "company_name": "Lidl Luxemburg",
    "prefix_business": "Herr",
    "first_name": "Martin",
    "last_name": "Lonakh",
    "email": "martin@delphinus-test.de",
    "street": "Berliner Allee 32",
    "postal_code": "52369",
    "city": "Luxemburg",
    "state": "Luxemburg",
    "state_code": "LUX",
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

describe('Test: configuration vat ID order - Fall 3a LUX', () => {

    it(test.name, function () {


        configurator.startFromProductPage(test)
        configurator.configurePlissee(test)

    })

})