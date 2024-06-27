var configurator = require("../../../support/configurator_neg_fliegengitter.js");

var test =
{
    "name": "LIVConfig. - Fliegengitter_SB_minBreite",
    "produkt": "insektenschutz/fliegengitter",
    "supplier": "Anwis",
    "form": "Rechteck",
    "einbau": "Fliegengitter SB - zum selber zusammenbauen",
    "farbe": "Winchester",
    "netzfarbe": "schwarz",
    "hoehe": "1400",
    "breite": "499",
    "hoehe_new": "1400",
    "breite_new": "500",
    "message": "Die Breite muss größer als oder gleich 500 mm sein."
}

describe('Test: configuration of neg Insektenschutz test - Fliegengitter Rechteck SB min. Breite', () => {

    configurator.configure_neg_fliegengitter(test)

})