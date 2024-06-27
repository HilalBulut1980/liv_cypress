var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-fds3_hoehe_min",
    "produkt": "/plissee/freja-perl-1779",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "FDS3",
    "befestigung": "Montage am Fensterflügel mit Klemmträgern - ohne Bohren",
    "system": "Cosiflor",
    "hoehe": "200",
    "breite": "1500",
    "hoehe_new": "300",
    "ausrichtung": "links",
    "schienenfarbe": "Weiß",
    "message": "Die Höhe muss größer als oder gleich 300 mm sein."
}

describe('Test: configuration of neg Plissee test - FDS3 min. Höhe', () => {

    configurator.configure_neg_plissee(test)

})