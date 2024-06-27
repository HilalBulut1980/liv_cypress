var configurator = require("../../../support/configurator_neg_fliegengitter.js");

var test =
{
    "name": "LIVConfig. - Fliegengitter_Sonderform2_minBreite",
    "produkt": "insektenschutz/fliegengitter",
    "form": "Sonderform",
    "einbau": "Fliegengitter einbaufertig",
    "typ": "Typ 2",
    "hoehe": "1000",
    "breite": "499",
    "hoehe_new": "1000",
    "breite_new": "500",
    "message": "Die Breite muss größer als oder gleich 500 mm sein."
}

describe('Test: configuration of neg Insektenschutz test - Fliegengitter Sonderform 2 min. Breite', () => {

    configurator.configure_neg_fliegengitter(test)

})