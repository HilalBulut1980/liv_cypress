var configurator = require("../../../support/configurator_neg_fliegengitter.js");

var test =
{
    "name": "LIVConfig. - Fliegengitter_Sonderform4A_maxHoeheRechts2",
    "produkt": "insektenschutz/fliegengitter",
    "form": "Sonderform",
    "einbau": "Fliegengitter einbaufertig",
    "typ": "Typ 4A",
    "hoehe_links": "1999",
    "hoehe_rechts": "2001",
    "breite_oben": "500",
    "breite_unten": "1200",
    "hoehe_rechts_new": "2000",
    "message": "Die Höhe rechts muss kleiner als oder gleich 2000 mm sein."
}

describe('Test: configuration of neg Insektenschutz test - Fliegengitter Sonderform 4A max. Höhe rechts II', () => {

    configurator.configure_neg_fliegengitter(test)

})