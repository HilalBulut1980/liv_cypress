var configurator = require("../../../support/configurator_neg_fliegengitter.js");

var test =
{
    "name": "LIVConfig. - Fliegengitter_Sonderform6_maxBreiteUnten",
    "produkt": "insektenschutz/fliegengitter",
    "form": "Sonderform",
    "einbau": "Fliegengitter einbaufertig",
    "typ": "Typ 6",
    "hoehe": "1400",
    "breite_oben": "600",
    "breite_unten": "1301",
    "breite_unten_new": "1300",
    "message": "Die maximale Höhe beträgt 2000 mm und die maximale Breite beträgt 1300 mm. Alternativ können wir Fliegengitter bis zu einer Höhe von 1300 mm fertigen, wenn die Breite maximal 2000 mm beträgt."
}

describe('Test: configuration of neg Insektenschutz test - Fliegengitter Sonderform 6 max. Breite unten', () => {

    configurator.configure_neg_fliegengitter(test)

})