var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-vs4s2_direction_right2left",
    "produkt": "/plissee/wabe-glow-2165",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "VS4 S2",
    "befestigung": "Montage direkt vor dem Glas",
    "system": "Cosiflor",
    "breite": "1000",
    "hoehe_links": "1200",
    "hoehe_rechts": "500",
    "ausrichtung": "rechts",
    "ausrichtung_new": "links",
    "schienenfarbe": "Weiß",
    "message": "Die linke Höhe muss kleiner als die rechte Höhe sein - oder Sie wechseln die Ausrichtung des Plissees."
}

describe('Test: configuration of neg Plissee test - VS4S2 direction right to left', () => {

    configurator.configure_neg_plissee(test)

})