var configurator = require("../../../support/configurator_neg_fliegengitter.js");

var test =
{
    "name": "LIVConfig. - Fliegengitter_Sonderform1a_maxHoehe",
    "produkt": "insektenschutz/fliegengitter",
    "form": "Sonderform",
    "einbau": "Fliegengitter einbaufertig",
    "typ": "Typ 1A",
    "hoehe": "1301",
    "breite": "1000",
    "hoehe_new": "1300",
    "breite_new": "1000",
    "message": "Die Höhe muss kleiner als oder gleich 1300 mm sein."
}

describe('Test: configuration of neg Insektenschutz test - Fliegengitter Sonderform 1A max. Höhe', () => {

    configurator.configure_neg_fliegengitter(test)

})