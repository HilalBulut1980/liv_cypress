var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-fs1_ausrichtung_rechts",
    "produkt": "/plissee/vivir-4274",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "FS1",
    "befestigung": "Montage am Mauerwerk",
    "system": "Cosiflor",
    "breite": "600",
    "hoehe_links": "2000",
    "hoehe_rechts": "2500",
    "hoehe_links_new": "2400",
    "hoehe_rechts_new": "2000",
    "ausrichtung": "links",
    "schienenfarbe": "Weiß",
    "message": "Die rechte Höhe muss kleiner als die linke Höhe sein - oder Sie wechseln die Ausrichtung des Plisses."
}


describe('Test: configuration of neg Plissee test - FS1 Ausrichtung rechts', () => {

    configurator.configure_neg_plissee(test)

})