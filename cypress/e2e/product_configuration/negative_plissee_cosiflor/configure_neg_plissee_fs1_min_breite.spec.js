var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-fs1_breite_min",
    "produkt": "/plissee/vivir-4274",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "FS1",
    "befestigung": "Montage am Mauerwerk",
    "system": "Cosiflor",
    "breite": "200",
    "breite_new": "300",
    "hoehe_links": "2000",
    "hoehe_rechts": "1500",
    "hoehe_rechts_new": "1800",
    "ausrichtung": "links",
    "schienenfarbe": "Weiß",
    "message": "Die minimale Breite eines Plissee beträgt 300 mm."
}

describe('Test: configuration of neg Plissee test - FS1 min. Breite', () => {

    configurator.configure_neg_plissee(test)

})