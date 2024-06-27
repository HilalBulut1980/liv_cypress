var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-vs2sc_hoehe_max2",
    "produkt": "/plissee/solea-1701",
    "produktgruppe": "rechteckige Plissees",
    "modell": "VS2 Slide Comfort",
    "system": "Cosiflor",
    "hoehe": "1900",
    "breite": "1600",
    "hoehe_new": "1800",
    "message": "Die maximale Höhe und Breite beträgt jeweils 1800 mm. Alternativ können wir Plissees bis zu einer Höhe von 2200 mm fertigen, wenn die Breite maximal 1500 mm beträgt."
}

describe('Test: configuration of neg Plissee test - VS2 SC max. Höhe 1800', () => {

    configurator.configure_neg_plissee(test)

})