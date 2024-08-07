var configurator = require("../../../support/configurator_neg_fliegengitter.js");

var test =
{
    "name": "LIVConfig. - Fliegengitter_Sonderform6_minBreiteOben",
    "produkt": "insektenschutz/fliegengitter",
    "form": "Sonderform",
    "einbau": "Fliegengitter einbaufertig",
    "typ": "Typ 6",
    "hoehe": "1400",
    "breite_oben": "260",
    "breite_unten": "1300",
    "breite_oben_new": "270",
    "message": "Die Breite oben muss größer als oder gleich 270 mm sein."
}

describe('Test: configuration of neg Insektenschutz test - Fliegengitter Sonderform 6 min. Breite oben', () => {

    configurator.configure_neg_fliegengitter(test)

})