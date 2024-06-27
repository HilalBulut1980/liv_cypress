var configurator = require("../../../support/configurator_zubehoer.js");

var test =
{
    "name": "LIVConfig. - Schiebegardinenzubehör - Magnetgriff aus Aluminium",
    "produkt": "/schiebegardine-magnetgriff",
    "supplier": "Gardinia",
    "system": "Zubehör",

    "anzahl": 1,
    "grundpreis": 6.99,
    "vat": 125,
    "mwst_1": 25,
    "versandkosten": 21.01,

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
    "city": "Split",
    "state": "Kroatien",
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

describe('Test: configuration of Schiebegardinenzubehör - Magnetgriff aus Aluminium', () => {

    configurator.configureZubehoer(test)

})