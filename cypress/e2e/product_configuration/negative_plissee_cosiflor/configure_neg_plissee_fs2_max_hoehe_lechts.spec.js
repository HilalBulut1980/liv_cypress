var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-fs2_hoeheRechts_max",
    "produkt": "/plissee/basis-object-1506",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "FS2",
    "befestigung": "Montage am Fensterflügel mit Klemmträgern - ohne Bohren",
    "system": "Cosiflor",
    "breite": "600",
    "hoehe_links": "2000",
    "hoehe_rechts": "3000",
    "hoehe_rechts_new": "2600",
    "ausrichtung": "rechts",
    "schienenfarbe": "Weiß",
    "message": "Die rechte Höhe muss kleiner als oder gleich 2600 mm sein."
}


describe('Test: configuration of neg Plissee test - FS2 max. Höhe rechts', () => {

    configurator.configure_neg_plissee(test)

})