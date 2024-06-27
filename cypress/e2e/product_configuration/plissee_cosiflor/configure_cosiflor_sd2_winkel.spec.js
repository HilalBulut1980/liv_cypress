var configurator = require("../../../support/configurator_cosiflorplissee.js");

var test =
{
    "name": "LIVConfig. - SD2 - Winkel",
    "produkt": "/plissee/losanga-4281",
    "ab_preis": "75,00", //PG1
    "ab_preis_red": "41,25",  //-45% 
    "supplier": "VHG",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "SD2",
    "befestigung": "Montage am Fensterflügel mit Winkeln",
    "system": "Cosiflor",
    "hoehe": "1600",
    "breite": "1200",
    "ausrichtung": "rechts",
    "schienenfarbe": "Bronze",

    "anzahl": 1,
    "grundpreis": 446,
    "grundpreis_2": 0,
    "bediengriff_preis": 0, 
    "bedienstab_preis": 0,  
    "zusatz_preis": 0,  
    "discount": 0.55,
    "discount_2": 0,
    "vat": 122,
    "mwst_1": 22,
    "versandkosten": 20.51,

    "login": "guest",
    "password": "",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Jana",
    "last_name": "Triebl",
    "email": "jana@delphinus-test.de",
    "street": "Lehrengasse 658",
    "postal_code": "1258",
    "city": "Ljubljana",
    "state": "Slowenien",
    "phone": "1254789",
    "shipping": "same",
    "prefix2": "",
    "first_name2": "",
    "last_name2": "",
    "street2": "",
    "postal_code2": "",
    "city2": "",
    "state2": "",
    "phone2": "",
    "payment": "bankpayment"
}

describe('Test: configuration of SD2 - Winkel', () => {

   it(test.name, function () {


        configurator.startFromProductPage(test)
        configurator.configurePlissee(test)

    })

})