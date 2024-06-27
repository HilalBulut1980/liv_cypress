var configurator = require("../../../support/configurator_neg_fliegengitter.js");

var test =
{
    "name": "LIVConfig. - Fliegengitter_SB_minHoehe",
    "produkt": "insektenschutz/fliegengitter",
    "supplier": "Anwis",
    "form": "Rechteck",
    "einbau": "Fliegengitter SB - zum selber zusammenbauen",
    "farbe": "Walnuss",
    "netzfarbe": "schwarz",
    "hoehe": "400",
    "breite": "1200",
    "hoehe_new": "500",
    "breite_new": "1200",
    "message": "Die Höhe muss größer als oder gleich 500 mm sein."
}

describe('Test: configuration of neg Insektenschutz test - Fliegengitter Rechteck SB min. Höhe', () => {

    configurator.configure_neg_fliegengitter(test)

})