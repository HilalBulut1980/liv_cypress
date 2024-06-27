var configurator = require("../../../support/configurator_muster.js");

var test =
{
    "name": "LIVConfig. - Vorhänge_Stoffmuster_Schiebegard._Novi",
    "produkt": "/vorhaenge/schiebegardine/novi-gerade",
    "ab_preis": "49,00",
    "ab_preis_red": "29,40", //-40%
    "system": "Muster_V",
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

describe('Test: configuration of Schiebegardine Stoffmusterbestellung Novi gerade', () => {

    configurator.configureMuster(test)

})