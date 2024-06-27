var configurator = require("../../../support/configurator_gutschein.js");

var test =
{
    "name": "LIVConfig.-Gutschein_Email_DE",
    "produkt": "/geschenkgutschein",
    "system": "Gutschein",
    "modell": "Email",
    "beschenkter": "Markus",
    "strasse": "",
    "betrag": "20",
    "plz": "",
    "nachricht": "Hi Markus, dieser Gutschein ist für Dich!",
    "stadt": "",

    "anzahl": 2,
    "grundpreis": 20,  
    "vat": 119,
    "mwst_1": 19,
    "versandkosten": 0,  

    "login": "guest",
    "password": "",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Helene",
    "last_name": "Müller",
    "email": "maria@delphinus-test.de",
    "street": "Karlsplatz 6",
    "postal_code": "20099",
    "city": "Hamburg",
    "state": "Deutschland",
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

describe('Test: configuration of Gutschein Email DE', () => {

    configurator.configureGutschein(test)

})