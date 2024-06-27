var configurator = require("../../../support/configurator_neg_holzjalousie.js");

var test =
{
    "name": "LIVConfig. - Holzjal._25_Kette_H_min",
    "produkt": "/jalousie/holz-jalousie-konfigurator",
    "supplier": "Anwis",
    "system": "Maß_Holzjalousie",
    "produktgruppe": "25 mm",
    "farbe": "Natural Rehbraun 6507",
    "hoehe": "50",
    "breite": "2000",
    "hoehe_new": "300",
    "breite_new": "2000",
    "befestigung": "in der Glasleiste",
    "bedientyp": "Kugelkette aus Metall",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 300 mm und 2200 mm ein."
}

describe('Test: configuration of neg Holzjaousie test - 25 mm Kette min. Höhe', () => {

    configurator.configure_neg_holzjalousie(test)

})