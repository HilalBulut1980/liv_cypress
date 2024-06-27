var configurator = require("../../../support/configurator_basisplissee.js");

var test =
{
    "name": "Umsatzsteuertest Fall 3b different Address DE-->BG valid",
    "produkt": "/plissee/puro-4256",
    "ab_preis": "50,00", //PG0
    "ab_preis_red": "12,00",  //-65% -5,50 Preis für Mindestmaß
    "supplier": "Anwis",
    "modell": "Dachfenster 2",
    "system": "Basis",
    "df_switcher": "Genormt",
    "df_hersteller": "Braas",
    "df_produkt": "BA-DO",
    "df_typ": "115/200 oben|Kunststoff", //1290x1070
    "schienenfarbe": "Weiß",

    "anzahl": 2,
    "grundpreis": 288,
    "befestigung_preis": 0,
    "sideProduct_1": 0,
    "sideProduct_2": 0,
    "discount": 0.35,
    "vat": 100,
    "mwst_1": 0,
    "versandkosten": 16.81, 

    "login": "guest",
    "password": "",
    "prefix": "geschaeftskunde",
    "company_name": "TUI Cruises GmbH",
    "vatID": "DE259608001",
    "prefix_business": "Frau",
    "first_name": "Lara",
    "last_name": "Uhlmann",
    "email": "lara@delphinus-test.de",
    "street": "Hammerbrook 125",
    "postal_code": "20097",
    "city": "Hamburg",
    "state": "Deutschland",
    "state_code": "DE",
    "phone": "145968",
    "shipping": "new",
    "prefix2": "geschaeftskunde",
    "company_name2": "Lidl BG",
    "vatID_2": "BG131071587",
    "prefix_business2": "Herr",
    "first_name2": "Franco",
    "last_name2": "Menden",
    "street2": "3-ti mart str. 21 1",
    "postal_code2": "9514",
    "city2": "Sofia",
    "state2": "Bulgarien",
    "state_code_2": "BG",
    "phone2": "225588",    
    "payment": "bankpayment"
}

describe('Test: configuration vat ID order - Umsatzsteuertest Fall 3b different Address DE-->BG valid - Fall 3b BG', () => {

    it(test.name, function () {

        // configurator.startFromProductPage(test)
        // configurator.configurePlissee(test)

    })
})