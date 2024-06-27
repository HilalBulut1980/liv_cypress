var configurator = require("../../../support/configurator_neg_fliegengitter.js");

var test =
{
    "name": "LIVConfig. - Fliegengitter_Sonderform3A_minHoeheLinks",
    "produkt": "insektenschutz/fliegengitter",
    "form": "Sonderform",
    "einbau": "Fliegengitter einbaufertig",
    "typ": "Typ 3A",
    "hoehe_links": "265",
    "hoehe_rechts": "1000",
    "breite": "1200",
    "hoehe_links_new": "270",
    "message": "Die Höhe links muss größer als oder gleich 270 mm sein."
}

describe('Test: configuration of neg Insektenschutz test - Fliegengitter Sonderform 3A min. Höhe links', () => {

    configurator.configure_neg_fliegengitter(test)

})