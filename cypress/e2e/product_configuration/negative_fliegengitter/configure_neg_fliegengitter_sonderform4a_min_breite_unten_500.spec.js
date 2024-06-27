var configurator = require("../../../support/configurator_neg_fliegengitter.js");

var test =
{
    "name": "LIVConfig. - Fliegengitter_Sonderform4A_minBreiteUnten",
    "produkt": "insektenschutz/fliegengitter",
    "form": "Sonderform",
    "einbau": "Fliegengitter einbaufertig",
    "typ": "Typ 4A",
    "hoehe_links": "600",
    "hoehe_rechts": "1000",
    "breite_oben": "300",
    "breite_unten": "490",
    "breite_unten_new": "500",
    "message": "Die Breite unten muss größer als oder gleich 500 mm sein."
}

describe('Test: configuration of neg Insektenschutz test - Fliegengitter Sonderform 4A min. Breite unten', () => {

    configurator.configure_neg_fliegengitter(test)

})