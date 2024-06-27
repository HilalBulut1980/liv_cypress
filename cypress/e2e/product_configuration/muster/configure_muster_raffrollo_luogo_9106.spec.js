var configurator = require("../../../support/configurator_muster.js");

var test =
{
    "name": "LIVConfig. - Raffrollo_Stoffmuster_Luogo-9106",
    "produkt": "/raffrollo/luogo-9106",  //PG D
    "ab_preis": "385,00",
    "ab_preis_red": "173,25", //-55%
    "system": "Muster",
    "anzahl": "",
    "unit": "kostenlos",
    "total": "kostenlos",
    "vatRateLine_1": "0",
    "vatProduct": "0,00",
    "vatAmountTotal": "0,00",

    //customer data
    "login": "guest",
    "password": "",
    "prefix": "geschaeftskunde",
    "company_name": "Test6 GmbH",
    "prefix_business": "Herr",
    "first_name": "Henry",
    "last_name": "Conradsen",
    "email": "henry@delphinus-test.de",
    "street": "Lange Weile 62",
    "postal_code": "12547",
    "city": "Zürich",
    "state": "Schweiz",
    "phone": "1397514",
    "versandkosten": "0,00",
    "payment": "bankpayment"
}

describe('Test: configuration of Raffrollo Stoffmusterbestellung Luogo-9106', () => {

    configurator.configureMuster(test)

})