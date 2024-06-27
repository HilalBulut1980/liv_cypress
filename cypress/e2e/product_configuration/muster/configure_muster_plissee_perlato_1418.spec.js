var configurator = require("../../../support/configurator_muster.js");

var test =
{
    "name": "LIVConfig. - Plissee_Stoffmuster_Perlato-1418",
    "produkt": "/plissee/perlato-1418",  //PG 1
    "ab_preis": "75,00",
    "ab_preis_red": "41,25", //-45%
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

describe('Test: configuration of Plissee Stoffmusterbestellung Perlato-1418', () => {

    configurator.configureMuster(test)

})