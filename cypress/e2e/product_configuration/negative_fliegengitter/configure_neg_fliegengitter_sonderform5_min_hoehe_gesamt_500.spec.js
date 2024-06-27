var configurator = require("../../../support/configurator_neg_fliegengitter.js");

var test =
{
    "name": "LIVConfig. - Fliegengitter_Sonderform5_minGesamthöhe",
    "produkt": "insektenschutz/fliegengitter",
    "form": "Sonderform",
    "einbau": "Fliegengitter einbaufertig",
    "typ": "Typ 5",
    "hoehe_teil": "300",
    "hoehe_gesamt": "495",
    "breite": "1200",
    "hoehe_gesamt_new": "500",
    "message": "Die Gesamthöhe muss größer als oder gleich 500 mm sein."
}

describe('Test: configuration of neg Insektenschutz test - Fliegengitter Sonderform 5 min. Gesamthöhe', () => {

    configurator.configure_neg_fliegengitter(test)

})