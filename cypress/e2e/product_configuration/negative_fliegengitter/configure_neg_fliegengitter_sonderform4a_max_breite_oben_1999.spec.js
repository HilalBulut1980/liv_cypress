var configurator = require("../../../support/configurator_neg_fliegengitter.js");

var test =
{
    "name": "LIVConfig. - Fliegengitter_Sonderform4A_maxBreiteOben",
    "produkt": "insektenschutz/fliegengitter",
    "form": "Sonderform",
    "einbau": "Fliegengitter einbaufertig",
    "typ": "Typ 4A",
    "hoehe_links": "600",
    "hoehe_rechts": "1000",
    "breite_oben": "2000",
    "breite_unten": "2000",
    "breite_oben_new": "1999",
    "message": "Die Breite oben muss kleiner als oder gleich 1999 mm sein."
}

describe('Test: configuration of neg Insektenschutz test - Fliegengitter Sonderform 4A max. Breite oben', () => {

    configurator.configure_neg_fliegengitter(test)

})