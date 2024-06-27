var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-fs2_breite_max",
    "produkt": "/plissee/basis-object-1506",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "FS2",
    "befestigung": "Montage am Fensterflügel mit Klemmträgern - ohne Bohren",
    "system": "Cosiflor",
    "breite": "2500",
    "breite_new": "2200",
    "hoehe_links": "2000",
    "hoehe_rechts": "1500",
    "hoehe_links_new": "1700",
    "hoehe_rechts_new": "1300",
    "ausrichtung": "links",
    "schienenfarbe": "Weiß",
    "message": "Die Breite muss kleiner als oder gleich 2200 mm sein."
}


describe('Test: configuration of neg Plissee test - FS2 max. Breite', () => {

    configurator.configure_neg_plissee(test)

})