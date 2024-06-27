var configurator = require("../../../support/configurator_rollo.js");

var test = {
    "name": "LIVConfig. - Rollo Maß DF_FAKRO_genormt",
    "produkt": "Silves 3693",  //PG A
    "ab_preis": "119,00",
    "ab_preis_red": "48,20",  //-55% -10%
    "supplier": "Anwis",
    "rollotyp": "Dachfensterrollos",
    "system": "Maß_Rollo",
    "kassettenfarbe": "weiß",
    "df_hersteller": "Fakro",
    "df_produkt": "PTL",
    "df_typ": "55 / 118|Kunststoff",  // 1100x400 --> 200,00 PG A
    "bedienstab": "100cm",  //+34

    "anzahl": 1,
    "grundpreis": 200,
    "befestigung_preis": 0,
    "ketten_preis": 0,
    "kassetten_preis": 0,
    "pendel_preis": 0,
    "montageleiste_preis": 0,
    "bedienstab_preis": 34,
    "volant_preis": 0,
    "motor_preis": 0,
    "discount": 0.45,
    "discount_extra": 0.9,
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
    "postal_code": "1234",
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

describe('Test: configuration of Rollo Maß DF_FAKRO_genormt', () => {


    it(test.name, function () {

        configurator.startFromConfigurator(test)
        configurator.configureRollo(test)

    })

})