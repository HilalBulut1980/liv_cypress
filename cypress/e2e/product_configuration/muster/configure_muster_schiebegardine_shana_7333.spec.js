var configurator = require("../../../support/configurator_muster.js");

var test =
{
    "name": "LIVConfig. - Vorhänge_Stoffmuster_Schiebegardine_Shana-7333",
    "produkt": "/schiebegardinen/shana-7333",   //PG 3 
    "ab_preis": "43,00",// Startpreis aus Preistabelle 43,00
    "ab_preis_red": "21,50", // --> 50% =21,50
    "system": "Muster_V",
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

describe('Test: configuration of Vorhänge Stoffmusterbestellung Schiebegardine_Shana-7333', () => {

    configurator.configureMuster(test)

})