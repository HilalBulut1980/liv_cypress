var configurator = require("../../../support/configurator_neg_fliegengitter.js");

var test =
{
    "name": "LIVConfig. - Fliegengitter_Sonderform3C_maxBreiteOben2",
    "produkt": "insektenschutz/fliegengitter",
    "form": "Sonderform",
    "einbau": "Fliegengitter einbaufertig",
    "typ": "Typ 3C",
    "hoehe": "1200",
    "breite_oben": "2001",
    "breite_unten": "2000",
    "breite_oben_new": "1999",
    "message": "Die Breite oben muss kleiner als oder gleich 1999 mm sein."
}

describe('Test: configuration of neg Insektenschutz test - Fliegengitter Sonderform 3C max. Breite oben II', () => {

    configurator.configure_neg_fliegengitter(test)

})