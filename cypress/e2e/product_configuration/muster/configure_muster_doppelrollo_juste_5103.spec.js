var configurator = require("../../../support/configurator_muster.js");

var test =
{
    "name": "LIVConfig. - Doppelrollo_Stoffmuster_Juste-5103",
    "produkt": "/doppelrollo/juste-5103",  //PG 2
    "ab_preis": "60,00",
    "ab_preis_red": "24,00", //-60%
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
    "company_name": "Test4 GmbH",
    "prefix_business": "Herr",
    "first_name": "Max",
    "last_name": "Mustermann",
    "email": "test@delphinus-test.de",
    "street": "Lange Reihe 60",
    "postal_code": "246727",
    "city": "Basel",
    "state": "Schweiz",
    "phone": "844434",
    "versandkosten": "0,00",
    "payment": "bankpayment"
}

describe('Test: configuration of Doppelrollo Stoffmusterbestellung Juste-5103', () => {

    configurator.configureMuster(test)

})