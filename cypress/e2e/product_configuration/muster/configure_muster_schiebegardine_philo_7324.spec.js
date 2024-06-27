var configurator = require("../../../support/configurator_muster.js");

var test =
{
    "name": "LIVConfig. - Vorhänge_Stoffmuster_Schiebegardine_Philo-7324",
    "produkt": "/schiebegardinen/philo-7324",  //PG 1
    "ab_preis": "33,00",// Startpreis aus Preistabelle 33,00
    "ab_preis_red": "16,50", // --> 50% 
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

describe('Test: configuration of Vorhänge Stoffmusterbestellung Schiebegardine_Philo-7324', () => {

    configurator.configureMuster(test)

})