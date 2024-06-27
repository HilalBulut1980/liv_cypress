var configurator = require("../../../support/configurator_neg_jalousie.js");

var test =
{
    "name": "LIVConfig. - Jalousie_50_maxHoehe",
    "produkt": "jalousien",
    "supplier": "Anwis",
    "system": "Maß_Jalousie",
    "produktgruppe": "50mm",
    "farbe": "Orangebraun 6092",
    "hoehe": "5000",
    "breite": "2000",
    "hoehe_new": "2800",
    "breite_new": "2000",
    "befestigung": "An der Decke",
    "bedientyp": "Kugelkette aus Metall",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 300 mm und 3800 mm ein."
}

describe('Test: configuration of neg Jalousie test - 50 mm max. Höhe', () => {

    configurator.configure_neg_jalousie(test)

})