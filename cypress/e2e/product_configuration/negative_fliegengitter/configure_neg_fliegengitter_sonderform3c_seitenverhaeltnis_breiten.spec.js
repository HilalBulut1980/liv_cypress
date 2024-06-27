var configurator = require("../../../support/configurator_neg_fliegengitter.js");

var test =
 {
            "name": "LIVConfig. - Fliegengitter_Sonderform3C_seitenVerhaeltnis",
            "produkt": "insektenschutz/fliegengitter",
            "form": "Sonderform",
            "einbau": "Fliegengitter einbaufertig",
            "typ": "Typ 3C",
            "hoehe": "1300",
            "breite_oben": "1000",
            "breite_unten": "900",
            "breite_unten_new": "1300",
            "message": "Die obere Breite muss kleiner als die untere Breite sein."
        }

describe('Test: configuration of neg Insektenschutz test - Fliegengitter Sonderform 3C Seitenverhältnis', () => {

    configurator.configure_neg_fliegengitter(test)

})