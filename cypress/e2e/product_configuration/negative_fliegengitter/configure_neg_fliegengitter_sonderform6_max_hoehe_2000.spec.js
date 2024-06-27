var configurator = require("../../../support/configurator_neg_fliegengitter.js");

var test =
{
    "name": "LIVConfig. - Fliegengitter_Sonderform6_maxHoehe2",
    "produkt": "insektenschutz/fliegengitter",
    "form": "Sonderform",
    "einbau": "Fliegengitter einbaufertig",
    "typ": "Typ 6",
    "hoehe": "2001",
    "breite_oben": "600",
    "breite_unten": "1200",
    "hoehe_new": "2000",
    "message": "Die Höhe muss kleiner als oder gleich 2000 mm sein."
}

describe('Test: configuration of neg Insektenschutz test - Fliegengitter Sonderform 6 min. Höhe II', () => {

    configurator.configure_neg_fliegengitter(test)

})