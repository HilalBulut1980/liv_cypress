var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-fs2_schraege_wabe",
    "produkt": "/plissee/wabe-uni-1519",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "FS2",
    "befestigung": "Montage am Fensterflügel mit Klemmträgern - ohne Bohren",
    "system": "Cosiflor",
    "breite": "2200",
    "hoehe_links": "2300",
    "hoehe_rechts": "1500",
    "breite_new": "1500",
    "ausrichtung": "links",
    "schienenfarbe": "Weiß",
    "message": "Die sich ergebende Schräge darf maximal 2200 mm lang sein. Bitte überprüfen Sie die Angaben für Breite und Höhe - falls diese korrekt sind, ist der gewählte Plisseetyp leider für ihr Fenster nicht geeignet."
}


describe('Test: configuration of neg Plissee test - FS2 Schraege Wabe', () => {

    configurator.configure_neg_plissee(test)

})