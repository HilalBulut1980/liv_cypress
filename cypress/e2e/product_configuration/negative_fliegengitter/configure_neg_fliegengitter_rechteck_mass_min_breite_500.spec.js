var configurator = require("../../../support/configurator_neg_fliegengitter.js");

var test =
{
    "name": "LIVConfig. - Fliegengitter_Maß_minBreite",
    "produkt": "insektenschutz/fliegengitter",
    "supplier": "Anwis",
    "form": "Rechteck",
    "einbau": "Fliegengitter einbaufertig",
    "farbe": "Goldeiche",
    "netzfarbe": "schwarz",
    "hoehe": "1200",
    "breite": "499",
    "hoehe_new": "1200",
    "breite_new": "500",
    "message": "Die Breite muss größer als oder gleich 500 mm sein."
}

describe('Test: configuration of neg Insektenschutz test - Fliegengitter Rechteck auf Maß min. Breite', () => {

    configurator.configure_neg_fliegengitter(test)

})