var configurator = require("../../../support/configurator_neg_fliegengitter.js");

var test =
{
    "name": "LIVConfig. - Fliegengitter_Sonderform4A_seitenVerhaeltnisHoehen",
    "produkt": "insektenschutz/fliegengitter",
    "form": "Sonderform",
    "einbau": "Fliegengitter einbaufertig",
    "typ": "Typ 4A",
    "hoehe_links": "1000",
    "hoehe_rechts": "900",
    "breite_oben": "700",
    "breite_unten": "1000",
    "hoehe_rechts_new": "1200",
    "message": "Die linke Höhe muss kleiner als die rechte Höhe sein - oder wählen Sie Typ 4B."
}

describe('Test: configuration of neg Insektenschutz test - Fliegengitter Sonderform 4A Seitenverhältnis Höhen', () => {

    configurator.configure_neg_fliegengitter(test)

})