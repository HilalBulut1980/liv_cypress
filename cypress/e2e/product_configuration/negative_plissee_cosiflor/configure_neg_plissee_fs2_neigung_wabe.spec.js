var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-fs2_neigung_wabe",
    "produkt": "/plissee/wabe-uni-1519",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "FS2",
    "befestigung": "Montage am Fensterflügel mit Klemmträgern - ohne Bohren",
    "system": "Cosiflor",
    "breite": "600",
    "hoehe_links": "2500",
    "hoehe_rechts": "1800",
    "hoehe_links_new": "2000",
    "hoehe_rechts_new": "1500",
    "ausrichtung": "links",
    "schienenfarbe": "Weiß",
    "message": "Der Neigungswinkel muss zwischen 5° und 40° liegen. Bitte überprüfen Sie die Angaben für Breite und Höhe - falls diese korrekt sind, ist der gewählte Plisseetyp leider für ihr Fenster nicht geeignet."
}

describe('Test: configuration of neg Plissee test - FS2 Neigung Wabe', () => {

    configurator.configure_neg_plissee(test)

})