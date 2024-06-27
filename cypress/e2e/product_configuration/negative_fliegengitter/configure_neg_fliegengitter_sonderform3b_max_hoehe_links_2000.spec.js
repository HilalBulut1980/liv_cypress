var configurator = require("../../../support/configurator_neg_fliegengitter.js");

var test =
{
    "name": "LIVConfig. - Fliegengitter_Sonderform3B_maxHoeheLinks_2",
    "produkt": "insektenschutz/fliegengitter",
    "form": "Sonderform",
    "einbau": "Fliegengitter einbaufertig",
    "typ": "Typ 3B",
    "hoehe_links": "2001",
    "hoehe_rechts": "1300",
    "breite": "1200",
    "hoehe_links_new": "2000",
    "message": "Die Höhe links muss kleiner als oder gleich 2000 mm sein."
}

describe('Test: configuration of neg Insektenschutz test - Fliegengitter Sonderform 3B max. Höhe links II', () => {

    configurator.configure_neg_fliegengitter(test)

})