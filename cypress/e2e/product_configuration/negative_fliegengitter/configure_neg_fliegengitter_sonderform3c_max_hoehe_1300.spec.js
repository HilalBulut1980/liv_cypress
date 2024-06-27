var configurator = require("../../../support/configurator_neg_fliegengitter.js");

var test =
{
    "name": "LIVConfig. - Fliegengitter_Sonderform3C_maxHoehe",
    "produkt": "insektenschutz/fliegengitter",
    "form": "Sonderform",
    "einbau": "Fliegengitter einbaufertig",
    "typ": "Typ 3C",
    "hoehe": "1350",
    "breite_oben": "600",
    "breite_unten": "1350",
    "hoehe_new": "1300",
    "message": "Die maximale Höhe beträgt 2000 mm und die maximale Breite beträgt 1300 mm. Alternativ können wir Fliegengitter bis zu einer Höhe von 1300 mm fertigen, wenn die Breite maximal 2000 mm beträgt."
}

describe('Test: configuration of neg Insektenschutz test - Fliegengitter Sonderform 3C min. Höhe', () => {

    configurator.configure_neg_fliegengitter(test)

})