var configurator = require("../../../support/configurator_muster.js");

var test =
{
    "name": "LIVConfig. - Doppelrollo_Stoffmuster_Acorda-5089",
    "produkt": "/doppelrollo/acorda-5089",  //PG 1
    "ab_preis": "46,00",
    "ab_preis_red": "18,40", //-60%
    "system": "Muster",
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

describe('Test: configuration of Doppelrollo Stoffmusterbestellung Acorda-5089', () => {

    configurator.configureMuster(test)

})