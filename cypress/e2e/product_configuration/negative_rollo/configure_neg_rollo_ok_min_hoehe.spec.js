var configurator = require("../../../support/configurator_neg_rollo.js");

var test =
{
    "name": "LIV-rollo_o.K._hoehe_min",
    "produkt": "/rollo/basic-3021",
    "supplier": "Anwis",
    "rollotyp": "Rollos",
    "system": "Maß_Rollo",
    "kassette": "ohne Kassette",
    "hoehe": "500",
    "breite": "1000",
    "hoehe_new": "1000",
    "breite_new": "1500",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 1000 mm und 5000 mm ein."
}

describe('Test: configuration of neg Rollo test - o.K. min. Höhe', () => {

    configurator.configure_neg_rollo(test)

})