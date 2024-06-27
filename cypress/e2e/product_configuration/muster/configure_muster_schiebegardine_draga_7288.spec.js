var configurator = require("../../../support/configurator_muster.js");

var test =
{
    "name": "LIVConfig. - Vorhänge_Stoffmuster_Schiebegardine_Draga-7288",
    "produkt": "/schiebegardinen/draga-7288", //PG 2
    "ab_preis": "36,00",// Startpreis aus Preistabelle 36,00
    "ab_preis_red": "18,00", // --> 50% 
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

describe('Test: configuration of Vorhänge Stoffmusterbestellung Schiebegardine_Draga-7288', () => {

    configurator.configureMuster(test)

})