var configurator = require("../../../support/configurator_zubehoer.js");

var test =
{
    "name": "LIVConfig. - Plisseezubehör - Glasleistenwinkel",
    "produkt": "/glasleistenwinkel",
    "supplier": "VHG",
    "art": "weiß, Montage unten (rechts & links)",
    "system": "Zubehör",

    "anzahl": 2,
    "grundpreis": 12,
    "vat": 120,
    "mwst_1": 20,
    "versandkosten": 15.03,

    "login": "guest",
    "password": "",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Maria",
    "last_name": "Müller",
    "email": "maria@delphinus-test.de",
    "street": "Karlsplatz 6",
    "postal_code": "227668",
    "city": "Wien",
    "state": "Österreich",
    "phone": "775299",
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

describe('Test: configuration of Plisseezubehör - Glasleistenwinkel', () => {

    configurator.configureZubehoer(test)

})