var configurator = require("../../../support/configurator_zubehoer.js");

var test =
{
    "name": "LIVConfig. - Rollo-Zubehör - Pendelsicherung zum Klemmen",
    "produkt": "/seitenfuehrung-b-rm18",
    "supplier": "Anwis",
    "art": "3 Pendelsicherungen +3,00 €",
    "system": "Zubehör",

    "anzahl": 6,
    "grundpreis": 7,
    "vat": 100,
    "mwst_1": 0,
    "versandkosten": 29.90,

    "login": "guest",
    "password": "",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Helene",
    "last_name": "Hofer",
    "email": "helene@delphinus-test.de",
    "street": "Jasogottwillgasse 10",
    "postal_code": "78654",
    "city": "Luzern",
    "state": "Schweiz",
    "phone": "123456",
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

describe('Test: configuration of Rollo-Zubehör - Pendelsicherung zum Klemmen', () => {

    configurator.configureZubehoer(test)

})