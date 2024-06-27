var configurator = require("../../../support/configurator_muster.js");

var test =
{
    "name": "LIVConfig. - Vorhänge_Stoffmuster_Gardine_Todaro",
    "produkt": "/vorhaenge/gardine/todaro",
    "ab_preis": "11,00",
    "ab_preis_red": "6,05", //-45%
    "system": "Muster_V",
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

describe('Test: configuration of Vorhänge Stoffmusterbestellung Gardine_Todaro', () => {

    configurator.configureMuster(test)

})