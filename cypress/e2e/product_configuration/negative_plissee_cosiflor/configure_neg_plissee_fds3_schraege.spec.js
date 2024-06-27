var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-fds3_schraege",
    "produkt": "/plissee/freja-perl-1779",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "FDS3",
    "befestigung": "Montage am Fensterflügel mit Klemmträgern - ohne Bohren",
    "system": "Cosiflor",
    "hoehe": "1500",
    "breite": "2000",
    "breite_new": "1700",
    "ausrichtung": "links",
    "schienenfarbe": "Weiß",
    "message": "Die sich ergebende Schräge darf maximal 2300 mm lang sein. Bitte überprüfen Sie die Angaben für Breite und Höhe - falls diese korrekt sind, ist der gewählte Plisseetyp leider für ihr Fenster nicht geeignet."
}

describe('Test: configuration of neg Plissee test - FDS3 Schräge', () => {

    configurator.configure_neg_plissee(test)

})