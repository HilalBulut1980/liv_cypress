var configurator = require("../../../support/configurator_neg_holzjalousie.js");

var test =
{
    "name": "LIVConfig. - Holzjal._25_Schnur_B_min",
    "produkt": "/jalousie/holz-jalousie-konfigurator",
    "supplier": "Anwis",
    "system": "Maß_Holzjalousie",
    "produktgruppe": "25 mm",
    "farbe": "Natural Hellbraun 6501",
    "hoehe": "2000",
    "breite": "200",
    "hoehe_new": "2000",
    "breite_new": "300",
    "befestigung": "In der Glasleiste",
    "bedientyp": "Schnurbedienung",
    "message": "Bitte geben Sie die Breite in Millimeter im Bereich von 300 mm und 2400 mm ein."
}

describe('Test: configuration of neg Holzjaousie test - 25 mm min. Breite', () => {

    configurator.configure_neg_holzjalousie(test)

})