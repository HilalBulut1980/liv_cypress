var configurator = require("../../../support/configurator_neg_fliegengitter.js");

var test =
{
    "name": "LIVConfig. - Fliegengitter_Sonderform3A_minBreite",
    "produkt": "insektenschutz/fliegengitter",
    "form": "Sonderform",
    "einbau": "Fliegengitter einbaufertig",
    "typ": "Typ 3A",
    "hoehe_links": "1000",
    "hoehe_rechts": "1500",
    "breite": "450",
    "breite_new": "500",
    "message": "Die Breite muss größer als oder gleich 500 mm sein."
}

describe('Test: configuration of neg Insektenschutz test - Fliegengitter Sonderform 3A min. Breite', () => {

    configurator.configure_neg_fliegengitter(test)

})