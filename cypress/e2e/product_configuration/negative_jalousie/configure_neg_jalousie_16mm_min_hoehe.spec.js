var configurator = require("../../../support/configurator_neg_jalousie.js");

var test =
{
    "name": "LIVConfig. - Jalousie_16_minHoehe",
    "produkt": "jalousien",
    "supplier": "Anwis",
    "system": "Maß_Jalousie",
    "produktgruppe": "16mm",
    "farbe": "Blütenweiß glänzend 6009",
    "hoehe": "100",
    "breite": "1500",
    "hoehe_new": "300",
    "breite_new": "1500",
    "befestigung": "In der Glasleiste",
    "bedientyp": "Kugelkette aus Metall",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 300 mm und 2200 mm ein."
}

describe('Test: configuration of neg Jalousie test -16 mm min. Höhe', () => {

    configurator.configure_neg_jalousie(test)

})