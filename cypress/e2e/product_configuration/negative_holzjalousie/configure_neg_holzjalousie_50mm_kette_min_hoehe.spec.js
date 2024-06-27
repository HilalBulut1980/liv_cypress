var configurator = require("../../../support/configurator_neg_holzjalousie.js");

var test =
{
    "name": "LIVConfig. - Holzjal._50_Kette_H_min",
    "produkt": "/jalousie/holz-jalousie-konfigurator",
    "supplier": "Anwis",
    "system": "Maß_Holzjalousie",
    "produktgruppe": "50 mm",
    "farbe": "Natural Umbra 6527",
    "hoehe": "200",
    "breite": "2000",
    "hoehe_new": "300",
    "breite_new": "2000",
    "befestigung": "An der Decke",
    "bedientyp": "Kugelkette aus Metall",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 300 mm und 3600 mm ein."
}

describe('Test: configuration of neg Holzjaousie test - 50 mm Kette min. Höhe', () => {

    configurator.configure_neg_holzjalousie(test)

})