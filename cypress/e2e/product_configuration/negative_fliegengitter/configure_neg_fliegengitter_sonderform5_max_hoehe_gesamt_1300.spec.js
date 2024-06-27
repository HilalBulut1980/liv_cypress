var configurator = require("../../../support/configurator_neg_fliegengitter.js");

var test =
{
    "name": "LIVConfig. - Fliegengitter_Sonderform5_maxHoeheGesamt",
    "produkt": "insektenschutz/fliegengitter",
    "form": "Sonderform",
    "einbau": "Fliegengitter einbaufertig",
    "typ": "Typ 5",
    "hoehe_teil": "1000",
    "hoehe_gesamt": "1350",
    "breite": "1301",
    "hoehe_gesamt_new": "1300",
    "message": "Die maximale Höhe beträgt 2000 mm und die maximale Breite beträgt 1300 mm. Alternativ können wir Fliegengitter bis zu einer Höhe von 1300 mm fertigen, wenn die Breite maximal 2000 mm beträgt."
}

describe('Test: configuration of neg Insektenschutz test - Fliegengitter Sonderform 5 max. Gesamthöhe', () => {

    configurator.configure_neg_fliegengitter(test)

})