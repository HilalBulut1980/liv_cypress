var configurator = require("../../../support/configurator_gutschein.js");

var test =
{
    "name": "LIVConfig.-Gutschein_Email_AT",
    "produkt": "/geschenkgutschein",
    "system": "Gutschein",
    "modell": "Email",
    "beschenkter": "Henry",
    "strasse": "",
    "betrag": "50",
    "plz": "",
    "nachricht": "Hallo Henry, Happy Birthday!",
    "stadt": "",

    "anzahl": 1,
    "grundpreis": 50,  
    "vat": 120,
    "mwst_1": 20,
    "versandkosten": 0,  

    "login": "guest",
    "password": "",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Magdalena",
    "last_name": "Cosic",
    "email": "magdalena@delphinus-test.de",
    "street": "Karlsplatz 6",
    "postal_code": "1234",
    "city": "Linz",
    "state": "Österreich",
    "phone": "775300",
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

describe('Test: configuration of Gutschein Email AT', () => {

    configurator.configureGutschein(test)

})