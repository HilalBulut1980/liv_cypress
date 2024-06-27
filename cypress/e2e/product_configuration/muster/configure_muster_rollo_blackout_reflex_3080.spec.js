var configurator = require("../../../support/configurator_muster.js");

var test =
{
    "name": "LIVConfig. - Rollo_Stoffmuster_BlackOut-Reflex-3080",
    "produkt": "/rollo/blackout-reflex-3080",//PG B
    "ab_preis": "46,00",
    "ab_preis_red": "20,70", //-55%
    "system": "Muster",
    "anzahl": "",
    "unit": "kostenlos",
    "total": "kostenlos",
    "vatRateLine_1": "20",
    "vatProduct": "0,00",
    "vatAmountTotal": "0,00",

    //customer data
    "login": "register",
    "password": "testpassw10",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Maria",
    "last_name": "Müller",
    "email": "maria5@delphinus-test.de",
    "street": "Karlsplatz 6",
    "postal_code": "380140",
    "city": "Wien",
    "state": "Österreich",
    "phone": "1328379",
    "versandkosten": "0,00",
    "payment": "bankpayment"
}

describe('Test: configuration of Rollo Stoffmusterbestellung BlackOut-Reflex-3080', () => {

    configurator.configureMuster(test)

})