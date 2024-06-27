var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-vs3_breite_min",
    "produkt": "/plissee/wabe-uni-1510",
    "produktgruppe": "rechteckige Plissees",
    "modell": "VS3",
    "befestigung": "Montage direkt vor dem Glas",
    "system": "Cosiflor",
    "hoehe": "1000",
    "breite": "100",
    "breite_new": "120",
    "schienenfarbe": "Schwarz-Braun",
    "message": "Die minimale Breite eines Plissee beträgt 120 mm."
}

describe('Test: configuration of neg Plissee test - VS3 min. Breite', () => {

    configurator.configure_neg_plissee(test)

})