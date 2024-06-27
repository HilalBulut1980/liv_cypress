var configurator = require("../../../support/configurator_neg_fliegengitter.js");

var test =
{
    "name": "LIVConfig. - Fliegengitter_Sonderform4A_maxBreiteUnten",
    "produkt": "insektenschutz/fliegengitter",
    "form": "Sonderform",
    "einbau": "Fliegengitter einbaufertig",
    "typ": "Typ 4A",
    "hoehe_links": "600",
    "hoehe_rechts": "1200",
    "breite_oben": "600",
    "breite_unten": "2001",
    "breite_unten_new": "2000",
    "message": "Die Breite unten muss kleiner als oder gleich 2000 mm sein."
}

describe('Test: configuration of neg Insektenschutz test - Fliegengitter Sonderform 4A max. Breite unten', () => {

    configurator.configure_neg_fliegengitter(test)

})