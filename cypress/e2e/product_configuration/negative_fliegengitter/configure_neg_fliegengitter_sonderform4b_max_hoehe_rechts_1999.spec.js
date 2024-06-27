var configurator = require("../../../support/configurator_neg_fliegengitter.js");

var test =
{
    "name": "LIVConfig. - Fliegengitter_Sonderform4B_maxHoeheRechts2",
    "produkt": "insektenschutz/fliegengitter",
    "form": "Sonderform",
    "einbau": "Fliegengitter einbaufertig",
    "typ": "Typ 4B",
    "hoehe_links": "2000",
    "hoehe_rechts": "2001",
    "breite_oben": "500",
    "breite_unten": "1200",
    "hoehe_rechts_new": "1999",
    "message": "Die Höhe rechts muss kleiner als oder gleich 1999 mm sein."
}

describe('Test: configuration of neg Insektenschutz test - Fliegengitter Sonderform 4B max. Höhe rechts II', () => {

    configurator.configure_neg_fliegengitter(test)

})