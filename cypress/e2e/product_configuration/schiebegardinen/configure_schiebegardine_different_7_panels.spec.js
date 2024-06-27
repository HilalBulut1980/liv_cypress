var configurator = require("../../../support/configurator_schiebegardine_different.js");
import jsonLogic from 'json-logic-js';

var test =
{
    "name": "LIVConfig.-Schiebegardine_different_7_panels",
    "produkt": "Pika 7325", //PG 1 --> Baseprice 59,00 (Paneelwagen + Stoff) + 46,00 (2-lauf-Schiene) = 105,00  für Mindestmaß 300x300
    "ab_preis": "105,00", // 54,00+46,00
    "ab_preis_red": "52,50", // -50%
    "supplier": "Erfal",
    "system": "Schiebegardine",
    "modell": "Schiebegardine mit Schienensystem",
    "hoehe": "2500",
    "breite": "5900",
    "pan_anpassen": true,
    //paneel 1
    "stoff_1": "Piara 7279", //PG 1
    "breite_1": "800", // 2500x800
    //paneel 2
    "hoehe_2": "2000", // PG 1
    "breite_2": "900", // 2000x900
    //paneel 3
    "stoff_3": "Aris 7348", //PG 3
    "breite_3": "800", // 2500x800
    //paneel 4
    "stoff_4": "Pika 7327", //PG 1
    "hoehe_4": "2000",
    "breite_4": "900", // 2000x900
    //paneel 5
    "stoff_5": "Mica 7343", //PG 3
    "breite_5": "800", // 2500x800
    //paneel 6
    "stoff_6": "Hanini 7322", //PG 3
    "hoehe_6": "2000",
    "breite_6": "900", // 2000x900
    //paneel 7
    "stoff_7": "Lokela 7303", //PG 2
    "breite_7": "1000", // 2500x1000
    "endstab": "Beschwerungsstab",
    "paneel_anzahl": "7",
    "montage": "Montage an der Decke",
    "bediengriff": "mit Magnetgriff Aluminium",
    "anzahl_bediengriff": "7",  // 7 x 6,99 = 48,93
    "lauf_schiene": "5",  // +289
    "farbe_schiene": "weiß",

    "anzahl": 3,
    "paneel_preis_1": 121,  // PG 1: 2500x800 --> 121,00 + B-Stab 5,00
    "paneel_preis_2": 114,  // PG 1: 2000x900 --> 114,00 + B-Stab 6,00
    "paneel_preis_3": 174,   // PG 3: 2500x800 --> 174,00 + B-Stab 5,00
    "paneel_preis_4": 114,  // PG 1: 2000x900 --> 114,00 + B-Stab 6,00
    "paneel_preis_5": 174,  // PG 3: 2500x800 --> 174,00 + B-Stab 5,00
    "paneel_preis_6": 161,  // PG 3: 2000x900 --> 161,00 + B-Stab 6,00
    "paneel_preis_7": 171,  // PG 2: 2500x1000 --> 171,00 + B-Stab 7,00
    "panAnzahl": 7,
    "endstab_preis": 40,  //5+6+5+6+5+6+7
    "schienen_preis": 289,
    "bediengriff_einzeln": 6.99,
    "bediengriff_preis": 48.93,
    "befestigung_preis": 0,
    "discount": 0.5,
    "vat": 119,
    "mwst_1": 19,
    "versandkosten": 0,

    "login": "guest",
    "password": "",
    "prefix": "Herr",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Frederic",
    "last_name": "Lassenbrügge",
    "email": "freddy@delphinus-test.de",
    "street": "Loorberweg 133",
    "postal_code": "22043",
    "city": "Hamburg",
    "state": "Deutschland",
    "phone": "98547",
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

describe('Test: configuration of Schiebegardine - Gesamtsystem - different - 7 panels', () => {

    it(test.name, function () {

        let paneele = (jsonLogic.apply({ '+': [test.paneel_preis_1, test.paneel_preis_2, test.paneel_preis_3, test.paneel_preis_4, test.paneel_preis_5, test.paneel_preis_6, test.paneel_preis_7] }))

        configurator.startFromConfigurator(test)
        configurator.configureSchiebegardineDifferent(test, paneele)

    })
})