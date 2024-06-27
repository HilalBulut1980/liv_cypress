var configurator = require("../../../support/configurator_neg_vatid.js");

var test =
{
    "name": "neg. Umsatzsteuertest ungültige UID AT same address",
    "produkt": "/plissee/color-breeze-1360",
    "ab_preis": "55,00", //PG0
    "ab_preis_red": "20,25",  //-45% Regel 1 + Regel 40: 10,00 bei 300x300
    "supplier": "VHG",
    "produktgruppe": "rechteckige Plissees",
    "modell": "VS2",
    "befestigung": "Montage direkt vor dem Glas",
    "system": "Cosiflor",
    "hoehe": "1400",
    "breite": "700",
    "schienenfarbe": "Silber",

    "anzahl": 3,
    "grundpreis": 120,
    "grundpreis_2": 0,
    "bediengriff_preis": 0,
    "bedienstab_preis": 0,
    "zusatz_preis": 0,
    "discount": 0.55,
    "discount_2": 0,
    "vat": 120,
    "mwst_1": 20,
    "versandkosten": 15.02,

    "login": "guest",
    "password": "",
    "prefix": "geschaeftskunde",
    "company_name": "SPAR Österreichische Warenhandels-AG",

    "vatID1_false": "AT33803701",
    "vatID1_correct": "ATU33803701",

    "prefix_business": "Frau",
    "first_name": "Martina",
    "last_name": "Schulz",
    "email": "martina@delphinus-test.de",
    "street": "Lange Reihe 2",
    "postal_code": "1010",
    "city": "Wien",
    "state": "Österreich",
    "state_code": "ATU",
    "phone": "014814",
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

describe('Configuration of neg. VAT ID order - AT Gast - same address', () => {

    it(test.name, function () {

        configurator.startFromProductPage(test)
        configurator.configure_neg_vatid(test)

    })
})