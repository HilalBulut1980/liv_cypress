var configurator = require("../../../support/configurator_zubehoer.js");

var test =
{
    "name": "LIVConfig. - Plisseezubehör - Verdrehsicherung",
    "produkt": "/plissee/zubehoer/verdrehsicherung",
    "supplier": "VHG",
    "art": "weiß",
    "system": "Zubehör",

    "anzahl": 1,
    "grundpreis": 4,
    "vat": 121,
    "mwst_1": 21,
    "versandkosten": 20.34,

    "login": "register",
    "password": "testpassw8",
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

describe('Test: configuration of Plisseezubehör - Verdrehsicherung', () => {

    configurator.configureZubehoer(test)

})
