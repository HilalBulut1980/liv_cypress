var configurator = require("../../../support/configurator_muster.js");

var test =
{
    "name": "LIVConfig. - Rollo_Stoffmuster_Basic-3021",
    "produkt": "/rollo/basic-3021",  //PG A
    "ab_preis": "39,00",
    "ab_preis_red": "17,55", //-55%
    "system": "Muster",
    "anzahl": "",
    "unit": "kostenlos",
    "total": "kostenlos",
    "vatRateLine_1": "19",
    "vatProduct": "0,00",
    "vatAmountTotal": "0,00",

    //customer data
    "login": "register",
    "password": "testpassw9",
    "prefix": "Herr",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Max",
    "last_name": "Mustermann",
    "email": "test5@delphinus-test.de",
    "street": "Lange Reihe 61",
    "postal_code": "22043",
    "city": "Hamburg",
    "state": "Deutschland",
    "phone": "1259244",
    "versandkosten": "0,00",
    "payment": "bankpayment"
}

describe('Test: configuration of Rollo Stoffmusterbestellung Basic-3021', () => {

    configurator.configureMuster(test)

})