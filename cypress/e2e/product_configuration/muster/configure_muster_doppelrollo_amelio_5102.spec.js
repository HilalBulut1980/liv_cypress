var configurator = require("../../../support/configurator_muster.js");

var test =
{
    "name": "LIVConfig. - Doppelrollo_Stoffmuster_Amelio-5102",
    "produkt": "/doppelrollo/amelio-5102", //PG 2
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
    "login": "register",
    "password": "testpassw7",
    "prefix": "geschaeftskunde",
    "company_name": "Test5 GmbH",
    "prefix_business": "Herr",
    "first_name": "Max",
    "last_name": "Mustermann",
    "email": "test4@delphinus-test.de",
    "street": "Lange Reihe 62",
    "postal_code": "322963",
    "city": "Basel",
    "state": "Schweiz",
    "phone": "1120974",
    "versandkosten": "0,00",
    "payment": "bankpayment"
}

describe('Test: configuration of Doppelrollo Stoffmusterbestellung Amelio-5102', () => {

    configurator.configureMuster(test)

})