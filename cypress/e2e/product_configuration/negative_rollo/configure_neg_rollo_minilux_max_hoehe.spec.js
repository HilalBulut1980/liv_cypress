var configurator = require("../../../support/configurator_neg_rollo.js");

var test =
{
    "name": "LIV-rollo_minilux_hoehe_max",
    "produkt": "/rollo/samira-3820",
    "supplier": "Anwis",
    "rollotyp": "Mini-Rollos",
    "system": "Maß_Rollo",
    "kassette": "Kassette MINI-LUX",
    "schiene": "Seitenleiste universal",
    "hoehe": "2222",
    "breite": "1000",
    "hoehe_new": "2200",
    "breite_new": "1000",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 300 mm und 2200 mm ein."
}

describe('Test: configuration of neg Rollo test - Kassette MINI LUX max. Höhe', () => {

    configurator.configure_neg_rollo(test)

})