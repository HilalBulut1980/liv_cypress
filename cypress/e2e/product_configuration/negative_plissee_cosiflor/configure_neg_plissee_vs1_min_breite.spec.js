var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-vs1_breite_min",
    "produkt": "/plissee/ambience-1357",
    "produktgruppe": "rechteckige Plissees",
    "modell": "VS1",
    "befestigung": "Montage direkt vor dem Glas",
    "system": "Cosiflor",
    "hoehe": "1000",
    "breite": "100",
    "breite_new": "120",
    "schienenfarbe": "Schwarz-Braun",
    "message": "Die minimale Breite eines Plissee beträgt 120 mm."
}

describe('Test: configuration of neg Plissee test - VS1 min. Breite', () => {

    configurator.configure_neg_plissee(test)

})