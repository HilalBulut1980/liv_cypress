var configurator = require("../../../support/configurator_cosiflorplissee.js");

var test =
{
    "name": "LIVConfig. - VS3SD - Cosiflor - Designgriff",
    "produkt": "Lindura 1584",
    "ab_preis": "55,00", //PG0
    "ab_preis_red": "20,25",  //-45% Regel 1 + Regel 40: 10,00 bei 300x300
    "supplier": "VHG",
    "produktgruppe": "rechteckige Plissees",
    "modell": "VS3 SD",
    "befestigung": "Montage direkt vor dem Glas",
    "system": "Cosiflor",
    "hoehe": "1800",
    "breite": "1000",
    "unterer_Stoff": "Ambience 1538",  //PG0 R6
    "bediengriff": "Design",  //+25,50
    "bedienstab": "Länge 250cm",  //+56,50
    "schienenfarbe": "Bronze",

    "anzahl": 2,
    "grundpreis": 179,
    "grundpreis_2": 179,
    "bediengriff_preis": 25.50, 
    "bedienstab_preis": 56.50,  
    "zusatz_preis": 0,  
    "discount": 0.55,
    "discount_2": 0.50,
    "vat": 120,
    "mwst_1": 20,
    "versandkosten": 15.02,

    "login": "guest",
    "password": "",
    "prefix": "Herr",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Max",
    "last_name": "Mustermann",
    "email": "test@delphinus-test.de",
    "street": "Lange Reihe 60",
    "postal_code": "20102",
    "city": "Budapest",
    "state": "Ungarn",
    "phone": "123459",
    "shipping": "new",
    "prefix2": "Frau",
    "first_name2": "Maria",
    "last_name2": "Müller",
    "street2": "Lange Reihe 60",
    "postal_code2": "20102",
    "city2": "Wien",
    "state2": "Österreich",
    "phone2": "123459",
    "payment": "bankpayment"
}

describe('Test: configuration of VS3 SD - Cosiflor - Designgriff', () => {

   it(test.name, function () {


        configurator.startFromConfigurator(test)
        configurator.configurePlissee(test)

    })

})