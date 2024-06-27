var configurator = require("../../../support/configurator_rollo.js");

var test = {
    "name": "LIVConfig. - Rollo Maß DF_VELUX_ungen._H",
    "produkt": "Basic Dimout 3686",  //PG A
    "ab_preis": "119,00",
    "ab_preis_red": "48,20",  //-55% -10%
    "supplier": "Anwis",
    "rollotyp": "Dachfensterrollos",
    "system": "Maß_Rollo",
    "kassettenfarbe": "silber",
    "df_hersteller": "Velux",
    "df_produkt": "anderes Produkt",
    "df_falzart": "Schräger Falz",
    "df_fluegelbreite": "1100",
    "df_fluegelhoehe": "1300",  //1300x1100 --> 318

    "anzahl": 4,
    "grundpreis": 318,
    "befestigung_preis": 0,
    "ketten_preis": 0,
    "kassetten_preis": 0,
    "pendel_preis": 0,
    "montageleiste_preis": 0,
    "bedienstab_preis": 0,
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


describe('Test: configuration of Rollo Maß DF_VELUX_ungen._H', () => {

    it(test.name, function () {

        configurator.startFromConfigurator(test)
        configurator.configureRollo(test)

    })

})