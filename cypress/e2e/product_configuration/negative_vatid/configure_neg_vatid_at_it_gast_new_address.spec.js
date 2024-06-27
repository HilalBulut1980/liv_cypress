var configurator = require("../../../support/configurator_neg_vatid.js");

var test =
{
    "name": "neg. Umsatzsteuertest ungültige UID DE/IT new address",
    "produkt": "/plissee/puro-4256",
    "ab_preis": "50,00", //PG0
    "ab_preis_red": "12,00",  //-65% -5,50 Preis für Mindestmaß
    "supplier": "Anwis",
    "produktgruppe": "Dachfensterplissees",
    "modell": "Dachfenster 2",
    "system": "Basis",
    "df_switcher": "Genormt",
    "df_hersteller": "Braas",
    "df_produkt": "BA-DO",
    "df_typ": "115/200 oben|Kunststoff",  //1290x1070
    "schienenfarbe": "Weiß",

    "anzahl": 2,
    "grundpreis": 288,
    "grundpreis_2": 0,
    "bediengriff_preis": 0, 
    "bedienstab_preis": 0,  
    "zusatz_preis": 0,  
    "discount": 0.35,
    "discount_2": 0,
    "vat": 100,
    "mwst_1": 0,
    "versandkosten": 16.81,

    "login": "guest",
    "password": "",
    "prefix": "geschaeftskunde",
    "company_name": "TUI Cruises AG",

    "vatID1_false": "AT33803701",
    "vatID1_correct": "ATU33803701",

    "prefix_business": "Frau",
    "first_name": "Lara",
    "last_name": "Uhlmann",
    "email": "lara@delphinus-test.de",
    "street": "Hammerbrook 125",
    "postal_code": "1100",
    "city": "Wien",
    "state": "Österreich",
    "state_code": "ATU",
    "phone": "145968",
    "shipping": "new",
    "prefix2": "geschaeftskunde",
    "company_name2": "Lidl IT",

    "vatID2_false": "ITL1111111111",
    "vatID2_correct": "IT01736210210",

    "prefix_business2": "Herr",
    "first_name2": "Franco",
    "last_name2": "Stefani",
    "street2": "3-ti mart str. 21 1",
    "postal_code2": "9514",
    "city2": "Milano",
    "state2": "Italien",
    "state_code_2": "IT",
    "phone2": "225588",    
    "payment": "bankpayment"
}

describe('Configuration of neg. VAT ID order - DE/IT Gast - new address', () => {

    it(test.name, function () {

        // configurator.startFromProductPage(test)
        // configurator.configure_neg_vatid(test)

    })

})