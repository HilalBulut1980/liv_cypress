var configurator = require("../../../support/configurator_muster.js");

var test =
{
    "name": "LIVConfig. - Doppelrollo_Stoffmuster_Remsa-5076",
    "produkt": "/doppelrollo/remsa-5076",  //PG 2
    "ab_preis": "60,00",
    "ab_preis_red": "24,00", //-60%
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
    "street": "Karlsplatz 5",
    "postal_code": "265786",
    "city": "Barcelona",
    "state": "Spanien",
    "phone": "913569",
    "versandkosten": "0,00",
    "payment": "bankpayment"
}

describe('Test: configuration of Doppelrollo Stoffmusterbestellung Remsa-5076', () => {

    configurator.configureMuster(test)

})