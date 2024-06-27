var configurator = require("../../../support/configurator_rollo.js");

var test = {
    "name": "LIVConfig. - Rollo Maß DF_ROTO_ungen._H/P",
    "produkt": "/rollo/horizon-blackout-3260",  //PG C
    "ab_preis": "137,00",  //nur DF-Rollo möglich PG C
    "ab_preis_red": "55,49", //-55% -10% 
    "supplier": "Anwis",
    "rollotyp": "Dachfensterrollos",
    "system": "Maß_Rollo",
    "kassettenfarbe": "silber",
    "df_hersteller": "Roto",
    "df_falzart": "Gerader Falz",
    "df_fluegelbreite": "800",
    "df_fluegelhoehe": "1200",  //1200x800 --> 34,00
    "bedienstab": "200cm",  //+61

    "anzahl": 3,
    "grundpreis": 344,
    "befestigung_preis": 0,
    "ketten_preis": 0,
    "kassetten_preis": 0,
    "pendel_preis": 0,
    "montageleiste_preis": 0,
    "bedienstab_preis": 61,
    "volant_preis": 0,
    "motor_preis": 0,
    "discount": 0.45,
    "discount_extra": 0.9,
    "vat": 121,
    "mwst_1": 21,
    "versandkosten": 20.34,

    "login": "guest",
    "password": "",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Maria",
    "last_name": "Müller",
    "email": "maria@delphinus-test.de",
    "street": "Karlsplatz 5",
    "postal_code": "265786",
    "city": "Barcelona",
    "state": "Spanien",
    "phone": "913569",
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

describe('Test: configuration of Rollo Maß DF_ROTO_ungen._H/P', () => {

    it(test.name, function () {

        configurator.startFromProductPage(test)
        configurator.configureRollo(test)

    })

})