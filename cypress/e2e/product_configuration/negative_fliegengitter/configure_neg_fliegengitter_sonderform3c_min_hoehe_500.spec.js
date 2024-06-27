var configurator = require("../../../support/configurator_neg_fliegengitter.js");

var test =
{
    "name": "LIVConfig. - Fliegengitter_Sonderform3C_minHoehe",
    "produkt": "insektenschutz/fliegengitter",
    "form": "Sonderform",
    "einbau": "Fliegengitter einbaufertig",
    "typ": "Typ 3C",
    "hoehe": "499",
    "breite_oben": "600",
    "breite_unten": "1200",
    "hoehe_new": "500",
    "message": "Die Höhe muss größer als oder gleich 500 mm sein."
}

describe('Test: configuration of neg Insektenschutz test - Fliegengitter Sonderform 3C min. Höhe', () => {

    configurator.configure_neg_fliegengitter(test)

})