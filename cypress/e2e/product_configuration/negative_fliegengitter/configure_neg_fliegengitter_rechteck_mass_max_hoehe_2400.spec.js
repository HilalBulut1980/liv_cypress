var configurator = require("../../../support/configurator_neg_fliegengitter.js");

var test =
{
    "name": "LIVConfig. - Fliegengitter_Maß_maxHoehe",
    "produkt": "insektenschutz/fliegengitter",
    "supplier": "Anwis",
    "form": "Rechteck",
    "einbau": "Fliegengitter einbaufertig",
    "farbe": "Mooreiche",
    "netzfarbe": "schwarz",
    "hoehe": "2401",
    "breite": "1200",
    "hoehe_new": "2400",
    "breite_new": "1200",
    "message": "Die Höhe muss kleiner als oder gleich 2400 mm sein."
}

describe('Test: configuration of neg Insektenschutz test - Fliegengitter Rechteck auf Maß max. Höhe', () => {

    configurator.configure_neg_fliegengitter(test)

})