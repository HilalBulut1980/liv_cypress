var configurator = require("../../../support/configurator_neg_fliegengitter.js");

var test =
{
    "name": "LIVConfig. - Fliegengitter_Maß_maxBreite_2200",
    "produkt": "insektenschutz/fliegengitter",
    "supplier": "Anwis",
    "form": "Rechteck",
    "einbau": "Fliegengitter einbaufertig",
    "farbe": "Anthrazit",
    "netzfarbe": "schwarz",
    "hoehe": "1600",
    "breite": "2201",
    "hoehe_new": "1600",
    "breite_new": "2200",
    "message": "Die Breite muss kleiner als oder gleich 2200 mm sein."
}

describe('Test: configuration of neg Insektenschutz test - Fliegengitter Rechteck auf Maß max. Breite 2200', () => {

    configurator.configure_neg_fliegengitter(test)

})