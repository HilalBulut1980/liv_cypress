var configurator = require("../../../support/configurator_neg_fliegengitter.js");

var test =
{
    "name": "LIVConfig. - Fliegengitter_Sonderform4B_minHoeheLinks",
    "produkt": "insektenschutz/fliegengitter",
    "form": "Sonderform",
    "einbau": "Fliegengitter einbaufertig",
    "typ": "Typ 4B",
    "hoehe_links": "490",
    "hoehe_rechts": "300",
    "breite_oben": "500",
    "breite_unten": "1500",
    "hoehe_links_new": "500",
    "message": "Die Höhe links muss größer als oder gleich 500 mm sein."
}

describe('Test: configuration of neg Insektenschutz test - Fliegengitter Sonderform 4B min. Höhe links', () => {

    configurator.configure_neg_fliegengitter(test)

})