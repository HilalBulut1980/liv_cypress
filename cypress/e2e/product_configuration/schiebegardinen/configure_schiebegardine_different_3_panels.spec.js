var configurator = require("../../../support/configurator_schiebegardine_different.js");
import jsonLogic from 'json-logic-js';

var test =
{
    "name": "LIVConfig.-Schiebegardine_different_3_panels",
    "produkt": "Ukko 7331", //PG 3 --> Baseprice 69,00 (Paneelwagen + Stoff) + 46,00 (2-lauf-Schiene) = 115,00  für Mindestmaß 300x300
    "ab_preis": "115,00", // 62,00+46,00
    "ab_preis_red": "57,50", // -50%
    "supplier": "Erfal",
    "system": "Schiebegardine",
    "modell": "Schiebegardine mit Schienensystem",
    "hoehe": "2600",
    "breite": "3000",
    "pan_anpassen": true,
    "breite_1": "1000", //2600x1000
    "stoff_2": "Pika 7325", //PG 1
    "hoehe_2": "2000",
    "breite_2": "1000", // 2000x1000
    "breite_3": "1010", // 2600x1010
    "endstab": "ohne Endstab",
    "paneel_anzahl": "3",
    "montage": "Montage an der Decke",  
    "lauf_schiene": "3",  // +101
    "farbe_schiene": "weiß",

    "anzahl": 2,
    "paneel_preis_1": 209,  // PG 3: 2600x1000 -->  209,00
    "paneel_preis_2": 122,  // PG 1: 2000x1000 -->  122,00
    "paneel_preis_3": 230,  // PG 3: 2600x1010 -->  230,00
    "panAnzahl": 3,
    "endstab_preis": 0,
    "schienen_preis": 101,
    "bediengriff_einzeln": 0,
    "bediengriff_preis": 0,
    "befestigung_preis": 0,
    "discount": 0.5,
    "vat": 125,
    "mwst_1": 25,
    "versandkosten": 21.01,

    "login": "guest",
    "password": "",
    "prefix": "Herr",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Dragan",
    "last_name": "Lusevic",
    "email": "boris@delphinus-test.de",
    "street": "Staza žičare 100 A",
    "postal_code": "9635",
    "city": "Split",
    "state": "Kroatien",
    "phone": "852147",
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

describe('Test: configuration of Schiebegardine - Gesamtsystem - different - 3 panels', () => {

    it(test.name, function () {

        let paneele = (jsonLogic.apply({ '+': [test.paneel_preis_1, test.paneel_preis_2, test.paneel_preis_3] }))

        configurator.startFromConfigurator(test)
        configurator.configureSchiebegardineDifferent(test, paneele)

    })
})