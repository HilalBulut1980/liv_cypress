var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-vs2sc_breite_min",
    "produkt": "/plissee/wabe-uni-1518",
    "produktgruppe": "rechteckige Plissees",
    "modell": "VS2 Slide Comfort",
    "system": "Cosiflor",
    "hoehe": "800",
    "breite": "200",
    "breite_new": "230",
    "message": "Die minimale Breite eines Plissee beträgt 230 mm."
}

describe('Test: configuration of neg Plissee test - VS2 SC min. Breite', () => {

    configurator.configure_neg_plissee(test)

})