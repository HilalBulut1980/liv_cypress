var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-fds4_breite_min",
    "produkt": "/plissee/marmol-1998",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "FDS4",
    "befestigung": "Montage am Fensterflügel mit Klemmträgern - ohne Bohren",
    "system": "Cosiflor",
    "hoehe": "400",
    "breite": "290",
    "hoehe_new": "300",
    "breite_new": "300",
    "ausrichtung": "links",
    "schienenfarbe": "Weiß",
    "message": "Die minimale Breite eines Plissee beträgt 300 mm."
}

describe('Test: configuration of neg Plissee test - FDS4 min. Breite', () => {

    configurator.configure_neg_plissee(test)

})