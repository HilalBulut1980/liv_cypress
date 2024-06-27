var configurator = require("../../../support/configurator_neg_holzjalousie.js");

var test =
{
    "name": "LIVConfig. - Holzjal._25_Kette_H_max",
    "produkt": "/jalousie/holz-jalousie-konfigurator",
    "supplier": "Anwis",
    "system": "Maß_Holzjalousie",
    "produktgruppe": "25 mm",
    "farbe": "Natural Schwarz 6508",
    "hoehe": "5000",
    "breite": "2000",
    "hoehe_new": "2200",
    "breite_new": "2000",
    "befestigung": "auf dem Fensterflügel",
    "bedientyp": "Kugelkette aus Metall",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 300 mm und 2200 mm ein."
}

describe('Test: configuration of neg Holzjaousie test - 25 mm Kette max. Höhe', () => {

    configurator.configure_neg_holzjalousie(test)

})