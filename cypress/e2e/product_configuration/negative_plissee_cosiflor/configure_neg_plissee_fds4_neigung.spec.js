var configurator = require("../../../support/configurator_neg_plissee.js");

var test =
{
    "name": "LIV-fds4_neigung",
    "produkt": "/plissee/marmol-1998",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "FDS4",
    "befestigung": "Montage am Fensterflügel mit Klemmträgern - ohne Bohren",
    "system": "Cosiflor",
    "hoehe": "1000",
    "breite": "500",
    "hoehe_new": "500",
    "ausrichtung": "links",
    "schienenfarbe": "Weiß",
    "message": "Der Neigungswinkel muss zwischen 5° und 45° liegen. Bitte überprüfen Sie die Angaben für Breite und Höhe - falls diese korrekt sind, ist der gewählte Plisseetyp leider für ihr Fenster nicht geeignet."
}

describe('Test: configuration of neg Plissee test - FDS4 Neigung', () => {

    configurator.configure_neg_plissee(test)

})