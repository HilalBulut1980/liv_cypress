var configurator = require("../../../support/configurator_muster.js");

var test =
{
    "name": "LIVConfig. - Doppelrollo_Stoffmuster_Rayure-5006",
    "produkt": "/doppelrollo/rayure-5006",  //PG 1
    "ab_preis": "46,00",
    "ab_preis_red": "18,40", //-60%
    "system": "Muster",
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

describe('Test: configuration of Doppelrollo Stoffmusterbestellung Rayure-5006', () => {

    configurator.configureMuster(test)

})