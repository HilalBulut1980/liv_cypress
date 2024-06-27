var configurator = require("../../../support/configurator_neg_fliegengitter.js");

var test =
{
    "name": "LIVConfig. - Fliegengitter_Sonderform4B_maxHoeheLinks2",
    "produkt": "insektenschutz/fliegengitter",
    "form": "Sonderform",
    "einbau": "Fliegengitter einbaufertig",
    "typ": "Typ 4B",
    "hoehe_links": "2001",
    "hoehe_rechts": "1800",
    "breite_oben": "500",
    "breite_unten": "1200",
    "hoehe_links_new": "2000",
    "message": "Die Höhe links muss kleiner als oder gleich 2000 mm sein."
}

describe('Test: configuration of neg Insektenschutz test - Fliegengitter Sonderform 4B max. Höhe links II', () => {

    configurator.configure_neg_fliegengitter(test)

})