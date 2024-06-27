var configurator = require("../../../support/configurator_neg_fliegengitter.js");

var test =
{
    "name": "LIVConfig. - Fliegengitter_Sonderform4B_seitenVerhaeltnisHoehen",
    "produkt": "insektenschutz/fliegengitter",
    "form": "Sonderform",
    "einbau": "Fliegengitter einbaufertig",
    "typ": "Typ 4B",
    "hoehe_links": "900",
    "hoehe_rechts": "1000",
    "breite_oben": "700",
    "breite_unten": "1000",
    "hoehe_links_new": "1200",
    "message": "Die rechte Höhe muss kleiner als die linke Höhe sein - oder wählen Sie Typ 4A."
}

describe('Test: configuration of neg Insektenschutz test - Fliegengitter Sonderform 4B Seitenverhältnis Höhen', () => {

    configurator.configure_neg_fliegengitter(test)

})