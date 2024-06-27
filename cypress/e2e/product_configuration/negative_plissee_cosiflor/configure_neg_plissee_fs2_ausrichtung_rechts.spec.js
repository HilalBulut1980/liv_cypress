var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-fs2_ausrichtung_rechts",
    "produkt": "/plissee/basis-object-1506",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "FS2",
    "befestigung": "Montage am Fensterflügel mit Klemmträgern - ohne Bohren",
    "system": "Cosiflor",
    "breite": "600",
    "hoehe_links": "2000",
    "hoehe_rechts": "2500",
    "hoehe_links_new": "2500",
    "hoehe_rechts_new": "2000",
    "ausrichtung": "links",
    "schienenfarbe": "Weiß",
    "message": "Die rechte Höhe muss kleiner als die linke Höhe sein - oder Sie wechseln die Ausrichtung des Plisses."
}


describe('Test: configuration of neg Plissee test - FS2 Ausrichtung rechts', () => {

    configurator.configure_neg_plissee(test)

})