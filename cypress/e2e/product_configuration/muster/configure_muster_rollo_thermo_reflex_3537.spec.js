var configurator = require("../../../support/configurator_muster.js");

var test =
{
    "name": "LIVConfig. - Rollo_Stoffmuster_Thermo-Reflex-3537",
    "produkt": "/rollo/thermo-reflex-3537",//PG B
    "ab_preis": "46,00",
    "ab_preis_red": "20,70", //-55%
    "system": "Muster",
    "anzahl": "",
    "unit": "kostenlos",
    "total": "kostenlos",
    "vatRateLine_1": "21",
    "vatProduct": "0,00",
    "vatAmountTotal": "0,00",

    //customer data
    "login": "guest",
    "password": "",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Maria",
    "last_name": "Müller",
    "email": "maria@delphinus-test.de",
    "street": "Karlsplatz 7",
    "postal_code": "418258",
    "city": "Barcelona",
    "state": "Spanien",
    "phone": "1466649",
    "versandkosten": "0,00",
    "payment": "bankpayment"
}

describe('Test: configuration of Rollo Stoffmusterbestellung Thermo-Reflex-3537', () => {

    configurator.configureMuster(test)

})