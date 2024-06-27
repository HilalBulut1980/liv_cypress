var configurator = require("../../../support/configurator_neg_rollo.js");

var test =
{
    "name": "LIV-rollo_lux_hoehe_min",
    "produkt": "/rollo/planta-3774",
    "supplier": "Anwis",
    "rollotyp": "Mini-Rollos",
    "system": "Maß_Rollo",
    "kassette": "Kassette LUX",
    "schiene": "Seitenleiste universal",
    "hoehe": "250",
    "breite": "1000",
    "hoehe_new": "300",
    "breite_new": "1000",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 300 mm und 2400 mm ein."
}

describe('Test: configuration of neg Rollo test - Kassette LUX min. Höhe', () => {

    configurator.configure_neg_rollo(test)

})