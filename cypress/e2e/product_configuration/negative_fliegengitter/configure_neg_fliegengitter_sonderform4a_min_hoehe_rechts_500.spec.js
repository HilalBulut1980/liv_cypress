var configurator = require("../../../support/configurator_neg_fliegengitter.js");

var test =
{
    "name": "LIVConfig. - Fliegengitter_Sonderform4A_minHoeheRechts",
    "produkt": "insektenschutz/fliegengitter",
    "form": "Sonderform",
    "einbau": "Fliegengitter einbaufertig",
    "typ": "Typ 4A",
    "hoehe_links": "400",
    "hoehe_rechts": "450",
    "breite_oben": "500",
    "breite_unten": "1500",
    "hoehe_rechts_new": "500",
    "message": "Die Höhe rechts muss größer als oder gleich 500 mm sein."
}

describe('Test: configuration of neg Insektenschutz test - Fliegengitter Sonderform 4A min. Höhe rechts', () => {

    configurator.configure_neg_fliegengitter(test)

})