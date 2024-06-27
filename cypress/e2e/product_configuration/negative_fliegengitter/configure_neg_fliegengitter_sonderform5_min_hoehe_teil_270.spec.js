var configurator = require("../../../support/configurator_neg_fliegengitter.js");

var test =
{
    "name": "LIVConfig. - Fliegengitter_Sonderform5_minTeilhöhe",
    "produkt": "insektenschutz/fliegengitter",
    "form": "Sonderform",
    "einbau": "Fliegengitter einbaufertig",
    "typ": "Typ 5",
    "hoehe_teil": "265",
    "hoehe_gesamt": "1000",
    "breite": "1200",
    "hoehe_teil_new": "270",
    "message": "Die Teilhöhe muss größer als oder gleich 270 mm sein."
}

describe('Test: configuration of neg Insektenschutz test - Fliegengitter Sonderform 5 min. Teilhöhe', () => {

    configurator.configure_neg_fliegengitter(test)

})