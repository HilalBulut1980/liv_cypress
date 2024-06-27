var configurator = require("../../../support/configurator_neg_fliegengitter.js");

var test =
{
    "name": "LIVConfig. - Fliegengitter_Sonderform4A_minHoeheLinks",
    "produkt": "insektenschutz/fliegengitter",
    "form": "Sonderform",
    "einbau": "Fliegengitter einbaufertig",
    "typ": "Typ 4A",
    "hoehe_links": "250",
    "hoehe_rechts": "1200",
    "breite_oben": "500",
    "breite_unten": "1500",
    "hoehe_links_new": "270",
    "message": "Die Höhe links muss größer als oder gleich 270 mm sein."
}

describe('Test: configuration of neg Insektenschutz test - Fliegengitter Sonderform 4A min. Höhe links', () => {

    configurator.configure_neg_fliegengitter(test)

})