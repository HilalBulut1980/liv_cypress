var configurator = require("../../../support/configurator_basisplissee.js");

var test =
{
    "name": "Umsatzsteuer-Test: Fall 3b Deutschland - Gast",
    "produkt": "/plissee/puro-4256",
    "ab_preis": "50,00", //PG0
    "ab_preis_red": "12,00",  //-65% -5,50
    "supplier": "Anwis",
    "modell": "Dachfenster 2",
    "system": "Basis",
    "df_switcher": "Genormt",
    "df_hersteller": "Braas",
    "df_produkt": "BA-DO",
    "df_typ": "115/200 oben|Kunststoff",  //1290 x 1070 //--> Preise aus Datei 'basisplissee-preisliste.xlsx' und Sheet 'Dachfenster Inline Plissee'
    "schienenfarbe": "Silber",

    "anzahl": 2,
    "grundpreis": 288,
    "befestigung_preis": 0,
    "sideProduct_1": 0,
    "sideProduct_2": 0,
    "discount": 0.35,
    "vat": 119,
    "mwst_1": 19,
    "versandkosten": 0, 

    "login": "guest",
    "password": "",
    "prefix": "geschaeftskunde",
    "company_name": "Karstadt Warenhaus GmbH",
    "vatID": "DE811167998",
    "prefix_business": "Herr",
    "first_name": "Max",
    "last_name": "Mustermann",
    "email": "test@delphinus-test.de",
    "street": "Lange Reihe 58",
    "postal_code": "18019",
    "city": "Hamburg",
    "state": "Deutschland",
    "state_code": "DE",
    "phone": "014814",
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

describe('Test: configuration vat ID order - Fall 3b DE', () => {

    it(test.name, function () {

        // configurator.startFromProductPage(test)
        // configurator.configurePlissee(test)

    })
})