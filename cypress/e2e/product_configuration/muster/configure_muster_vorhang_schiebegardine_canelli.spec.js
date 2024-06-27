var configurator = require("../../../support/configurator_muster.js");

var test =
{
    "name": "LIVConfig. - Vorhänge_Stoffmuster_Schiebegard._Canelli",
    "produkt": "/vorhaenge/schiebegardine/canelli-gerade",
    "ab_preis": "43,00",
    "ab_preis_red": "25,80", //-40%
    "system": "Muster_V",
    "anzahl": "",
    "unit": "kostenlos",
    "total": "kostenlos",
    "vatRateLine_1": "21",
    "vatProduct": "0,00",
    "vatAmountTotal": "0,00",

    //customer data
    "login": "register",
    "password": "testpassw8",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "", 
    "first_name": "Maria",
    "last_name": "Müller",
    "email": "maria4@delphinus-test.de",
    "street": "Karlsplatz 7",
    "postal_code": "342022",
    "city": "Barcelona",
    "state": "Spanien",
    "phone": "1190109",
    "versandkosten": "0,00",
    "payment": "bankpayment"
}

describe('Test: configuration of Schiebegardine Stoffmusterbestellung Canelli', () => {

    configurator.configureMuster(test)

})