var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-vs1_hoehe_max2",
    "produkt": "/plissee/color-breeze-1358",
    "produktgruppe": "rechteckige Plissees",
    "modell": "VS1",
    "befestigung": "Montage direkt vor dem Glas",
    "system": "Cosiflor",
    "hoehe": "1600",
    "breite": "1300",
    "hoehe_new": "1500",
    "schienenfarbe": "Schwarz-Braun",
    "message": "Die maximale Höhe und Breite beträgt jeweils 1500 mm. Alternativ können wir Plissees bis zu einer Höhe von 2200 mm fertigen, wenn die Breite maximal 1200 mm beträgt."
}

describe('Test: configuration of neg Plissee test - VS1 max. Hoehe 1500', () => {

    configurator.configure_neg_plissee(test)

})