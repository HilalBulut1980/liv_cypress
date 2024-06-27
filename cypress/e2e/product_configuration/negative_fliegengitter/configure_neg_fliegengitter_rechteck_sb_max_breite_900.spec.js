var configurator = require("../../../support/configurator_neg_fliegengitter.js");

var test =
{
    "name": "LIVConfig. - Fliegengitter_SB_maxBreite_900",
    "produkt": "insektenschutz/fliegengitter",
    "supplier": "Anwis",
    "form": "Rechteck",
    "einbau": "Fliegengitter SB - zum selber zusammenbauen",
    "farbe": "Goldeiche",
    "netzfarbe": "grau",
    "hoehe": "1900",
    "breite": "901",
    "hoehe_new": "1900",
    "breite_new": "900",
    "message": "Die maximale Höhe beträgt 2000 mm und die maximale Breite beträgt 900 mm. Alternativ können wir Fliegengitter bis zu einer Höhe von 1600 mm fertigen, wenn die Breite maximal 1800 mm beträgt. Alternativ können Sie das Modell \"Fliegengitter einbaufertig\" mit bis zu 2400 mm Höhe wählen."
}

describe('Test: configuration of neg Insektenschutz test - Fliegengitter Rechteck SB max. Breite 900 mm', () => {

    configurator.configure_neg_fliegengitter(test)

})