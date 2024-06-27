var configurator = require("../../../support/configurator_neg_holzjalousie.js");

var test =
{
    "name": "LIVConfig. - Holzjal._70_Schnur_B_min",
    "produkt": "/jalousie/holz-jalousie-konfigurator",
    "supplier": "Anwis",
    "system": "Maß_Holzjalousie",
    "produktgruppe": "70 mm",
    "farbe": "Natural Rehbraun 6557",
    "hoehe": "3500",
    "breite": "400",
    "hoehe_new": "3500",
    "breite_new": "450",
    "befestigung": "An der Decke",
    "bedientyp": "Schnurbedienung",
    "message": "Bitte geben Sie die Breite in Millimeter im Bereich von 450 mm und 2900 mm ein."
}

describe('Test: configuration of neg Holzjaousie test - 70 mm min. Breite', () => {

    configurator.configure_neg_holzjalousie(test)

})