var configurator = require("../../../support/configurator_rollo.js");

var test = {
    "name": "LIVConfig. - Rollo Maß DF_FAKRO_ungen._H/P/T",
    "produkt": "Silves 3692",  //PG A
    "ab_preis": "119,00",
    "ab_preis_red": "48,20",  //-55% -10%
    "supplier": "Anwis",
    "rollotyp": "Dachfensterrollos",
    "system": "Maß_Rollo",
    "kassettenfarbe": "beige",
    "df_hersteller": "Fakro",
    "df_produkt": "FTP 1",
    "df_typ": "01 55 / 78|",
    "df_falzart": "Gerader Falz",
    "df_fluegelbreite": "360",
    "df_fluegelhoehe": "713",  //800x400  --> 189,00
    "bedienstab": "150cm",  // +56

    "anzahl": 2,
    "grundpreis": 189,
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

describe('Test: configuration of Rollo Maß DF_FAKRO_ungen._H/P/T', () => {

    it(test.name, function () {

        configurator.startFromConfigurator(test)
        configurator.configureRollo(test)

    })
})