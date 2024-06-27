var configurator = require("../../../support/configurator_neg_fliegengitter.js");

var test =
{
    "name": "LIVConfig. - Fliegengitter_Sonderform5_maxHoeheTeil_2",
    "produkt": "insektenschutz/fliegengitter",
    "form": "Sonderform",
    "einbau": "Fliegengitter einbaufertig",
    "typ": "Typ 5",
    "hoehe_teil": "2000",
    "hoehe_gesamt": "2000",
    "breite": "1200",
    "hoehe_teil_new": "1999",
    "message": "Die Teilhöhe muss kleiner als die Gesamthöhe sein."
}

describe('Test: configuration of neg Insektenschutz test - Fliegengitter Sonderform 5 max. Teilhöhe II', () => {

    configurator.configure_neg_fliegengitter(test)

})