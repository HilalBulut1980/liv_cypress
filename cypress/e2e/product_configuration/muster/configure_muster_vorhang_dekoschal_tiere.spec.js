var configurator = require("../../../support/configurator_muster.js");

var test =
{
    "name": "LIVConfig. - Vorhänge_Stoffmuster_Vorhang_Tiere",
    "produkt": "/vorhaenge/dekoschal/tiere",
    "ab_preis": "81,00",
    "ab_preis_red": "48,60", //-40%
    "system": "Muster_V",
    "anzahl": "",
    "unit": "kostenlos",
    "total": "kostenlos",
    "vatRateLine_1": "19",
    "vatProduct": "0,00",
    "vatAmountTotal": "0,00",

    //customer data
    "login": "guest",
    "password": "",
    "prefix": "Herr",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Max",
    "last_name": "Mustermann",
    "email": "test@delphinus-test.de",
    "street": "Lange Reihe 61",
    "postal_code": "22043",
    "city": "Hamburg",
    "state": "Deutschland",
    "phone": "982704",
    "versandkosten": "0,00",
    "payment": "bankpayment"
}

describe('Test: configuration of Vorhänge Stoffmusterbestellung Dekoschal Tiere', () => {

    configurator.configureMuster(test)

})