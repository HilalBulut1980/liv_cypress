var configurator = require("../../../support/configurator_neg_rollo.js");

var test =
{
    "name": "LIV-rollo_minilux_ctype_breite_max",
    "produkt": "/rollo/ruolo-3842",
    "supplier": "Anwis",
    "rollotyp": "Mini-Rollos",
    "system": "Maß_Rollo",
    "kassette": "Kassette MINI-LUX",
    "schiene": "Führungsschiene",
    "hoehe": "1500",
    "breite": "1250",
    "hoehe_new": "1500",
    "breite_new": "1200",
    "message": "Bitte geben Sie die Breite in Millimeter im Bereich von 300 mm und 1200 mm ein."
}

describe('Test: configuration of neg Rollo test - Kassette MINI LUX TYPE C max. Breite', () => {

    configurator.configure_neg_rollo(test)

})