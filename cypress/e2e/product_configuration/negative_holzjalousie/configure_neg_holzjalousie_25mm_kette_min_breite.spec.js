var configurator = require("../../../support/configurator_neg_holzjalousie.js");

var test =
{
    "name": "LIVConfig. - Holzjal._25_Kette_B_min",
    "produkt": "/jalousie/holz-jalousie-konfigurator",
    "supplier": "Anwis",
    "system": "Maß_Holzjalousie",
    "produktgruppe": "25 mm",
    "farbe": "Natural Mahagoni 6505",
    "hoehe": "2000",
    "breite": "200",
    "hoehe_new": "2000",
    "breite_new": "300",
    "befestigung": "An der Decke",
    "bedientyp": "Kugelkette aus Metall",
    "message": "Bitte geben Sie die Breite in Millimeter im Bereich von 300 mm und 2400 mm ein."
}

describe('Test: configuration of neg Holzjaousie test - 25 mm Kette min. Breite', () => {

    configurator.configure_neg_holzjalousie(test)

})