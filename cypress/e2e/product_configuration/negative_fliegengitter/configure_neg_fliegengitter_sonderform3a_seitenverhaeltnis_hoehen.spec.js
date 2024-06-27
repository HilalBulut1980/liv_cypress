var configurator = require("../../../support/configurator_neg_fliegengitter.js");

var test =
{
    "name": "LIVConfig. - Fliegengitter_Sonderform3A_seitenVerhaeltnis",
    "produkt": "insektenschutz/fliegengitter",
    "form": "Sonderform",
    "einbau": "Fliegengitter einbaufertig",
    "typ": "Typ 3A",
    "hoehe_links": "1200",
    "hoehe_rechts": "1000",
    "breite": "1200",
    "hoehe_links_new": "900",
    "message": "Die linke Höhe muss kleiner als die rechte Höhe sein - oder wählen Sie Typ 3B."
}

describe('Test: configuration of neg Insektenschutz test - Fliegengitter Sonderform 3A Seitenverhältnis', () => {

    configurator.configure_neg_fliegengitter(test)

})