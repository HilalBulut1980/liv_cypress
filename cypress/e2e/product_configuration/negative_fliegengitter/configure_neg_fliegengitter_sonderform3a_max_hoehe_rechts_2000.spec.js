var configurator = require("../../../support/configurator_neg_fliegengitter.js");

var test =
{
    "name": "LIVConfig. - Fliegengitter_Sonderform3A_maxHoeheRechts_2",
    "produkt": "insektenschutz/fliegengitter",
    "form": "Sonderform",
    "einbau": "Fliegengitter einbaufertig",
    "typ": "Typ 3A",
    "hoehe_links": "1300",
    "hoehe_rechts": "2001",
    "breite": "1200",
    "hoehe_rechts_new": "2000",
    "message": "Die Höhe rechts muss kleiner als oder gleich 2000 mm sein."
}

describe('Test: configuration of neg Insektenschutz test - Fliegengitter Sonderform 3A max. Höhe rechts II', () => {

    configurator.configure_neg_fliegengitter(test)

})