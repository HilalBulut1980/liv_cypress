var configurator = require("../../../support/configurator_cosiflorplissee.js");

var test =
{
    "name": "LIVConfig. - FS1 - Mauerwerk",
    "produkt": "/plissee/vivir-4274",
    "ab_preis": "84,00", //PG2
    "ab_preis_red": "46,20",  //-45% 
    "supplier": "VHG",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "FS1",
    "befestigung": "Montage am Mauerwerk",
    "system": "Cosiflor",
    "breite": "800",
    "hoehe_links": "600",
    "hoehe_rechts": "1000",
    "ausrichtung": "rechts",
    "schienenfarbe": "Bronze",

    "anzahl": 2,
    "grundpreis": 291,
    "grundpreis_2": 0,
    "bediengriff_preis": 0, 
    "bedienstab_preis": 0,  
    "zusatz_preis": 0,  
    "discount": 0.55,
    "discount_2": 0,
    "vat": 120,
    "mwst_1": 20,
    "versandkosten": 15.02,

    "login": "guest",
    "password": "",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Maria",
    "last_name": "Müller",
    "email": "maria@delphinus-test.de",
    "street": "Karlsplatz 8",
    "postal_code": "456376",
    "city": "Wien",
    "state": "Österreich",
    "phone": "1604919",
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

describe('Test: configuration of FS1 - Mauerwerk', () => {

    it(test.name, function () {


        configurator.startFromProductPage(test)
        configurator.configurePlissee(test)

    })

})