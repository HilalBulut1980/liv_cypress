var configurator = require("../../../support/configurator_neg_rollo.js");

var test =
{
    "name": "LIV-rollo_lux_ctype_breite_max",
    "produkt": "/rollo/basic-dimout-3032",
    "supplier": "Anwis",
    "rollotyp": "Mini-Rollos",
    "system": "Maß_Rollo",
    "kassette": "Kassette LUX",
    "schiene": "Führungsschiene",
    "hoehe": "2000",
    "breite": "1401",
    "hoehe_new": "2000",
    "breite_new": "1400",
    "message": "Bitte geben Sie die Breite in Millimeter im Bereich von 300 mm und 1400 mm ein."
}

describe('Test: configuration of neg Rollo test - Kassette LUX Type C max. Breite', () => {

    configurator.configure_neg_rollo(test)

})