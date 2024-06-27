var configurator = require("../../../support/configurator_neg_jalousie.js");

var test =
{
    "name": "LIVConfig. - Jalousie_50_minHoehe",
    "produkt": "jalousien",
    "supplier": "Anwis",
    "system": "Maß_Jalousie",
    "produktgruppe": "50mm",
    "farbe": "Schwarz glänzend 6091",
    "hoehe": "100",
    "breite": "2000",
    "hoehe_new": "300",
    "breite_new": "2000",
    "befestigung": "An der Decke",
    "bedientyp": "Schnurbedienung",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 300 mm und 3800 mm ein."
}

describe('Test: configuration of neg Jalousie test - 50 mm min. Höhe', () => {

    configurator.configure_neg_jalousie(test)

})