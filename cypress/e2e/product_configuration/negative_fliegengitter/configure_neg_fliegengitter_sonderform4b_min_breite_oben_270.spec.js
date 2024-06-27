var configurator = require("../../../support/configurator_neg_fliegengitter.js");

var test =
{
    "name": "LIVConfig. - Fliegengitter_Sonderform4B_minBreiteOben",
    "produkt": "insektenschutz/fliegengitter",
    "form": "Sonderform",
    "einbau": "Fliegengitter einbaufertig",
    "typ": "Typ 4B",
    "hoehe_links": "1000",
    "hoehe_rechts": "600",
    "breite_oben": "250",
    "breite_unten": "1000",
    "breite_oben_new": "270",
    "message": "Die Breite oben muss größer als oder gleich 270 mm sein."
}

describe('Test: configuration of neg Insektenschutz test - Fliegengitter Sonderform 4B min. Breite oben', () => {

    configurator.configure_neg_fliegengitter(test)

})