var configurator = require("../../../support/configurator_neg_jalousie.js");

var test =
{
    "name": "LIVConfig. - Jalousie_25_maxHoehe",
    "produkt": "jalousien",
    "supplier": "Anwis",
    "system": "Maß_Jalousie",
    "produktgruppe": "25mm",
    "farbe": "Rose 6035",
    "hoehe": "2500",
    "breite": "1500",
    "hoehe_new": "2400",
    "breite_new": "1500",
    "befestigung": "In der Glasleiste",
    "bedientyp": "Kugelkette aus Metall",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 300 mm und 2400 mm ein."
}

describe('Test: configuration of neg Jalousie test - 25 mm max. Höhe', () => {

    configurator.configure_neg_jalousie(test)

})