var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-vs4s2_min_width",
    "produkt": "/plissee/wabe-glow-2165",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "VS4 S2",
    "befestigung": "Montage direkt vor dem Glas",
    "system": "Cosiflor",
    "breite": "290",
    "breite_new": "800",
    "hoehe_links": "1500",
    "hoehe_rechts": "1000",
    "ausrichtung": "links",
    "schienenfarbe": "Weiß",
    "message": "Die minimale Breite eines Plissee beträgt 300 mm."
}

describe('Test: configuration of neg Plissee test - VS4S2 min. width 1500', () => {

    configurator.configure_neg_plissee(test)

})