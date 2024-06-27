var configurator = require("../../../support/configurator_basisplissee.js");

var test =
{
    "name": "LIVConfig.-DF20-Basis-ungenormt",
    "produkt": "/plissee/loreto-4362",
    "ab_preis": "60,00", //PG2
    "ab_preis_red": "21,00",  //-65% 
    "supplier": "Anwis",
    "modell": "Dachfenster 2",
    "system": "Basis",
    "df_switcher": "Ungenormt",
    "df_glasbreite": "1000",
    "df_glashoehe": "1200",
    "df_falztiefe": "60",
    "df_fluegelbreite": "1200",
    "df_fluegelhoehe": "1400",     //--> Preise aus Datei 'basisplissee-preisliste.xlsx' und Sheet 'Dachfenster Inline Plissee'
    "df_falzart": "Schräger Falz",
    "schienenfarbe": "Schwarz-Braun",

    "anzahl": 2,
    "grundpreis": 390,
    "befestigung_preis": 0,
    "sideProduct_1": 0,
    "sideProduct_2": 0,
    "discount": 0.35,
    "vat": 100,
    "mwst_1": 0,
    "versandkosten": 29.90,

    "login": "register",
    "password": "testpassw5",
    "prefix": "Herr",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Max",
    "last_name": "Mustermann",
    "email": "test5@delphinus-test.de",
    "street": "Lange Reihe 61",
    "postal_code": "22043",
    "city": "Hamburg",
    "state": "Deutschland",
    "phone": "1259244",
    "shipping": "new",
    "prefix2": "Frau",
    "first_name2": "Maria",
    "last_name2": "Müller",
    "street2": "Lange Reihe 61",
    "postal_code2": "1234",
    "city2": "Basel",
    "state2": "Schweiz",
    "phone2": "1259244",
    "payment": "bankpayment"
}

describe('Test: configuration of DF20 Basis - ungenormt', () => {

    it(test.name, function () {

        configurator.startFromProductPage(test)
        configurator.configurePlissee(test)

    })
})