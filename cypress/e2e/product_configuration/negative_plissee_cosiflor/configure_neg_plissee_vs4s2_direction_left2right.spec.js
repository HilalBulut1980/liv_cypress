var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-vs4s2_direction_left2right",
    "produkt": "/plissee/wabe-glow-2165",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "VS4 S2",
    "befestigung": "Montage direkt vor dem Glas",
    "system": "Cosiflor",
    "breite": "1000",
    "hoehe_links": "500",
    "hoehe_rechts": "1200",
    "ausrichtung": "links",
    "ausrichtung_new": "rechts",
    "schienenfarbe": "Weiß",
    "message": "Die rechte Höhe muss kleiner als die linke Höhe sein - oder Sie wechseln die Ausrichtung des Plisses."
}

describe('Test: configuration of neg Plissee test - VS4S2 direction left to right', () => {

    configurator.configure_neg_plissee(test)

})