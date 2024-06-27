var configurator = require("../../../support/configurator_gutschein.js");

var test =
{
    "name": "LIVConfig.-Gutschein_Post_AT",
    "produkt": "/geschenkgutschein",
    "system": "Gutschein",
    "modell": "Post",
    "beschenkter": "Helene Fisch",
    "strasse": "Kobalgasse 2",
    "betrag": "50",
    "plz": "12345",
    "nachricht": "Hallo Helene, Happy Birthday!",
    "stadt": "Wien",

    "anzahl": 3,
    "grundpreis": 55,  
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

describe('Test: configuration of Gutschein Post AT', () => {

    configurator.configureGutschein(test)

})