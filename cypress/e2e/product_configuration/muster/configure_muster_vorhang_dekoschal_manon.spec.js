var configurator = require("../../../support/configurator_muster.js");

var test =
{
    "name": "LIVConfig. - Vorhänge_Stoffmuster_Vorhang_Manon",
    "produkt": "/vorhaenge/dekoschal/manon",
    "ab_preis": "117,50",
    "ab_preis_red": "70,50", //-40%
    "system": "Muster_V",
    "anzahl": "",
    "unit": "kostenlos",
    "total": "kostenlos",
    "vatRateLine_1": "20",
    "vatProduct": "0,00",
    "vatAmountTotal": "0,00",

    //customer data
    "login": "register",
    "password": "testpassw6",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Maria",
    "last_name": "Müller",
    "email": "maria3@delphinus-test.de",
    "street": "Karlsplatz 6",
    "postal_code": "303904",
    "city": "Wien",
    "state": "Österreich",
    "phone": "1051839",
    "versandkosten": "0,00",
    "payment": "bankpayment"
}

describe('Test: configuration of Vorhänge Stoffmusterbestellung Dekoschal Manon', () => {

    configurator.configureMuster(test)

})