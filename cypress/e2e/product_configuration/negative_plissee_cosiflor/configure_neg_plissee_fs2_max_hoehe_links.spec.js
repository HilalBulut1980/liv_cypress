var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-fs2_hoeheLinks_max",
    "produkt": "/plissee/basis-object-1506",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "FS2",
    "befestigung": "Montage am Fensterflügel mit Klemmträgern - ohne Bohren",
    "system": "Cosiflor",
    "breite": "600",
    "hoehe_links": "3000",
    "hoehe_rechts": "2000",
    "hoehe_links_new": "2600",
    "ausrichtung": "links",
    "schienenfarbe": "Weiß",
    "message": "Die linke Höhe muss kleiner als oder gleich 2600 mm sein."
}


describe('Test: configuration of neg Plissee test - FS2 max. Höhe links', () => {

    configurator.configure_neg_plissee(test)

})