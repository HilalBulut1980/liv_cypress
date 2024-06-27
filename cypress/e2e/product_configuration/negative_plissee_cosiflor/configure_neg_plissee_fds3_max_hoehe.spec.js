var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-fds3_hoehe_max",
    "produkt": "/plissee/freja-perl-1779",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "FDS3",
    "befestigung": "Montage am Fensterflügel mit Klemmträgern - ohne Bohren",
    "system": "Cosiflor",
    "hoehe": "1700",
    "breite": "1500",
    "hoehe_new": "1600",
    "ausrichtung": "links",
    "schienenfarbe": "Weiß",
    "message": "Die Höhe muss kleiner als oder gleich 1600 mm sein."
}

describe('Test: configuration of neg Plissee test - FDS3 max. Höhe', () => {

    configurator.configure_neg_plissee(test)

})