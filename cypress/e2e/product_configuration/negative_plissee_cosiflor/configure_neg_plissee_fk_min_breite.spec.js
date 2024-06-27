var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-fk_breite_min",
    "produkt": "/plissee/wabe-protect-1463",
    "produktgruppe": "rechteckige Plissees",
    "modell": "FK",
    "befestigung": "Montage direkt vor dem Glas",
    "system": "Cosiflor",
    "hoehe": "2500",
    "breite": "100",
    "breite_new": "250",
    "schienenfarbe": "Schwarz-Braun",
    "message": "Die minimale Breite eines Plissee beträgt 250 mm."
}

describe('Test: configuration of neg Plissee test - FK min. Breite', () => {

    configurator.configure_neg_plissee(test)

})