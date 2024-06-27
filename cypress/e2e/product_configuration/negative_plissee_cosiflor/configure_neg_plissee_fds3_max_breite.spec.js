var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-fds3_breite_max",
    "produkt": "/plissee/freja-perl-1779",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "FDS3",
    "befestigung": "Montage am Fensterflügel mit Klemmträgern - ohne Bohren",
    "system": "Cosiflor",
    "hoehe": "600",
    "breite": "2500",
    "breite_new": "2200",
    "ausrichtung": "links",
    "schienenfarbe": "Weiß",
    "message": "Die Breite muss kleiner als oder gleich 2200 mm sein."
}

describe('Test: configuration of neg Plissee test - FDS3 max. Breite', () => {

    configurator.configure_neg_plissee(test)

})