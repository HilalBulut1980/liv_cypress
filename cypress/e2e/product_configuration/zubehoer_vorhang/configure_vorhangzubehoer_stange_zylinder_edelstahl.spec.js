var configurator = require("../../../support/configurator_zubehoer_vorhang.js");

var test =
{
    "name": "LIVConfig. - Vorhangzubehör - Stange_Zylinder_Edelstahl",
    "produkt": "/gardinenstangen/zylinder-edelstahl",
    "farbe": "Edelstahl",
    "system": "Zubehör_V",
    "breite": "160",

    "anzahl": 2,
    "grundpreis": 24.99,
    "discount": 0.85,
    "vat": 120,
    "mwst_1": 20,
    "versandkosten": 20.17,

    "login": "guest",
    "password": "",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Martina",
    "last_name": "Mühlheim",
    "email": "maria@delphinus-test.de",
    "street": "Karlsplatz 7",
    "postal_code": "418258",
    "city": "Paris",
    "state": "Frankreich",
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

describe('Test: configuration of Vorhangzubehör - Stange Zylinder Edelstahl', () => {

    configurator.configureVorhangZubehoer(test)

})