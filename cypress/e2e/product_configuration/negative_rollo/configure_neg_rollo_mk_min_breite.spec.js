var configurator = require("../../../support/configurator_neg_rollo.js");

var test =
{
    "name": "LIV-rollo_m.K._breite_min",
    "produkt": "/rollo/basic-dimout-3060",
    "supplier": "Anwis",
    "rollotyp": "Rollos",
    "system": "Maß_Rollo",
    "kassette": "mit Kassette",
    "hoehe": "1500",
    "breite": "100",
    "hoehe_new": "1500",
    "breite_new": "300",
    "message": "Bitte geben Sie die Breite in Millimeter im Bereich von 300 mm und 3000 mm ein."
}

describe('Test: configuration of neg Rollo test - m.K. min. Breite', () => {

    configurator.configure_neg_rollo(test)

})