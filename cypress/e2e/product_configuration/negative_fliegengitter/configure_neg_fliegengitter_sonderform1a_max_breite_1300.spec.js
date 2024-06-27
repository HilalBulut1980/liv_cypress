var configurator = require("../../../support/configurator_neg_fliegengitter.js");

var test =
{
    "name": "LIVConfig. - Fliegengitter_Sonderform1a_maxBreite",
    "produkt": "insektenschutz/fliegengitter",
    "form": "Sonderform",
    "einbau": "Fliegengitter einbaufertig",
    "typ": "Typ 1A",
    "hoehe": "1000",
    "breite": "1301",
    "hoehe_new": "1000",
    "breite_new": "1300",
    "message": "Die Breite muss kleiner als oder gleich 1300 mm sein."
}

describe('Test: configuration of neg Insektenschutz test - Fliegengitter Sonderform 1A max. Breite', () => {

    configurator.configure_neg_fliegengitter(test)

})