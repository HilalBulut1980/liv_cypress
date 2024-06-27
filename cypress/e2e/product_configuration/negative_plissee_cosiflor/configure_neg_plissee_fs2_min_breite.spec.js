var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-fs2_breite_min",
    "produkt": "/plissee/basis-object-1506",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "FS2",
    "befestigung": "Montage am Fensterflügel mit Klemmträgern - ohne Bohren",
    "system": "Cosiflor",
    "breite": "200",
    "breite_new": "300",
    "hoehe_links": "2000",
    "hoehe_rechts": "1500",
    "hoehe_rechts_new": "1800",
    "ausrichtung": "links",
    "schienenfarbe": "Weiß",
    "message": "Die minimale Breite eines Plissee beträgt 300 mm."
}


describe('Test: configuration of neg Plissee test - FS2 min. Breite', () => {

    configurator.configure_neg_plissee(test)

})