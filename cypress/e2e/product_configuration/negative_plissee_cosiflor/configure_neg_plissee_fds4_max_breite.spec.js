var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-fds4_breite_max",
    "produkt": "/plissee/marmol-1998",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "FDS4",
    "befestigung": "Montage am Fensterflügel mit Klemmträgern - ohne Bohren",
    "system": "Cosiflor",
    "hoehe": "1000",
    "breite": "1100",
    "breite_new": "1000",
    "ausrichtung": "links",
    "schienenfarbe": "Weiß",
    "message": "Die Breite muss kleiner als oder gleich 1000 mm sein."
}

describe('Test: configuration of neg Plissee test - FDS4 max. Breite', () => {

    configurator.configure_neg_plissee(test)

})