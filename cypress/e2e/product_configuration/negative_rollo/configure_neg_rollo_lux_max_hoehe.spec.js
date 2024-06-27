var configurator = require("../../../support/configurator_neg_rollo.js");

var test =
{
    "name": "LIV-rollo_lux_hoehe_max",
    "produkt": "/rollo/planta-3774",
    "supplier": "Anwis",
    "rollotyp": "Mini-Rollos",
    "system": "Maß_Rollo",
    "kassette": "Kassette LUX",
    "schiene": "Seitenleiste universal",
    "hoehe": "2500",
    "breite": "1200",
    "hoehe_new": "2400",
    "breite_new": "1200",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 300 mm und 2400 mm ein."
}

describe('Test: configuration of neg Rollo test - Kassette LUX max. Höhe', () => {

    configurator.configure_neg_rollo(test)

})