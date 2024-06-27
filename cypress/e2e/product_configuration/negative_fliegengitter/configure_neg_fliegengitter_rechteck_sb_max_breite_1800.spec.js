var configurator = require("../../../support/configurator_neg_fliegengitter.js");

var test =
{
    "name": "LIVConfig. - Fliegengitter_SB_maxBreite_1800",
    "produkt": "insektenschutz/fliegengitter",
    "supplier": "Anwis",
    "form": "Rechteck",
    "einbau": "Fliegengitter SB - zum selber zusammenbauen",
    "farbe": "Goldeiche",
    "netzfarbe": "schwarz",
    "hoehe": "1600",
    "breite": "1801",
    "hoehe_new": "1600",
    "breite_new": "1800",
    "message": "Die Breite muss kleiner als oder gleich 1800 mm sein."
}

describe('Test: configuration of neg Insektenschutz test - Fliegengitter Rechteck SB max. Breite 1800mm', () => {

    configurator.configure_neg_fliegengitter(test)

})