var configurator = require("../../../support/configurator_neg_holzjalousie.js");

var test =
{
    "name": "LIVConfig. - Holzjal._50_Kette_B_max",
    "produkt": "/jalousie/holz-jalousie-konfigurator",
    "supplier": "Anwis",
    "system": "Maß_Holzjalousie",
    "produktgruppe": "50 mm",
    "farbe": "Natural Rehbraun 6525",
    "hoehe": "2900",
    "breite": "2800",
    "hoehe_new": "2900",
    "breite_new": "2700",
    "befestigung": "An der Mauer",
    "bedientyp": "Kugelkette aus Metall",
    "message": "Bitte geben Sie die Breite in Millimeter im Bereich von 450 mm und 2700 mm ein."
}

describe('Test: configuration of neg Holzjaousie test - 50 mm Kette max. Breite', () => {

    configurator.configure_neg_holzjalousie(test)

})