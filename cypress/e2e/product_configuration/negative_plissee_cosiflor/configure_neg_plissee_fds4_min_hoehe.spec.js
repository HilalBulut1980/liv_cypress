var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-fds4_hoehe_min",
    "produkt": "/plissee/marmol-1998",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "FDS4",
    "befestigung": "Montage am Fensterflügel mit Klemmträgern - ohne Bohren",
    "system": "Cosiflor",
    "hoehe": "290",
    "breite": "1000",
    "hoehe_new": "300",
    "ausrichtung": "links",
    "schienenfarbe": "Weiß",
    "message": "Die Höhe muss größer als oder gleich 300 mm sein."
}

describe('Test: configuration of neg Plissee test - FDS4 min. Höhe', () => {

    configurator.configure_neg_plissee(test)

})