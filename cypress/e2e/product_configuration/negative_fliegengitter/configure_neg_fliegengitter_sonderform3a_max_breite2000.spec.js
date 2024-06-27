var configurator = require("../../../support/configurator_neg_fliegengitter.js");

var test =
{
    "name": "LIVConfig. - Fliegengitter_Sonderform3A_maxBreite",
    "produkt": "insektenschutz/fliegengitter",
    "form": "Sonderform",
    "einbau": "Fliegengitter einbaufertig",
    "typ": "Typ 3A",
    "hoehe_links": "1000",
    "hoehe_rechts": "1300",
    "breite": "2001",
    "breite_new": "2000",
    "message": "Die Breite muss kleiner als oder gleich 2000 mm sein."
}

describe('Test: configuration of neg Insektenschutz test - Fliegengitter Sonderform 3A max. Breite 2000', () => {

    configurator.configure_neg_fliegengitter(test)

})