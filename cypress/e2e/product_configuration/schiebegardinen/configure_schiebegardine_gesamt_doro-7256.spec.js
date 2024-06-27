var configurator = require("../../../support/configurator_schiebegardine_gesamt.js");

var test =
{
    "name": "LIVConfig.-Schiebegardine_gesamt_Pika-7326",
    "produkt": "Pika 7326", //PG 1 --> Baseprice 59,00 (Paneelwagen + Stoff) + 46,00 (2-lauf-Schiene) = 105,00  für Mindestmaß 300x300
    "ab_preis": "105,00", // 54,00+46,00
    "ab_preis_red": "52,50", // -50%
    "supplier": "Erfal",
    "system": "Schiebegardine",
    "modell": "Schiebegardine mit Schienensystem",
    "stoff": "Pika-7326",
    "hoehe": "3000",
    "breite": "5900",  // vorgeschl. Paneelanzahl = 6, Overlap 50
    "pan_anpassen": false,
    "endstab": "Beschwerungsstab",// +6 x 7,00
    "paneel_anzahl": "6",
    "overlap": "80",  // --> panBreite X1= (5900-80) :6 |+80 = 1050mm
    "montage": "Montage an der Decke",
    "bediengriff": "mit Magnetclip Kunststoff, weiß", // +3,99 pro paneel 3,99 x 6 = 23,94 n.r.
    "anzahl_bediengriff": 6,
    "lauf_schiene": "4",  // +242,00 (bis B 6000mm)
    "farbe_schiene": "weiß",

    "anzahl": 3,
    "paneel_preis": 170,  // 1 paneel á 3000x1050 = 170,00 
    "paneel_anzahl": 6,
    "endstab_preis": 42,  // 6 x 7
    "schienen_preis": 242,
    "bediengriff_einzeln": 3.99,
    "bediengriff_preis": 23.94,
    "befestigung_preis": 0,
    "discount": 0.5,
    "vat": 122,
    "mwst_1": 22,
    "versandkosten": 20.51,

    "login": "guest",
    "password": "",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Milena",
    "last_name": "Toapanta",
    "email": "milly@delphinus-test.de",
    "street": "Via del Governate 625",
    "postal_code": "1225",
    "city": "Milano",
    "state": "Italien",
    "phone": "123654",
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

describe('Test: configuration of Schiebegardine Pika 7326 - Gesamtsystem', () => {

    it(test.name, function () {

        configurator.startFromConfigurator(test)
        configurator.configureSchiebegardineGesamt(test)

    })
})