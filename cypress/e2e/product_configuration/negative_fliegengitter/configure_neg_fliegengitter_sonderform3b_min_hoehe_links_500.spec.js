var configurator = require("../../../support/configurator_neg_fliegengitter.js");

var test =
{
    "name": "LIVConfig. - Fliegengitter_Sonderform3B_minHoeheLinks",
    "produkt": "insektenschutz/fliegengitter",
    "form": "Sonderform",
    "einbau": "Fliegengitter einbaufertig",
    "typ": "Typ 3B",
    "hoehe_links": "490",
    "hoehe_rechts": "400",
    "breite": "1200",
    "hoehe_links_new": "500",
    "message": "Die Höhe links muss größer als oder gleich 500 mm sein."
}

describe('Test: configuration of neg Insektenschutz test - Fliegengitter Sonderform 3B min. Höhe links', () => {

    configurator.configure_neg_fliegengitter(test)

})