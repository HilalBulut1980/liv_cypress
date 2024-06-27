var configurator = require("../../../support/configurator_cosiflorplissee.js");

var test =
{
    "name": "LIVConfig.-DF20-Cosiflor-ungenormt_Wabe",
    "produkt": "/plissee/wabe-sincero-2187",
    "ab_preis": "88,00", //PG3 --> Preis auf Produktseite (günstigstes Modell )
    "ab_preis_red": "66,00",  //-25% 
    "supplier": "VHG",
    "produktgruppe": "Dachfensterplissees",
    "modell": "DF20",
    "system": "Cosiflor",
    "df_switcher": "Ungenormt",
    "df_glasbreite": "1000",
    "df_glashoehe": "1200",
    "df_falztiefe": "60",
    "df_fluegelbreite": "1200",
    "df_fluegelhoehe": "1400",  //1400 x x1200
    "df_falzart": "Schräger Falz",
    "schienenfarbe": "Weiß",

    "anzahl": 3,
    "grundpreis": 446,
    "grundpreis_2": 0,
    "bediengriff_preis": 0, 
    "bedienstab_preis": 0,  
    "zusatz_preis": 0,  
    "discount": 0.75,
    "discount_2": 0,
    "vat": 100,
    "mwst_1": 0,
    "versandkosten": 29.90,

    "login": "register",
    "password": "testpassw5",
    "prefix": "Herr",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Florian",
    "last_name": "Kedermann",
    "email": "flo@delphinus-test.de",
    "street": "Lange Reihe 61",
    "postal_code": "22043",
    "city": "Hamburg",
    "state": "Deutschland",
    "phone": "1259244",
    "shipping": "new",
    "prefix2": "Frau",
    "first_name2": "Julia",
    "last_name2": "Romanov",
    "street2": "Lange Reihe 61",
    "postal_code2": "1234",
    "city2": "Basel",
    "state2": "Schweiz",
    "phone2": "1259244",
    "payment": "bankpayment"
}

describe('Test: configuration of DF20-Cosiflor-ungenormt_Wabe', () => {

   it(test.name, function () {

        configurator.startFromProductPage(test)
        configurator.configurePlissee(test)

    })
})