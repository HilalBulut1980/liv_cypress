var configurator = require("../../../support/configurator_cosiflorplissee.js");

var test =
{
    "name": "LIVConfig. - VS8 - Winkel",
    "produkt": "Tierno 1978",
    "ab_preis": "84,00", //PG2
    "ab_preis_red": "46,20",  //-45%
    "supplier": "VHG",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "VS8",
    "befestigung": "Montage am Fensterflügel mit Winkeln",
    "system": "Cosiflor",
    "hoehe": "800",
    "breite_oben": "400",
    "breite_unten": "1000",
    "ausrichtung": "rechts",
    "schienenfarbe": "Bronze",

    "anzahl": 2,
    "grundpreis": 370,
    "grundpreis_2": 0,
    "bediengriff_preis": 0, 
    "bedienstab_preis": 0,  
    "zusatz_preis": 0,  
    "discount": 0.55,
    "discount_2": 0,
    "vat": 100,
    "mwst_1": 0,
    "versandkosten": 29.90,

    "login": "register",
    "password": "testpassw6",
    "prefix": "Herr",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Max",
    "last_name": "Mustermann",
    "email": "test6@delphinus-test.de",
    "street": "Lange Reihe 63",
    "postal_code": "22043",
    "city": "Hamburg",
    "state": "Deutschland",
    "phone": "1812324",
    "shipping": "new",
    "prefix2": "Frau",
    "first_name2": "Maria",
    "last_name2": "Müller",
    "street2": "Lange Reihe 63",
    "postal_code2": "1235",
    "city2": "Basel",
    "state2": "Schweiz",
    "phone2": "1812324",
    "payment": "bankpayment"
}

describe('Test: configuration of VS8 - Winkel', () => {

     it(test.name, function () {


        configurator.startFromConfigurator(test)
        configurator.configurePlissee(test)

    })

})