var configurator = require("../../../support/configurator_neg_rollo.js");

var test =
{
    "name": "LIV-rollo_lux_breite_min",
    "produkt": "/rollo/planta-3774",
    "supplier": "Anwis",
    "rollotyp": "Mini-Rollos",
    "system": "Maß_Rollo",
    "kassette": "Kassette LUX",
    "schiene": "Seitenleiste universal",
    "hoehe": "2000",
    "breite": "299",
    "hoehe_new": "2000",
    "breite_new": "300",
    "message": "Bitte geben Sie die Breite in Millimeter im Bereich von 300 mm und 1400 mm ein."
}

describe('Test: configuration of neg Rollo test - Kassette LUX min. Breite', () => {

    configurator.configure_neg_rollo(test)

})