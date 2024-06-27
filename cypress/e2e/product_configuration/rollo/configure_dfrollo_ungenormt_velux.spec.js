var configurator = require("../../../support/configurator_rollo.js");

var test = {
    "name": "LIVConfig. - Rollo Maß DF_VELUX_ungen._H/P/T",
    "produkt": "Basic DimOut 3027",  //PG A
    "ab_preis": "119,00",
    "ab_preis_red": "48,20",  //-55% -10%
    "supplier": "Anwis",
    "rollotyp": "Dachfensterrollos",
    "system": "Maß_Rollo",
    "kassettenfarbe": "beige",
    "df_hersteller": "Velux",
    "df_produkt": "IPL",
    "df_typ": "C 02|",
    "df_falzart": "Gerader Falz",
    "df_fluegelbreite": "1073",
    "df_fluegelhoehe": "1200",  //1200x1100 --> 315
    "bedienstab": "150cm",  //+56

    "anzahl": 2,
    "grundpreis": 315,
    "befestigung_preis": 0,
    "ketten_preis": 0,
    "kassetten_preis": 0,
    "pendel_preis": 0,
    "montageleiste_preis": 0,
    "bedienstab_preis": 56,
    "volant_preis": 0,
    "motor_preis": 0,
    "discount": 0.45,
    "discount_extra": 0.9,
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
    "postal_code2": "1234",
    "city2": "Basel",
    "state2": "Schweiz",
    "phone2": "982704",
    "payment": "bankpayment"
}


describe('Test: configuration of Rollo Maß DF_VELUX_ungen._H/P/T', () => {

    it(test.name, function () {

        configurator.startFromConfigurator(test)
        configurator.configureRollo(test)

    })

})