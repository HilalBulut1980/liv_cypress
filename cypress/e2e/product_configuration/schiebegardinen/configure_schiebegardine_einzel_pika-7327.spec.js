var configurator = require("../../../support/configurator_schiebegardine_einzel.js");

var test =
{
    "name": "LIVConfig.-Schiebegardine_einzel_Pika-7327",
    "produkt": "Pika 7327", //PG 1
    "ab_preis": "33,00",// Startpreis aus Preistabelle 33,00
    "ab_preis_red": "16,50", // --> 50% 
    "supplier": "Erfal",
    "system": "Schiebegardine",
    "modell": "Einzelne Paneele",
    "stoff": "Pika-7327",
    "hoehe": "2000",
    "breite": "1000", // --> 2000x1000 = 85,00
    "paneelwagen": "nein", 
    "endstab": "Designprofil", // +25,00
    "endstabfarbe": "silber", 

    "anzahl": 4,
    "grundpreis": 85,  //PG 1
    "pw_preis": 0,  // R
    "endstab_preis": 25, // R
    "discount": 0.5,
    "vat": 119,
    "mwst_1": 19,
    "versandkosten": 0,

    "login": "guest",
    "password": "",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Maria",
    "last_name": "Müller",
    "email": "maria@delphinus-test.de",
    "street": "Karlsplatz 6",
    "postal_code": "22043",
    "city": "Lübeck",
    "state": "Deutschland",
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

describe('Test: configuration of Schiebegardine Pika-7327 - Einzelpaneel', () => {

    it(test.name, function () {


        configurator.startFromConfigurator(test)
        configurator.configureSchiebegardineEinzel(test)

    })

})