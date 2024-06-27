var configurator = require("../../../support/configurator_muster.js");

var test =
{
    "name": "LIVConfig. - Rollo_Stoffmuster_Arkona-3574",
    "produkt": "/rollo/arkona-3574",//PG C
    "ab_preis": "63,00", //nicht 53,00, da RM18 nicht möglich (magento)
    "ab_preis_red": "37,80", //-40% (wenig rabatt)
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
    "first_name": "Max",
    "last_name": "Mustermann",
    "email": "test@delphinus-test.de",
    "street": "Lange Reihe 62",
    "postal_code": "399199",
    "city": "Basel",
    "state": "Schweiz",
    "phone": "1397514",
    "versandkosten": "0,00",
    "payment": "bankpayment"
}

describe('Test: configuration of Rollo Stoffmusterbestellung Arkona-3574', () => {

    configurator.configureMuster(test)

})