var configurator = require("../../../support/configurator_basisplissee.js");

var test =
{
    "name": "LIVConfig.-DF20-Basis-genormt",
    "produkt": "/plissee/puro-4256",
    "ab_preis": "50,00", //PG0
    "ab_preis_red": "12,00",  //-65% -5,50 Preis für Mindestmaß
    "supplier": "Anwis",
    "modell": "Dachfenster 2",
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
    "vat": 100,
    "mwst_1": 0,
    "versandkosten": 29.90,

    "login": "guest",
    "password": "",
    "prefix": "Herr",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Max",
    "last_name": "Mustermann",
    "email": "test@delphinus-test.de",
    "street": "Lange Reihe 61",
    "postal_code": "22043",
    "city": "Hamburg",
    "state": "Deutschland",
    "phone": "982704",
    "shipping": "new",
    "prefix2": "Frau",
    "first_name2": "Maria",
    "last_name2": "Müller",
    "street2": "Lange Reihe 61",
    "postal_code2": "1478",
    "city2": "Basel",
    "state2": "Schweiz",
    "phone2": "982704",
    "payment": "bankpayment"
}

describe('Test: configuration of DF20 Basis - genormt', () => {

    it(test.name, function () {

        configurator.startFromProductPage(test)
        configurator.configurePlissee(test)

    })
})