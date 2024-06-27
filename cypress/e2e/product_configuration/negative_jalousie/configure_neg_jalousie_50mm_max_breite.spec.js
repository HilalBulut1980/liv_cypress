var configurator = require("../../../support/configurator_neg_jalousie.js");

var test =
{
    "name": "LIVConfig. - Jalousie_50_maxBreite",
    "produkt": "jalousien",
    "supplier": "Anwis",
    "system": "Maß_Jalousie",
    "produktgruppe": "50mm",
    "farbe": "Kirschbaum 6099",
    "hoehe": "1500",
    "breite": "4000",
    "hoehe_new": "1500",
    "breite_new": "3300",
    "befestigung": "An der Decke",
    "bedientyp": "Kugelkette aus Metall",
    "message": "Bitte geben Sie die Breite in Millimeter im Bereich von 450 mm und 3300 mm ein."
}

describe('Test: configuration of neg Jalousie test - 50 mm max. Breite', () => {

    configurator.configure_neg_jalousie(test)

})