var configurator = require("../../../support/configurator_basisplissee.js");

var test =
{
    "name": "LIVConfig.-DF10-Basis-genormt",
    "produkt": "/plissee/grinza-4134",
    "ab_preis": "60,00",  //PG2
    "ab_preis_red": "21,00",  //60 - 65%
    "supplier": "Anwis",
    "modell": "Dachfenster 1",
    "system": "Basis",
    "df_switcher": "Genormt",
    "df_hersteller": "Dörken / Braas",
    "df_produkt": "DGB / BGV (Plus)",
    "df_typ": "95 / 90|Kunststoff",  //640 x 740  --> Preise aus Datei 'basisplissee-preisliste.xlsx' und Sheet 'Dachfenster Inline Plissee'
    "schienenfarbe": "Schwarz-Braun",

    "anzahl": 1,
    "grundpreis": 221,
    "befestigung_preis": 0,
    "sideProduct_1": 0,
    "sideProduct_2": 0,
    "discount": 0.35,
    "vat": 121,
    "mwst_1": 21,
    "versandkosten": 20.34, //20,00 /119 *121

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

describe('Test: configuration of DF10 Basis - genormt', () => {

    it(test.name, function () {

        configurator.startFromProductPage(test)
        configurator.configurePlissee(test)

    })
})