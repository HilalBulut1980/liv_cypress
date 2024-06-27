var configurator = require("../../../support/configurator_neg_fliegengitter.js");

var test =
{
    "name": "LIVConfig. - Fliegengitter_Sonderform3A_maxHoeheLinks_2",
    "produkt": "insektenschutz/fliegengitter",
    "form": "Sonderform",
    "einbau": "Fliegengitter einbaufertig",
    "typ": "Typ 3A",
    "hoehe_links": "2001",
    "hoehe_rechts": "2000",
    "breite": "1200",
    "hoehe_links_new": "1999",
    "message": "Die Höhe links muss kleiner als oder gleich 1999 mm sein."
}

describe('Test: configuration of neg Insektenschutz test - Fliegengitter Sonderform 3A max. Höhe links II', () => {

    configurator.configure_neg_fliegengitter(test)

})