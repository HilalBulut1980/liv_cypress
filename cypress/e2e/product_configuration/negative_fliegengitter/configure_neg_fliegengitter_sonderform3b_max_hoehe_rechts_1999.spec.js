var configurator = require("../../../support/configurator_neg_fliegengitter.js");

var test =
{
    "name": "LIVConfig. - Fliegengitter_Sonderform3B_maxHoeheRechts_2",
    "produkt": "insektenschutz/fliegengitter",
    "form": "Sonderform",
    "einbau": "Fliegengitter einbaufertig",
    "typ": "Typ 3B",
    "hoehe_links": "2000",
    "hoehe_rechts": "2001",
    "breite": "1200",
    "hoehe_rechts_new": "1999",
    "message": "Die Höhe rechts muss kleiner als oder gleich 1999 mm sein."
}

describe('Test: configuration of neg Insektenschutz test - Fliegengitter Sonderform 3B max. Höhe rechts II', () => {

    configurator.configure_neg_fliegengitter(test)

})