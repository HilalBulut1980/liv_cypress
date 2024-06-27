var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-f3_breite_min",
    "produkt": "/plissee/wabe-uni-1510",
    "produktgruppe": "rechteckige Plissees",
    "modell": "F3",
    "befestigung": "Montage direkt vor dem Glas",
    "system": "Cosiflor",
    "hoehe": "2500",
    "breite": "100",
    "breite_new": "150",
    "schienenfarbe": "Schwarz-Braun",
    "message": "Die minimale Breite eines Plissee beträgt 150 mm."
}

describe('Test: configuration of neg Plissee test - F3 min. Breite', () => {

    configurator.configure_neg_plissee(test)

})