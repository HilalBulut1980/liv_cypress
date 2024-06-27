var configurator = require("../../../support/configurator_serviceprodukt.js");

var test =
{
    "name": "LIVConfig. -Service_Plissee_ÄnderungBreite",
    "produkt": "/aenderungsauftrag-breite",
    "system": "Serviceprodukt",
    "bestellnummer": "10003000",
    "breite": "900",
    "hoehe": "1300",
    "kuerzung": "100",
    "produkt_name": "Basic 3011",

    "rabatt_code": "LIV-TEST-20P",  //20%
    "rabatt_faktor_a": 20,
    "rabatt_faktor_b": 80,

    "anzahl": 3,
    "grundpreis": 50,
    "vat": 119,
    "mwst_1": 19,
    "versandkosten": 0,

    "login": "guest",
    "password": "",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Maria",
    "last_name": "Müller",
    "email": "maria@delphinus-test.de",
    "street": "Karlsplatz 5",
    "postal_code": "22043",
    "city": "Hamburg",
    "state": "Deutschland",
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

describe('Test: configuration of Serviceprodukt Rabattcode Test', () => {

    it('create rabatt codes', function () {
        //create rabattcodes
        cy.visit('/scripts/coupons/create.php')
    })

    configurator.configureServiceProduct(test)

})