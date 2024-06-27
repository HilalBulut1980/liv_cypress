var configurator = require("../../../support/configurator_neg_fliegengitter.js");

var test =
{
    "name": "LIVConfig. - Fliegengitter_Sonderform3B_minHoeheRechts",
    "produkt": "insektenschutz/fliegengitter",
    "form": "Sonderform",
    "einbau": "Fliegengitter einbaufertig",
    "typ": "Typ 3B",
    "hoehe_links": "1000",
    "hoehe_rechts": "260",
    "breite": "1200",
    "hoehe_rechts_new": "270",
    "message": "Die Höhe rechts muss größer als oder gleich 270 mm sein."
}

describe('Test: configuration of neg Insektenschutz test - Fliegengitter Sonderform 3B min. Höhe rechts', () => {

    configurator.configure_neg_fliegengitter(test)

})