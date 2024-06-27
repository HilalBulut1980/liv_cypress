var configurator = require("../../../support/configurator_muster.js");

var test =
{
    "name": "LIVConfig. - Plissee_Stoffmuster_Basis-Object-1854",
    "produkt": "/plissee/basis-object-1854",  //PG 0
    "ab_preis": "55,00", //da PG 0
    "ab_preis_red": "20,25", //R 1 + R 40
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

describe('Test: configuration of Plissee Stoffmusterbestellung Basis-Object-1854', () => {

    configurator.configureMuster(test)

})