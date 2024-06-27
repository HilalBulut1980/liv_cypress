var configurator = require("../../../support/configurator_neg_fliegengitter.js");

var test =
{
    "name": "LIVConfig. - Fliegengitter_Sonderform1B_minHoehe",
    "produkt": "insektenschutz/fliegengitter",
    "form": "Sonderform",
    "einbau": "Fliegengitter einbaufertig",
    "typ": "Typ 1B",
    "hoehe": "400",
    "breite": "1200",
    "hoehe_new": "500",
    "breite_new": "1200",
    "message": "Die Höhe muss größer als oder gleich 500 mm sein."
}

describe('Test: configuration of neg Insektenschutz test - Fliegengitter Sonderform 1B min. Höhe', () => {

    configurator.configure_neg_fliegengitter(test)

})