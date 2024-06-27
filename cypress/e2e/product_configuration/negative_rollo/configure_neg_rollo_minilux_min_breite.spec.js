var configurator = require("../../../support/configurator_neg_rollo.js");

var test =
{
    "name": "LIV-rollo_minilux_breite_min",
    "produkt": "/rollo/samira-3820",
    "supplier": "Anwis",
    "rollotyp": "Mini-Rollos",
    "system": "Maß_Rollo",
    "kassette": "Kassette MINI-LUX",
    "schiene": "Seitenleiste universal",
    "hoehe": "1500",
    "breite": "250",
    "hoehe_new": "1500",
    "breite_new": "300",
    "message": "Bitte geben Sie die Breite in Millimeter im Bereich von 300 mm und 1200 mm ein."
}

describe('Test: configuration of neg Rollo test - Kassette MINI LUX min. Breite', () => {

    configurator.configure_neg_rollo(test)

})