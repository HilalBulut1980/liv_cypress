var configurator = require("../../../support/configurator_neg_jalousie.js");

var test =
{
    "name": "LIVConfig. - Jalousie_25_maxBreite",
    "produkt": "jalousien",
    "supplier": "Anwis",
    "system": "Maß_Jalousie",
    "produktgruppe": "25mm",
    "farbe": "Blütenweiß glänzend 6051",
    "hoehe": "1500",
    "breite": "2500",
    "hoehe_new": "1500",
    "breite_new": "2400",
    "befestigung": "In der Glasleiste",
    "bedientyp": "Schnurbedienung",
    "message": "Bitte geben Sie die Breite in Millimeter im Bereich von 300 mm und 2400 mm ein."
}

describe('Test: configuration of neg Jalousie test - 25 mm max. Breite', () => {

    configurator.configure_neg_jalousie(test)

})