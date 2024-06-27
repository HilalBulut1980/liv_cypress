var configurator = require("../../../support/configurator_schiebegardine_einzel.js");

var test =
{
    "name": "LIVConfig.-Schiebegardine_einzel_Bosna-7290",
    "produkt": "Bosna 7290", //PG 3 
    "ab_preis": "43,00",// Startpreis aus Preistabelle 43,00
    "ab_preis_red": "21,50", // --> 50% =21,50
    "supplier": "Erfal",
    "system": "Schiebegardine",
    "modell": "Einzelne Paneele",
    "stoff": "Bosna-7290",
    "hoehe": "1500",
    "breite": "500", // --> 1500x500 = 64,00
    "paneelwagen": "ja", // +26,00
    "endstab": "Beschwerungsstab", // +2,00
    "endstabfarbe": "silber", 

    "anzahl": 1,
    "grundpreis": 64,  //PG 3
    "pw_preis": 26,  // R
    "endstab_preis": 2, // R
    "discount": 0.5,
    "vat": 120,
    "mwst_1": 20,
    "versandkosten": 15.03,  
   
    "login": "guest",
    "password": "",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Lena",
    "last_name": "Lehrte",
    "email": "leny@delphinus-test.de",
    "street": "Karlsplatz 6",
    "postal_code": "227668",
    "city": "Wien",
    "state": "Österreich",
    "phone": "775299",
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

describe('Test: configuration of Schiebegardine Bosna-7290 - Einzelpaneel', () => {

     it(test.name, function () {

        
        configurator.startFromConfigurator(test)
        configurator.configureSchiebegardineEinzel(test)

    })

})