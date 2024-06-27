var configurator = require("../../../support/configurator_neg_fliegengitter.js");

var test =
{
    "name": "LIVConfig. - Fliegengitter_Sonderform6_seitenVerhaeltnis",
    "produkt": "insektenschutz/fliegengitter",
    "form": "Sonderform",
    "einbau": "Fliegengitter einbaufertig",
    "typ": "Typ 6",
    "hoehe": "1100",
    "breite_oben": "900",
    "breite_unten": "700",
    "breite_unten_new": "1200",
    "message": "Die obere Breite muss kleiner als die untere Breite sein."
}

describe('Test: configuration of neg Insektenschutz test - Fliegengitter Sonderform 6 Seitenverhältnis', () => {

    configurator.configure_neg_fliegengitter(test)

})