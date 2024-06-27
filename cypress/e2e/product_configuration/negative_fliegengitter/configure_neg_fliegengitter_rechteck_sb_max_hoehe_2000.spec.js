var configurator = require("../../../support/configurator_neg_fliegengitter.js");

var test =
{
    "name": "LIVConfig. - Fliegengitter_SB_maxHoehe",
    "produkt": "insektenschutz/fliegengitter",
    "supplier": "Anwis",
    "form": "Rechteck",
    "einbau": "Fliegengitter SB - zum selber zusammenbauen",
    "farbe": "Anthrazit",
    "netzfarbe": "schwarz",
    "hoehe": "2001",
    "breite": "900",
    "hoehe_new": "2000",
    "breite_new": "900",
    "message": "Die Höhe muss kleiner als oder gleich 2000 mm sein."
}

describe('Test: configuration of neg Insektenschutz test - Fliegengitter Rechteck SB max. Höhe', () => {

    configurator.configure_neg_fliegengitter(test)

})