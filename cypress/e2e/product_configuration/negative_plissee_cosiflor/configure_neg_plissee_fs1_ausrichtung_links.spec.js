var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-fs1_ausrichtung_links",
    "produkt": "/plissee/vivir-4274",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "FS1",
    "befestigung": "Montage am Mauerwerk",
    "system": "Cosiflor",
    "breite": "600",
    "hoehe_links": "2500",
    "hoehe_rechts": "2000",
    "hoehe_links_new": "2000",
    "hoehe_rechts_new": "2400",
    "ausrichtung": "rechts",
    "schienenfarbe": "Weiß",
    "message": "Die linke Höhe muss kleiner als die rechte Höhe sein - oder Sie wechseln die Ausrichtung des Plissees."
}


describe('Test: configuration of neg Plissee test - FS1 Ausrichtung links', () => {

    configurator.configure_neg_plissee(test)

})