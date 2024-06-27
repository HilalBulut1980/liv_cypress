var configurator = require("../../../support/configurator_neg_fliegengitter.js");

var test =
{
    "name": "LIVConfig. - Fliegengitter_Sonderform5_maxHoeheGesamt_2",
    "produkt": "insektenschutz/fliegengitter",
    "form": "Sonderform",
    "einbau": "Fliegengitter einbaufertig",
    "typ": "Typ 5",
    "hoehe_teil": "1300",
    "hoehe_gesamt": "2001",
    "breite": "1200",
    "hoehe_gesamt_new": "2000",
    "message": "Die Gesamthöhe muss kleiner als oder gleich 2000 mm sein."
}

describe('Test: configuration of neg Insektenschutz test - Fliegengitter Sonderform 5 max. Gesamthöhe II', () => {

    configurator.configure_neg_fliegengitter(test)

})