var configurator = require("../../../support/configurator_zubehoer_vorhang.js");

var test =
{
    "name": "LIVConfig. - Vorhangzubehör - Stange_Kegel_2-läufig",
    "produkt": "/gardinenstangen/kegel2",
    "farbe": "Edelstahl",
    "system": "Zubehör_V",
    "breite": "200",

    "anzahl": 1,
    "grundpreis": 53.99,
    "discount": 0.85,
    "vat": 121,
    "mwst_1": 21,
    "versandkosten": 20.34,

    "login": "guest",
    "password": "",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Maria",
    "last_name": "Müller",
    "email": "maria@delphinus-test.de",
    "street": "Karlsplatz 7",
    "postal_code": "418258",
    "city": "Barcelona",
    "state": "Spanien",
    "phone": "1466649",
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

describe('Test: configuration of Vorhangzubehör - Stange Kegel 2', () => {

    configurator.configureVorhangZubehoer(test)

})