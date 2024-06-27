var configurator = require("../../../support/configurator_cosiflorplissee.js");

var test =
{
    "name": "LIVConfig. - FS2 - Klemmträger",
    "produkt": "/plissee/basis-object-1506",
    "ab_preis": "55,00", //PG0
    "ab_preis_red": "20,25",  //-45% Regel 1 + Regel 40: 10,00 bei 300x300
    "supplier": "VHG",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "FS2",
    "befestigung": "Montage am Fensterflügel mit Klemmträgern - ohne Bohren",  //+16,50
    "system": "Cosiflor",
    "breite": "1000",
    "hoehe_links": "800",
    "hoehe_rechts": "1200",
    "ausrichtung": "rechts",
    "schienenfarbe": "Silber",

    "anzahl": 3,
    "grundpreis": 303,
    "grundpreis_2": 0,
    "bediengriff_preis": 0, 
    "bedienstab_preis": 0,  
    "zusatz_preis": 16.50,  
    "discount": 0.55,
    "discount_2": 0,
    "vat": 119,
    "mwst_1": 19,
    "versandkosten": 0,

    "login": "guest",
    "password": "",
    "prefix": "Herr",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Max",
    "last_name": "Mustermann",
    "email": "test@delphinus-test.de",
    "street": "Lange Reihe 62",
    "postal_code": "2365",
    "city": "Basel",
    "state": "Schweiz",
    "phone": "1674054",
    "shipping": "new",
    "prefix2": "Frau",
    "first_name2": "Maria",
    "last_name2": "Müller",
    "street2": "Lange Reihe 62",
    "postal_code2": "22043",
    "city2": "Hamburg",
    "state2": "Deutschland",
    "phone2": "1674054",
    "payment": "bankpayment"
}

describe('Test: configuration of FS2 - Klemmträger', () => {

    it(test.name, function () {


        configurator.startFromProductPage(test)
        configurator.configurePlissee(test)

    })

})