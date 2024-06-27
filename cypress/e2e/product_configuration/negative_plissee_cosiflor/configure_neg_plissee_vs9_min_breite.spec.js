var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-vs9D_breite_min",
    "produkt": "/plissee/lucid-1457",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "VS9",
    "befestigung": "Montage direkt vor dem Glas",
    "system": "Cosiflor",
    "hoehe": "1000",
    "breite": "100",
    "hoehe_new": "400",
    "breite_new": "300",
    "schienenfarbe": "Weiß",
    "message": "Die minimale Breite eines Plissee beträgt 300 mm."
}

describe('Test: configuration of neg Plissee test - VS9 max. Breite', () => {

    configurator.configure_neg_plissee(test)

})