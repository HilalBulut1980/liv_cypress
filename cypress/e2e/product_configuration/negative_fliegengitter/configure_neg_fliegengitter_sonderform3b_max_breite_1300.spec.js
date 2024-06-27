var configurator = require("../../../support/configurator_neg_fliegengitter.js");

var test =
{
    "name": "LIVConfig. - Fliegengitter_Sonderform3B_maxBreite",
    "produkt": "insektenschutz/fliegengitter",
    "form": "Sonderform",
    "einbau": "Fliegengitter einbaufertig",
    "typ": "Typ 3B",
    "hoehe_links": "1500",
    "hoehe_rechts": "1000",
    "breite": "1301",
    "breite_new": "1300",
    "message": "Die maximale Höhe beträgt 2000 mm und die maximale Breite beträgt 1300 mm. Alternativ können wir Fliegengitter bis zu einer Höhe von 1300 mm fertigen, wenn die Breite maximal 2000 mm beträgt."
}

describe('Test: configuration of neg Insektenschutz test - Fliegengitter Sonderform 3B max. Breite', () => {

    configurator.configure_neg_fliegengitter(test)

})