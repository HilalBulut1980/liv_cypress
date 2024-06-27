var configurator = require("../../../support/configurator_neg_jalousie.js");

var test =
{
    "name": "LIVConfig. - Jalousie_16_maxHoehe",
    "produkt": "jalousien",
    "supplier": "Anwis",
    "system": "Maß_Jalousie",
    "produktgruppe": "16mm",
    "farbe": "Gold Metall matt 6011",
    "hoehe": "3000",
    "breite": "1500",
    "hoehe_new": "2200",
    "breite_new": "1500",
    "befestigung": "In der Glasleiste",
    "bedientyp": "Schnurbedienung",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 300 mm und 2200 mm ein."
}

describe('Test: configuration of neg Jalousie test -16 mm max. Höhe', () => {

    configurator.configure_neg_jalousie(test)

})