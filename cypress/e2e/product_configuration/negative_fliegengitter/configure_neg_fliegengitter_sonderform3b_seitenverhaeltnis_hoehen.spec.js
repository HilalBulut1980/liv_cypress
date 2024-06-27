var configurator = require("../../../support/configurator_neg_fliegengitter.js");

var test =
{
    "name": "LIVConfig. - Fliegengitter_Sonderform3B_seitenVerhaeltnis",
    "produkt": "insektenschutz/fliegengitter",
    "form": "Sonderform",
    "einbau": "Fliegengitter einbaufertig",
    "typ": "Typ 3B",
    "hoehe_links": "1000",
    "hoehe_rechts": "1200",
    "breite": "1200",
    "hoehe_rechts_new": "900",
    "message": "Die rechte Höhe muss kleiner als die linke Höhe sein - oder wählen Sie Typ 3A."
}

describe('Test: configuration of neg Insektenschutz test - Fliegengitter Sonderform 3B Seitenverhältnis', () => {

    configurator.configure_neg_fliegengitter(test)

})