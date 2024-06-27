var configurator = require("../../../support/configurator_neg_fliegengitter.js");

var test =
{
    "name": "LIVConfig. - Fliegengitter_Sonderform3A_minHoeheRechts",
    "produkt": "insektenschutz/fliegengitter",
    "form": "Sonderform",
    "einbau": "Fliegengitter einbaufertig",
    "typ": "Typ 3A",
    "hoehe_links": "300",
    "hoehe_rechts": "490",
    "breite": "1200",
    "hoehe_rechts_new": "500",
    "message": "Die Höhe rechts muss größer als oder gleich 500 mm sein."
}

describe('Test: configuration of neg Insektenschutz test - Fliegengitter Sonderform 3A min. Höhe rechts', () => {

    configurator.configure_neg_fliegengitter(test)

})