var configurator = require("../../../support/configurator_neg_holzjalousie.js");

var test =
{
    "name": "LIVConfig. - Holzjal._50_Schnur_B_max",
    "produkt": "/jalousie/holz-jalousie-konfigurator",
    "supplier": "Anwis",
    "system": "Maß_Holzjalousie",
    "produktgruppe": "50 mm",
    "farbe": "Natural Braun 6521",
    "hoehe": "3500",
    "breite": "3000",
    "hoehe_new": "3500",
    "breite_new": "2700",
    "befestigung": "An der Mauer",
    "bedientyp": "Schnurbedienung",
    "message": "Bitte geben Sie die Breite in Millimeter im Bereich von 450 mm und 2700 mm ein."
}

describe('Test: configuration of neg Holzjaousie test - 50 mm max. Breite', () => {

    configurator.configure_neg_holzjalousie(test)

})