var configurator = require("../../../support/configurator_neg_holzjalousie.js");

var test =
{
    "name": "LIVConfig. - Holzjal._50_Kette_B_min",
    "produkt": "/jalousie/holz-jalousie-konfigurator",
    "supplier": "Anwis",
    "system": "Maß_Holzjalousie",
    "produktgruppe": "50 mm",
    "farbe": "Natural Beigebraun 6524",
    "hoehe": "2900",
    "breite": "400",
    "hoehe_new": "2900",
    "breite_new": "450",
    "befestigung": "An der Decke",
    "bedientyp": "Kugelkette aus Metall",
    "message": "Bitte geben Sie die Breite in Millimeter im Bereich von 450 mm und 2700 mm ein."
}

describe('Test: configuration of neg Holzjaousie test - 50 mm Kette min. Breite', () => {

    configurator.configure_neg_holzjalousie(test)

})