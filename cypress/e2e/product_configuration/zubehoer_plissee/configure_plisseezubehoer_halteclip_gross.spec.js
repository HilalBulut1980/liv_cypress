var configurator = require("../../../support/configurator_zubehoer.js");

var test =
{
    "name": "LIVConfig. - Plisseezubehör - Halteclip_groß",
    "produkt": "/halteclip-gross",
    "supplier": "VHG",
    "art": "silber",
    "system": "Zubehör",

    "anzahl": 4,
    "grundpreis": 5,
    "vat": 120,
    "mwst_1": 20,
    "versandkosten": 15.02,

    "login": "register",
    "password": "testpassw6",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Maria",
    "last_name": "Müller",
    "email": "maria3@delphinus-test.de",
    "street": "Karlsplatz 6",
    "postal_code": "303904",
    "city": "Wien",
    "state": "Österreich",
    "phone": "1051839",
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

describe('Test: configuration of Plisseezubehör - Halteclip_groß', () => {

    configurator.configureZubehoer(test)

})
