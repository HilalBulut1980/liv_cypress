var configurator = require("../../../support/configurator_muster.js");

var test =
{
    "name": "LIVConfig. - Raffrollo_Stoffmuster_Corsia-9135",
    "produkt": "/raffrollo/corsia-9135",  //PG D
    "ab_preis": "385,00",
    "ab_preis_red": "173,25", //-55%
    "system": "Muster",
    "anzahl": "",
    "unit": "kostenlos",
    "total": "kostenlos",
    "vatRateLine_1": "27",
    "vatProduct": "0,00",
    "vatAmountTotal": "0,00",

    //customer data
    "login": "guest",
    "password": "",
    "prefix": "Herr",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Marcel",
    "last_name": "Lehnhardt",
    "email": "marc@delphinus-test.de",
    "street": "Teststreet 65",
    "postal_code": "12587",
    "city": "Budapest",
    "state": "Ungarn",
    "phone": "1236987",
    "versandkosten": "0,00",
    "payment": "bankpayment"
}

describe('Test: configuration of Raffrollo Stoffmusterbestellung Corsia-9126', () => {

    configurator.configureMuster(test)

})