var configurator = require("../../../support/configurator_neg_jalousie.js");

var test =
{
    "name": "LIVConfig. - Jalousie_16_maxBreite",
    "produkt": "jalousien",
    "supplier": "Anwis",
    "system": "Maß_Jalousie",
    "produktgruppe": "16mm",
    "farbe": "Aluminium Hell Metall glänzend 6006",
    "hoehe": "1500",
    "breite": "3000",
    "hoehe_new": "1500",
    "breite_new": "2000",
    "befestigung": "In der Glasleiste",
    "bedientyp": "Schnurbedienung",
    "message": "Bitte geben Sie die Breite in Millimeter im Bereich von 300 mm und 2000 mm ein."
}

describe('Test: configuration of neg Jalousie test -16 mm max. Breite', () => {

    configurator.configure_neg_jalousie(test)

})