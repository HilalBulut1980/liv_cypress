var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-fs2_hoeheRechts_min",
    "produkt": "/plissee/basis-object-1506",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "FS2",
    "befestigung": "Montage am Fensterflügel mit Klemmträgern - ohne Bohren",
    "system": "Cosiflor",
    "breite": "600",
    "hoehe_links": "2000",
    "hoehe_rechts": "100",
    "hoehe_links_new": "200",
    "hoehe_rechts_new": "300",
    "ausrichtung": "rechts",
    "schienenfarbe": "Weiß",
    "message": "Die rechte Höhe muss größer als oder gleich 300 mm sein."
}


describe('Test: configuration of neg Plissee test - FS2 min. Höhe rechts', () => {

    configurator.configure_neg_plissee(test)

})