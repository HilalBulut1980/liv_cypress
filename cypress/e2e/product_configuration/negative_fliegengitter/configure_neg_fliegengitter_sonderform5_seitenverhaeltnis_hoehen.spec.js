var configurator = require("../../../support/configurator_neg_fliegengitter.js");

var test =
{
    "name": "LIVConfig. - Fliegengitter_Sonderform5_seitenVerhaeltnisHoehen",
    "produkt": "insektenschutz/fliegengitter",
    "form": "Sonderform",
    "einbau": "Fliegengitter einbaufertig",
    "typ": "Typ 5",
    "hoehe_teil": "1000",
    "hoehe_gesamt": "900",
    "breite": "1400",
    "hoehe_gesamt_new": "1300",
    "message": "Die Teilhöhe muss kleiner als die Gesamthöhe sein."
}

describe('Test: configuration of neg Insektenschutz test - Fliegengitter Sonderform 5 Seitenverhältnis', () => {

    configurator.configure_neg_fliegengitter(test)

})