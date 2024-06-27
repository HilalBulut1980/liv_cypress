var configurator = require("../../../support/configurator_neg_fliegengitter.js");

var test =
{
    "name": "LIVConfig. - Fliegengitter_Sonderform4A_maxHoeheLinks2",
    "produkt": "insektenschutz/fliegengitter",
    "form": "Sonderform",
    "einbau": "Fliegengitter einbaufertig",
    "typ": "Typ 4A",
    "hoehe_links": "2000",
    "hoehe_rechts": "2000",
    "breite_oben": "500",
    "breite_unten": "1200",
    "hoehe_links_new": "1999",
    "message": "Die Höhe links muss kleiner als oder gleich 1999 mm sein."
}

describe('Test: configuration of neg Insektenschutz test - Fliegengitter Sonderform 4A max. Höhe links II', () => {

    configurator.configure_neg_fliegengitter(test)

})