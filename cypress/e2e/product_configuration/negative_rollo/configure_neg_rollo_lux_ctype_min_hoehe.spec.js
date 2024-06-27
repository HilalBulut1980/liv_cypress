var configurator = require("../../../support/configurator_neg_rollo.js");

var test =
{
    "name": "LIV-rollo_lux_ctype_hoehe_min",
    "produkt": "/rollo/basic-dimout-3032",
    "supplier": "Anwis",
    "rollotyp": "Mini-Rollos",
    "system": "Maß_Rollo",
    "kassette": "Kassette LUX",
    "schiene": "Führungsschiene",
    "hoehe": "299",
    "breite": "1000",
    "hoehe_new": "300",
    "breite_new": "1000",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 300 mm und 2400 mm ein."
}

describe('Test: configuration of neg Rollo test - Kassette LUX Type C min. Höhe', () => {

    configurator.configure_neg_rollo(test)

})