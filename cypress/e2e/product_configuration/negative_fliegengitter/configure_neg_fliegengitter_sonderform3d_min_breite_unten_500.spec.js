var configurator = require("../../../support/configurator_neg_fliegengitter.js");

var test =
{
    "name": "LIVConfig. - Fliegengitter_Sonderform3D_minBreiteUnten",
    "produkt": "insektenschutz/fliegengitter",
    "form": "Sonderform",
    "einbau": "Fliegengitter einbaufertig",
    "typ": "Typ 3D",
    "hoehe": "1000",
    "breite_oben": "400",
    "breite_unten": "499",
    "breite_unten_new": "500",
    "message": "Die Breite unten muss größer als oder gleich 500 mm sein."
}

describe('Test: configuration of neg Insektenschutz test - Fliegengitter Sonderform 3D min. Breite unten', () => {

    configurator.configure_neg_fliegengitter(test)

})