var configurator = require("../../../support/configurator_neg_fliegengitter.js");

var test =
{
    "name": "LIVConfig. - Fliegengitter_Sonderform4B_seitenVerhaeltnisBreiten",
    "produkt": "insektenschutz/fliegengitter",
    "form": "Sonderform",
    "einbau": "Fliegengitter einbaufertig",
    "typ": "Typ 4B",
    "hoehe_links": "1200",
    "hoehe_rechts": "900",
    "breite_oben": "900",
    "breite_unten": "700",
    "breite_unten_new": "1200",
    "message": "Die obere Breite muss kleiner als die untere Breite sein."
}

describe('Test: configuration of neg Insektenschutz test - Fliegengitter Sonderform 4B Seitenverhältnis Breiten', () => {

    configurator.configure_neg_fliegengitter(test)

})