var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-vs2_breite_min",
    "produkt": "/plissee/wabe-uni-1510",
    "produktgruppe": "rechteckige Plissees",
    "modell": "VS2",
    "befestigung": "Montage direkt vor dem Glas",
    "system": "Cosiflor",
    "hoehe": "1000",
    "breite": "200",
    "breite_new": "230",
    "schienenfarbe": "Schwarz-Braun",
    "message": "Die minimale Breite eines Plissee beträgt 230 mm."
}

describe('Test: configuration of neg Plissee test - VS2 min. Breite', () => {

    configurator.configure_neg_plissee(test)

})