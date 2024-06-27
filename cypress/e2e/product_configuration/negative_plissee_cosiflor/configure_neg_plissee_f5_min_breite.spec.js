var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-f5_breite_min",
    "produkt": "/plissee/wabe-bonita-4222",
    "produktgruppe": "rechteckige Plissees",
    "modell": "F5",
    "befestigung": "Montage direkt vor dem Glas",
    "system": "Cosiflor",
    "hoehe": "2000",
    "breite": "149",
    "breite_new": "150",
    "schienenfarbe": "Silber",
    "message": "Die minimale Breite eines Plissee beträgt 150 mm."
}

describe('Test: configuration of neg Plissee test - F5 min. Breite', () => {

    configurator.configure_neg_plissee(test)

})