var configurator = require("../../../support/configurator_neg_fliegengitter.js");

var test =
{
    "name": "LIVConfig. - Fliegengitter_Sonderform4B_minHoeheRechts",
    "produkt": "insektenschutz/fliegengitter",
    "form": "Sonderform",
    "einbau": "Fliegengitter einbaufertig",
    "typ": "Typ 4B",
    "hoehe_links": "1000",
    "hoehe_rechts": "250",
    "breite_oben": "500",
    "breite_unten": "1500",
    "hoehe_rechts_new": "270",
    "message": "Die Höhe rechts muss größer als oder gleich 270 mm sein."
}

describe('Test: configuration of neg Insektenschutz test - Fliegengitter Sonderform 4B min. Höhe rechts', () => {

    configurator.configure_neg_fliegengitter(test)

})