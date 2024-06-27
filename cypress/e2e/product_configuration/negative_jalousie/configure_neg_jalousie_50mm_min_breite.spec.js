var configurator = require("../../../support/configurator_neg_jalousie.js");

var test =
{
    "name": "LIVConfig. - Jalousie_50_minBreite",
    "produkt": "jalousien",
    "supplier": "Anwis",
    "system": "Maß_Jalousie",
    "produktgruppe": "50mm",
    "farbe": "Eiche 6100",
    "hoehe": "1500",
    "breite": "300",
    "hoehe_new": "1500",
    "breite_new": "450",
    "befestigung": "An der Decke",
    "bedientyp": "Schnurbedienung",
    "message": "Bitte geben Sie die Breite in Millimeter im Bereich von 450 mm und 3300 mm ein."
}

describe('Test: configuration of neg Jalousie test - 50 mm min. Breite', () => {

    configurator.configure_neg_jalousie(test)

})