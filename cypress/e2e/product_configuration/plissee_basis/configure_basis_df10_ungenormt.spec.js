var configurator = require("../../../support/configurator_basisplissee.js");

var test =
{
    "name": "LIVConfig.-DF10-Basis-ungenormt",
    "produkt": "/plissee/flute-1142",
    "ab_preis": "67,00", //PG4
    "ab_preis_red": "23,45", //-65%
    "supplier": "Anwis",
    "modell": "Dachfenster 1",
    "system": "Basis",
    "df_switcher": "Ungenormt",
    "df_glasbreite": "800",
    "df_glashoehe": "1200",
    "df_falztiefe": "50",
    "df_fluegelbreite": "900",
    "df_fluegelhoehe": "1300",    //--> Preise aus Datei 'basisplissee-preisliste.xlsx' und Sheet 'Dachfenster Inline Plissee'
    "df_falzart": "Gerader Falz",
    "schienenfarbe": "Silber",

    "anzahl": 2,
    "grundpreis": 398,
    "befestigung_preis": 0,
    "sideProduct_1": 0,
    "sideProduct_2": 0,
    "discount": 0.35,
    "vat": 121,
    "mwst_1": 21,
    "versandkosten": 20.34, //20,00 /119 *121

    "login": "register",
    "password": "testpassw4",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Maria",
    "last_name": "Müller",
    "email": "maria4@delphinus-test.de",
    "street": "Karlsplatz 7",
    "postal_code": "342022",
    "city": "Barcelona",
    "state": "Spanien",
    "phone": "1190109",
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

describe('Test: configuration of DF10 Basis - ungenormt', () => {

    it(test.name, function () {

        configurator.startFromProductPage(test)
        configurator.configurePlissee(test)

    })
})