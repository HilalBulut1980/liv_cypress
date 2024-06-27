var configurator = require("../../../support/configurator_zubehoer.js");

var test =
{
    "name": "LIVConfig. - Plisseezubehör - Bedienstab",
    "produkt": "/bedienstab",
    "supplier": "VHG",
    "art": "200 cm +8,00 €", //44 + 8
    "option": "Dachfensterplissee",
    "system": "Zubehör",

    "anzahl": 3,
    "grundpreis": 52,
    "vat": 120,
    "mwst_1": 20,
    "versandkosten": 15.02,

    "login": "register",
    "password": "testpassw10",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Maria",
    "last_name": "Müller",
    "email": "maria5@delphinus-test.de",
    "street": "Karlsplatz 6",
    "postal_code": "380140",
    "city": "Wien",
    "state": "Österreich",
    "phone": "1328379",
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

describe('Test: configuration of Plisseezubehör - Bedienstab', () => {

    configurator.configureZubehoer(test)

})